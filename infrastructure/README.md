# Infrastructure API – Auto-Talleres Orihuela

Este paquete está preparado para copiar sus carpetas `infrastructure/`, `app/api/` y `lib/` a la raíz del proyecto Next.js. Mantiene `core/` separado: los casos de uso dependen de puertos y las implementaciones HTTP viven en Infrastructure. No sustituyas `app/[locale]/...`; el paquete solo añade o reemplaza los handlers `app/api/...` listados en este documento. Si ya existe alguno de esos handlers, compara y sustituye únicamente el fichero de la misma ruta.

## Configuración

Añade al `.env` del frontend:

```env
API_INTERNAL_URL=http://127.0.0.1:8000
API_PUBLIC_URL=http://127.0.0.1:8000
API_CURRICULUMS_PATH=curriculums
```

En Docker, `API_INTERNAL_URL` debe apuntar al nombre DNS del servicio FastAPI desde el contenedor Next.js, por ejemplo `http://api:80`. `API_PUBLIC_URL` tiene que ser el origen alcanzable por el navegador para recursos multimedia. No uses `NEXT_PUBLIC_` en `API_INTERNAL_URL`.

El proxy `infrastructure/api/next/ApiRouteProxy.ts` mantiene las llamadas a FastAPI en servidor, no filtra `API_INTERNAL_URL` al navegador, y reenvía `web_access_token` como `Authorization: Bearer ...`. Para refresh reenvía únicamente la cookie `web_refresh_token`. Los tokens siguen siendo HttpOnly.

## Endpoints Next.js incluidos

### Públicos (sin sesión)

| Ruta Next.js | Método | Endpoint FastAPI |
|---|---|---|
| `/api/public/contactos` | GET | `/api/public/contactos` |
| `/api/public/contactos/[contactId]` | GET | `/api/public/contactos/{contacto_id}` |
| `/api/public/contactos/departamento/[departamento]` | GET | `/api/public/contactos/departamento/{departamento}` |
| `/api/public/noticias` | GET | `/api/public/noticias` |
| `/api/public/noticias/[slug]` | GET | `/api/public/noticias/{identificador_url}` |
| `/api/public/horarios-apertura` | GET | `/api/public/horarios-apertura` |
| `/api/public/configuracion-sitio` | GET | `/api/public/configuracion-sitio` |
| `/api/public/archivos-multimedia/[fileId]` | GET | `/api/public/archivos-multimedia/{archivo_id}` |
| `/api/curriculums` | POST | `/curriculums` |

### Privados (cookie de sesión web)

| Ruta Next.js | Método | Endpoint FastAPI | Protección backend actual |
|---|---|---|---|
| `/api/admin/auth/login` | POST | `/api/admin/auth/login` | Login + rate limit |
| `/api/admin/auth/refresh` | POST | `/api/admin/auth/refresh` | Cookie refresh |
| `/api/admin/auth/logout` | POST | `/api/admin/auth/logout` | Limpia cookies |
| `/api/admin/me` | GET | `/api/admin/me` | Cualquier rol web activo |
| `/api/admin/users` | GET, POST | `/api/admin/users` | `admin_principal` o `admin` |
| `/api/admin/users/[userId]` | PATCH, DELETE | `/api/admin/users/{user_id}` | `admin_principal` o `admin` |
| `/api/admin/archivos-multimedia` | POST | `/api/admin/archivos-multimedia` | `admin_principal` o `admin` |
| `/api/admin/contactos` | GET, POST | `/api/admin/contactos` | GET cualquier rol activo; POST administradores |
| `/api/admin/contactos/[contactId]` | GET, PUT, DELETE | `/api/admin/contactos/{contacto_id}` | GET cualquier rol activo; cambios administradores |

Las rutas de escritura administrativas requieren cookie y el backend vuelve a comprobar el rol. No se considera que ocultar un botón en React sea una medida de seguridad.

## Correspondencia con MariaDB y revisión de Core/Infrastructure

