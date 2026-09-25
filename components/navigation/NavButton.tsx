"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import DropdownMenu from "./DropDownMenu";
import type { NavItem } from "./navigation";

type NavButtonProps = {
    item: NavItem;
};

export default function NavButton({
    item,
}: NavButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const t = useTranslations("Navigation");

    const hasChildren =
        !!item.children &&
        item.children.length > 0;

    /*
     * ENLACE NORMAL
     */
    if (!hasChildren) {
        if (!item.href) {
            return null;
        }

        return (
            <Link
                href={item.href}
                className="
                    relative
                    inline-flex
                    items-center

                    py-2

                    font-text
                    text-sm
                    font-medium

                    text-white

                    transition-colors
                    duration-200

                    hover:text-white/70
                "
            >
                {t(item.key)}
            </Link>
        );
    }

    /*
     * DROPDOWN
     */
    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                type="button"
                onClick={() =>
                    setIsOpen((current) => !current)
                }
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="
                    inline-flex
                    items-center
                    gap-2

                    py-2

                    font-text
                    text-sm
                    font-medium

                    text-white

                    transition-colors
                    duration-200

                    hover:text-white/70
                "
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-180" : ""}
                    `}
                    aria-hidden="true"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {isOpen && item.children && (
                <DropdownMenu
                    items={item.children}
                />
            )}
        </div>
    );
}