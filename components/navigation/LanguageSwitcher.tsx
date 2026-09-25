"use client";

import { useState } from "react";

import { useLocale } from "next-intl";

import {
    usePathname,
    useRouter,
} from "@/i18n/navigation";

type Locale = "es" | "en" | "fr" | "de";

type Language = {
    code: Locale;
    name: string;
    icon: string;
};

const languages: Language[] = [
    {
        code: "es",
        name: "Español",
        icon: "🇪🇸",
    },
    {
        code: "en",
        name: "English",
        icon: "🇬🇧",
    },
    {
        code: "fr",
        name: "Français",
        icon: "🇫🇷",
    },
    {
        code: "de",
        name: "Deutsch",
        icon: "🇩🇪",
    },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);

    const locale = useLocale() as Locale;

    const router = useRouter();
    const pathname = usePathname();

    const currentLanguage =
        languages.find(
            (language) => language.code === locale
        ) ?? languages[0];

    function handleLanguageChange(
        nextLocale: Locale
    ) {
        setIsOpen(false);

        router.replace(pathname, {
            locale: nextLocale,
        });
    }

    return (
        <div
            className="
                relative
                ml-6
            "
        >
            {/* Botón principal */}

            <button
                type="button"
                onClick={() =>
                    setIsOpen((current) => !current)
                }
                aria-expanded={isOpen}
                aria-haspopup="menu"
                className="
                    flex
                    items-center
                    gap-2

                    px-3
                    py-2

                    font-text
                    text-sm
                    font-medium

                    text-white

                    transition-colors
                    duration-200

                    hover:bg-white/5
                "
            >
                <span
                    className="
                        text-base
                        leading-none
                    "
                    aria-hidden="true"
                >
                    {currentLanguage.icon}
                </span>

                <span>
                    {currentLanguage.name}
                </span>

                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`
                        shrink-0

                        transition-transform
                        duration-200

                        ${isOpen ? "rotate-180" : ""}
                    `}
                    aria-hidden="true"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {/* Dropdown */}

            {isOpen && (
                <div
                    className="
                        absolute
                        right-0
                        top-full
                        z-[120]

                        pt-3
                    "
                >
                    <div
                        className="
                            min-w-[190px]

                            overflow-hidden

                            border
                            border-white/15

                            bg-[#111111]

                            py-1

                            shadow-[0_18px_45px_rgba(0,0,0,0.45)]

                            animate-language-dropdown
                        "
                        role="menu"
                    >
                        {languages.map((language) => {
                            const isCurrent =
                                language.code === locale;

                            return (
                                <button
                                    key={language.code}
                                    type="button"
                                    role="menuitem"
                                    onClick={() =>
                                        handleLanguageChange(
                                            language.code
                                        )
                                    }
                                    className={`
                                        flex
                                        w-full
                                        items-center
                                        gap-3

                                        px-5
                                        py-3.5

                                        font-text
                                        text-sm
                                        font-medium

                                        text-left
                                        text-white

                                        transition-colors
                                        duration-200

                                        hover:bg-white/5

                                        ${
                                            isCurrent
                                                ? "bg-white/5"
                                                : ""
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            text-base
                                            leading-none
                                        "
                                        aria-hidden="true"
                                    >
                                        {language.icon}
                                    </span>

                                    <span>
                                        {language.name}
                                    </span>

                                    {isCurrent && (
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="
                                                ml-auto
                                                opacity-70
                                            "
                                            aria-hidden="true"
                                        >
                                            <path d="m5 12 4 4L19 6" />
                                        </svg>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}