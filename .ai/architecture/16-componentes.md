# 16. Componentes

## Objetivo

Los Components representan exclusivamente la interfaz de usuario.

No contienen lógica de negocio.

Su única responsabilidad es transformar el estado recibido en elementos visuales.

---

# Filosofía

Los Components deben ser:

- Pequeños.
- Reutilizables.
- Predecibles.
- Fáciles de leer.
- Fáciles de testear.

Si un Component supera aproximadamente las 300 líneas, debe evaluarse su división.

---

# Responsabilidades

Puede:

- Renderizar JSX.
- Recibir Props.
- Utilizar Hooks.
- Componer otros Components.
- Gestionar eventos visuales.

Nunca puede:

- Hacer fetch.
- Crear Repositories.
- Crear UseCases.
- Importar DTO.
- Importar Mapper.
- Acceder a APIs.
- Conocer Google SDK.
- Contener reglas de negocio.

---

# Organización

Siempre mantener el mismo orden.

Imports

↓

Types

↓

Component

↓

JSX

↓

Export

---

# JSX

El JSX debe ser legible.

Utilizar comentarios para separar bloques importantes.

Ejemplo

==============================

HEADER

==============================

==============================

BODY

==============================

==============================

FOOTER

==============================

---

# Props

Siempre utilizar:

type Props

Nunca React.FC.

Las Props deben contener únicamente la información necesaria.

---

# Componentes reutilizables

Siempre priorizar componentes existentes.

Ejemplos

MainButton

SecondaryButton

Overlay

OverlayHeader

ActionButton

Card

---

# Estilos

Todo estilo debe realizarse mediante Tailwind.

Evitar CSS específico salvo casos muy concretos.

---

# Objetivo

Si cambia la lógica del negocio, este archivo no debería modificarse.