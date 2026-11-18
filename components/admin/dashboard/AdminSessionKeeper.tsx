"use client";

import { useEffect } from "react";

type AdminSessionKeeperProps = {
    locale: string;
};

const REFRESH_INTERVAL = 10 * 60 * 1000;

export default function AdminSessionKeeper({
    locale,
}: AdminSessionKeeperProps) {
    useEffect(() => {
        let lastSuccessfulRefresh = Date.now();
        let requestInProgress = false;

        async function refreshSession() {
            if (
                requestInProgress ||
                document.visibilityState === "hidden"
            ) {
                return;
            }

            requestInProgress = true;

            try {
                const response = await fetch(
                    "/api/admin/auth/refresh",
                    {
                        method: "POST",
                        credentials: "same-origin",
                        cache: "no-store",
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

                if (response.ok) {
                    lastSuccessfulRefresh = Date.now();
                }

                // Si el backend está temporalmente fuera de servicio,
                // no cerramos la sesión por un error de conexión.
                // Se volverá a intentar en el siguiente intervalo.
            } catch {
                // No se modifica la sesión ante un error de red.
            } finally {
                requestInProgress = false;
            }
        }

        const intervalId = window.setInterval(() => {
            const elapsed =
                Date.now() - lastSuccessfulRefresh;

            if (elapsed >= REFRESH_INTERVAL) {
                void refreshSession();
            }
        }, REFRESH_INTERVAL);

        function handleVisibilityChange() {
            if (
                document.visibilityState === "visible" &&
                Date.now() - lastSuccessfulRefresh >= REFRESH_INTERVAL
            ) {
                void refreshSession();
            }
        }

        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange,
        );

        return () => {
            window.clearInterval(intervalId);

            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
        };
    }, [locale]);

    return null;
}