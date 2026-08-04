"use client";

import { useEffect, useState } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
};

const ANIMATION_DURATION = 300;

export default function Overlay({
    isOpen,
    onClose,
    children,
    className = "",
}: Props) {

    /**
     * Indica si el overlay debe permanecer
     * montado mientras termina la animación.
     */
    const [isMounted, setIsMounted] = useState(isOpen);

    /**
     * Mantener el componente montado durante
     * la animación de salida.
     */
    useEffect(() => {

        if (isOpen) {

            setIsMounted(true);

            return;

        }

        const timeout = setTimeout(() => {

            setIsMounted(false);

        }, ANIMATION_DURATION);

        return () => clearTimeout(timeout);

    }, [isOpen]);

    /**
     * Bloquear scroll.
     */
    useEffect(() => {

        if (!isMounted) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {

            document.body.style.overflow = previousOverflow;

        };

    }, [isMounted]);

    /**
     * Cerrar con Escape.
     */
    useEffect(() => {

        if (!isMounted) return;

        const handleKeyDown = (event: KeyboardEvent) => {

            if (event.key === "Escape") {

                onClose();

            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, [isMounted, onClose]);

    if (!isMounted) return null;

    return (

        <div
            className={`
                fixed
                inset-0
                z-50

                transition-all
                duration-300
                ease-out

                ${
                    isOpen
                        ? "bg-black/20 opacity-100"
                        : "bg-black/0 opacity-0 pointer-events-none"
                }
            `}
            onClick={onClose}
        >

            <div
                className="
                    mx-auto

                    h-full
                    w-full
                    max-w-[1560px]

                    px-6
                    md:px-8
                    lg:px-10
                    xl:px-12

                    pt-[72px]
                "
            >

                <div
                    className={`
                        flex
                        w-full

                        transition-all
                        duration-300
                        ease-out

                        ${
                            isOpen
                                ? "opacity-100"
                                : "opacity-0"
                        }

                        ${className}
                    `}
                    onClick={(event) => event.stopPropagation()}
                >
                    {children}
                </div>

            </div>

        </div>

    );

}