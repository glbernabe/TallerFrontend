"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type InternalHref = ComponentProps<typeof Link>["href"];

type Props = {

    children: React.ReactNode;

    className?: string;

    href?: string;

    onClick?: () => void;

    disabled?: boolean;

    type?: "button" | "submit";

};

export default function SecondaryButton({

    children,

    href,

    onClick,

    disabled = false,

    type = "button",

    className = "",

}: Props) {

    const classes = `
        flex

        h-14
        w-fit

        items-center
        justify-center

        gap-3

        rounded-sm

        border
        border-neutral-300

        bg-white

        px-6

        text-base
        font-medium

        text-black

        transition-all
        duration-300

        hover:border-neutral-900
        hover:bg-neutral-50

        active:scale-[0.99]

        disabled:cursor-not-allowed
        disabled:opacity-50

        ${className}
    `;

    if (href) {
        const isInternalHref = href.startsWith("/") && !href.startsWith("//");

        if (isInternalHref) {
            return (
                <Link href={href as InternalHref} className={classes}>
                    {children}
                </Link>
            );
        }

        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (

        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
        </button>

    );

}