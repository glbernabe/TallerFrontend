# Autotalleres Orihuela — instrucciones del proyecto

## Proyecto

Web corporativa de Autotalleres Orihuela S.L.

## Objetivo

Crear una web moderna y profesional para presentar el taller,
especializado en vehículos industriales, camiones, furgonetas
y vehículos comerciales.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Next/Image

## Arquitectura

components/layout:
Componentes estructurales globales.

components/sections:
Secciones grandes de las páginas.

components/ui:
Componentes reutilizables pequeños.

## Páginas actuales

- /
- /about-us
- /contacto

No crear ni mantener rutas eliminadas.

## Importante

La web NO tendrá:

- ecommerce
- carrito
- login
- registro
- reservas online

Las citas y consultas se realizan principalmente por teléfono.

## SEO

El objetivo principal es SEO local.

Priorizar términos relacionados con:

- vehículos industriales
- camiones
- furgonetas
- vehículos comerciales
- mantenimiento
- diagnosis
- reparación
- Orihuela
- Alicante

No introducir keywords artificialmente.

## Diseño

Mantener la estética premium, minimalista e industrial
del proyecto.

No modificar el diseño existente sin necesidad.

## Imágenes

Utilizar siempre next/image para imágenes.

No introducir TIFF de gran tamaño en public/.

Las imágenes destinadas a producción deben estar optimizadas.

## Reglas

Antes de realizar cambios importantes:

1. Revisar la arquitectura existente.
2. No crear archivos innecesarios.
3. No mantener código de funcionalidades eliminadas.
4. No modificar componentes no relacionados con la tarea.
5. Ejecutar las comprobaciones disponibles después de modificar código.