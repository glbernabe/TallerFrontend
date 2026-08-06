# 3. Arquitectura general

## Capas

El proyecto se divide en cinco grandes capas.

Domain

↓

Infrastructure

↓

UseCases

↓

Hooks

↓

Components

---

## Domain

Representa el negocio.

No conoce ninguna tecnología.

No conoce React.

No conoce FastAPI.

No conoce Google.

Debe poder reutilizarse incluso fuera de este proyecto.

---

## Infrastructure

Contiene todas las dependencias externas.

Ejemplos:

Repositories

Services

DTO

Mapper

ApiClient

Google SDK

FastAPI

Spiga

---

## UseCases

Coordinan la lógica de aplicación.

No conocen React.

No conocen DTO.

No conocen Fetch.

Únicamente conocen Interfaces del dominio.

---

## Hooks

Representan el ViewModel.

Toda la lógica visual vive aquí.

Gestionan:

loading

error

callbacks

estado

---

## Components

Renderizan únicamente interfaz.

No contienen lógica de negocio.

No conocen Repositories.

No conocen DTO.

No conocen Google.

---

## Flujo

Component

↓

Hook

↓

UseCase

↓

Repository

↓

Service

↓

ApiClient

↓

Backend

Nunca romper este flujo.
