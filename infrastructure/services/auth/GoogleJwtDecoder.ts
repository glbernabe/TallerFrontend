import type { GoogleCredential } from "@/domain/auth/GoogleCredential";

import type { GoogleCredentialPayload }
from "@/infrastructure/models/google/GoogleCredentialPayload";

/**
 * Servicio encargado de
 * interpretar el JWT
 * devuelto por Google.
 */
export class GoogleJwtDecoder {

    static decodeCredential(
        credential: GoogleCredential,
    ): GoogleCredentialPayload {

        console.log("========== JWT ==========");
        console.log(credential.credential);

        const parts =
            credential.credential.split(".");

        console.log("Partes del JWT:");
        console.log(parts);

        if (parts.length !== 3) {

            throw new Error(
                "La credencial recibida no es un JWT válido.",
            );

        }

        const payload =
            parts[1];

        console.log("Payload Base64:");
        console.log(payload);

        const json =
            atob(payload);

        console.log("Payload JSON:");
        console.log(json);

        return JSON.parse(json);

    }

}