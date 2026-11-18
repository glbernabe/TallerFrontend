import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";

import AdminDashboard from "@/components/admin/dashboard/AdminDashboard";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
    title: "Panel de administración | Auto-Talleres Orihuela S.L.",
    description: "Panel de gestión interna de Auto-Talleres Orihuela S.L.",
    robots: {
        index: false,
        follow: false,
        noarchive: true,
    },
};

type BackendAdminUser = {
    username?: unknown;
    nombre?: unknown;
    apellido?: unknown;
    rol?: unknown;
};

function getString(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

export default async function AdminDashboardPage() {
    const locale = await getLocale();

    const loginPath = `/${locale}/admin/login`;
    const refreshPath = `/${locale}/admin/refresh`;

    const cookieStore = await cookies();

    const accessToken =
        cookieStore.get("web_access_token")?.value;

    // Si no tenemos access token, intentamos renovarlo.
    // No comprobamos aquí el refresh token porque su Path
    // está limitado intencionadamente a /api/admin/auth/refresh.
    if (!accessToken) {
        redirect(refreshPath);
    }

    const apiUrl =
        process.env.API_INTERNAL_URL?.replace(/\/+$/, "");

    if (!apiUrl) {
        throw new Error(
            "Falta configurar API_INTERNAL_URL.",
        );
    }

    let response: Response;

    try {
        response = await fetch(
            `${apiUrl}/api/admin/me`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Cookie: `web_access_token=${accessToken}`,
                },
                cache: "no-store",
            },
        );
    } catch {
        throw new Error(
            "No se pudo contactar con el servidor de administración.",
        );
    }

    // La cookie puede existir pero contener un token caducado.
    if (response.status === 401) {
        redirect(refreshPath);
    }

    if (response.status === 403) {
        redirect(`${loginPath}?reason=access-denied`);
    }

    if (!response.ok) {
        throw new Error(
            `No se pudo comprobar la sesión. HTTP ${response.status}.`,
        );
    }

    let backendUser: BackendAdminUser;

    try {
        backendUser =
            (await response.json()) as BackendAdminUser;
    } catch {
        throw new Error(
            "El servidor devolvió una respuesta de usuario no válida.",
        );
    }

    const username = getString(backendUser.username);
    const firstName = getString(backendUser.nombre);
    const lastName = getString(backendUser.apellido);

    const displayName =
        [firstName, lastName].filter(Boolean).join(" ") ||
        username ||
        "Usuario";

    const role =
        backendUser.rol === "admin_principal"
            ? "admin_principal"
            : backendUser.rol === "admin"
              ? "admin"
              : "privilegiado";

    return (
        <AdminDashboard
            locale={locale}
            user={{
                username,
                displayName,
                role,
            }}
        />
    );
}