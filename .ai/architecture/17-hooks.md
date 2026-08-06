# 17. Hooks (ViewModels)

## Objetivo

Los Hooks representan el ViewModel de la aplicación.

Toda la lógica de presentación vive aquí.

Los Components únicamente consumen el estado expuesto.

---

# Responsabilidades

Puede:

- Gestionar estado.
- Gestionar loading.
- Gestionar errores.
- Gestionar callbacks.
- Llamar a UseCases.
- Adaptar datos para la UI.
- Gestionar formularios.
- Gestionar efectos.

Nunca puede:

- Renderizar JSX.
- Conocer DTO.
- Conocer Mapper.
- Hacer fetch manual.
- Acceder directamente al Backend.

---

# Organización

Imports

↓

Types

↓

Hook

↓

State

↓

UseCases

↓

Callbacks

↓

Effects

↓

Return

---

# Estado

Priorizar:

useState

↓

useMemo

↓

useCallback

↓

useEffect

Evitar useEffect cuando exista una alternativa más simple.

---

# Return

Siempre devolver un objeto.

Ejemplo

return {

    login,

    logout,

    isLoading,

    error,

    user,

};

Nunca devolver arrays.

---

# React Query

Los Hooks son el lugar donde se utilizan React Query y las mutaciones.

Los Components nunca conocen React Query.

---

# Objetivo

Toda modificación visual debe realizarse desde el Hook.

Nunca desde el UseCase.