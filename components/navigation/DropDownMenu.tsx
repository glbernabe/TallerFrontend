"use client";

import {useTranslations} from "next-intl";
import {useState} from "react";

import {Link} from "@/i18n/navigation";

import type {NavItem} from "./navigation";

type DropdownMenuProps = {
    items: NavItem[];
};

export default function DropdownMenu({
    items,
}: DropdownMenuProps) {
    return (
        <div
            className="
                absolute
                right-0
                top-full
                z-[100]

                pt-3

                animate-dropdown-in
            "
        >
            <div
                className="
                    min-w-[280px]

                    overflow-visible

                    border
                    border-white/15

                    bg-[#111111]

                    py-1

                    shadow-[0_18px_45px_rgba(0,0,0,0.45)]
                "
            >
                {items.map((item, index) => (
                    <DropdownItem
                        key={item.key}
                        item={item}
                        isLast={
                            index === items.length - 1
                        }
                    />
                ))}
            </div>
        </div>
    );
}

type DropdownItemProps = {
    item: NavItem;
    isLast: boolean;
};

function DropdownItem({
    item,
    isLast,
}: DropdownItemProps) {
    const [isOpen, setIsOpen] =
        useState(false);

    const t =
        useTranslations("Navigation");

    const hasChildren =
        Array.isArray(item.children) &&
        item.children.length > 0;

    /*
     * ELEMENTO SIN SUBMENÚ
     */
    if (!hasChildren) {
        if (!item.href) {
            return null;
        }

        return (
            <Link
                href={item.href}
                className={`
                    flex
                    items-center
                    justify-between

                    px-5
                    py-3.5

                    font-text
                    text-sm
                    font-medium

                    text-white

                    transition-colors
                    duration-200

                    hover:bg-white/5

                    ${
                        !isLast
                            ? "border-b border-white/10"
                            : ""
                    }
                `}
            >
                {t(item.key)}
            </Link>
        );
    }

    /*
     * ELEMENTO CON SUBMENÚ
     */
    return (
        <div
            className="relative"
            onMouseEnter={() =>
                setIsOpen(true)
            }
            onMouseLeave={() =>
                setIsOpen(false)
            }
        >
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();

                    setIsOpen(
                        (current) => !current
                    );
                }}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className={`
                    flex
                    w-full
                    items-center
                    justify-between

                    px-5
                    py-3.5

                    font-text
                    text-sm
                    font-medium

                    text-white

                    transition-colors
                    duration-200

                    hover:bg-white/5

                    ${
                        isOpen
                            ? "bg-white/5"
                            : ""
                    }

                    ${
                        !isLast
                            ? "border-b border-white/10"
                            : ""
                    }
                `}
            >
                <span>
                    {t(item.key)}
                </span>

                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`
                        shrink-0

                        transition-transform
                        duration-200

                        ${
                            isOpen
                                ? "rotate-90"
                                : ""
                        }
                    `}
                    aria-hidden="true"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="
                        absolute
                        left-full
                        top-0
                        z-[110]

                        pl-1

                        animate-dropdown-sub-in
                    "
                >
                    <div
                        className="
                            min-w-[240px]

                            overflow-visible

                            border
                            border-white/15

                            bg-[#111111]

                            py-1

                            shadow-[0_18px_45px_rgba(0,0,0,0.45)]
                        "
                    >
                        {item.children!.map(
                            (child, index) => (
                                <DropdownItem
                                    key={child.key}
                                    item={child}
                                    isLast={
                                        index ===
                                        item.children!
                                            .length - 1
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}