import type {
    GoogleCredential,
} from "@/domain/auth/GoogleCredential";

/**
 * Respuesta recibida desde
 * Google Identity Services.
 *
 * Nunca debe salir de este servicio.
 */
type CredentialResponse = {

    credential: string;

};

export class GoogleIdentityService {

    /**
     * URL oficial del SDK.
     */
    private static readonly SDK_URL =

        "https://accounts.google.com/gsi/client";

    /**
     * Evita cargar el SDK
     * varias veces.
     */
    private sdkLoaded = false;

    /**
     * Evita inicializar Google
     * más de una vez.
     */
    private initialized = false;

    /**
     * Callback pendiente
     * esperando una credencial.
     */
    private pendingResolve?:
        (credential: GoogleCredential) => void;

    /**
     * Callback pendiente
     * esperando un error.
     */
    private pendingReject?:
        (error: Error) => void;

    /**
     * Carga el SDK de Google.
     */
    async loadSdk(): Promise<void> {

        if (this.sdkLoaded) {

            return;

        }

        await new Promise<void>((resolve, reject) => {

            const script =
                document.createElement("script");

            script.src =
                GoogleIdentityService.SDK_URL;

            script.async = true;

            script.defer = true;

            script.onload = () => {

                this.sdkLoaded = true;

                resolve();

            };

            script.onerror = () => {

                reject(

                    new Error(

                        "No se pudo cargar Google Identity Services.",

                    ),

                );

            };

            document.head.appendChild(script);

        });

    }

    /**
     * Inicializa Google Identity Services.
     *
     * Google recomienda llamar
     * initialize()
     * únicamente una vez.
     */
    async initialize(): Promise<void> {

        if (this.initialized) {

            return;

        }

        await this.loadSdk();

        window.google.accounts.id.initialize({

            client_id:

                process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,

            callback:

                (

                    response: CredentialResponse,

                ) => {

                    this.pendingResolve?.({

                        credential:

                            response.credential,

                    });

                },

        });

        this.initialized = true;

    }

    /**
     * Solicita al usuario
     * iniciar sesión.
     *
     * Devuelve únicamente
     * la credencial firmada
     * por Google.
     */
    async signIn():

        Promise<GoogleCredential> {

        await this.initialize();

        return new Promise(

            (resolve, reject) => {

                this.pendingResolve = resolve;

                this.pendingReject = reject;

                /**
                 * Abre el popup
                 * oficial de Google.
                 */
                window.google.accounts.id.prompt();

            },

        );

    }

}