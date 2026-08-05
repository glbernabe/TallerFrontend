"use client";

import Link from "next/link";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function SecondaryButton({
    href,
    children,
    className = "",
}: Props) {

    return (

        <Link
            href={href}
            className={`
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

                ${className}
            `}
        >
            {children}
        </Link>

    );

}