import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_BASE_URL = process.env.API_INTERNAL_URL?.replace(/\/+$/, "");

const ACCESS_COOKIE = "web_access_token";
const REFRESH_COOKIE = "web_refresh_token";

const ACCESS_PATH = "/";
const LEGACY_ACCESS_PATH = "/api/admin";
const REFRESH_PATH = "/api/admin/auth/refresh";

type HeadersWithGetSetCookie = Headers & {
    getSetCookie?: () => string[];
};

function getSetCookieHeaders(headers: Headers): string[] {
    const extendedHeaders = headers as HeadersWithGetSetCookie;

    return extendedHeaders.getSetCookie?.() ?? [];
}

function expireAuthCookies(
    response: NextResponse,
    request: NextRequest,
): void {
    const secure =
        request.nextUrl.protocol === "https:" ||
        process.env.WEB_COOKIE_SECURE === "true";

    const cookiesToDelete = [
        {
            name: ACCESS_COOKIE,
            path: ACCESS_PATH,
        },
        {
            name: ACCESS_COOKIE,
            path: LEGACY_ACCESS_PATH,
        },
        {
            name: REFRESH_COOKIE,
            path: REFRESH_PATH,
        },
    ];

    for (const cookie of cookiesToDelete) {
        response.cookies.set({
            name: cookie.name,
            value: "",
            path: cookie.path,
            expires: new Date(0),
            maxAge: 0,
            httpOnly: true,
            secure,
            sameSite: "lax",
        });
    }
}

function jsonError(
    request: NextRequest,
    error: string,
    statusCode: number,
): NextResponse {
    const response = NextResponse.json(
        {
            ok: false,
            error,
        },
        {
            status: statusCode,
            headers: {
                "Cache-Control": "no-store",
            },
        },
    );

    if (statusCode === 401 || statusCode === 403) {
        expireAuthCookies(response, request);
    }

    return response;
}

export async function POST(request: NextRequest) {
    if (!API_BASE_URL) {
        console.error(
            "API_INTERNAL_URL no está configurada.",
        );

        return jsonError(
            request,
            "auth_service_not_configured",
            500,
        );
    }

    // Protección adicional: solo aceptamos peticiones del mismo origen
    // cuando el navegador proporciona la cabecera Origin.
    const origin = request.headers.get("origin");

    if (origin && origin !== request.nextUrl.origin) {
        return jsonError(
            request,
            "invalid_origin",
            403,
        );
    }

    const refreshToken =
        request.cookies.get(REFRESH_COOKIE)?.value;

    if (!refreshToken) {
        return jsonError(
            request,
            "refresh_token_missing",
            401,
        );
    }

    let upstream: Response;

    try {
        upstream = await fetch(
            `${API_BASE_URL}/api/admin/auth/refresh`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Cookie: `${REFRESH_COOKIE}=${refreshToken}`,
                },
                cache: "no-store",
                redirect: "manual",
                signal: AbortSignal.timeout(10_000),
            },
        );
    } catch (error) {
        console.error(
            "No se pudo contactar con el servicio de autenticación.",
            error,
        );

        return jsonError(
            request,
            "auth_service_unavailable",
            502,
        );
    }

    if (upstream.status === 401 || upstream.status === 403) {
        return jsonError(
            request,
            "session_expired",
            401,
        );
    }

    if (!upstream.ok) {
        console.error(
            "El backend rechazó la renovación. HTTP:",
            upstream.status,
        );

        return jsonError(
            request,
            "auth_refresh_failed",
            502,
        );
    }

    // Node.js permite recuperar cada Set-Cookie individualmente.
    // No se deben separar manualmente por comas porque Expires
    // también contiene comas.
    const setCookies = getSetCookieHeaders(
        upstream.headers,
    );

    const hasNewAccessCookie = setCookies.some(
        (cookie) =>
            cookie.startsWith(`${ACCESS_COOKIE}=`) &&
            /;\s*Path=\/(?:;|$)/i.test(cookie) &&
            !/;\s*Max-Age=0(?:;|$)/i.test(cookie),
    );

    const hasNewRefreshCookie = setCookies.some(
        (cookie) =>
            cookie.startsWith(`${REFRESH_COOKIE}=`) &&
            /;\s*Path=\/api\/admin\/auth\/refresh(?:;|$)/i.test(
                cookie,
            ) &&
            !/;\s*Max-Age=0(?:;|$)/i.test(cookie),
    );

    if (!hasNewAccessCookie || !hasNewRefreshCookie) {
        console.error(
            "El backend ha renovado la sesión sin devolver las dos cookies esperadas.",
        );

        return jsonError(
            request,
            "auth_cookies_missing",
            502,
        );
    }

    const response = NextResponse.json(
        {
            ok: true,
        },
        {
            status: 200,
            headers: {
                "Cache-Control": "no-store",
            },
        },
    );

    // Transferimos las cookies originales de FastAPI,
    // conservando Path, HttpOnly, Secure, SameSite y expiración.
    for (const cookie of setCookies) {
        response.headers.append(
            "Set-Cookie",
            cookie,
        );
    }

    return response;
}