# Repository Template

## Objetivo

Un Repository representa la única puerta de acceso a los datos.

No importa si los datos proceden de:

- FastAPI
- LocalStorage
- IndexedDB
- Google
- Spiga+
- Mercedes APIs
- Mock
- Base de datos

El resto de la aplicación nunca debe saber de dónde provienen.

---

# Responsabilidades

Puede:

- Obtener datos.
- Guardar datos.
- Actualizar datos.
- Eliminar datos.
- Convertir DTO a Domain mediante Mapper.
- Convertir Domain a DTO mediante Mapper.
- Gestionar llamadas HTTP.
- Gestionar errores de infraestructura.

Nunca puede:

- Contener lógica de negocio.
- Renderizar UI.
- Conocer React.
- Conocer Hooks.
- Conocer Tailwind.
- Conocer JSX.

---

# Dependencias permitidas

✔ DTO

✔ Mapper

✔ ApiClient

✔ Infrastructure Services

✔ Domain Interfaces

✘ React

✘ Hooks

✘ Components

✘ UseCases

---

# Organización

Imports

↓

Clase

↓

Constructor

↓

Métodos públicos

↓

Helpers privados

---

# Conversión de datos

Los Repository nunca devuelven DTO.

Siempre devuelven Domain Models.

Flujo correcto:

Backend

↓

DTO

↓

Mapper

↓

Domain

---

# Errores

Los errores HTTP deben transformarse a errores comprensibles.

Nunca exponer errores internos del servidor.

---

# Estilo

Utilizar métodos descriptivos.

Ejemplo:

login()

logout()

getCurrentUser()

getCart()

saveReservation()

Nunca:

doStuff()

execute()

request()

---

# Objetivo arquitectónico

Si el backend cambia de FastAPI a cualquier otra tecnología,
únicamente deberá modificarse este Repository.