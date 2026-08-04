import Link from "next/link";

import type { CartItem as CartItemModel } from "@/domain/cart/CartItem";

type Props = {
    item: CartItemModel;

    href?: string;

    showQuantity?: boolean;
    isLast?: boolean;
};

export default function CartItem({
    item,
    href,
    showQuantity = true,
    isLast = false,
}: Props) {

    const formattedPrice = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    }).format(item.price);

    const content = (
        <article
            className={`
                flex
                items-center
                justify-between

                px-8
                py-6

                transition-colors
                duration-200

                hover:bg-neutral-50

                ${!isLast ? "border-b border-neutral-200" : ""}
            `}
        >
            {/* Información */}
            <div className="flex flex-col">

                {showQuantity && (
                    <span
                        className="
                            text-sm
                            text-neutral-500
                        "
                    >
                        {(item.quantity ?? 1)}x
                    </span>
                )}

                <h3
                    className="
                        mt-1

                        font-title
                        text-[1.45rem]
                        leading-tight

                        text-black
                    "
                >
                    {item.title}
                </h3>

            </div>

            {/* Precio */}
            <span
                className="
                    whitespace-nowrap

                    font-text
                    text-xl

                    text-black
                "
            >
                {formattedPrice}
            </span>

        </article>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="block"
            >
                {content}
            </Link>
        );
    }

    return content;
}