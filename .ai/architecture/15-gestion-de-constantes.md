# 15. Gestión de constantes

## Objetivo

Eliminar completamente los valores mágicos del proyecto.

---

# Qué es una constante

Cualquier valor reutilizable.

Ejemplos

Duraciones.

Colores.

Breakpoints.

Anchuras.

Alturas.

Animaciones.

Límites.

---

# Organización

core/common/

↓

design/

↓

constants/

---

# Ejemplos

OVERLAY

↓

drawerWidth

↓

topOffset

↓

animationDuration

---

CART

↓

previewItems

↓

maxHeight

↓

spacing

---

# Reglas

Nunca escribir

72

300

1500

"ease"

"#0078D6"

directamente dentro de un componente.

Siempre utilizar constantes.

---

# Beneficios

Mayor coherencia.

Más fácil mantenimiento.

Mayor reutilización.

Menos errores.

---

# Evolución

Si cambia un valor únicamente deberá modificarse una constante.

Nunca decenas de componentes.