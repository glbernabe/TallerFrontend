# 30. Escalabilidad futura

## Objetivo

Toda decisión arquitectónica debe facilitar el crecimiento del proyecto.

Nunca dificultarlo.

---

# Nuevas funcionalidades

Toda nueva funcionalidad debe integrarse siguiendo la arquitectura existente.

Nunca crear excepciones.

---

# Ejemplos futuros

Login Apple

↓

Nuevo Service

↓

Nuevo Repository

↓

Nuevo UseCase

Sin modificar Google.

---

Nueva integración

Mercedes API

↓

Nuevo Service

↓

Nuevo Repository

↓

Nuevos DTO

↓

Nuevos Mapper

Sin afectar al resto del proyecto.

---

# Nuevos módulos

Ejemplos

Reservas

Vehículos

Facturación

Notificaciones

Clientes

Todos deben seguir exactamente la misma estructura.

---

# Refactorización

Si una funcionalidad requiere modificar decenas de archivos probablemente exista un problema de diseño.

Debe revisarse la arquitectura antes de continuar.

---

# Documentación

Toda decisión importante debe reflejarse en:

.ai/

↓

decisions.md

architecture.md

coding-rules.md

---

# Inteligencia Artificial

Toda IA utilizada en el proyecto debe respetar:

- Clean Architecture
- SOLID
- Repository Pattern
- MVVM
- Convenciones del proyecto
- Templates de la carpeta `.ai/templates`

Nunca generar código que contradiga la documentación del proyecto.

---

# Objetivo final

El proyecto debe poder evolucionar durante muchos años incorporando nuevas tecnologías sin perder coherencia arquitectónica.