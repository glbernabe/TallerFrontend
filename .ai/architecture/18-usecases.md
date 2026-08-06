# 18. UseCases

## Objetivo

Un UseCase representa un único caso de uso del dominio.

Es el encargado de coordinar la lógica de aplicación.

---

# Filosofía

Cada UseCase responde a una única pregunta.

Ejemplos

LoginWithGoogleUseCase

↓

Iniciar sesión.

GetCartSummaryUseCase

↓

Obtener resumen del carrito.

LogoutUseCase

↓

Cerrar sesión.

---

# Responsabilidades

Puede:

- Coordinar Repository.
- Coordinar Services.
- Validar reglas.
- Orquestar procesos.

Nunca:

- Renderizar.
- Utilizar React.
- Utilizar DTO.
- Conocer Hooks.

---

# Constructor

Siempre utilizar Dependency Injection.

Nunca crear Repository manualmente.

---

# Métodos

Siempre priorizar:

execute()

Si existen varios métodos públicos, probablemente el UseCase tiene demasiadas responsabilidades.

---

# Helpers

Los métodos auxiliares siempre deben ser privados.

---

# Objetivo

Toda lógica de aplicación debe encontrarse aquí.

Nunca en Components.