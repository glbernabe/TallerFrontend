"use client";

import OverlayCloseButton from "./OverlayCloseButton";

type Props = {
    onClose: () => void;

    /**
     * Título del overlay.
     * Si no existe, únicamente se mostrará
     * el botón de cerrar.
     */
    title?: string;

    /**
     * Texto opcional debajo del título.
     */
    description?: string;
};

export default function OverlayHeader({
    onClose,
    title,
    description,
}: Props) {

    return (

        <header
            className="
                border-b
                border-neutral-200

                px-8
                pt-6
                pb-6
            "
        >

            <div
                className="
                    flex
                    items-start
                    justify-between

                    gap-6
                "
            >

                <div
                    className="
                        flex-1
                        min-w-0
                    "
                >

                    {title && (

                        <h2
                            className="
                                font-title

                                text-4xl

                                text-black
                            "
                        >
                            {title}
                        </h2>

                    )}

                    {description && (

                        <p
                            className="
                                mt-4

                                text-base
                                leading-7

                                text-neutral-600
                            "
                        >
                            {description}
                        </p>

                    )}

                </div>

                <OverlayCloseButton
                    onClick={onClose}
                />

            </div>

        </header>

    );

}