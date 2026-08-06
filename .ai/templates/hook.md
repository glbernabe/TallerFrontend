# Hook Template

## Objetivo

Los Hooks actúan como ViewModels.

Toda la lógica de presentación vive aquí.

El componente únicamente renderiza.

---

# Responsabilidades

Puede:

- Gestionar estado.
- Gestionar loading.
- Gestionar errores.
- Llamar a UseCases.
- Adaptar datos para la UI.
- Exponer callbacks.

Nunca puede:

- Hacer fetch directamente.
- Conocer DTO.
- Conocer Mapper.
- Renderizar JSX.

---

# Dependencias permitidas

✔ UseCases

✔ Domain Models

✔ React

✘ Repository concreto

✘ DTO

✘ Google SDK

---

# Estado

Utilizar:

useState

↓

useMemo

↓

useCallback

↓

useEffect

únicamente cuando sea necesario.

Evitar useEffect innecesarios.

---

# Organización

Imports

↓

Types

↓

Hook

↓

Estado

↓

UseCases

↓

Callbacks

↓

Effects

↓

Return

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

# Comentarios

Comentar únicamente:

- Flujo importante.
- Sincronización.
- Casos especiales.

---

# Estilo

Los callbacks deben tener nombres descriptivos.

Ejemplo

login

logout

reload

openCart

closeCart

Nunca

handle1

doStuff

func

---

# Objetivo arquitectónico

Si cambia React este Hook puede cambiar.

Si cambia el backend únicamente debería cambiar el UseCase o el Repository.

El Hook nunca debe conocer esos cambios.