# 21. DTO (Data Transfer Objects)

## Objetivo

Los DTO representan exactamente la información intercambiada con un sistema externo.

No representan el dominio.

No representan la interfaz.

Representan únicamente el contrato de comunicación.

---

# Responsabilidades

Puede:

- Representar Request.
- Representar Response.
- Representar JSON.
- Representar APIs externas.

Nunca:

- Contener lógica.
- Validar reglas de negocio.
- Importar React.
- Importar Domain.

---

# Flujo

Backend

↓

DTO

↓

Mapper

↓

Domain

Nunca:

Backend

↓

Domain

---

# Convenciones

Mantener exactamente el formato recibido.

Ejemplo

Backend

access_token

↓

DTO

access_token

↓

Mapper

↓

Domain

accessToken

---

# Organización

Infrastructure

↓

dto

↓

auth

↓

GoogleLoginResponseDto.ts

---

# Reglas

Un DTO nunca debe utilizarse fuera de Infrastructure.

Nunca importar DTO dentro de Components.

Nunca importar DTO dentro del Domain.

---

# Evolución

Si FastAPI cambia el JSON únicamente deberá modificarse:

- DTO
- Mapper

Nunca el resto del proyecto.