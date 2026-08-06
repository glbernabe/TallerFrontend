# Interface Template

## Objetivo

Una Interface define un contrato.

Nunca contiene implementación.

---

## Organización

Imports

↓

Interface

↓

Export

---

## Convenciones

Interfaces de infraestructura:

IAuthRepository

ICartRepository

IReservationRepository

IVehicleRepository

Interfaces pequeñas.

Cada método representa una responsabilidad.

---

## Dependencias

Puede conocer:

Domain

Nunca:

React

DTO

Tailwind

---

## Métodos

Utilizar nombres del dominio.

login()

logout()

getCart()

getReservations()

No utilizar:

execute()

request()

call()

---

## Objetivo arquitectónico

Permitir sustituir implementaciones sin modificar el resto del proyecto.