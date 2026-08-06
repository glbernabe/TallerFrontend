/**
 * Petición enviada a FastAPI
 * después de autenticarse
 * correctamente con Google.
 *
 * Contiene únicamente el
 * ID Token firmado por Google.
 */
export interface GoogleLoginRequestDto {

    /**
     * ID Token devuelto
     * por Google Identity Services.
     */
    credential: string;

}