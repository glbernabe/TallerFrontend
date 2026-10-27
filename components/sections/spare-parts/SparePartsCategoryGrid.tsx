
"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const categories = [
    { key: "oils", image: "/images/spare-parts/aceites.webp" },
    { key: "tires", image: "/images/spare-parts/neumaticos.webp" },
    { key: "filters", image: "/images/spare-parts/filtros.webp" },
    { key: "brakes", image: "/images/spare-parts/frenos.webp" },
    { key: "antifreeze", image: "/images/spare-parts/anticongelantes.webp" },
    {
        key: "beltsRadiators",
        image: "/images/spare-parts/correas-radiadores.webp",
    },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

export default function SparePartsCategoryGrid() {
    const t = useTranslations("SparePartsIndividuals");
    const [openCategory, setOpenCategory] =
        useState<CategoryKey | null>(null);

    return (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
                const isOpen = openCategory === category.key;
                const title = t(
                    `categories.${category.key}.title` as never
                );

                return (
                    <article
                        key={category.key}
                        className="
                            min-w-0 overflow-hidden rounded-sm
                            border border-black/10 bg-white
                            shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                            transition-shadow duration-300
                            hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                        "
                    >
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`spare-parts-${category.key}`}
                            aria-label={t(
                                `${isOpen ? "closeDetails" : "openDetails"}` as never,
                                { category: title } as never
                            )}
                            onClick={() =>
                                setOpenCategory(
                                    isOpen ? null : category.key
                                )
                            }
                            className="
                                group relative block aspect-[2/1] w-full
                                overflow-hidden bg-neutral-200
                                text-left focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-inset
                                focus-visible:ring-[#102b4e]
                            "
                        >
                            <Image
                                src={category.image}
                                alt={title}
                                fill
                                sizes="
                                    (max-width: 639px) 100vw,
                                    (max-width: 1279px) 50vw,
                                    33vw
                                "
                                className="
                                    object-cover
                                    transition-transform duration-700
                                    ease-out group-hover:scale-105
                                    motion-reduce:transition-none
                                    motion-reduce:transform-none
                                "
                            />

                            <span
                                className="
                                    absolute inset-0
                                    bg-gradient-to-t
                                    from-black/35 via-transparent
                                    to-transparent
                                    transition-colors duration-300
                                    group-hover:from-black/45
                                "
                                aria-hidden="true"
                            />

                            <span
                                className="
                                    absolute right-4 top-4
                                    flex h-10 w-10 items-center
                                    justify-center rounded-full
                                    border border-white/60
                                    bg-[#102b4e]/85 text-2xl
                                    font-light text-white
                                    shadow-md backdrop-blur-sm
                                    transition-transform duration-300
                                "
                                aria-hidden="true"
                            >
                                <span
                                    className={
                                        isOpen
                                            ? "rotate-45 transition-transform duration-300"
                                            : "transition-transform duration-300"
                                    }
                                >
                                    +
                                </span>
                            </span>
                        </button>

                        <div className="px-5 py-4">
                            <h2
                                className="
                                    font-title text-2xl
                                    leading-tight text-[#111820]
                                "
                            >
                                {title}
                            </h2>
                        </div>

                        <div
                            id={`spare-parts-${category.key}`}
                            aria-hidden={!isOpen}
                            className={`
                                grid transition-[grid-template-rows,opacity]
                                duration-500 ease-in-out
                                motion-reduce:transition-none
                                ${
                                    isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }
                            `}
                        >
                            <div className="min-h-0 overflow-hidden">
                                <div
                                    className={`
                                        border-t border-black/10
                                        px-5 pb-6 pt-5
                                        transition-transform duration-300
                                        motion-reduce:transition-none
                                        ${
                                            isOpen
                                                ? "translate-y-0"
                                                : "-translate-y-2"
                                        }
                                    `}
                                >
                                    <p
                                        className="
                                            font-text text-sm
                                            leading-6 text-black/75
                                        "
                                    >
                                        {t(
                                            `categories.${category.key}.description` as never
                                        )}
                                    </p>

                                    {category.key === "tires" && (
                                        <p
                                            className="
                                                mt-3 border-l-2
                                                border-[#102b4e]/50
                                                pl-3 font-text text-sm
                                                leading-6 text-black/60
                                            "
                                        >
                                            {t("shippingNotice")}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
