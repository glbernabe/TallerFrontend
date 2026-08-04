"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import Overlay from "./Overlay";

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
                    w-full

                    max-w-full
                    sm:max-w-[92%]
                    md:max-w-[88%]
                    lg:max-w-[820px]
                    xl:max-w-[860px]

                    rounded-sm

                    bg-white

                    shadow-xl

                    transition-all
                    duration-300
                    ease-out

                    ${
                        isOpen
                            ? "translate-y-0 opacity-100 scale-100"
                            : "-translate-y-3 opacity-0 scale-[0.985]"
                    }
                `}
            >
                {/* Cabecera */}
                <div
                    className="
                    flex
                    justify-end

                    px-8
                    pt-6
                    pb-4
                    "
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        transition-opacity

                        hover:opacity-60
                        "
                        aria-label="Cerrar búsqueda"
                    >
                        <Image
                            src="/content/action_button/Cancel_Icon.svg"
                            alt=""
                            width={18}
                            height={18}
                        />
                    </button>
                </div>

                {/* Barra de búsqueda */}
                <div className="px-8 pb-8">

                    <div
                        className="
                        flex
                        h-16
                        items-center

                        border
                        border-neutral-300

                        bg-white

                        px-6
                        "
                    >
                        <input
                            autoFocus
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="¿Cómo podemos ayudar?"
                            className="
                            flex-1

                            bg-transparent

                            text-xl

                            text-black

                            outline-none

                            placeholder:text-neutral-500
                            "
                        />

                        <Image
                            src="/content/action_button/Search_Black_Icon.svg"
                            alt=""
                            width={27}
                            height={27}
                        />
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