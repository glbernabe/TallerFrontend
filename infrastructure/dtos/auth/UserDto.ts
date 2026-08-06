/**
 * Representa el usuario exactamente
 * como lo devuelve la API.
 *
 * IMPORTANTE:
 * Este DTO nunca debe utilizarse
 * directamente en la interfaz.
 *
 * Siempre debe convertirse mediante
 * UserMapper.
 */
export interface UserDto {

    /**
     * Identificador del usuario.
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
     * Proveedor de autenticación.
     *
     * "google"
     * "email"
     */
    provider: string;

}