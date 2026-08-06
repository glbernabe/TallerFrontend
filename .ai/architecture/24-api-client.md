# 24. API Client

## Objetivo

Centralizar toda comunicación HTTP.

Ningún Repository debe conocer detalles de fetch.

Todos utilizan ApiClient.

---

# Responsabilidades

GET

POST

PUT

PATCH

DELETE

Headers

JWT

Refresh

Timeout

Errores

---

# Flujo

Repository

↓

ApiClient

↓

Backend

---

# Beneficios

Si cambia fetch por Axios únicamente cambia ApiClient.

Si cambia Axios por Ky únicamente cambia ApiClient.

---

# Autenticación

El ApiClient debe añadir automáticamente:

Authorization

Bearer Token

cuando sea necesario.

---

# Refresh

Cuando un JWT expire:

↓

Refresh Token

↓

Nuevo JWT

↓

Repetir petición

Todo ello automáticamente.

---

# Componentes

Nunca realizan fetch.

Nunca conocen ApiClient.

---

# Reglas

Toda llamada HTTP pasa por ApiClient.

Nunca utilizar fetch fuera de este archivo.