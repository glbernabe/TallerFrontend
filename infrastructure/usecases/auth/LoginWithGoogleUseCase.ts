import type {

    AuthSession,

} from "@/domain/auth/AuthSession";

import type {

    IAuthRepository,

} from "@/domain/auth/IAuthRepository";

import {

    GoogleIdentityService,

} from "@/infrastructure/services/auth/GoogleIdentityService";

/**
 * Caso de uso encargado
 * del inicio de sesión
 * mediante Google.
 */
export class LoginWithGoogleUseCase {

    constructor(

        private readonly repository:

            IAuthRepository,

        private readonly googleService:

            GoogleIdentityService,

    ) {}

    /**
     * Flujo:
     *
     * 1. Google autentica.
     *
     * 2. Google devuelve
     *    una credencial.
     *
     * 3. El backend verifica
     *    esa credencial.
     *
     * 4. El backend devuelve
     *    nuestra sesión.
     */
    async execute():

        Promise<AuthSession> {

        const credential =

            await this.googleService.signIn();

        return await this.repository.loginWithGoogle(

            credential,

        );

    }

}