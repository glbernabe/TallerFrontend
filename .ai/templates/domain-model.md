# Domain Model Template

## Objetivo

Un Domain Model representa un concepto de negocio.

Debe ser completamente independiente de:

- React
- Next.js
- FastAPI
- DTO
- Fetch
- Tailwind
- SDK externos

---

## Responsabilidades

Puede:

- Representar entidades.
- Representar Value Objects.
- Contener propiedades del dominio.

Nunca puede:

- Importar Infrastructure.
- Importar React.
- Importar DTO.
- Importar Services.

---

## Organización

Imports

↓

Enums

↓

Types

↓

Interface

↓

Export

---

## Estilo

Siempre utilizar interfaces.

No utilizar clases salvo que exista comportamiento complejo.

Propiedades readonly cuando sea posible.

Utilizar nombres del dominio.

Ejemplo:

User

Cart

Reservation

Vehicle

Appointment

Service

No utilizar nombres técnicos.

---

## Objetivo arquitectónico

El Domain debe sobrevivir aunque cambie completamente la tecnología utilizada.