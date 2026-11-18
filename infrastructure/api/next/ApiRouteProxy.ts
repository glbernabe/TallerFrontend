import "server-only";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ACCESS_COOKIE = "web_access_token";
const REFRESH_COOKIE = "web_refresh_token";

type AuthMode = "public" | "admin" | "refresh-cookie" | "auth-cookie";
type ProxyOptions = {
    auth?: AuthMode;
    forwardSetCookie?: boolean;
    bodyMode?: "none" | "raw" | "multipart";
    defaultPublicCache?: boolean;
};

function apiOrigin(): URL {
    const configured = process.env.API_INTERNAL_URL?.trim();
    if (!configured) throw new Error("API_INTERNAL_URL no está definida.");
    const url = new URL(configured);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
        throw new Error("API_INTERNAL_URL debe contener únicamente el origen HTTP(S) interno.");
    }
    return url;
}

function upstreamUrl(path: string): URL {
    if (!path.startsWith("/api/") || path.startsWith("//") || path.includes("\\") || path.split("?")[0].split("/").includes("..")) {
        throw new Error("La ruta interna de API no es válida.");
    }
    return new URL(path.replace(/^\//, ""), `${apiOrigin().origin}/`);
}

function copyResponseHeaders(upstream: Response, publicCache: boolean): Headers {
    const headers = new Headers();
    for (const name of ["content-type", "content-disposition", "cache-control", "etag", "last-modified", "x-content-type-options"]) {
        const value = upstream.headers.get(name);
        if (value) headers.set(name, value);
    }
    if (!headers.has("cache-control")) {
        headers.set("Cache-Control", publicCache ? "public, max-age=60, s-maxage=300, stale-while-revalidate=60" : "no-store");
    }
    return headers;
}

function appendSetCookies(target: NextResponse, source: Headers): void {
    const cookieHeaders = source as Headers & { getSetCookie?: () => string[] };
    const cookies = cookieHeaders.getSetCookie?.() ?? [];
    for (const cookie of cookies) target.headers.append("Set-Cookie", cookie);
    if (cookies.length === 0) {
        const single = source.get("set-cookie");
        if (single) target.headers.append("Set-Cookie", single);
    }
}

async function proxy(
    request: NextRequest,
    path: string,
    method: string,
    options: ProxyOptions = {},
): Promise<NextResponse> {
    const auth = options.auth ?? "public";
    const headers = new Headers({ Accept: "application/json" });

    if (auth === "admin") {
        const token = request.cookies.get(ACCESS_COOKIE)?.value;
        if (!token) {
            return NextResponse.json({ detail: "Debes iniciar sesión en el panel." }, { status: 401, headers: { "Cache-Control": "no-store" } });
        }
        headers.set("Authorization", `Bearer ${token}`);
    } else if (auth === "refresh-cookie" || auth === "auth-cookie") {
        const names = auth === "refresh-cookie" ? [REFRESH_COOKIE] : [ACCESS_COOKIE, REFRESH_COOKIE];
        const cookiePairs = names
            .map((name) => {
                const value = request.cookies.get(name)?.value;
                return value ? `${name}=${value}` : null;
            })
            .filter((value): value is string => Boolean(value));
        if (cookiePairs.length) headers.set("Cookie", cookiePairs.join("; "));
    }

    let body: BodyInit | undefined;
    try {
        if (method !== "GET" && method !== "HEAD") {
            if (options.bodyMode === "multipart") {
                const incoming = await request.formData();
                const outgoing = new FormData();
                for (const [key, value] of incoming.entries()) {
                    if (typeof value === "string") outgoing.append(key, value);
                    else outgoing.append(key, value, value.name);
                }
                body = outgoing;
            } else if (options.bodyMode === "raw") {
                const contentType = request.headers.get("content-type");
                if (contentType) headers.set("Content-Type", contentType);
                body = await request.arrayBuffer();
            }
        }
    } catch {
        return NextResponse.json({ detail: "El cuerpo de la solicitud no es válido." }, { status: 400, headers: { "Cache-Control": "no-store" } });
    }

    const query = request.nextUrl.search;
    let url: URL;
    try {
        url = upstreamUrl(`${path}${query}`);
    } catch {
        return NextResponse.json({ detail: "La configuración de la API no es válida." }, { status: 500, headers: { "Cache-Control": "no-store" } });
    }
    let upstream: Response;
    try {
        upstream = await fetch(url, {
            method,
            headers,
            body,
            cache: "no-store",
            redirect: "manual",
            signal: AbortSignal.timeout(20_000),
        });
    } catch {
        return NextResponse.json({ detail: "No se ha podido conectar con el servidor de datos." }, { status: 502, headers: { "Cache-Control": "no-store" } });
    }

    const responseHeaders = copyResponseHeaders(upstream, options.defaultPublicCache === true);
    const noBody = method === "HEAD" || upstream.status === 204 || upstream.status === 304;
    const result = new NextResponse(noBody ? null : upstream.body, {
        status: upstream.status,
        headers: responseHeaders,
    });
    if (options.forwardSetCookie) appendSetCookies(result, upstream.headers);
    return result;
}

export function proxyPublicGet(request: NextRequest, path: string) {
    return proxy(request, path, "GET", { auth: "public", defaultPublicCache: true });
}

export function proxyAdminGet(request: NextRequest, path: string) {
    return proxy(request, path, "GET", { auth: "admin" });
}

export function proxyAdminMutation(request: NextRequest, path: string, method: "POST" | "PUT" | "PATCH" | "DELETE") {
    return proxy(request, path, method, { auth: "admin", bodyMode: method === "DELETE" ? "none" : "raw" });
}

export function proxyAdminUpload(request: NextRequest, path: string) {
    return proxy(request, path, "POST", { auth: "admin", bodyMode: "multipart" });
}

export function proxyAuthJson(request: NextRequest, path: string) {
    return proxy(request, path, "POST", { auth: "public", bodyMode: "raw", forwardSetCookie: true });
}

export function proxyAuthRefresh(request: NextRequest, path: string) {
    return proxy(request, path, "POST", { auth: "refresh-cookie", bodyMode: "none", forwardSetCookie: true });
}

export function proxyAuthLogout(request: NextRequest, path: string) {
    return proxy(request, path, "POST", { auth: "auth-cookie", bodyMode: "none", forwardSetCookie: true });
}
