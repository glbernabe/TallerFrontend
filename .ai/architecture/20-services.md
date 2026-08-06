# 20. Services

## Objetivo

Los Services encapsulan completamente cualquier dependencia externa.

Nunca deben propagarse detalles de un SDK al resto del proyecto.

---

# Ejemplos

GoogleIdentityService

MercedesApiService

SpigaService

StripeService

NotificationService

---

# Responsabilidades

Puede:

- Inicializar SDK.
- Gestionar callbacks.
- Gestionar autenticación externa.
- Adaptar respuestas.
- Traducir objetos del SDK.

Nunca:

- Renderizar.
- Contener reglas de negocio.
- Acceder directamente a Components.

---

# Flujo

UseCase

↓

Service

↓

SDK

Nunca

Component

↓

SDK

---

# Errores

Traducir errores del SDK a errores entendibles por la aplicación.

Nunca exponer excepciones internas del proveedor.

---

# Objetivo

Si Google cambia completamente Google Identity Services, únicamente deberá modificarse GoogleIdentityService.

El resto del proyecto permanecerá intacto.