# 32. Anti-patrones

## Objetivo

Evitar errores de diseño que puedan deteriorar la arquitectura con el paso del tiempo.

---

# Componentes con demasiadas responsabilidades

Incorrecto

Component

↓

Fetch

↓

Validación

↓

Repository

↓

Render

Correcto

Component

↓

Hook

↓

UseCase

↓

Repository

---

# Hooks gigantes

Un Hook no debe convertirse en un "segundo componente".

Si supera varios cientos de líneas debe evaluarse su división.

---

# Repository con lógica de negocio

Incorrecto

Repository

↓

Validaciones

↓

Reglas de negocio

↓

HTTP

Correcto

UseCase

↓

Repository

---

# DTO utilizados fuera de Infrastructure

Incorrecto

Component

↓

UserDto

Correcto

Component

↓

User

---

# Mapper con reglas de negocio

El Mapper únicamente transforma información.

Nunca decide.

Nunca valida reglas.

---

# Valores mágicos

Incorrecto

className="h-[73px]"

Correcto

OVERLAY.headerHeight

---

# Fetch desde Components

Nunca.

Toda llamada HTTP pasa por:

Repository

↓

ApiClient

---

# SDK en Components

Incorrecto

Google.accounts.id

↓

Component

Correcto

GoogleIdentityService

↓

UseCase

↓

Hook

↓

Component

---

# Herencia innecesaria

Priorizar composición.

---

# Archivos ambiguos

Evitar carpetas llamadas:

misc

utils

helpers

cuando mezclan responsabilidades.

---

# Regla

Si un archivo realiza más de una tarea importante probablemente deba dividirse.