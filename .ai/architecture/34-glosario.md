# 34. Glosario

## Clean Architecture

Arquitectura basada en capas con dependencias dirigidas hacia el dominio.

---

## Domain

Representa el negocio.

No depende de ninguna tecnología.

---

## UseCase

Representa un único caso de uso.

Coordina la lógica de aplicación.

---

## Repository

Puerta de acceso a los datos.

Oculta completamente su origen.

---

## Service

Encapsula un SDK o tecnología externa.

---

## DTO

Representa exactamente la información intercambiada con un sistema externo.

---

## Mapper

Convierte información entre DTO y Domain.

---

## Hook

Actúa como ViewModel.

Gestiona el estado de presentación.

---

## Component

Renderiza únicamente la interfaz.

---

## ApiClient

Centraliza toda comunicación HTTP.

---

## Provider

Inicializa dependencias globales.

---

## Dependency Injection

Patrón mediante el cual las dependencias son proporcionadas desde el exterior.

---

## MVVM

Modelo utilizado por el proyecto.

Component

↓

Hook

↓

UseCase

↓

Repository

---

## SDK

Biblioteca proporcionada por un tercero.

Ejemplos

Google Identity Services

Stripe

Spiga

Mercedes APIs