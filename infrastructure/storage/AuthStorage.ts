import type { AuthSession } from "@/domain/auth/AuthSession";

const STORAGE_KEY = "auth.session";

/**
 * Gestiona el almacenamiento
 * local de la sesión.
 *
 * IMPORTANTE
 *
 * Esta implementación es
 * únicamente temporal.
 *
 * TODO (Backend):
 * Sustituir por cookies HttpOnly.
 */
export class AuthStorage {

    /**
     * Guarda la sesión actual.
     */
    static save(
        session: AuthSession,
    ): void {

        console.log("Guardando en localStorage...");
        console.log(session);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(session),
        );

        console.log("Guardado correctamente.");

    }

    /**
     * Recupera la sesión.
     */
    static load():
        AuthSession | null {

        const value =
            localStorage.getItem(STORAGE_KEY);

        if (!value) {

            return null;

        }

        return JSON.parse(value);

    }

    /**
     * Elimina la sesión.
     */
    static clear(): void {

        localStorage.removeItem(STORAGE_KEY);

    }

}