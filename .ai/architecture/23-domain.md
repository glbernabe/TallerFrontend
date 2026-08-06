# 23. Domain

## Objetivo

El Domain representa el negocio.

Es la parte más importante de toda la aplicación.

Todo el resto del proyecto existe para servir al Domain.

---

# Contenido permitido

Interfaces

Modelos

Enums

Value Objects

Tipos

Excepciones de dominio

---

# Contenido prohibido

React

Tailwind

Hooks

Fetch

Axios

DTO

Google SDK

FastAPI

Next.js

---

# Filosofía

El Domain debe poder copiarse a otro proyecto y seguir funcionando.

---

# Organización

domain/

↓

auth/

cart/

reservation/

vehicle/

user/

---

# Interfaces

Todas las Interfaces del dominio representan contratos.

Ejemplos

ICartRepository

IAuthRepository

IReservationRepository

---

# Modelos

Representan conceptos del negocio.

Nunca conceptos técnicos.

Correcto

User

Reservation

Vehicle

Incorrecto

UserDto

UserResponse

GoogleUser

---

# Regla

Toda regla de negocio debe poder comprenderse leyendo únicamente Domain y UseCases.