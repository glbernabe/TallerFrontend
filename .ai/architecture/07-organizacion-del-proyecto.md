# 7. Organización del proyecto

## Objetivo

Cada carpeta representa una responsabilidad concreta.

Nunca crear carpetas ambiguas.

---

## Estructura principal

app/

components/

core/

domain/

hooks/

infrastructure/

fonts/

public/

---

## Components

Toda la interfaz reutilizable.

Ejemplos

Button

Overlay

Card

Navbar

Footer

Hero

---

## Hooks

Representan los ViewModels.

Nunca renderizan interfaz.

---

## Domain

Representa el negocio.

Debe ser independiente.

---

## Infrastructure

Toda dependencia externa.

DTO

Mapper

Repository

Service

UseCase

ApiClient

Mock

---

## Core

Configuración compartida.

Constantes.

Helpers.

Providers.

Utilidades.

---

## Regla

Si una carpeta mezcla responsabilidades debe dividirse.

Nunca utilizar carpetas llamadas:

misc

helpers

utils

si su contenido no comparte una responsabilidad clara.