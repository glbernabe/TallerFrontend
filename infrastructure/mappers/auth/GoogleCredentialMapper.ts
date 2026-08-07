import { AuthProvider } from "@/domain/auth/AuthProvider";

import type { User }
from "@/domain/auth/User";

import type { GoogleCredentialPayload }
from "@/infrastructure/models/google/GoogleCredentialPayload";

/**
 * Convierte el payload
 * devuelto por Google
 * en el modelo User.
 */
export class GoogleCredentialMapper {

    static toDomain(

        payload: GoogleCredentialPayload,

    ): User {

        return {

            id: payload.sub,

            name: payload.name,

            email: payload.email,

            image: payload.picture,

            provider: AuthProvider.GOOGLE,

        };

    }

}