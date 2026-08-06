# UseCase Template

## Objetivo

Un UseCase representa un único caso de uso de la aplicación.

Su única responsabilidad es coordinar la lógica de negocio necesaria para completar una acción.

Nunca contiene lógica de presentación.

Nunca contiene detalles de infraestructura.

Debe poder reutilizarse desde cualquier interfaz (React, CLI, tests, etc.).

---

# Responsabilidades

Un UseCase puede:

- Coordinar varios Repository.
- Utilizar Services.
- Validar reglas de negocio.
- Transformar información del dominio.
- Lanzar excepciones de dominio.
- Orquestar el flujo de una operación.

Nunca debe:

- Renderizar JSX.
- Conocer React.
- Conocer Tailwind.
- Conocer Hooks.
- Conocer DTO.
- Conocer Fetch.
- Conocer Axios.
- Conocer Google SDK.
- Conocer detalles HTTP.

---

# Dependencias permitidas

✔ Domain

✔ Repository Interfaces

✔ Services

✔ Domain Models

✘ Components

✘ Hooks

✘ Infrastructure concreta

✘ DTO

✘ Mapper

---

# Constructor

Siempre utilizar Dependency Injection.

Ejemplo

constructor(

    private readonly repository: IUserRepository,

) {}

Nunca crear instancias manualmente dentro del UseCase.

---

# Métodos

Normalmente únicamente existirá:

execute()

Si aparecen varios métodos públicos probablemente el caso de uso tenga demasiadas responsabilidades.

Los helpers deben ser privados.

---

# Organización

Imports

↓

Interfaces

↓

Clase

↓

Constructor

↓

execute()

↓

Métodos privados

---

# Comentarios

Comentar únicamente:

- Responsabilidad del caso de uso.
- Flujo importante.
- Reglas de negocio complejas.

Nunca comentar código evidente.

---

# Estilo

Utilizar nombres descriptivos.

No utilizar abreviaturas.

No utilizar "data".

Preferir:

user

session

cart

credential

reservation

Nunca utilizar any.

Utilizar readonly siempre que sea posible.

---

# Objetivo arquitectónico

Si en el futuro cambia el backend o la interfaz gráfica, este archivo NO debe modificarse.