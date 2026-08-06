# 11. Gestión del estado

## Objetivo

Toda la gestión del estado de la aplicación debe ser predecible, reutilizable y desacoplada de la interfaz gráfica.

El estado nunca debe vivir en un lugar incorrecto.

---

# Tipos de estado

La aplicación distingue cuatro tipos de estado.

## Estado local

Vive dentro de un componente.

Ejemplos

- Input abierto
- Modal abierto
- Animación
- Hover

Utilizar:

useState()

Nunca extraer este estado a un Hook si únicamente pertenece a un componente.

---

## Estado de presentación

Vive dentro de un Hook.

Ejemplos

- loading
- error
- filtros
- búsqueda
- formulario
- paginación

Este estado representa la vista.

Los Hooks actúan como ViewModels.

---

## Estado remoto

Representa datos obtenidos del Backend.

Ejemplos

- Usuario
- Carrito
- Reservas
- Vehículos

Nunca almacenar manualmente este estado.

Siempre utilizar React Query.

---

## Estado global

Únicamente existe cuando varias partes de la aplicación necesitan compartir información.

Ejemplos

- Sesión
- Tema
- Idioma

Evitar Context innecesarios.

No utilizar Zustand.

---

# Hooks

Los Hooks son el punto central del estado.

Un Hook puede:

- cargar datos
- transformar datos
- exponer callbacks
- controlar loading
- controlar errores

Nunca renderiza.

---

# React Query

Toda consulta remota debe utilizar React Query.

Nunca realizar:

fetch()

directamente desde un componente.

---

# Flujo

Backend

↓

Repository

↓

UseCase

↓

Hook

↓

Component

---

# Regla

Los Components nunca almacenan datos de negocio.

Únicamente representan la interfaz.