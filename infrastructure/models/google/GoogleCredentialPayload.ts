/**
 * Información contenida
 * dentro del JWT emitido
 * por Google.
 *
 * IMPORTANTE
 *
 * No pertenece al dominio.
 * Representa únicamente
 * el formato utilizado
 * por Google.
 */
export interface GoogleCredentialPayload {

    /**
     * Identificador único
     * del usuario.
     */
    sub: string;

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
    picture?: string;

}