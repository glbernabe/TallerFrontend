# 2. Principios de diseño

## Clean Architecture

Toda la aplicación sigue los principios de Clean Architecture.

Cada capa únicamente conoce la inmediatamente inferior.

Nunca se realizan accesos directos entre capas.

---

## SOLID

Todo el proyecto debe respetar los principios SOLID.

### Single Responsibility

Cada archivo tiene una única responsabilidad.

Ejemplos:

UserMapper

GoogleIdentityService

LoginWithGoogleUseCase

Cada uno realiza únicamente una tarea.

---

### Open / Closed

El código debe poder extenderse sin modificar implementaciones existentes.

Ejemplo:

Añadir Apple Login.

No modificar Google Login.

Crear una nueva implementación.

---

### Liskov

Las implementaciones deben poder sustituirse mediante Interfaces.

Ejemplo:

IAuthRepository

↓

RestAuthRepository

↓

MockAuthRepository

↓

FutureGraphQLRepository

Todas deben funcionar igual.

---

### Interface Segregation

Las interfaces deben ser pequeñas.

Nunca crear interfaces gigantes.

Incorrecto:

IRepository

Correcto:

IAuthRepository

ICartRepository

IReservationRepository

---

### Dependency Inversion

Las capas superiores nunca dependen de implementaciones concretas.

Siempre dependen de Interfaces.

---

## Composition over Inheritance

Siempre que sea posible utilizar composición.

Evitar herencia innecesaria.

---

## Inmutabilidad

Siempre utilizar readonly cuando sea posible.

Nunca modificar parámetros recibidos.

Siempre devolver nuevos objetos.

---

## Simplicidad

La solución más sencilla suele ser la correcta.

No añadir abstracciones innecesarias.