# 33. Ejemplos completos del proyecto

## Objetivo

Mostrar implementaciones reales siguiendo la arquitectura definida.

Este capítulo sirve como referencia para desarrolladores e Inteligencias Artificiales.

---

# Ejemplo 1

Login con Google

GoogleButton

↓

useGoogleLogin

↓

LoginWithGoogleUseCase

↓

IAuthRepository

↓

GoogleIdentityService

↓

Google Identity Services

↓

RestAuthRepository

↓

FastAPI

↓

JWT

↓

AuthSession

↓

Hook

↓

Component

---

# Ejemplo 2

Carrito

CartOverlay

↓

useCart

↓

GetCartSummaryUseCase

↓

ICartRepository

↓

RestCartRepository

↓

ApiClient

↓

CartSummaryDto

↓

CartMapper

↓

CartSummary

↓

Hook

↓

Component

---

# Ejemplo 3

Reservas

ReservationForm

↓

useReservation

↓

CreateReservationUseCase

↓

IReservationRepository

↓

RestReservationRepository

↓

ReservationDto

↓

ReservationMapper

↓

Reservation

---

# Ejemplo 4

Perfil

ProfileOverlay

↓

useProfile

↓

GetCurrentUserUseCase

↓

IAuthRepository

↓

RestAuthRepository

↓

UserDto

↓

UserMapper

↓

User

---

# Objetivo

Toda nueva funcionalidad debe poder representarse mediante uno de estos flujos.

Si necesita un flujo completamente distinto, probablemente la arquitectura deba revisarse.