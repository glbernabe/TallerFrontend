# Factory Template

## Objetivo

Una Factory crea implementaciones concretas.

Permite desacoplar el dominio de Infrastructure.

---

## Responsabilidades

Puede:

Crear Repository.

Crear Services.

Crear UseCases.

Nunca:

Contener lógica de negocio.

---

## Organización

Imports

↓

Clase

↓

Métodos estáticos

↓

Export

---

## Convenciones

Utilizar create().

No utilizar new fuera de la Factory.

---

## Objetivo arquitectónico

Si cambia una implementación únicamente cambia la Factory.