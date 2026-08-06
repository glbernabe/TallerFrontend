# Mercedes Frontend - Project Context

## Objetivo

Este documento proporciona una visión rápida del proyecto.

Debe permitir que cualquier Inteligencia Artificial comprenda el contexto general antes de comenzar una tarea.

No sustituye a la documentación de arquitectura.

Únicamente resume los aspectos más importantes.

---

# Proyecto

Mercedes Frontend es una aplicación desarrollada para Auto Talleres Orihuela.

Su objetivo es ofrecer una plataforma moderna para la gestión de servicios, autenticación, reservas y futuras integraciones con Mercedes-Benz y Spiga+.

---

# Stack tecnológico

Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

Backend

- FastAPI

Autenticación

- Google Identity Services
- JWT
- Refresh Token

Herramientas

- Ollama
- Continue
- Qwen 2.5 Coder

---

# Arquitectura

El proyecto utiliza:

- Clean Architecture
- SOLID
- Repository Pattern
- MVVM mediante Hooks
- Dependency Injection

---

# Flujo general

Component

↓

Hook (ViewModel)

↓

UseCase

↓

Repository

↓

Service

↓

ApiClient

↓

Backend

---

# Organización

El proyecto se organiza principalmente en:

app/

components/

core/

domain/

hooks/

infrastructure/

.ai/

---

# Filosofía

Toda funcionalidad debe ser:

- Reutilizable.
- Escalable.
- Fácil de mantener.
- Desacoplada.

La velocidad nunca tiene prioridad sobre la arquitectura.

---

# Principios

- Componentes pequeños.
- Una única responsabilidad.
- Sin duplicación.
- Domain independiente.
- Infrastructure desacoplada.
- Hooks como ViewModels.

---

# Documentación

Toda la documentación oficial se encuentra en:

.ai/

Si existe cualquier duda arquitectónica debe consultarse primero dicha carpeta.

---

# Objetivo de la IA

Antes de escribir código debes:

1. Comprender el problema.
2. Buscar implementaciones similares.
3. Consultar la documentación.
4. Revisar los Templates.
5. Solo entonces comenzar la implementación.

---

# Fuente de verdad

La carpeta `.ai` constituye la documentación oficial del proyecto.

Toda decisión debe alinearse con ella.