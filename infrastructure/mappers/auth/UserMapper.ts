import { AuthProvider } from "@/domain/auth/AuthProvider";
import type { User } from "@/domain/auth/User";

import type { UserDto } from "@/infrastructure/dtos/auth/UserDto";

/**
 * Convierte UserDto
 * en el modelo de dominio User.
 *
 * IMPORTANTE
 *
 * Toda conversión entre la API
 * y el dominio debe pasar
 * por este mapper.
 */
export class UserMapper {

    /**
     * Convierte un DTO
     * en un modelo de dominio.
     */
    static toDomain(
        dto: UserDto,
    ): User {

        return {

            id: dto.id,

            name: dto.name,

            email: dto.email,

            image: dto.image,

            provider:
                dto.provider === "google"
                    ? AuthProvider.GOOGLE
                    : AuthProvider.EMAIL,

        };

    }

}