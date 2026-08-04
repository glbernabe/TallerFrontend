"use client";

import CartItem from "@/components/cart/CartItem";

import type { CartItem as CartItemModel } from "@/domain/cart/CartItem";

type Props = {
    items: CartItemModel[];

    /**
     * Muestra u oculta la cantidad (1x, 2x...)
     */
    showQuantity?: boolean;

    /**
     * Texto mostrado cuando el carrito está vacío.
     */
    emptyMessage?: string;
};

export default function CartItemList({
    items,
    showQuantity = true,
    emptyMessage = "Todavía no has añadido ningún servicio.",
}: Props) {

    if (items.length === 0) {

        return (
            <div
                className="
                    flex
                    flex-1

                    items-center
                    justify-center

                    px-8
                    py-16

                    text-center

                    text-neutral-500
                "
            >
                {emptyMessage}
            </div>
        );

    }

    return (

        <section
            className="
                flex-1

                overflow-y-auto
            "
        >

            {items.map((item, index) => (

                <CartItem
                    key={item.id}
                    item={item}
                    showQuantity={showQuantity}
                    isLast={index === items.length - 1}
                />

            ))}

        </section>

    );

}