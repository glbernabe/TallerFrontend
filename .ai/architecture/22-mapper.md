# 22. Mapper

## Objetivo

Los Mapper convierten información entre distintas capas.

Nunca contienen reglas de negocio.

Su única responsabilidad es transformar modelos.

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
- Crear objetos del dominio.

Nunca:

- Hacer fetch.
- Validar reglas.
- Conocer React.
- Conocer Hooks.

---

# Organización

Imports

↓

Clase

↓

toDomain()

↓

toDto()

↓

Helpers privados

---

# Ejemplo

CartSummaryDto

↓

CartSummaryMapper

↓

CartSummary

---

# Reglas

Siempre devolver un nuevo objeto.

Nunca modificar el recibido.

---

# Beneficios

Separación total entre Backend y Domain.

Si cambia FastAPI únicamente cambia el Mapper.