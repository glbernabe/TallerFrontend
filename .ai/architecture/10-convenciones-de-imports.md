# 10. Convenciones de imports

## Objetivo

Todos los archivos deben mantener el mismo orden de imports.

---

## Orden

1.

Librerías externas

React

Next

TanStack

Google

---

2.

Domain

---

3.

Infrastructure

---

4.

Hooks

---

5.

Core

---

6.

Components

---

7.

Tipos

---

8.

CSS

---

## Separación

Siempre dejar una línea entre grupos.

Incorrecto

React

Hook

Component

Todo mezclado.

Correcto

React

↓

Domain

↓

Infrastructure

↓

Hooks

↓

Components

---

## Alias

Siempre utilizar alias.

Correcto

@/components

@/hooks

@/core

Incorrecto

../../../components

---

## Regla

Nunca utilizar rutas relativas largas.

Más de dos "../"

debe considerarse un problema de arquitectura.