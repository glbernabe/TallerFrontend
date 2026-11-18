import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import AdminSessionBootstrap from "@/components/admin/dashboard/AdminSessionBootstrap";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
    title: "Verificando sesión | Auto-Talleres Orihuela S.L.",
    robots: {
        index: false,
        follow: false,
        noarchive: true,
    },
};

export default async function AdminSessionRefreshPage() {
    const locale = await getLocale();

    return (
        <AdminSessionBootstrap locale={locale} />
    );
}