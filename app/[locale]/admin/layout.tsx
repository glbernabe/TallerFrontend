import type { Metadata } from "next";
import type { ReactNode } from "react";

import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
    title: {
        default: "Administración",
        template: "%s | Administración | Auto-Talleres Orihuela",
    },
    robots: {
        index: false,
        follow: false,
    },
};

type Props = Readonly<{
    children: ReactNode;
}>;

export default async function AdminLayout({
    children,
}: Props) {
    const locale = await getLocale();

    if (locale !== "es" && locale !== "en") {
        redirect("/es/admin/login");
    }

    return (
        <div
            data-admin-area
            className="
                min-h-screen
                bg-[#080808]
                text-white
                antialiased
            "
        >
            {children}
        </div>
    );
}