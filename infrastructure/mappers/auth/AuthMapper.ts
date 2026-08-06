import type { AuthSession } from "@/domain/auth/AuthSession";

import type { LoginResponseDto }
from "@/infrastructure/dtos/auth/LoginResponseDto";

import { UserMapper } from "./UserMapper";

/**
 * Convierte la respuesta
 * del backend
 * en una sesión del dominio.
 */
export class AuthMapper {

    /**
     * Convierte el DTO
     * recibido desde FastAPI
     * en un modelo de dominio.
     */
    static toDomain(
        dto: LoginResponseDto,
    ): AuthSession {

        return {

            accessToken:
                dto.accessToken,

            refreshToken:
                dto.refreshToken,

            user:
                UserMapper.toDomain(dto.user),

        };

    }

}