"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import Overlay from "./Overlay";
import { OVERLAY } from "@/core/common/design/overlays";
import OverlayHeader from "./OverlayHeader";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const mockResults = [
    "Cambio de aceite",
    "Revisión oficial",
    "Diagnóstico electrónico",
    "Cambio de frenos",
    "Neumáticos",
    "Mantenimiento",
    "Climatización",
    "Baterías",
];

export default function SearchOverlay({
    isOpen,
    onClose,
}: Props) {
    const [query, setQuery] = useState("");

    const results = useMemo(() => {
        if (!query.trim()) return [];

        return mockResults.filter((service) =>
            service.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    return (
        <Overlay
            isOpen={isOpen}
            onClose={onClose}
            className="justify-end"
        >
            <div
                className={`
                    ${OVERLAY.searchWidth}

                    rounded-sm

                    bg-white

                    shadow-2xl
                `}
            >
                {/* Cabecera */}
                <OverlayHeader
                    onClose={onClose}
                />

                {/* Barra de búsqueda */}
                <div className="px-8 pb-8">

                    <div
                        className="
                            flex

                            h-14
                            sm:h-16

                            items-center

                            gap-3

                            border
                            border-neutral-300

                            bg-white

                            px-4
                            sm:px-6
                        "
                    >
                        <input
                            autoFocus
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="¿Cómo podemos ayudar?"
                            className="
                                min-w-0
                                flex-1

                                bg-transparent

                                text-base
                                sm:text-xl

                                text-black

                                outline-none

                                placeholder:text-neutral-500
                            "
                        />

                        <div
                            className="
                                flex
                                h-6
                                w-6

                                shrink-0

                                items-center
                                justify-center
                            "
                        >
                            <Image
                                src="/content/action_button/Search_Black_Icon.svg"
                                alt=""
                                width={22}
                                height={22}
                            />
                        </div>
                    </div>
                </div>

                {/* Resultados */}
                {query.length > 0 && (
                    <div
                        className="
                        max-h-[420px]
                        overflow-y-auto

                        border-t
                        border-neutral-200
                        "
                    >
                        {results.length > 0 ? (
                            results.map((item) => (
                                <button
                                    key={item}
                                    className="
                                    flex
                                    w-full

                                    items-center

                                    px-8
                                    py-4

                                    text-left

                                    text-black

                                    transition-colors

                                    hover:bg-neutral-100
                                    "
                                >
                                    {item}
                                </button>
                            ))
                        ) : (
                            <div
                                className="
                                px-8
                                py-6

                                text-neutral-500
                                "
                            >
                                No se han encontrado resultados.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Overlay>
    );
}