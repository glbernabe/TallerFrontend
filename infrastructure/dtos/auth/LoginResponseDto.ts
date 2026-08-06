import type { UserDto } from "./UserDto";

/**
 * Respuesta devuelta
 * por FastAPI tras
 * autenticarse.
 *
 * IMPORTANTE:
 * Este modelo únicamente
 * representa el JSON
 * recibido desde la API.
 *
 * Nunca debe utilizarse
 * directamente en React.
 */
export interface LoginResponseDto {

    /**
     * JWT utilizado para
     * autenticar peticiones.
     */
    accessToken: string;

    /**
     * JWT utilizado para
     * renovar la sesión.
     */
    refreshToken: string;

    /**
     * Usuario autenticado.
     */
    user: UserDto;

}