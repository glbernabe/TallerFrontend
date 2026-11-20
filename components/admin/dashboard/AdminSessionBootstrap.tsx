
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type AdminSessionBootstrapProps = {
    locale: string;
};

export default function AdminSessionBootstrap({
    locale,
}: AdminSessionBootstrapProps) {
    const t = useTranslations("AdminSessionBootstrap");

    const [attempt, setAttempt] = useState(0);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function renewSession() {
            setError(false);

            try {
                const response = await fetch(
                    "/api/admin/auth/refresh",
                    {
                        method: "POST",
                        credentials: "same-origin",
                        cache: "no-store",
                        signal: controller.signal,
                    },
                );

                if (
                    response.status === 401 ||
                    response.status === 403
                ) {
                    window.location.replace(
                        `/${locale}/admin/login?reason=session-expired`,
                    );

                    return;
                }

                if (!response.ok) {
                    throw new Error("Session refresh failed.");
                }

                // Recarga la página para que Next.js pueda
                // comprobar la nueva cookie desde el servidor.
                window.location.replace(`/${locale}/admin`);
            } catch {
                if (!controller.signal.aborted) {
                    setError(true);
                }
            }
        }

        void renewSession();

        return () => {
            controller.abort();
        };
    }, [locale, attempt]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#080808] px-5">
            <section className="w-full max-w-md border border-[#303030] bg-[#111111] px-8 py-10 text-center shadow-2xl shadow-black/40">

                {/* Icono de estado */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#363636] bg-[#1a1a1a]">
                    {error ? (
                        <svg
                            className="h-8 w-8 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 8v4" />
                            <path d="M12 16h.01" />
                        </svg>
                    ) : (
                        <svg
                            className="h-8 w-8 animate-spin text-white motion-reduce:animate-none"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="opacity-20"
                            />
                            <path
                                d="M21 12a9 9 0 0 0-9-9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>

                {error ? (
                    <div role="alert">
                        <h1 className="mt-7 text-lg font-semibold tracking-wide text-white">
                            {t("errorTitle")}
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-[#a3a3a3]">
                            {t("errorDescription")}
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                setAttempt((value) => value + 1)
                            }
                            className="mt-8 min-h-11 w-full bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-[#d9d9d9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {t("retry")}
                        </button>
                    </div>
                ) : (
                    <div role="status" aria-live="polite">
                        <h1 className="mt-7 text-lg font-semibold tracking-wide text-white">
                            {t("checkingTitle")}
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-[#a3a3a3]">
                            {t("checkingDescription")}
                        </p>
                    </div>
                )}

                {/* Identidad visual */}
                <div className="mt-9 border-t border-[#292929] pt-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#666666]">
                        Mercedes-Benz · Administration
                    </p>
                </div>
            </section>
        </main>
    );
}
