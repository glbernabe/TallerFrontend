# 6. Dependencias entre capas

## Objetivo

Cada capa únicamente puede depender de las capas permitidas.

Esto garantiza que el proyecto permanezca desacoplado y que cualquier implementación pueda sustituirse sin afectar al resto del sistema.

---

## Dependencias permitidas

Component

↓

Hook

---

Hook

↓

UseCase

---

UseCase

↓

Repository Interface

↓

Service Interface

---

Repository

↓

ApiClient

↓

Mapper

↓

DTO

---

Service

↓

SDK Externo

---

Domain

↓

No depende de ninguna capa.

---

## Dependencias prohibidas

Component

✘ Repository

✘ DTO

✘ Fetch

✘ Axios

✘ Google SDK

✘ FastAPI

---

Hook

✘ DTO

✘ Mapper

✘ ApiClient

---

UseCase

✘ React

✘ JSX

✘ DTO

✘ Tailwind

---

Repository

✘ Components

✘ Hooks

---

## Regla

Toda dependencia debe apuntar siempre hacia el dominio.

Nunca al contrario.

---

## Beneficios

- Bajo acoplamiento.
- Alta reutilización.
- Fácil testing.
- Fácil mantenimiento.
- Fácil sustitución de implementaciones.
