# 12. Gestión de autenticación

## Objetivo

Toda la autenticación debe encontrarse completamente desacoplada del resto de la aplicación.

Debe ser posible sustituir Google Login por cualquier otro proveedor sin modificar los Components.

---

# Arquitectura

Google Button

↓

Hook

↓

LoginWithGoogleUseCase

↓

IAuthRepository

↓

GoogleIdentityService

↓

Google Identity Services

↓

Backend

↓

JWT

↓

AuthSession

↓

Hook

↓

Component

---

# Providers

Cada proveedor se implementa mediante un Service independiente.

Ejemplos

GoogleIdentityService

AppleIdentityService

MicrosoftIdentityService

---

# Repositories

Los UseCases nunca conocen Google.

Siempre utilizan:

IAuthRepository

---

# Sesión

La sesión pertenece al dominio.

Nunca utilizar directamente:

localStorage

cookies

sessionStorage

desde Components.

Toda persistencia pasa por Repository.

---

# Refresh Token

La renovación de sesión nunca debe realizarse desde un Component.

Debe existir un caso de uso específico.

Ejemplo

RefreshSessionUseCase

---

# Logout

Logout debe limpiar:

- Session
- Cache
- Usuario
- Tokens

Nunca únicamente eliminar el JWT.

---

# Seguridad

Los Components nunca conocen tokens.

Nunca conocen cookies.

Nunca conocen credenciales.

---

# Objetivo

La autenticación debe poder evolucionar sin afectar al resto del proyecto.