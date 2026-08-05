"use client";

import Image from "next/image";

type Props = {
    onClick: () => void;
    icon?: string;
    ariaLabel?: string;
};

export default function OverlayCloseButton({
    onClick,
    ariaLabel = "Cerrar",
}: Props) {

    return (

        <button
            type="button"
            onClick={onClick}
            aria-label={ariaLabel}
            className="
                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                transition-all
                duration-200

                hover:bg-neutral-100
                hover:opacity-80
            "
        >

            <Image
                src="/content/action_button/Cancel_Icon.svg"
                alt=""
                width={18}
                height={18}
            />

        </button>

    );

}