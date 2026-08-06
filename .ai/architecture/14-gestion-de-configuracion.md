# 14. Gestión de configuración

## Objetivo

Toda configuración compartida debe encontrarse centralizada.

Nunca duplicar configuraciones.

---

# Configuración

Ejemplos

API_URL

GOOGLE_CLIENT_ID

BREAKPOINTS

OVERLAY

AUTH

CART

---

# Variables de entorno

Toda configuración sensible utiliza:

.env

Nunca escribir secretos en el código.

---

# Organización

core/

↓

common/

↓

config/

providers/

constants/

---

# Providers

Toda librería externa se inicializa mediante un Provider.

Ejemplos

React Query

Theme

Session

---

# Configuración visual

Debe vivir dentro de:

core/common/design

Ejemplo

OVERLAY

CART

BUTTON

---

# Configuración funcional

Debe vivir dentro de:

core/common/config

---

# Regla

Toda constante utilizada por varios módulos debe existir únicamente una vez.