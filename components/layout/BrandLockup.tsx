"use client";

import Logo from "./Logo";

export default function BrandLockup() {
    return (
        <div
            className="
                group
                flex
                items-center
                gap-3
                select-none
            "
            aria-label="Auto Talleres Orihuela"
        >
            <Logo />

            <div
                className="
                    relative
                    grid
                    shrink-0
                    overflow-hidden
                "
            >
                {/* 
                    Este texto invisible determina el ancho real
                    necesario para el nombre completo.
                */}
                <span
                    aria-hidden="true"
                    className="
                        invisible
                        col-start-1
                        row-start-1

                        whitespace-nowrap

                        font-title
                        text-base
                        font-medium
                        tracking-wide
                    "
                >
                    AUTO TALLERES ORIHUELA
                </span>

                {/* Nombre corto */}
                <span
                    className="
                        col-start-1
                        row-start-1

                        whitespace-nowrap

                        font-title
                        text-base
                        font-medium
                        tracking-wide

                        text-white

                        transition-opacity
                        duration-200

                        group-hover:opacity-0
                    "
                >
                    A. T. ORIHUELA
                </span>

                {/* Nombre completo */}
                <span
                    className="
                        pointer-events-none
                        absolute
                        inset-0

                        flex
                        items-center

                        whitespace-nowrap

                        font-title
                        text-base
                        font-medium
                        tracking-wide

                        text-white

                        opacity-0

                        transition-opacity
                        duration-200

                        group-hover:opacity-100
                    "
                >
                    AUTO TALLERES ORIHUELA
                </span>

                {/* Estela */}
                <span
                    aria-hidden="true"
                    className="
                        brand-sweep

                        pointer-events-none
                        absolute

                        top-[-15%]
                        bottom-[-15%]
                        left-[-35%]

                        w-[18%]

                        skew-x-[-20deg]

                        bg-white

                        opacity-0

                        blur-[2px]
                    "
                />
            </div>
        </div>
    );
}