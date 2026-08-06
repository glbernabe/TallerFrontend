# Component Template

## Objetivo

Un Component únicamente renderiza interfaz.

No contiene lógica de negocio.

Debe ser reutilizable.

Debe ser fácilmente testeable.

---

# Responsabilidades

Puede:

- Renderizar JSX.
- Recibir Props.
- Utilizar Hooks.
- Componer otros componentes.

Nunca puede:

- Hacer fetch.
- Conocer Repository.
- Conocer DTO.
- Crear UseCases.
- Acceder directamente a APIs.
- Conocer Google SDK.
- Contener reglas de negocio.

---

# Flujo

Component

↓

Hook (ViewModel)

↓

UseCase

↓

Repository

↓

Backend

Nunca romper este flujo.

---

# Organización

Imports

↓

Types

↓

Component

↓

Return

↓

Export

---

# Props

Siempre definir un type Props.

Ejemplo

type Props = {

    title: string;

    className?: string;

};

Nunca utilizar React.FC.

---

# JSX

Mantener el JSX limpio.

Extraer cualquier lógica compleja a Hooks.

Evitar operadores ternarios muy largos.

Separar visualmente las distintas secciones mediante comentarios.

Ejemplo

==============================

HEADER

==============================

---

# Estilo

Utilizar Tailwind.

Agrupar las clases.

Mantener una clase por línea cuando sean muchas.

Evitar clases duplicadas.

Utilizar componentes reutilizables.

Ejemplo:

MainButton

SecondaryButton

Overlay

ActionButton

---

# Estado

Si existe mucho estado probablemente deba vivir en un Hook.

---

# Objetivo arquitectónico

Si cambia la lógica de negocio este componente no debería modificarse.