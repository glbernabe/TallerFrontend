# Mercedes Frontend - AI Checklist

Antes de finalizar cualquier tarea verifica todos los siguientes puntos.

---

# Arquitectura

☐ Se respeta Clean Architecture.

☐ No existen dependencias prohibidas.

☐ No se ha roto la estructura del proyecto.

☐ Las responsabilidades permanecen separadas.

---

# Componentes

☐ El componente tiene una única responsabilidad.

☐ No contiene lógica de negocio.

☐ Reutiliza componentes existentes cuando es posible.

---

# Hooks

☐ Toda la lógica de presentación vive en el Hook.

☐ No existen llamadas HTTP.

☐ El Hook devuelve un objeto.

---

# UseCases

☐ Representan un único caso de uso.

☐ No conocen React.

☐ No conocen DTO.

---

# Repository

☐ Devuelve modelos del dominio.

☐ Nunca devuelve DTO.

☐ Utiliza Mapper.

---

# Services

☐ Encapsulan completamente el SDK externo.

☐ No contienen reglas de negocio.

---

# Mapper

☐ Únicamente transforma información.

☐ No valida reglas.

---

# DTO

☐ Representa exactamente el contrato externo.

☐ Permanece dentro de Infrastructure.

---

# Domain

☐ No depende de ninguna tecnología.

☐ No conoce React.

---

# Tipado

☐ No existen tipos implícitos innecesarios.

☐ Se utiliza TypeScript correctamente.

---

# Rendimiento

☐ No existen renders innecesarios.

☐ No existen cálculos repetidos.

☐ Las imágenes utilizan next/image cuando corresponde.

---

# Seguridad

☐ No existen secretos en el código.

☐ No se exponen Tokens.

☐ No existen credenciales hardcodeadas.

---

# Código

☐ No existe duplicación.

☐ Los nombres son descriptivos.

☐ El código es legible.

☐ Los comentarios aportan valor.

---

# Documentación

☐ La documentación continúa siendo válida.

☐ Si la arquitectura ha cambiado, se ha actualizado la documentación correspondiente.

---

# Resultado final

Antes de entregar la solución responde internamente a la siguiente pregunta.

¿Otro desarrollador podría comprender y mantener esta implementación dentro de seis meses sin necesidad de preguntarme nada?

Si la respuesta es no, la implementación aún no está terminada.