- Next.js no abre conexiones a MariaDB. La base de datos sigue siendo responsabilidad de FastAPI, que es el límite correcto para no duplicar credenciales ni consultas SQL en el navegador.
- Los identificadores `BIGINT UNSIGNED` de `web_contactos`, `web_noticias` y `web_archivos_multimedia` se convierten a string en los modelos de dominio cuando se usan como identificadores de negocio. Para el endpoint FastAPI se validan como dígitos positivos antes de construir la ruta.
- El contacto público se mapea desde `nombre`, `apellidos`, `departamento`, `correo_electronico`, `telefono`, `archivo_multimedia_id` y `orden`; `cargo` se admite opcionalmente hasta que el modelo y los SELECT del backend lo expongan.
- Las noticias coinciden con los alias que construye `_mapear_web_noticia`: `archivo_multimedia` anidado, `fecha_publicacion` y contenido JSON. El repositorio pagina el listado de 50 en 50 porque FastAPI no devuelve un total.
- Los días de `web_horarios_apertura` se normalizan de `Miercoles` a `Miércoles` en el mapper; los campos TIME se convierten a `HH:mm`.
- `web_configuracion_sitio` tiene `url_google_maps NOT NULL`, y el modelo de dominio lo trata como obligatorio; el resto de enlaces opcionales se mapean como `null`.
- El módulo Auth usa `web_users`, no la tabla de usuarios de la aplicación móvil; los roles válidos son `admin_principal`, `admin` y `privilegiado`.
- Los módulos Core de noticias, horarios y configuración son de lectura porque los endpoints adjuntos solo implementan GET. No se han añadido métodos CRUD falsos.

## Bloqueos encontrados en los archivos de backend adjuntos

He revisado `endpoints_web.zip`, el `main.py`, `database.py` y `models/schemas.py` de `Mercedes-Backend-Audit.zip`, además de `schema_taller_orihuela_web(1).sql` y `001_contactos_staff_migration.sql`.

1. **Contactos públicos:** el esquema SQL de migración añade `cargo`, pero `WebContactoOut` y las tres consultas `get_contactos*` del backend auditado no incluyen esa columna. El frontend ya trata `cargo` como opcional, por lo que no rompe si falta; para mostrarlo, añade `cargo` a `WebContactoOut` y a los SELECT.
2. **CRUD de contactos:** `web_contactos_admin.py` del ZIP de endpoints importa `WebContactoCreate`, `WebContactoUpdate`, `WebContactoAdminOut` y funciones `admin_get_contactos`, `admin_get_contacto`, `admin_create_contacto`, `admin_update_contacto`, `admin_archivar_contacto`. No aparecen en `models/schemas.py` ni en `database.py` del backend auditado.
3. **Router no registrado:** el `main.py` auditado incluye `web_admin`, `web_archivo_multimedia` y los routers públicos, pero no importa ni incluye `web_contactos_admin`. Debe registrarse con el prefijo `/api`, porque el router ya declara `prefix="/admin/contactos"`.
4. **Currículums:** el backend actual recibe `nombre`, `email`, `mensaje` y `archivo`; no consume `telefono` ni `consentimiento`, aunque el esquema SQL web tiene columnas `telefono` y `fecha_consentimiento`. El formulario Next valida el consentimiento y el Core envía teléfono/consentimiento, pero el backend actual no los persiste. No marques esa persistencia como completada hasta actualizar el router y la función DB.
5. **Currículums en el panel:** los GET de listado/descarga de `/curriculums` del backend auditado usan `only_superuser` del sistema de usuarios móvil, no `get_current_web_user` / `require_web_admin`. Por seguridad no he creado proxy `/api/admin/curriculums` para exponer esos endpoints con las cookies del panel. Se necesita un endpoint web-admin específico en FastAPI antes de integrar esa pantalla.
6. **Multimedia:** el backend actual tiene GET público por ID y POST administrativo de subida. No tiene listado ni eliminación administrativa; no se crean rutas Next para operaciones que FastAPI no ofrece.
7. **Noticias, horarios y configuración:** en el ZIP de endpoints solo hay GET públicos. No existen POST/PATCH/DELETE FastAPI para administrar estos recursos. Las escrituras de estas secciones requieren endpoints y funciones DB adicionales; no se simulan en Next.

## Nota de montaje

El archivo `endpoints_web.zip` contiene el router `web_contactos_admin.py`, pero para que funcionen sus rutas deben completarse los modelos, helpers SQL y registro descritos arriba. Hasta entonces las rutas Next de administración de contactos responderán con el error que devuelva FastAPI (normalmente 404 o error de importación/arranque). El resto de las rutas proxy sí se corresponde con los endpoints encontrados.
