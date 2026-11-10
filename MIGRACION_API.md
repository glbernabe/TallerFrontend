# Migración de integración HTTP

Esta versión del frontend utiliza una API HTTP propia como origen de datos. Los nombres de clases y archivos describen su responsabilidad y no el framework del servidor.

## Arquitectura

- `core/`: dominio, puertos y casos de uso. No realiza peticiones HTTP ni depende de Next.js.
- `infrastructure/api/`: cliente HTTP, repositorios, DTO y mappers que adaptan las respuestas de la API al dominio.
- `lib/*Dependencies.ts`: puntos de composición. Aquí se instancian los repositorios y se construyen los casos de uso.
- `app/` y `components/`: consumen casos de uso o Route Handlers; no instancian repositorios.

## Adaptadores

| Responsabilidad | Implementación |
|---|---|
| Contactos | `ContactApiRepository` |
| Noticias | `NewsApiRepository` |
| Horarios | `OpeningHourApiRepository` |
| Configuración pública | `SiteSettingsApiRepository` |
| Candidaturas | `CurriculumApiRepository` |

Los mappers traducen los nombres en español de la API al modelo de dominio. Para añadir otra fuente HTTP, se implementa el puerto correspondiente y se cambia únicamente el punto de composición.

## Variables de entorno

Copia `.env.example` a `.env.local` y configura:

- `API_INTERNAL_URL`: origen de la API accesible desde el servidor Next.js. En una red Docker compartida puede ser `http://api:80`.
- `API_PUBLIC_URL`: origen accesible desde el navegador para recuperar imágenes. Debe coincidir con el host permitido en `next.config.ts`.
- `API_CURRICULUMS_PATH`: ruta relativa del endpoint de candidaturas, por ejemplo `curriculums` o `api/public/curriculums`, según el montaje real del router.
- `NEXT_PUBLIC_SITE_URL`: dominio público del frontend.
- `NEXT_PUBLIC_APPOINTMENT_REQUEST_EMAIL`, `NEXT_PUBLIC_BUDGET_REQUEST_EMAIL` y `FLEET_REQUEST_EMAIL`: destinatarios de formularios que utilizan `mailto:`. Son visibles para el usuario; no se deben guardar secretos en estas variables.

En producción, `API_INTERNAL_URL` y `API_PUBLIC_URL` pueden ser distintos. El servidor Next.js puede llamar a la API por la red privada y el navegador descargar imágenes por el dominio público protegido por el proxy.

## Rutas utilizadas

- `GET /api/public/contactos`
- `GET /api/public/contactos/departamento/{departamento}`
- `GET /api/public/contactos/{id}`
- `GET /api/public/horarios-apertura`
- `GET /api/public/noticias?limite=50&desplazamiento=0`
- `GET /api/public/noticias/{identificador_url}`
- `GET /api/public/configuracion-sitio`
- `GET /api/public/archivos-multimedia/{id}`
- `POST {API_CURRICULUMS_PATH}` mediante el Route Handler `/api/curriculums` del frontend

La API actual no devuelve un total de noticias en el listado. Por eso el repositorio obtiene páginas de hasta 50 elementos y calcula la paginación del frontend sobre el conjunto publicado. Con menos de 50 noticias solo hace una petición.

La configuración pública no entrega los correos internos de departamento. Los formularios que actualmente abren el cliente de correo utilizan destinatarios públicos configurados por separado.

## Sustitución y comprobaciones

1. Conserva una copia de seguridad del frontend actual.
2. Extrae el paquete sobre una carpeta de trabajo limpia.
3. Copia `.env.example` a `.env.local` y configura los orígenes y destinatarios.
4. Ejecuta `npm ci`.
5. Ejecuta `npm run lint` y `npm run build`.
6. Prueba el listado y detalle de noticias, contactos, horarios, configuración, imágenes y el envío de una candidatura.

No se incluyen `.env.local`, credenciales, `.git`, `node_modules`, `.next` ni archivos de compilación en el paquete de migración.

## Estado de validación de esta entrega

- Se analizaron sintácticamente 120 archivos TypeScript/TSX: sin errores de sintaxis.
- Se comprobaron las importaciones locales: no quedaron rutas sin resolver.
- Se validaron los archivos JSON y `git diff --check` no detectó espacios problemáticos.
- No se ejecutaron `npm run lint` ni `npm run build`: las dependencias no estaban instaladas en el entorno de revisión y la instalación no llegó a completarse. Deben ejecutarse después de `npm ci` en el equipo de desarrollo.

`API_PUBLIC_URL` debe estar configurada también durante el build, porque `next.config.ts` la utiliza para restringir los orígenes permitidos para imágenes y la política CSP.
