"use client";

import Link from "next/link";

type Props = {
    children: React.ReactNode;
    className?: string;

    href?: string;
    onClick?: () => void;

    type?: "button" | "submit";
};

export default function MainButton({
    children,
    href,
    onClick,
    type = "button",
    className = "",
}: Props) {

    const classes = `
        inline-flex

        h-13

        items-center
        justify-center

        rounded

        px-7

        font-sans
        text-base
        font-medium
        leading-6

        text-white

        bg-(--blue-button)

        transition-colors
        duration-150
        ease-out

        hover:bg-(--hover-blue-button)
        active:bg-(--hover-blue-button)

        focus:outline-none
        focus:ring-2
        focus:ring-[#00ADEF]
        focus:ring-offset-2

        ${className}
    `;

    if (href) {

        return (

            <Link
                href={href}
                className={classes}
            >
                {children}
            </Link>

        );

    }

    return (

        <button
            type={type}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>

    );

}