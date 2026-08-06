# 27. Seguridad

## Objetivo

La seguridad forma parte de la arquitectura.

Nunca debe añadirse únicamente antes de publicar.

---

# Principios

Nunca confiar en el cliente.

Toda validación importante pertenece al Backend.

El Frontend únicamente mejora la experiencia del usuario.

---

# Tokens

Nunca almacenar Access Token dentro de Components.

Nunca exponer Tokens mediante Props.

Toda la gestión pertenece al Repository.

---

# Google Login

El Frontend únicamente obtiene:

ID Token

↓

FastAPI

↓

Verificación Google

↓

JWT propio

Nunca validar Google desde React.

---

# Variables sensibles

Toda información privada utiliza:

.env

Nunca escribir secretos en Git.

Nunca escribir Client Secret en Frontend.

---

# XSS

Nunca utilizar:

dangerouslySetInnerHTML

salvo casos muy concretos.

---

# CSRF

Cuando el Backend utilice Cookies:

utilizar protección CSRF.

---

# Sanitización

Toda entrada del usuario debe validarse.

Frontend

↓

Validación visual.

Backend

↓

Validación real.

---

# Dependencias

Mantener siempre actualizadas.

Eliminar librerías no utilizadas.

---

# Objetivo

La aplicación debe minimizar la superficie de ataque.