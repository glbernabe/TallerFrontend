# 19. Repository

## Objetivo

Los Repository representan la única puerta de acceso a los datos.

No importa si los datos proceden de:

- FastAPI
- LocalStorage
- IndexedDB
- Mock
- Spiga
- Google
- Mercedes APIs

El resto de la aplicación nunca debe conocer su origen.

---

# Responsabilidades

Puede:

- Realizar llamadas HTTP.
- Leer almacenamiento local.
- Guardar información.
- Utilizar Mapper.
- Utilizar DTO.

Nunca:

- Contener lógica de negocio.
- Renderizar.
- Conocer React.

---

# Conversión

Backend

↓

DTO

↓

Mapper

↓

Domain

Nunca devolver DTO.

Siempre devolver Domain.

---

# Interfaces

Todo Repository implementa una Interface.

Ejemplo

ICartRepository

↓

RestCartRepository

↓

MockCartRepository

---

# Testing

Toda implementación debe poder sustituirse por otra sin modificar los UseCases.

---

# Objetivo

Cambiar FastAPI por GraphQL no debería afectar al resto del proyecto.