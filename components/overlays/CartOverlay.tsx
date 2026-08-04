"use client";

import Image from "next/image";

import Overlay from "./Overlay";

import CartItemList from "../cart/CartItemList";
import CartSummary from "../cart/CartSummary"; // Componente

import { useCart } from "@/hooks/useCart";

import MainButton from "@/components/ui/MainButton";


type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CartOverlay({
    isOpen,
    onClose,
}: Props) {

    const {

        data: cart,

        isLoading,

        error,

        reload,

    } = useCart(isOpen);

    return (
        <Overlay
            isOpen={isOpen}
            onClose={onClose}
            className="justify-end"
        >
            <aside
                className={`
                    flex
                    h-full
                    w-full
                    max-w-[560px]

                    flex-col

                    bg-white

                    shadow-2xl

                    transition-all
                    duration-300
                    ease-out

                    ${
                        isOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                    }
                `}
            >

                {/* ==============================
                            CABECERA
                ============================== */}

                <header
                    className="
                        flex
                        items-center
                        justify-between

                        border-b
                        border-neutral-200

                        px-8
                        py-6
                    "
                >

                    <h2
                        className="
                            font-title

                            text-4xl

                            text-black
                        "
                    >
                        Cesta
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-13
                            w-13

                            items-center
                            justify-center

                            transition-opacity

                            hover:opacity-60
                        "
                        aria-label="Cerrar carrito"
                    >
                        <Image
                            src="/content/action_button/Cancel_Icon.svg"
                            alt=""
                            width={18}
                            height={18}
                        />
                    </button>

                </header>

                <div
                    className="
                        flex
                        flex-1
                        flex-col

                        overflow-hidden
                    "
                >

                    {/* Loading */}

                    {isLoading && (

                        <div
                            className="
                                flex
                                flex-1

                                items-center
                                justify-center

                                text-neutral-500
                            "
                        >
                            Cargando carrito...
                        </div>

                    )}

                    {/* Lista */}

                    {!isLoading && cart && (

                        <CartItemList
                            items={cart.items}
                        />

                    )}

                </div>

                {/* ==============================
                                FOOTER
                ============================== */}

                {!isLoading && cart && (

                    <footer
                        className="
                            border-t
                            border-neutral-200

                            bg-white

                            px-8
                            py-8
                        "
                    >

                        {/* Total */}

                        <div
                            className="
                                mb-8

                                flex
                                items-center
                                justify-between
                            "
                        >



                            <div
                                className="
                                    text-right
                                "
                            >

                                <p
                                    className="
                                        text-sm

                                        text-neutral-500
                                    "
                                >
                                    {cart.totalItems}
                                    {" "}
                                    servicio{cart.totalItems !== 1 && "s"}
                                </p>

                            </div>

                        </div>

                        {/* Botón */}

                        <CartSummary
                            summary={cart}
                            action={
                                <MainButton
                                    href="/carrito"
                                    className="w-full justify-center"
                                >
                                    {cart.hasMoreItems
                                        ? `Ver todos (${cart.totalItems})`
                                        : "Ver carrito"}
                                </MainButton>
                            }
                        />

                    </footer>

                )}

            </aside>

        </Overlay>
    );
}