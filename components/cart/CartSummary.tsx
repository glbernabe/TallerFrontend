"use client";

import type { ReactNode } from "react";

import type { CartSummary as CartSummaryModel } from "@/domain/cart/CartSummary";

type Props = {
    summary: CartSummaryModel;

    /**
     * Indica si debe mostrarse el precio
     * de cada servicio.
     */
    showPrices?: boolean;

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
    showPrices = false,
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

            {/* Lista de servicios */}

            <div className="space-y-2">

                {summary.items.map((item) => (

                    <div
                        key={item.id}
                        className="
                            flex
                            items-center
                            justify-between

                            text-sm
                            text-neutral-600
                        "
                    >

                        <span className="truncate">
                            {item.quantity}x {item.title}
                        </span>

                        {showPrices && (

                            <span>

                                {new Intl.NumberFormat("es-ES", {
                                    style: "currency",
                                    currency: "EUR",
                                }).format(item.price)}

                            </span>

                        )}

                    </div>

                ))}

            </div>

            {/* Separador */}

            <div
                className="
                    my-6

                    border-t
                    border-neutral-200
                "
            />

            {/* Total */}

            <div
                className="
                    flex
                    items-end
                    justify-between
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
                        text-sm
                        text-neutral-500
                    "
                >
                    {summary.totalItems}
                    {" "}
                    servicio{summary.totalItems !== 1 && "s"}
                </p>

            </div>

            {/* Acción */}

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