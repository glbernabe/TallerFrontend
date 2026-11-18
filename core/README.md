# Core – Auto-Talleres Orihuela

La capa Core no importa Next.js, React, fetch ni FastAPI. Contiene modelos de dominio, puertos de repositorio y casos de uso.

## Revisión y mejoras

- Contactos públicos: `ContactPerson` incorpora `jobTitle`, opcional por compatibilidad con respuestas de backend que aún no exponen `cargo`.
- Directorio privado: se añade `AdminContact`, los ocho departamentos definidos por la migración SQL, el puerto `AdminContactRepository` y casos de uso para listar, consultar, crear, actualizar y archivar trabajadores.
- Validación del directorio: se validan campos frente a longitudes de `web_contactos` y `cargo VARCHAR(120)`, formato de email, ID multimedia y orden.
- El borrado de trabajadores se modela como archivo lógico (`activo = 0`), coherente con el endpoint DELETE facilitado.
- Se mantienen los casos de uso existentes de noticias, horarios, configuración, autenticación y currículums; no se han inventado operaciones CRUD para dominios cuyos endpoints FastAPI no existen.

## Departamentos del esquema de migración

`Posventa`, `Recambios`, `Taller`, `Administración`, `Recepción`, `Atención al cliente`, `Gerencia`, `Ayuda y asistencia`.
