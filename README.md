# Mercedes Frontend

Frontend desarrollado con **Next.js**, **React** y **TypeScript** siguiendo una arquitectura basada en **Clean Architecture**, **MVVM**, **Repository Pattern** y **SOLID**.

El objetivo del proyecto es proporcionar una plataforma moderna para Auto Talleres Orihuela, preparada para integrarse con FastAPI, Spiga+, Google Identity Services y futuras APIs de Mercedes-Benz.

---

# Tecnologías

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- FastAPI (Backend)
- Google Identity Services
- Spiga+ (ERP)
- Ollama + Continue (desarrollo asistido por IA)

---

# Arquitectura

El proyecto sigue una arquitectura por capas basada en Clean Architecture.

```text
Component
    ↓
Hook (ViewModel)
    ↓
UseCase
    ↓
Repository
    ↓
Service / ApiClient
    ↓
Backend
```

La documentación completa se encuentra en:

```text
.ai/
```

---

# Documentación

Toda la documentación técnica se encuentra dentro de la carpeta:

```text
.ai/
```

Especialmente:

```text
.ai/
├── README.md
├── architecture/
├── templates/
├── coding-rules.md
├── design-system.md
├── filesystem.md
├── api.md
├── roadmap.md
└── decisions.md
```

Antes de modificar la arquitectura o añadir nuevas funcionalidades se recomienda consultar dicha documentación.

---

# Instalación

## Clonar el proyecto

```bash
git clone <repositorio>
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

---

# Scripts

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run start
```

Ejecuta la versión compilada.

```bash
npm run lint
```

Ejecuta el análisis estático del código.

---

# Estructura del proyecto

```text
app/
components/
core/
hooks/
infrastructure/
public/
.ai/
```

La explicación completa de cada carpeta se encuentra en:

```text
.ai/filesystem.md
```

---

# Principios del proyecto

Todo el desarrollo debe respetar:

- Clean Architecture
- SOLID
- Repository Pattern
- MVVM mediante Hooks
- Componentes reutilizables
- Separación estricta de responsabilidades

---

# Inteligencia Artificial

Este proyecto está preparado para trabajar con asistentes de IA como:

- Continue
- Ollama
- Codex
- Claude Code

Toda la documentación necesaria para generar código correctamente se encuentra en:

```text
.ai/
```

---

# Estado del proyecto

Actualmente en desarrollo.

Las funcionalidades implementadas y las planificadas pueden consultarse en:

```text
.ai/roadmap.md
```

---

# Licencia

Pendiente de definir.