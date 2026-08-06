# 25. Performance

## Objetivo

La optimización forma parte de la arquitectura.

No debe añadirse únicamente al final del proyecto.

---

# Componentes

Separar:

Server Components

↓

Client Components

Siempre que sea posible.

---

# Dynamic Import

Los componentes pesados deben cargarse mediante:

dynamic()

Ejemplos

CartOverlay

SearchOverlay

ProfileOverlay

LoginDialog

---

# Imágenes

Siempre utilizar:

next/image

Formato preferido

WebP

AVIF

Nunca PNG si existe alternativa.

---

# Hooks

Utilizar:

useMemo

únicamente cuando exista un beneficio real.

Utilizar:

useCallback

únicamente cuando evite renders innecesarios.

---

# React Query

Toda información remota debe cachearse.

Nunca duplicar peticiones.

---

# Renderizado

Evitar:

Re-renders innecesarios.

Objetos recreados.

Funciones recreadas.

---

# Constantes

Toda configuración reutilizable debe centralizarse.

Nunca repetir valores.

---

# Bundle

Utilizar:

Dynamic Import

Code Splitting

Lazy Loading

cuando aporte beneficios.

---

# Objetivo

La aplicación debe sentirse rápida incluso con cientos de componentes.