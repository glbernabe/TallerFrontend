# Service Template

## Objetivo

Un Service encapsula completamente una tecnología externa.

Ejemplos:

- Google Identity Services
- Stripe
- Firebase
- Spiga+
- Mercedes APIs
- Mapas
- Geolocalización

El resto del proyecto nunca debe conocer esa tecnología.

---

# Responsabilidades

Puede:

- Hablar con SDK externos.
- Inicializar librerías.
- Gestionar callbacks.
- Adaptar respuestas del SDK.
- Convertir eventos del SDK en objetos del dominio.

Nunca puede:

- Renderizar UI.
- Contener lógica de negocio.
- Acceder directamente al Backend.
- Conocer React.

---

# Dependencias permitidas

✔ SDK Externo

✔ Domain Models

✔ Infrastructure

✘ Components

✘ Hooks

✘ UseCases

---

# Flujo

UseCase

↓

Service

↓

SDK

Nunca:

Component

↓

SDK

---

# Organización

Imports

↓

Interfaces internas

↓

Clase

↓

Constructor

↓

Inicialización

↓

Métodos públicos

↓

Helpers privados

---

# Errores

Traducir errores del SDK.

Nunca exponer directamente errores internos.

---

# Ejemplos

GoogleIdentityService

↓

Devuelve

GoogleCredential

Nunca devuelve objetos propios del SDK.

---

StripeService

↓

Devuelve

PaymentIntent

Nunca devuelve objetos del SDK de Stripe.

---

# Objetivo arquitectónico

Si Google cambia completamente su SDK,
únicamente deberá modificarse este archivo.