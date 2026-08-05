"use client";

import { useEffect } from "react";

import { OVERLAY } from "@/core/common/design/overlays";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
};

export default function Overlay({
    isOpen,
    onClose,
    children,
    className = "",
}: Props) {

    useEffect(() => {

        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {

            document.body.style.overflow = previousOverflow;

        };

    }, [isOpen]);

    useEffect(() => {

        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {

            if (event.key === "Escape") {

                onClose();

            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50

                bg-black/20
                opacity-100
            "
            onClick={onClose}
        >

            <div
                className={`
                    mx-auto

                    h-[calc(100dvh-72px)]
                    w-full
                    max-w-[1560px]

                    ${OVERLAY.contentPadding}

                    mt-[72px]
                `}
            >

                <div
                    className={`
                        flex
                        w-full

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
