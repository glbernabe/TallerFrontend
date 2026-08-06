import type { User } from "./User";

/**
 * Representa una sesión
 * autenticada dentro
 * de la aplicación.
 */
export interface AuthSession {

    /**
     * JWT de acceso.
     */
    accessToken: string;

    /**
     * JWT para renovar
     * la sesión.
     */
    refreshToken: string;

    /**
     * Usuario autenticado.
     */
    user: User;

}