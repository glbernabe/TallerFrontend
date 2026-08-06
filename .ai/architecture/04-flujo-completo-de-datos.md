# 4. Flujo completo de datos

## Ejemplo: Login con Google

Usuario

↓

Pulsa botón

↓

GoogleButton

↓

useGoogleLogin()

↓

LoginWithGoogleUseCase

↓

IAuthRepository

↓

GoogleIdentityService

↓

Google Identity Services

↓

Credential

↓

RestAuthRepository

↓

FastAPI

↓

JWT

↓

Domain User

↓

Hook

↓

Component

---

## Ejemplo: Carrito

Usuario

↓

CartOverlay

↓

useCart()

↓

GetCartSummaryUseCase

↓

ICartRepository

↓

RestCartRepository

↓

FastAPI

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

## Objetivo

Cada capa únicamente transforma la información necesaria.

Nunca mezcla responsabilidades.

---

## Regla

Los Components nunca saben cómo llegan los datos.

Los Repositories nunca saben cómo se muestran.

El Hook únicamente coordina la vista.

El UseCase únicamente coordina negocio.