# 13. Gestión de errores

## Objetivo

Todos los errores deben gestionarse de forma uniforme.

Nunca mostrar errores técnicos al usuario.

---

# Tipos

## Errores de dominio

Representan reglas de negocio.

Ejemplos

Contraseña incorrecta.

Reserva ya existente.

Vehículo inexistente.

---

## Errores de infraestructura

Representan problemas técnicos.

Ejemplos

500

Timeout

Sin conexión.

---

## Errores de presentación

Representan problemas visuales.

Ejemplos

Formulario inválido.

Campo obligatorio.

---

# Flujo

Infrastructure

↓

Repository

↓

UseCase

↓

Hook

↓

Component

---

# Hooks

Los Hooks transforman errores técnicos en mensajes entendibles.

Nunca el componente.

---

# Logging

Registrar errores técnicos.

Nunca mostrar StackTrace al usuario.

---

# Componentes

Los Components únicamente muestran:

error.message

Nunca conocen el origen del error.

---

# Regla

Toda excepción debe tener una responsabilidad clara.

No lanzar Error() genérico.