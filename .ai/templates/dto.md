# DTO Template

## Objetivo

Representar exactamente el JSON enviado o recibido.

Nunca modificar nombres.

Nunca adaptar propiedades.

Eso pertenece al Mapper.

---

## Responsabilidades

Puede:

Representar requests.

Representar responses.

Representar estructuras HTTP.

Nunca:

Contener lógica.

---

## Organización

Imports

↓

Interface

↓

Export

---

## Convenciones

Mantener exactamente los nombres del backend.

Ejemplo

access_token

refresh_token

user_name

Aunque el dominio utilice camelCase.

---

## Objetivo arquitectónico

Si cambia la API únicamente debe modificarse este archivo y el Mapper.