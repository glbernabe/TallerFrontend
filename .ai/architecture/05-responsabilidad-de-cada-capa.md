# 5. Responsabilidad de cada capa

## Domain

Responsabilidad:

Representar el negocio.

Puede contener:

Interfaces

Modelos

Enums

Value Objects

Nunca:

React

Hooks

Fetch

DTO

---

## Infrastructure

Responsabilidad:

Hablar con el exterior.

Puede contener:

Repositories

Services

DTO

Mapper

ApiClient

Mock

Nunca:

JSX

Hooks

Lógica de negocio.

---

## UseCases

Responsabilidad:

Coordinar reglas de negocio.

Puede:

Validar.

Orquestar.

Combinar varios Repository.

Nunca:

Renderizar.

Utilizar React.

Conocer DTO.

---

## Hooks

Responsabilidad:

Gestionar la lógica de presentación.

Puede:

Loading.

Errores.

Estado.

Callbacks.

Nunca:

Conocer Fetch.

Conocer Google SDK.

Conocer DTO.

---

## Components

Responsabilidad:

Renderizar UI.

Puede:

Recibir Props.

Utilizar Hooks.

Componer otros Components.

Nunca:

Crear Repository.

Crear Services.

Realizar Fetch.

Contener lógica de negocio.

---

## Regla de oro

Cada archivo debe responder claramente a la pregunta:

¿Por qué existe?

Si la respuesta contiene dos responsabilidades distintas, probablemente el archivo deba dividirse.