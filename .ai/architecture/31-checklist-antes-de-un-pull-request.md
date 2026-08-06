# 31. Checklist antes de un Pull Request

## Objetivo

Todo cambio realizado en el proyecto debe superar una revisión técnica antes de integrarse en la rama principal.

Este checklist garantiza que la arquitectura permanezca consistente a medida que el proyecto evoluciona.

---

# Arquitectura

☐ La nueva funcionalidad respeta Clean Architecture.

☐ No se han creado dependencias entre capas prohibidas.

☐ No existen componentes con lógica de negocio.

☐ No existen Hooks realizando llamadas HTTP directamente.

☐ Los UseCases no conocen React.

☐ Los Repository únicamente conocen Infrastructure.

☐ Los DTO no salen de Infrastructure.

☐ Los Services encapsulan completamente cualquier SDK externo.

---

# Componentes

☐ El componente tiene una única responsabilidad.

☐ El JSX es legible.

☐ Se han reutilizado componentes existentes cuando ha sido posible.

☐ No existen clases Tailwind duplicadas innecesariamente.

☐ Todas las imágenes utilizan next/image cuando corresponde.

☐ Todos los botones reutilizan MainButton, SecondaryButton o ActionButton cuando sea posible.

---

# Hooks

☐ Toda la lógica visual vive en el Hook.

☐ El Hook devuelve un objeto.

☐ No existen useEffect innecesarios.

☐ No se realizan cálculos costosos durante el render.

☐ Todos los callbacks tienen nombres descriptivos.

---

# UseCases

☐ Representan un único caso de uso.

☐ No contienen detalles de infraestructura.

☐ No crean Repository manualmente.

☐ Utilizan Dependency Injection.

---

# Repository

☐ Devuelven únicamente modelos del dominio.

☐ Nunca devuelven DTO.

☐ Toda conversión pasa por un Mapper.

☐ Todos los errores están correctamente gestionados.

---

# Performance

☐ No existen renders innecesarios.

☐ Los componentes pesados utilizan Dynamic Import cuando aporta beneficios.

☐ Las imágenes están optimizadas.

☐ No existen valores mágicos repetidos.

---

# Seguridad

☐ No se han añadido secretos al repositorio.

☐ No existen credenciales hardcodeadas.

☐ Los Tokens nunca llegan a Components.

---

# Documentación

☐ Se ha actualizado architecture.md si la arquitectura ha cambiado.

☐ Se ha actualizado decisions.md cuando corresponde.

☐ Se ha actualizado roadmap.md si se completa una funcionalidad.

---

# Regla final

Si cualquier apartado genera dudas, el Pull Request no debería aprobarse hasta resolverlas.