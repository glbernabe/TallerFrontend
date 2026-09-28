import { StrapiError } from "./StrapiError";

const STRAPI_URL = process.env.STRAPI_URL;

if (!STRAPI_URL) {
    throw new Error(
        "STRAPI_URL no está definida. " +
        "Comprueba que existe en tu archivo .env.local."
    );
}

export async function strapiFetch<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const url = `${STRAPI_URL}${endpoint}`;

    let response: Response;

    try {
        response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options?.headers ?? {}),
            },
        });
    } catch (error) {
        throw new Error(
            [
                "No se pudo conectar con Strapi.",
                "",
                `URL: ${url}`,
                "",
                "Comprueba que:",
                "1. Strapi está iniciado.",
                "2. STRAPI_URL apunta al servidor correcto.",
                "3. El puerto de Strapi está disponible.",
                "",
                `Error original: ${
                    error instanceof Error
                        ? error.message
                        : String(error)
                }`,
            ].join("\n")
        );
    }

    if (!response.ok) {
        let errorBody: unknown;

        try {
            errorBody = await response.json();
        } catch {
            errorBody = await response.text();
        }

        const strapiError =
            typeof errorBody === "object" &&
            errorBody !== null &&
            "error" in errorBody
                ? (
                      errorBody as {
                          error?: {
                              status?: number;
                              name?: string;
                              message?: string;
                              details?: unknown;
                          };
                      }
                  ).error
                : undefined;

        throw new StrapiError({
            status: response.status,
            endpoint,
            method: options?.method ?? "GET",
            message:
                strapiError?.message ??
                `Strapi respondió con HTTP ${response.status}`,
            details: strapiError?.details,
        });
    }

    try {
        return (await response.json()) as T;
    } catch {
        throw new Error(
            [
                "Strapi respondió correctamente, pero la respuesta no es un JSON válido.",
                "",
                `URL: ${url}`,
                `HTTP: ${response.status}`,
            ].join("\n")
        );
    }
}