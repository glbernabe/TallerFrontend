import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import {
    getLocale,
    getTranslations,
} from "next-intl/server";

import AdminLoginForm from "@/components/admin/AdminLoginForm";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Admin.login");

    return {
        title: t("metadataTitle"),
        robots: {
            index: false,
            follow: false,
        },
    };
}


export default async function AdminLoginPage() {
    const t = await getTranslations("Admin.login");
    const locale = await getLocale();

    const alternateLocale = locale === "es" ? "en" : "es";

    return (
        <main
            className="
                flex
                min-h-screen
                flex-col
                bg-[#080808]
                text-white
            "
        >
            {/* CABECERA */}

            <header
                className="
                    h-[68px]
                    shrink-0
                    border-b
                    border-white/15
                    bg-black
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        h-full
                        max-w-[1440px]
                        items-center
                        justify-between
                        px-5
                        sm:px-8
                        lg:px-12
                    "
                >
                    {/* IDENTIDAD */}

                    <Link
                        href={`/${locale}`}
                        className="
                            flex
                            items-center
                            gap-3
                            outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#0078d6]
                        "
                        aria-label={t("backToWebsite")}
                    >
                        <Image
                            src="/content/icons/logo.svg"
                            alt="Emblema"
                            width={39}
                            height={39}
                            priority
                        />

                        <span
                            className="
                                font-title
                                text-sm
                                tracking-[0.06em]
                                text-white
                                sm:text-base
                            "
                        >
                            AUTO TALLERES ORIHUELA
                        </span>
                    </Link>

                    {/* IDIOMA */}

                    <nav
                        aria-label={t("languageLabel")}
                        className="
                            flex
                            items-center
                            gap-3
                            text-xs
                            font-semibold
                            tracking-wide
                        "
                    >
                        <Link
                            href="/es/admin/login"
                            lang="es"
                            hrefLang="es"
                            aria-current={locale === "es" ? "page" : undefined}
                            className={`
                                transition-colors
                                hover:text-white
                                focus-visible:outline-2
                                focus-visible:outline-[#0078d6]
                                ${
                                    locale === "es"
                                        ? "text-white"
                                        : "text-neutral-500"
                                }
                            `}
                        >
                            ES
                        </Link>

                        <span
                            aria-hidden="true"
                            className="text-neutral-700"
                        >
                            |
                        </span>

                        <Link
                            href="/en/admin/login"
                            lang="en"
                            hrefLang="en"
                            aria-current={locale === "en" ? "page" : undefined}
                            className={`
                                transition-colors
                                hover:text-white
                                focus-visible:outline-2
                                focus-visible:outline-[#0078d6]
                                ${
                                    locale === "en"
                                        ? "text-white"
                                        : "text-neutral-500"
                                }
                            `}
                        >
                            EN
                        </Link>
                    </nav>
                </div>
            </header>

            {/* CONTENIDO PRINCIPAL */}

            <section
                className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    px-6
                    py-20
                "
            >
                <div
                    className="
                        w-full
                        max-w-[420px]
                    "
                >
                    {/* TÍTULO */}

                    <div className="text-center">
                        <p
                            className="
                                font-text
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.20em]
                                text-[#8b8b8b]
                            "
                        >
                            {t("eyebrow")}
                        </p>

                        <h1
                            className="
                                mt-5
                                font-title
                                text-4xl
                                font-normal
                                leading-tight
                                text-white
                                sm:text-5xl
                            "
                        >
                            {t("title")}
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-[370px]
                                font-text
                                text-sm
                                leading-7
                                text-[#a9a9a9]
                                sm:text-base
                            "
                        >
                            {t("description")}
                        </p>
                    </div>

                    {/* FORMULARIO */}

                    <div
                        className="
                            mt-10
                            border-t
                            border-white/15
                            pt-8
                        "
                    >
                        <AdminLoginForm />
                    </div>

                    {/* AVISO DE SEGURIDAD */}

                    <div
                        className="
                            mt-9
                            flex
                            items-start
                            justify-center
                            gap-2
                            text-center
                        "
                    >
                        <svg
                            className="
                                mt-0.5
                                shrink-0
                                text-neutral-500
                            "
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <rect
                                x="4"
                                y="10"
                                width="16"
                                height="11"
                                rx="2"
                            />
                            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                        </svg>

                        <p
                            className="
                                font-text
                                text-xs
                                leading-5
                                text-neutral-500
                            "
                        >
                            {t("restrictedAccess")}
                        </p>
                    </div>
                </div>
            </section>

            {/* PIE */}

            <footer
                className="
                    border-t
                    border-white/10
                    px-5
                    py-5
                    sm:px-8
                    lg:px-12
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        max-w-[1440px]
                        flex-col
                        items-center
                        justify-between
                        gap-3
                        text-xs
                        text-neutral-500
                        sm:flex-row
                    "
                >
                    <span>
                        {t("footer")}
                    </span>

                    <Link
                        href={`/${locale}`}
                        className="
                            transition-colors
                            hover:text-white
                            focus-visible:outline-2
                            focus-visible:outline-[#0078d6]
                        "
                    >
                        {t("backToWebsite")}
                    </Link>
                </div>
            </footer>
        </main>
    );
}