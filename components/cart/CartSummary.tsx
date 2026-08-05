"use client";

import type { ReactNode } from "react";

import type { CartSummary as CartSummaryModel } from "@/domain/cart/CartSummary";

type Props = {
    summary: CartSummaryModel;

    /**
     * Acción que aparecerá al final del resumen.
     *
     * CartSummary no conoce si es un botón,
     * un enlace, una acción o cualquier otro
     * componente.
     */
    action?: ReactNode;
};

export default function CartSummary({
    summary,
    action,
}: Props) {

    const formattedTotal = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    }).format(summary.total);

    return (

        <footer
            className="
                border-t
                border-neutral-200

                bg-white

                px-8
                py-8
            "
        >
            <div
                className="
                    flex
                    items-end
                    justify-between
                    gap-6
                "
            >

                <div>

                    <p
                        className="
                            text-xs
                            uppercase

                            tracking-[0.18em]

                            text-neutral-500
                        "
                    >
                        Total
                    </p>

                    <h3
                        className="
                            mt-2

                            font-title
                            text-4xl

                            text-black
                        "
                    >
                        {formattedTotal}
                    </h3>

                </div>

                <p
                    className="
                        text-right
                        text-sm
                        text-neutral-500
                    "
                >
                    {summary.totalItems}
                    {" "}
                    servicio{summary.totalItems !== 1 && "s"}
                </p>

            </div>

            {action && (

                <div
                    className="
                        mt-8
                    "
                >
                    {action}
                </div>

            )}

        </footer>

    );

}
