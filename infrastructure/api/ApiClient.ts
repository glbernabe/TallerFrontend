import "server-only";

/**
 * Cliente HTTP compartido para las llamadas servidor-servidor.
 * API_INTERNAL_URL debe contener únicamente el origen interno del servicio,
 * por ejemplo http://localhost:8000 o http://api:80.
 */
type ApiRequestOptions = RequestInit & {
    next?: {
        revalidate?: number | false;
        tags?: string[];
    };
};

export class ApiError extends Error {
    constructor(
        public readonly status: number | null,
        public readonly method: string,
        public readonly endpoint: string,
        public readonly code: "http_error" | "unavailable" | "invalid_response",
    ) {
        super(
            status === null
                ? `No se pudo conectar con la API (${method} ${endpoint}).`
                : `La API respondió con HTTP ${status} (${method} ${endpoint}).`,
        );
        this.name = "ApiError";
    }
}

function parseOrigin(value: string, variableName: string): URL {
    let url: URL;

    try {
        url = new URL(value);
    } catch {
        throw new Error(`${variableName} no contiene una URL válida.`);
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") {
        throw new Error(`${variableName} debe utilizar HTTP o HTTPS.`);
    }

    if (
        url.username ||
        url.password ||
        url.search ||
        url.hash ||
        url.pathname !== "/"
    ) {
        throw new Error(
            `${variableName} debe contener únicamente el origen, sin credenciales, ruta, query ni hash.`,
        );
    }

    return url;
}

function getInternalOrigin(): URL {
    const configuredUrl = process.env.API_INTERNAL_URL?.trim();

    if (!configuredUrl) {
        throw new Error("API_INTERNAL_URL no está definida.");
    }

    return parseOrigin(configuredUrl, "API_INTERNAL_URL");
}

function buildApiUrl(endpoint: string): URL {
    // Las rutas deben ser relativas y estar definidas por la aplicación.
    // No se admiten URLs externas ni segmentos de recorrido de directorios.
    const path = endpoint.split("?")[0];

    if (
        !endpoint.trim() ||
        endpoint.startsWith("//") ||
        /^[a-z][a-z\d+.-]*:/i.test(endpoint) ||
        path.split("/").includes("..") ||
        path.includes("\\")
    ) {
        throw new Error("La ruta solicitada a la API no es válida.");
    }

    return new URL(endpoint.replace(/^\/+/, ""), `${getInternalOrigin().origin}/`);
}

export async function apiRequest(
    endpoint: string,
    init: ApiRequestOptions = {},
): Promise<Response> {
    const method = (init.method ?? "GET").toUpperCase();
    const url = buildApiUrl(endpoint);
    const headers = new Headers(init.headers);

    if (!headers.has("Accept")) {
        headers.set("Accept", "application/json");
    }

    const isReadRequest = method === "GET" || method === "HEAD";
    const requestOptions: ApiRequestOptions = {
        ...init,
        method,
        headers,
        cache: init.cache ?? (isReadRequest ? "force-cache" : "no-store"),
        next: init.next ?? (isReadRequest ? { revalidate: 60 } : undefined),
        signal: init.signal ?? AbortSignal.timeout(20_000),
    };

    let response: Response;

    try {
        response = await fetch(url, requestOptions);
    } catch {
        throw new ApiError(null, method, endpoint, "unavailable");
    }

    if (!response.ok) {
        throw new ApiError(response.status, method, endpoint, "http_error");
    }

    return response;
}

export async function apiFetch<T>(
    endpoint: string,
    init: ApiRequestOptions = {},
): Promise<{ data: T; headers: Headers }> {
    const response = await apiRequest(endpoint, init);

    try {
        const data = (await response.json()) as T;
        return { data, headers: response.headers };
    } catch {
        throw new ApiError(
            response.status,
            (init.method ?? "GET").toUpperCase(),
            endpoint,
            "invalid_response",
        );
    }
}

/**
 * Convierte la ruta pública de un archivo en una URL que pueda alcanzar
 * el navegador. Esta función solo se ejecuta durante el renderizado servidor.
 */
export function getPublicAssetUrl(pathOrUrl: string): string {
    const configuredPublicUrl = process.env.API_PUBLIC_URL?.trim();

    if (!configuredPublicUrl) {
        throw new Error(
            "API_PUBLIC_URL es necesaria para mostrar archivos multimedia.",
        );
    }

    const publicOrigin = parseOrigin(configuredPublicUrl, "API_PUBLIC_URL");

    if (
        !pathOrUrl.trim() ||
        pathOrUrl.startsWith("//") ||
        pathOrUrl.includes("\\")
    ) {
        throw new Error("La ruta del archivo multimedia no es válida.");
    }

    let assetUrl: URL;

    try {
        assetUrl = /^https?:\/\//i.test(pathOrUrl)
            ? new URL(pathOrUrl)
            : new URL(pathOrUrl.replace(/^\/+/, ""), `${publicOrigin.origin}/`);
    } catch {
        throw new Error("La URL del archivo multimedia no es válida.");
    }

    const expectedPath = /^\/api\/public\/archivos-multimedia\/\d+$/;

    if (
        assetUrl.protocol !== publicOrigin.protocol ||
        assetUrl.origin !== publicOrigin.origin ||
        !expectedPath.test(assetUrl.pathname) ||
        assetUrl.search ||
        assetUrl.hash
    ) {
        throw new Error(
            "El archivo multimedia no pertenece al origen o endpoint público permitido.",
        );
    }

    return assetUrl.toString();
}
