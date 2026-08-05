"use client";

import { CART } from "@/core/common/design/cart";
import { OVERLAY } from "@/core/common/design/overlays";

import Overlay from "./Overlay";
import OverlayHeader from "./OverlayHeader";

import CartItemList from "@/components/cart/CartItemList";
import CartSummary from "@/components/cart/CartSummary";
import MainButton from "@/components/ui/MainButton";

import { useCart } from "@/hooks/useCart";

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
    } = useCart(isOpen);

    const previewItems =
        cart?.items.slice(
            0,
            CART.previewItems,
        ) ?? [];

    const hasMoreItems =
        (cart?.totalItems ?? 0) > CART.previewItems;

    return (

        <Overlay
            isOpen={isOpen}
            onClose={onClose}
            className="justify-end"
        >
            <aside
                className={`
                    ${OVERLAY.drawerWidth}

                    rounded-sm

                    bg-white

                    shadow-2xl
                `}
            >
                <OverlayHeader
                    title="Carrito"
                    description="Vista previa de los servicios añadidos."
                    onClose={onClose}
                />

                {isLoading && (

                    <div className="px-8 py-16 text-center text-neutral-500">
                        Cargando carrito...
                    </div>

                )}

                {error && (

                    <div className="px-8 py-16 text-center text-neutral-500">
                        No se ha podido cargar el carrito.
                    </div>

                )}

                {!isLoading && !error && cart && (

                    <>
                        <CartItemList
                            items={previewItems}
                        />

                        {hasMoreItems && (

                            <p className="px-8 py-4 text-sm text-neutral-500">
                                Hay {cart.totalItems - CART.previewItems} servicios más en el carrito.
                            </p>

                        )}

                        <CartSummary
                            summary={cart}
                            action={(
                                <MainButton
                                    href="/carrito"
                                    className="w-full"
                                >
                                    Ver carrito
                                </MainButton>
                            )}
                        />
                    </>

                )}
            </aside>
        </Overlay>

    );

}
