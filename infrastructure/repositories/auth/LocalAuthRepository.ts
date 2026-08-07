import type { AuthSession } from "@/domain/auth/AuthSession";
import type { GoogleCredential } from "@/domain/auth/GoogleCredential";
import type { IAuthRepository } from "@/domain/auth/IAuthRepository";

import { AuthStorage } from "@/infrastructure/storage/AuthStorage";
import { GoogleJwtDecoder } from "@/infrastructure/services/auth/GoogleJwtDecoder";
import { GoogleCredentialMapper } from "@/infrastructure/mappers/auth/GoogleCredentialMapper";

/**
 * Implementación local
 * del repositorio de autenticación.
 *
 * IMPORTANTE
 *
 * Solo debe utilizarse durante
 * el desarrollo mientras
 * no exista backend.
 */
export class LocalAuthRepository
    implements IAuthRepository {

    async loginWithGoogle(

        credential: GoogleCredential,

    ): Promise<AuthSession> {

        console.log("GoogleCredential:");
        console.log(credential);

        const payload =
            GoogleJwtDecoder.decodeCredential(
                credential,
            );

        const user =
            GoogleCredentialMapper.toDomain(
                payload,
            );

        console.log("Usuario:");
        console.log(user);

        const session: AuthSession = {

            accessToken:
                credential.credential,

            refreshToken:
                "__LOCAL_DEVELOPMENT__",

            user,

        };

        console.log("Sesión:");
        console.log(session);

        AuthStorage.save(session);

        console.log("Sesión guardada.");

        return session;

    }

    async getCurrentSession():
        Promise<AuthSession | null> {

        return AuthStorage.load();

    }

    async refreshSession():
        Promise<AuthSession> {

        const session =
            AuthStorage.load();

        if (!session) {

            throw new Error(
                "No existe una sesión activa.",
            );

        }

        /**
         * TODO (Backend)
         *
         * Renovar utilizando
         * el Refresh Token.
         */
        return session;

    }

    async logout():
        Promise<void> {

        /**
        * TODO (Backend)
        *
        * Invalidar el Refresh Token
        * en el servidor.
        */

        AuthStorage.clear();

    }

}