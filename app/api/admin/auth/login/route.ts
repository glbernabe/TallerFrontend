import { NextRequest, NextResponse } from "next/server";

import {
    ApiError,
    apiRequest,
} from "@/infrastructure/api/ApiClient";


export async function POST(request: NextRequest) {
    const body: unknown = await request.json().catch(() => null);

    if (
        !body ||
        typeof body !== "object" ||
        !("username" in body) ||
        !("password" in body) ||
        typeof body.username !== "string" ||
        typeof body.password !== "string" ||
        !body.username.trim() ||
        !body.password
    ) {
        return NextResponse.json(
            { detail: "Solicitud de inicio de sesión no válida." },
            { status: 400 }
        );
    }

    try {
        const backendResponse = await apiRequest(
            "/api/admin/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: body.username.trim(),
                    password: body.password,
                }),
                cache: "no-store",
            }
        );

        const headersWithCookies = backendResponse.headers as Headers & {
            getSetCookie?: () => string[];
        };

        const cookies = headersWithCookies.getSetCookie?.() ?? [];

        if (
            !cookies.some(cookie => cookie.startsWith("web_access_token=")) ||
            !cookies.some(cookie => cookie.startsWith("web_refresh_token="))
        ) {
            return NextResponse.json(
                { detail: "El servidor no ha establecido la sesión correctamente." },
                { status: 502 }
            );
        }

        const response = NextResponse.json(
            { authenticated: true },
            {
                headers: {
                    "Cache-Control": "no-store",
                },
            }
        );

        for (const cookie of cookies) {
            response.headers.append("Set-Cookie", cookie);
        }

        return response;

    } catch (error) {
        if (error instanceof ApiError) {
            if (error.status === 401 || error.status === 403) {
                return NextResponse.json(
                    { detail: "Credenciales incorrectas." },
                    { status: 401 }
                );
            }

            if (error.status === 422) {
                return NextResponse.json(
                    { detail: "Los datos enviados no son válidos." },
                    { status: 400 }
                );
            }
        }

        return NextResponse.json(
            { detail: "No se ha podido conectar con el servidor." },
            { status: 502 }
        );
    }
}