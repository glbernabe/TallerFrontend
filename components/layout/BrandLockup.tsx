"use client";

import { useState } from "react";

import Logo from "./Logo";

export default function BrandLockup() {
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleMouseEnter = () => {
        if (!hasAnimated) {
            setHasAnimated(true);
        }
    };

    return (
        <div
            className="
                flex
                items-center
                gap-3
                select-none
            "
            onMouseEnter={handleMouseEnter}
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
                {/* Medidor de anchura */}
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
                    className={`
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

                        ${hasAnimated
                            ? "opacity-0"
                            : "opacity-100"
                        }
                    `}
                >
                    A. T. ORIHUELA
                </span>

                {/* Nombre completo */}
                <span
                    className={`
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

                        transition-opacity
                        duration-200

                        ${hasAnimated
                            ? "opacity-100"
                            : "opacity-0"
                        }
                    `}
                >
                    AUTO TALLERES ORIHUELA
                </span>

                {/* Estela */}
                <span
                    aria-hidden="true"
                    className={`
                        brand-sweep

                        pointer-events-none
                        absolute

                        top-[-15%]
                        bottom-[-15%]
                        left-[-35%]

                        w-[18%]

                        skew-x-[-20deg]

                        bg-white

                        blur-[2px]

                        ${hasAnimated
                            ? "brand-sweep--active"
                            : ""
                        }
                    `}
                />
            </div>
        </div>
    );
}