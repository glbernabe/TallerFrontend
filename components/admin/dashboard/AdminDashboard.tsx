"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import AdminSidebar from "./AdminSidebar";
import AdminDashboardContent from "./AdminDashboardContent";
import AdminSessionKeeper from "./AdminSessionKeeper";

import type {
    AdminSectionId,
    AdminUser,
} from "./types";

type AdminDashboardProps = {
    locale: string;
    user: AdminUser;
};

export default function AdminDashboard({
    locale,
    user,
}: AdminDashboardProps) {
    const t = useTranslations("Admin.dashboard");

    const [activeSection, setActiveSection] =
        useState<AdminSectionId>("overview");

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavigation = (section: AdminSectionId) => {
        // Los usuarios privilegiados no pueden abrir
        // la sección de administración de cuentas.
        if (
            section === "users" &&
            user.role === "privilegiado"
        ) {
            return;
        }

        setActiveSection(section);
    };

    return (
        <div className="min-h-screen bg-[#f1f3f5] text-[#17191d]">
            <AdminSessionKeeper locale={locale} />

            <div className="flex min-h-screen">
                {/* MENÚ LATERAL */}

                <AdminSidebar
                    activeSection={activeSection}
                    role={user.role}
                    displayName={user.displayName}
                    locale={locale}
                    mobileOpen={mobileMenuOpen}
                    onNavigate={handleNavigation}
                    onClose={() => setMobileMenuOpen(false)}
                />

                {/* ÁREA CENTRAL */}

                <div className="flex min-w-0 flex-1 flex-col">
                    {/* CABECERA SUPERIOR */}

                    <header
                        className="
                            sticky
                            top-0
                            z-30
                            flex
                            h-[66px]
                            shrink-0
                            items-center
                            justify-between
                            border-b
                            border-[#e0e4e8]
                            bg-white
                            px-4
                            sm:px-6
                            lg:px-8
                        "
                    >
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() =>
                                    setMobileMenuOpen(true)
                                }
                                aria-label={t("actions.openMenu")}
                                aria-expanded={mobileMenuOpen}
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    text-[#454d56]
                                    transition-colors
                                    hover:bg-[#f0f2f4]
                                    focus-visible:outline-2
                                    focus-visible:outline-[#0078d6]
                                    lg:hidden
                                "
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    aria-hidden="true"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div>
                                <p className="text-xs font-semibold text-[#343a40]">
                                    {t("brand.fullName")}
                                </p>

                                <p className="mt-0.5 text-[10px] text-[#9299a1]">
                                    {t("header.panelSubtitle")}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 border border-[#e4e7ea] bg-[#f8f9fa] px-3 py-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0078d6]" />

                            <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626a73]">
                                {t("header.internalAccess")}
                            </span>
                        </div>
                    </header>

                    {/* CONTENIDO */}

                    <main
                        id="admin-main-content"
                        className="
                            flex-1
                            px-4
                            py-7
                            sm:px-6
                            sm:py-8
                            lg:px-8
                            lg:py-9
                            xl:px-10
                        "
                    >
                        <AdminDashboardContent
                            activeSection={activeSection}
                            user={user}
                            onNavigate={handleNavigation}
                        />
                    </main>

                    {/* PIE */}

                    <footer className="border-t border-[#e0e4e8] bg-white px-4 py-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col gap-2 text-[10px] text-[#9299a1] sm:flex-row sm:items-center sm:justify-between">
                            <p>
                                {t("footer.copyright", {
                                    year: new Date().getFullYear(),
                                })}
                            </p>

                            <p>
                                {t("footer.internalUse")}
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
