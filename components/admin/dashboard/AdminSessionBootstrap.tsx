"use client";

import { useEffect, useState } from "react";

type AdminSessionBootstrapProps = {
    locale: string;
};

export default function AdminSessionBootstrap({
    locale,
}: AdminSessionBootstrapProps) {
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
                    throw new Error("No se pudo renovar la sesión.");
                }

                // Recarga completa para que el servidor de Next.js
                // reciba y compruebe la nueva cookie.
                window.location.replace(
                    `/${locale}/admin`,
                );
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
        <main className="flex min-h-screen items-center justify-center bg-[#f1f3f5] px-5">
            <section className="w-full max-w-md border border-[#e0e4e8] bg-white p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#e0e4e8] bg-[#f7f8f9]">
                    <svg
                        className="h-6 w-6 text-[#0078d6]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M20 7v5h-5" />
                        <path d="M4 17v-5h5" />
                        <path d="M5.6 9a7 7 0 0 1 11.6-2L20 12" />
                        <path d="M4 12l2.8 5a7 7 0 0 0 11.6-2" />
                    </svg>
                </div>

                {error ? (
                    <>
                        <h1 className="mt-6 text-lg font-semibold text-[#202328]">
                            No se pudo renovar la sesión
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-[#737b85]">
                            No ha sido posible contactar con el
                            servicio de autenticación. Comprueba la
                            conexión y vuelve a intentarlo.
                        </p>

                        <button
                            type="button"
                            onClick={() => setAttempt((value) => value + 1)}
                            className="mt-7 min-h-11 bg-[#0078d6] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#006abd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0078d6]"
                        >
                            Reintentar
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className="mt-6 text-lg font-semibold text-[#202328]">
                            Comprobando tu sesión
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-[#737b85]">
                            Estamos verificando tu acceso al panel
                            de administración.
                        </p>

                        <div className="mx-auto mt-6 h-1 w-32 overflow-hidden bg-[#e9edf1]">
                            <div className="h-full w-1/2 animate-pulse bg-[#0078d6]" />
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}