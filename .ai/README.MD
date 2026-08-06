# Mercedes Frontend - AI Documentation

## Bienvenido

La carpeta `.ai` constituye la documentación técnica oficial del proyecto.

Su objetivo es proporcionar toda la información necesaria para que cualquier desarrollador o Inteligencia Artificial pueda comprender la arquitectura, las convenciones y los estándares utilizados durante el desarrollo.

Todo el contenido de esta carpeta debe considerarse la **fuente de verdad** del proyecto.

---

# Objetivos

Esta documentación persigue los siguientes objetivos:

- Mantener una arquitectura consistente.
- Evitar duplicación de decisiones.
- Reducir errores de diseño.
- Facilitar el mantenimiento.
- Mejorar la calidad del código generado por IA.
- Permitir la incorporación de nuevos desarrolladores con una curva de aprendizaje mínima.

---

# Antes de generar código

Antes de escribir cualquier línea de código debes responder las siguientes preguntas:

- ¿Qué responsabilidad tiene esta funcionalidad?
- ¿En qué capa pertenece?
- ¿Existe ya una implementación similar?
- ¿Existe un componente reutilizable?
- ¿Existe un template específico?
- ¿Estoy respetando Clean Architecture?
- ¿Estoy respetando MVVM?
- ¿Estoy respetando SOLID?

Si alguna respuesta genera dudas, consulta primero la documentación correspondiente.

Nunca improvises una arquitectura.

---

# Jerarquía de documentación

Cuando existan dudas o conflictos entre documentos, debe seguirse siempre el siguiente orden de prioridad.

## 1. architecture/

Define la arquitectura oficial del proyecto.

Describe:

- Responsabilidades
- Dependencias
- Capas
- Flujo de datos
- Patrones
- Buenas prácticas

Siempre prevalece sobre cualquier otro documento.

---

## 2. coding-rules.md

Contiene todas las normas obligatorias de implementación.

Debe respetarse en todo momento.

---

## 3. templates/

Describe la estructura exacta que debe seguir cada tipo de archivo.

Ejemplos:

- Component
- Hook
- Repository
- UseCase
- Mapper
- DTO
- Service

Siempre que se cree un archivo nuevo debe consultarse primero su Template correspondiente.

---

## 4. filesystem.md

Describe la organización completa del proyecto.

Nunca crear carpetas nuevas sin revisar previamente este documento.

---

## 5. design-system.md

Define toda la identidad visual del proyecto.

Componentes.

Espaciados.

Colores.

Tipografía.

Botones.

Overlay.

Cards.

Nunca romper el Design System.

---

## 6. api.md

Documenta toda la comunicación con FastAPI y servicios externos.

Debe consultarse antes de crear nuevos Repository, DTO o Mapper.

---

## 7. project.md

Describe el objetivo general del proyecto.

Debe utilizarse para comprender el contexto funcional.

---

## 8. roadmap.md

Describe las funcionalidades implementadas y las futuras.

Nunca utilizar Roadmap para definir arquitectura.

---

## 9. decisions.md

Contiene el histórico de decisiones importantes.

Siempre consultar este documento antes de modificar una decisión arquitectónica existente.

---

## 10. spiga.md

Documentación específica sobre la integración con Spiga+.

Debe utilizarse únicamente cuando la funcionalidad esté relacionada con dicho ERP.

---

# Índice de Architecture

Cuando necesites implementar una funcionalidad consulta primero el capítulo correspondiente.

| Tema | Documento |
|------|-----------|
| Filosofía | architecture/01-filosofia-del-proyecto.md |
| Principios | architecture/02-principios-de-diseno.md |
| Arquitectura | architecture/03-arquitectura-general.md |
| Flujo de datos | architecture/04-flujo-completo-de-datos.md |
| Responsabilidades | architecture/05-responsabilidad-de-cada-capa.md |
| Dependencias | architecture/06-dependencias-entre-capas.md |
| Organización | architecture/07-organizacion-del-proyecto.md |
| Nueva funcionalidad | architecture/08-flujo-de-una-nueva-funcionalidad.md |
| Nombres | architecture/09-convenciones-de-nombres.md |
| Imports | architecture/10-convenciones-de-imports.md |
| Estado | architecture/11-gestion-del-estado.md |
| Autenticación | architecture/12-gestion-de-autenticacion.md |
| Errores | architecture/13-gestion-de-errores.md |
| Configuración | architecture/14-gestion-de-configuracion.md |
| Constantes | architecture/15-gestion-de-constantes.md |
| Componentes | architecture/16-componentes.md |
| Hooks | architecture/17-hooks.md |
| UseCases | architecture/18-usecases.md |
| Repository | architecture/19-repository.md |
| Services | architecture/20-services.md |
| DTO | architecture/21-dto.md |
| Mapper | architecture/22-mapper.md |
| Domain | architecture/23-domain.md |
| API Client | architecture/24-api-client.md |
| Performance | architecture/25-performance.md |
| Testing | architecture/26-testing.md |
| Seguridad | architecture/27-seguridad.md |
| Accesibilidad | architecture/28-accesibilidad.md |
| SEO | architecture/29-seo.md |
| Escalabilidad | architecture/30-escalabilidad-futura.md |
| Pull Request | architecture/31-checklist-antes-de-un-pull-request.md |
| Anti-patrones | architecture/32-anti-patrones.md |
| Ejemplos | architecture/33-ejemplos-completos-del-proyecto.md |
| Glosario | architecture/34-glosario.md |
| Referencias | architecture/35-referencias.md |

---

# Flujo recomendado para implementar una nueva funcionalidad

Siempre seguir el siguiente orden.

1. Analizar el dominio.
2. Consultar Architecture.
3. Consultar Coding Rules.
4. Consultar el Template correspondiente.
5. Revisar ejemplos similares.
6. Implementar el Domain.
7. Implementar DTO.
8. Implementar Mapper.
9. Implementar Repository.
10. Implementar Service (si es necesario).
11. Implementar UseCase.
12. Implementar Hook (ViewModel).
13. Implementar Component.
14. Crear Tests.
15. Actualizar documentación.

Nunca alterar este flujo salvo causa justificada.

---

# Filosofía del proyecto

El proyecto sigue los siguientes principios.

- Clean Architecture.
- SOLID.
- MVVM mediante Hooks.
- Repository Pattern.
- Dependency Injection.
- Composition over Inheritance.
- Código desacoplado.
- Componentes reutilizables.
- Una única responsabilidad por archivo.

Toda nueva implementación debe respetar estos principios.

---

# Inteligencia Artificial

Si eres una Inteligencia Artificial trabajando sobre este proyecto debes seguir obligatoriamente las siguientes reglas.

- Consulta siempre la documentación antes de generar código.
- Nunca inventes arquitectura.
- Nunca rompas Clean Architecture.
- Nunca mezcles responsabilidades.
- Nunca escribas lógica de negocio en Components.
- Nunca realices peticiones HTTP fuera de Repository o ApiClient.
- Nunca utilices DTO fuera de Infrastructure.
- Nunca modifiques la estructura del proyecto sin una justificación clara.
- Prioriza siempre la reutilización del código existente.
- Si detectas varias soluciones posibles, explica las ventajas e inconvenientes antes de implementar una de ellas.
- Si una decisión puede afectar al resto del proyecto, propón la solución y espera confirmación antes de realizar cambios estructurales.

---

# Misión

El objetivo de esta documentación no es únicamente generar código.

Su misión es garantizar que el proyecto pueda evolucionar durante años manteniendo una arquitectura consistente, escalable y fácil de mantener tanto para desarrolladores como para Inteligencias Artificiales.