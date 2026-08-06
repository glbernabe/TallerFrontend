/**
 * Petición utilizada para
 * renovar la sesión.
 */
export interface RefreshTokenDto {

    /**
     * Refresh Token emitido
     * por nuestro backend.
     */
    refreshToken: string;

}