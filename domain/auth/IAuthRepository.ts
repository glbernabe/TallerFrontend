import type { AuthSession } from "./AuthSession";

import type { GoogleCredential } from "./GoogleCredential";

/**
 * Contrato que deben implementar
 * todos los repositorios
 * de autenticación.
 */
export interface IAuthRepository {

    /**
     * Inicia sesión utilizando
     * una credencial de Google.
     */
    loginWithGoogle(

        credential: GoogleCredential,

    ): Promise<AuthSession>;

    /**
     * Obtiene la sesión actual.
     *
     * Devuelve null cuando
     * el usuario no está
     * autenticado.
     */
    getCurrentSession():

        Promise<AuthSession | null>;

    /**
     * Renueva la sesión actual.
     */
    refreshSession():

        Promise<AuthSession>;

    /**
     * Finaliza la sesión.
     */
    logout():

        Promise<void>;

}