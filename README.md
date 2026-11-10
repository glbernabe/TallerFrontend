# Mercedes Frontend

Frontend corporativo de AutoTalleres Orihuela desarrollado con Next.js, React y TypeScript.

## Tecnologías

- Next.js App Router
- React y TypeScript
- Tailwind CSS
- next-intl para internacionalización
- API HTTP propia como fuente de datos

## Arquitectura

El proyecto separa los modelos y reglas de negocio de los detalles de comunicación con la API.

```text
app / components
        |
        v
    Use cases
        |
        v
Repository ports (core)
        ^
        |
API repositories (infrastructure)
        |
        v
     ApiClient
        |
        v
   Backend API
```

- `app/`: rutas, páginas y Route Handlers de Next.js.
- `components/`: componentes visuales y de interacción.
- `core/`: dominio, contratos de repositorio y casos de uso. No depende de Next.js ni del proveedor HTTP.
- `infrastructure/api/`: implementaciones HTTP de los repositorios, mappers y cliente común.
- `lib/*Dependencies.ts`: puntos de composición que conectan los puertos con sus implementaciones y exponen casos de uso a las páginas.

Las páginas y los componentes no deben importar ni instanciar repositorios directamente. Deben utilizar los casos de uso exportados por los módulos de composición de `lib/`. La capa `core` no debe importar nada desde `infrastructure/`.

## Configuración

Copia `.env.example` a `.env.local` y configura los valores del entorno. No subas `.env.local` ni credenciales reales al repositorio.

| Variable | Uso |
|---|---|
| `API_INTERNAL_URL` | Origen del backend accesible desde el servidor Next.js. En Docker puede ser `http://api:80`. |
| `API_PUBLIC_URL` | Origen accesible desde el navegador para imágenes y archivos multimedia. |
| `API_CURRICULUMS_PATH` | Ruta del endpoint que recibe candidaturas; debe coincidir con el montaje del router. |
| `NEXT_PUBLIC_SITE_URL` | URL pública de la web para SEO y sitemap. |
| `NEXT_PUBLIC_APPOINTMENT_REQUEST_EMAIL` | Destinatario visible del formulario de cita previa basado en `mailto:`. |
| `NEXT_PUBLIC_BUDGET_REQUEST_EMAIL` | Destinatario visible del formulario de presupuestos basado en `mailto:`. |
| `FLEET_REQUEST_EMAIL` | Destinatario visible del formulario de flotas basado en `mailto:`. |

`API_INTERNAL_URL` y `API_PUBLIC_URL` pueden ser iguales en desarrollo. En producción pueden ser diferentes: por ejemplo, Next.js puede llamar al servicio mediante la red privada de contenedores, mientras que el navegador descarga imágenes desde el dominio público protegido por el proxy.

Los destinatarios usados por formularios `mailto:` no son secretos: se entregan al navegador como parte de la página o del componente cliente. Si en el futuro el envío se realiza en el backend, los destinatarios deben configurarse allí como variables privadas y eliminarse del frontend.

## Ejecución

```bash
npm install
npm run dev
```

La web estará disponible en `http://localhost:3000`.

## Comprobaciones

```bash
npm run lint
npm run build
```

## Integración de datos

Los repositorios de `infrastructure/api/` traducen los DTO de la API a modelos de dominio. Los mappers son el único lugar donde se deben traducir nombres de propiedades entre el contrato HTTP y el dominio.

Las consultas públicas de contactos, horarios, noticias y configuración se realizan desde el servidor Next.js mediante el cliente común. Las peticiones GET se almacenan en la caché de datos de Next.js durante 60 segundos por defecto. Las operaciones de escritura no se cachean.

La subida de currículums se envía desde el Route Handler `app/api/curriculums/route.ts`, que ejecuta el caso de uso `SubmitCurriculumUseCase`. El navegador no necesita conocer la URL interna del backend.

## Diseño

Los componentes, las clases de Tailwind CSS, los estilos globales, las fuentes y los recursos visuales se mantienen independientes de la integración de datos. Los cambios de infraestructura no deben modificar la presentación.
