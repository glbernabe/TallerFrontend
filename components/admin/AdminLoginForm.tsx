"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function AdminLoginForm() {
    const t = useTranslations("Admin.login");

    const [showPassword, setShowPassword] = useState(false);
    const [notice, setNotice] = useState<string | null>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // La autenticación todavía no está conectada al backend.
        // No se envían ni almacenan las credenciales.
        setNotice(t("notConnectedNotice"));
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            {/* CORREO */}

            <div className="space-y-2">
                <label
                    htmlFor="admin-email"
                    className="
                        block
                        font-text
                        text-sm
                        font-medium
                        text-white
                    "
                >
                    {t("emailLabel")}
                </label>

                <input
                    id="admin-email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    placeholder={t("emailPlaceholder")}
                    required
                    maxLength={254}
                    className="
                        h-12
                        w-full
                        border
                        border-[#383838]
                        bg-[#111111]
                        px-4
                        font-text
                        text-sm
                        text-white
                        caret-white
                        outline-none
                        transition-colors
                        placeholder:text-[#777777]
                        hover:border-[#555555]
                        focus:border-[#0078d6]
                        focus-visible:outline-1
                        focus-visible:outline-[#0078d6]
                    "
                />
            </div>

            {/* CONTRASEÑA */}

            <div className="space-y-2">
                <label
                    htmlFor="admin-password"
                    className="
                        block
                        font-text
                        text-sm
                        font-medium
                        text-white
                    "
                >
                    {t("passwordLabel")}
                </label>

                <div className="relative">
                    <input
                        id="admin-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder={t("passwordPlaceholder")}
                        required
                        className="
                            h-12
                            w-full
                            border
                            border-[#383838]
                            bg-[#111111]
                            px-4
                            pr-14
                            font-text
                            text-sm
                            text-white
                            caret-white
                            outline-none
                            transition-colors
                            placeholder:text-[#777777]
                            hover:border-[#555555]
                            focus:border-[#0078d6]
                            focus-visible:outline-1
                            focus-visible:outline-[#0078d6]
                        "
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        aria-label={
                            showPassword
                                ? t("hidePassword")
                                : t("showPassword")
                        }
                        aria-pressed={showPassword}
                        className="
                            absolute
                            inset-y-0
                            right-0
                            flex
                            w-12
                            items-center
                            justify-center
                            text-neutral-400
                            transition-colors
                            hover:text-white
                            focus-visible:outline-2
                            focus-visible:outline-inset
                            focus-visible:outline-[#0078d6]
                        "
                    >
                        {showPassword ? (
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M3 3l18 18" />
                                <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                                <path d="M9.9 5.1A11 11 0 0 1 12 5c5 0 8.3 4.2 9.5 6.2a1.5 1.5 0 0 1 0 1.6 16 16 0 0 1-3 3.4" />
                                <path d="M6.2 6.2a16 16 0 0 0-3.7 5 1.5 1.5 0 0 0 0 1.6C3.7 14.8 7 19 12 19a10 10 0 0 0 4.1-.9" />
                            </svg>
                        ) : (
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M2.5 12s3.3-7 9.5-7 9.5 7 9.5 7-3.3 7-9.5 7-9.5-7-9.5-7Z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* ACCEDER */}

            <button
                type="submit"
                className="
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    bg-[#0078d6]
                    px-6
                    font-text
                    text-sm
                    font-semibold
                    text-white
                    transition-colors
                    duration-150
                    hover:bg-[#006abd]
                    active:bg-[#005b9f]
                    focus-visible:outline-2
                    focus-visible:outline-offset-3
                    focus-visible:outline-[#0078d6]
                "
            >
                {t("submit")}
            </button>

            {/* MENSAJE */}

            {notice && (
                <p
                    role="status"
                    aria-live="polite"
                    className="
                        border-l-2
                        border-[#0078d6]
                        px-4
                        py-3
                        font-text
                        text-sm
                        leading-6
                        text-[#d0d0d0]
                    "
                >
                    {notice}
                </p>
            )}
        </form>
    );
}