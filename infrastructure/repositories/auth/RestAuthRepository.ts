import type { AuthSession } from "@/domain/auth/AuthSession";
import type { GoogleCredential } from "@/domain/auth/GoogleCredential";
import type { IAuthRepository } from "@/domain/auth/IAuthRepository";

/**
 * Implementación del repositorio
 * que utiliza el backend.
 *
 * Actualmente es un placeholder.
 */
export class RestAuthRepository
    implements IAuthRepository {

    async loginWithGoogle(
        credential: GoogleCredential,
    ): Promise<AuthSession> {

        /**
         * TODO (Backend)
         *
         * POST /auth/google
         */

        throw new Error(
            "RestAuthRepository no implementado.",
        );

    }

    async getCurrentSession():
        Promise<AuthSession | null> {

        /**
         * TODO (Backend)
         */

        throw new Error(
            "RestAuthRepository no implementado.",
        );

    }

    async refreshSession():
        Promise<AuthSession> {

        /**
         * TODO (Backend)
         */

        throw new Error(
            "RestAuthRepository no implementado.",
        );

    }

    async logout():
        Promise<void> {

        /**
         * TODO (Backend)
         */

        throw new Error(
            "RestAuthRepository no implementado.",
        );

    }

}