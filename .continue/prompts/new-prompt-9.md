---
name: Project Onboarding
description: Comprende completamente el proyecto antes de realizar cualquier tarea de desarrollo.
invokable: true
---

# Objetivo

Tu única misión es convertirte en un desarrollador capaz de trabajar en este proyecto como si formaras parte del equipo desde hace meses.

No escribas código.

No modifiques archivos.

No propongas implementaciones.

No resuelvas tareas.

Tu único objetivo es comprender profundamente el proyecto.

Nunca asumas información que no hayas leído.

Si algún documento no existe, indícalo y continúa con el resto.

---

# Filosofía

Este proyecto sigue una filosofía de desarrollo basada en:

- Comprender antes de modificar.
- Reutilizar antes de crear.
- Pensar antes de programar.
- Mantener la arquitectura antes que la velocidad.
- Priorizar la mantenibilidad frente a la implementación rápida.

Toda la documentación ubicada dentro de `.ai/` constituye la fuente oficial de verdad del proyecto.

Siempre debe prevalecer sobre conocimientos previos.

Nunca contradigas la documentación.

---

# FASE 1 — Comprensión del proyecto

Primero identifica el proyecto.

Lee, en este orden:

1. README.md del proyecto.
2. `.ai/README.md`
3. `.ai/AGENT.md`
4. `.ai/CONTEXT.md`
5. `.ai/CHECKLIST.md`

Durante esta fase responde internamente:

- ¿Qué problema intenta resolver este proyecto?
- ¿Cuál es su objetivo?
- ¿Qué tecnologías utiliza?
- ¿Qué arquitectura sigue?
- ¿Qué restricciones existen?
- ¿Qué filosofía de desarrollo utiliza?

No respondas todavía.

Simplemente construye el contexto.

---

# FASE 2 — Comprensión de la arquitectura

Accede al directorio:

`.ai/architecture/`

Lee TODOS los capítulos.

Respeta el orden numérico.

No omitas ninguno.

Mientras lees cada capítulo responde internamente:

- ¿Qué responsabilidad tiene?
- ¿Con qué otras capas interactúa?
- ¿Qué dependencias están permitidas?
- ¿Qué dependencias están prohibidas?
- ¿Qué errores intenta evitar?
- ¿Qué decisiones arquitectónicas justifican este capítulo?

Construye un mapa mental completo.

No escribas código.

---

# FASE 3 — Comprensión de Templates

Accede a:

`.ai/templates/`

Lee absolutamente todos los Templates disponibles.

Para cada Template comprende:

- Cuándo debe utilizarse.
- Qué responsabilidad tiene.
- Qué estructura sigue.
- Qué patrones reutiliza.
- Qué dependencias puede utilizar.
- Qué dependencias nunca debe utilizar.
- Qué errores intenta evitar.

Relaciona cada Template con su correspondiente capítulo de arquitectura.

---

# FASE 4 — Comprensión del proyecto real

Ahora deja la documentación.

Analiza el código existente.

Busca:

- Componentes.
- Hooks.
- UseCases.
- Repository.
- Services.
- DTO.
- Mapper.
- Domain.
- Providers.
- API Clients.

Para cada uno intenta identificar:

- Patrones repetidos.
- Convenciones.
- Organización.
- Estilo.
- Reutilización.
- Posibles desviaciones respecto a la documentación.

No critiques todavía.

Simplemente comprende.

---

# FASE 5 — Comparación

Ahora compara:

Documentación

↓

Código existente

Detecta:

- Código que cumple la documentación.
- Código que no la cumple.
- Documentación que parece desactualizada.
- Patrones repetidos.
- Inconsistencias.
- Posibles mejoras.

No propongas cambios.

Simplemente registra observaciones.

---

# FASE 6 — Construcción del modelo mental

Antes de responder debes ser capaz de explicar, sin volver a consultar documentación:

- La arquitectura completa.
- El flujo de una petición.
- La responsabilidad de cada carpeta.
- La responsabilidad de cada capa.
- Cómo se desarrolla una nueva funcionalidad.
- Cómo se implementa un Repository.
- Cómo se implementa un Hook.
- Cómo se implementa un UseCase.
- Cómo se implementa un Service.
- Cómo se implementa un Component.
- Qué dependencias están permitidas.
- Qué dependencias están prohibidas.

Si todavía no eres capaz, continúa leyendo hasta conseguirlo.

---

# FASE 7 — Evaluación del conocimiento

Evalúa objetivamente cuánto comprendes el proyecto.

No sobreestimes tu conocimiento.

Clasifica:

- Arquitectura.
- Organización.
- Flujo de datos.
- Convenciones.
- Templates.
- Reutilización.
- Autenticación.
- Estado.
- Componentes.
- Backend.
- Infraestructura.

Asigna un porcentaje de confianza a cada apartado.

---

# FASE 8 — Informe

Cuando hayas terminado genera un informe estructurado.

## 1. Resumen del proyecto

Explica con tus propias palabras cuál es el propósito del proyecto.

---

## 2. Arquitectura

Resume la arquitectura completa.

Explica cómo fluye una petición desde la interfaz hasta el backend.

---

## 3. Organización

Explica cómo está organizado el proyecto.

Justifica por qué.

---

## 4. Filosofía

Explica qué principios siguen los desarrolladores.

---

## 5. Convenciones

Resume todas las convenciones importantes.

---

## 6. Fortalezas

Enumera las fortalezas del proyecto.

---

## 7. Riesgos

Enumera posibles riesgos detectados.

No propongas soluciones.

---

## 8. Inconsistencias

Enumera cualquier diferencia encontrada entre documentación y código.

---

## 9. Dudas

Indica cualquier aspecto que no hayas podido comprender completamente.

---

## 10. Nivel de comprensión

Asigna un porcentaje de comprensión a:

- Arquitectura
- Organización
- Documentación
- Código
- Convenciones
- Templates
- Flujo de datos
- Autenticación
- Escalabilidad

Finalmente indica un porcentaje global.

Justifica ese porcentaje.

---

# Restricciones

Durante todo el proceso debes cumplir las siguientes reglas:

- Nunca escribas código.
- Nunca modifiques archivos.
- Nunca propongas implementaciones.
- Nunca ignores documentación.
- Nunca inventes información.
- Nunca contradigas la documentación.
- Nunca simplifiques la arquitectura.
- Nunca des por supuesto que conoces el proyecto sin haberlo leído.
- Si encuentras contradicciones, señálalas explícitamente.

Tu única misión es comprender profundamente el proyecto antes de convertirte en un desarrollador activo del mismo.