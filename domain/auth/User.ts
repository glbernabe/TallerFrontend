import { AuthProvider } from "./AuthProvider";

/**
 * Usuario autenticado
 * dentro de la aplicación.
 */
export interface User {

    /**
     * Identificador único.
     */
    id: string;

    /**
     * Nombre completo.
     */
    name: string;

    /**
     * Correo electrónico.
     */
    email: string;

    /**
     * Imagen de perfil.
     */
    image?: string;

    /**
     * Método de autenticación.
     */
    provider: AuthProvider;

}