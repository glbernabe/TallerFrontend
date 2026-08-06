# 26. Testing

## Objetivo

Toda funcionalidad crítica debe poder verificarse automáticamente.

Los tests no existen para aumentar el porcentaje de cobertura.

Existen para garantizar que la arquitectura continúa funcionando tras realizar cambios.

---

# Pirámide de Testing

Priorizar siempre:

Tests Unitarios

↓

Tests de Integración

↓

Tests End-to-End

Nunca construir un proyecto basado únicamente en E2E.

---

# Tests Unitarios

Verifican una única responsabilidad.

Ejemplos

- Mapper
- UseCase
- Helpers
- Validators

Nunca testear varios módulos simultáneamente.

---

# Tests de Integración

Verifican la colaboración entre varias capas.

Ejemplos

UseCase

↓

Repository

↓

Mock API

---

# Tests End-to-End

Verifican el recorrido completo del usuario.

Ejemplos

Login

↓

Añadir al carrito

↓

Reservar cita

↓

Cerrar sesión

---

# Qué debe testearse

Siempre

✔ UseCases

✔ Mappers

✔ Repository

✔ Helpers

✔ Validators

Opcionalmente

Components

Nunca

Tailwind

Frameworks externos

---

# Organización

tests/

↓

unit/

integration/

e2e/

fixtures/

mocks/

---

# Mock

Todos los servicios externos deben poder simularse.

Google

↓

MockGoogleIdentityService

FastAPI

↓

MockRepository

---

# Objetivo

Un cambio en el proyecto nunca debe romper funcionalidades existentes sin detectarlo.