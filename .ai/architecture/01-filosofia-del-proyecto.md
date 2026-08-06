# 1. Filosofía del proyecto

## Objetivo

Mercedes Frontend no es únicamente una aplicación web.

Es una plataforma escalable cuyo objetivo es centralizar todos los servicios digitales de Autotalleres Orihuela mediante una arquitectura mantenible, desacoplada y preparada para crecer durante muchos años.

La prioridad absoluta del proyecto es la mantenibilidad.

La velocidad de desarrollo nunca debe comprometer la arquitectura.

---

## Principios

Todo cambio realizado en el proyecto debe cumplir los siguientes principios:

- Código legible antes que código corto.
- Arquitectura antes que rapidez.
- Desacoplamiento antes que comodidad.
- Componentes pequeños y reutilizables.
- Una única responsabilidad por archivo.
- Evitar duplicación.
- Pensar siempre en el futuro.

---

## Objetivo de la arquitectura

La arquitectura debe permitir añadir nuevas funcionalidades sin modificar las existentes.

Ejemplo:

Hoy:

Google Login

Mañana:

Apple Login

Microsoft Login

No debería requerir modificar Componentes, Hooks o UseCases.

Únicamente debería añadirse un nuevo Provider y una nueva implementación del Repository correspondiente.

---

## Filosofía de desarrollo

Antes de escribir código siempre debe responderse:

- ¿Qué responsabilidad tiene este archivo?
- ¿En qué capa pertenece?
- ¿Puede reutilizarse?
- ¿Estoy rompiendo alguna regla de la arquitectura?
- ¿Existe ya una solución similar?

Si alguna respuesta genera dudas, debe revisarse el diseño antes de escribir código.

---

## Objetivo final

El proyecto debe poder mantenerse durante años por distintos desarrolladores sin perder coherencia.
