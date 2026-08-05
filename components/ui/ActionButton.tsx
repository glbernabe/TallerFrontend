"use client";

import Image from "next/image";

type Props = {
    src: string;
    alt: string;

    onClick?: () => void;
};

export default function ActionButton({
    src,
    alt,
    onClick,
}: Props) {

    const className = `
        flex
        h-8
        w-8

        cursor-pointer

        items-center
        justify-center

        rounded

        transition-colors
        duration-150

        hover:bg-hover-darkgray
    `;

    const icon = (
        <Image
            src={src}
            alt={alt}
            width={20}
            height={20}
            className="pointer-events-none select-none"
        />
    );

    return (
        <button
            type="button"
            onClick={onClick}
            className={className}
            aria-label={alt}
        >
            {icon}
        </button>
    );
}
