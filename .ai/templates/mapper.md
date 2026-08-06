# Mapper Template

## Objetivo

Un Mapper convierte modelos entre capas.

Nunca contiene lógica de negocio.

Su única responsabilidad es transformar datos.

---

# Conversiones permitidas

DTO

↓

Domain

Domain

↓

DTO

Nunca realizar otras conversiones.

---

# Responsabilidades

Puede:

- Renombrar propiedades.
- Convertir tipos.
- Convertir fechas.
- Convertir enums.
- Convertir estructuras anidadas.

Nunca puede:

- Hacer fetch.
- Acceder al backend.
- Conocer React.
- Contener reglas de negocio.

---

# Dependencias permitidas

✔ DTO

✔ Domain

✘ Repository

✘ Hooks

✘ Components

✘ Services

---

# Organización

Imports

↓

Clase Mapper

↓

toDomain()

↓

toDto()

↓

Helpers privados

---

# Métodos

Siempre utilizar nombres explícitos.

Ejemplo

toDomain()

toDto()

Nunca

map()

convert()

transform()

---

# Validaciones

No validar reglas de negocio.

Si un dato obligatorio no existe:

- lanzar excepción de infraestructura
- o devolver un valor seguro

dependiendo del caso.

---

# Estilo

No modificar el objeto recibido.

Siempre crear uno nuevo.

---

# Objetivo arquitectónico

Si el Backend modifica un DTO,
únicamente deberá modificarse el Mapper.

El Domain permanecerá intacto.