"use client";

import Link from "next/link";

import {
    navigation,
    type NavItem,
} from "@/components/navigation/navigation";

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileMenu({
    isOpen,
    onClose,
}: MobileMenuProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="
                fixed
                inset-0
                z-[100]

                bg-black
                text-white

                md:hidden
            "
        >
            <div className="flex h-full flex-col">

                <div
                    className="
                        flex
                        h-18
                        items-center
                        justify-between

                        border-b
                        border-white/20

                        px-6
                    "
                >
                    <span className="font-title text-lg">
                        Menú
                    </span>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            p-2
                            text-white
                            transition-opacity
                            hover:opacity-60
                        "
                        aria-label="Cerrar menú"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                <nav
                    className="
                        flex-1
                        overflow-y-auto

                        px-6
                        py-8
                    "
                    aria-label="Navegación móvil"
                >
                    <div className="space-y-2">
                        {navigation.map((item) => (
                            <MobileNavItem
                                key={item.label}
                                item={item}
                                onClose={onClose}
                            />
                        ))}
                    </div>
                </nav>

            </div>
        </div>
    );
}

type MobileNavItemProps = {
    item: NavItem;
    onClose: () => void;
};

function MobileNavItem({
    item,
    onClose,
}: MobileNavItemProps) {
    const hasChildren =
        !!item.children &&
        item.children.length > 0;

    if (!hasChildren) {
        return (
            <Link
                href={item.href ?? "#"}
                onClick={onClose}
                className="
                    block
                    py-3
                    font-text
                    text-lg
                    font-medium
                "
            >
                {item.label}
            </Link>
        );
    }

    return (
        <details className="group">
            <summary
                className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between

                    py-3

                    font-text
                    text-lg
                    font-medium
                "
            >
                <span>
                    {item.label}
                </span>

                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="
                        transition-transform
                        duration-200
                        group-open:rotate-180
                    "
                    aria-hidden="true"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </summary>

            <div
                className="
                    ml-4
                    border-l
                    border-white/20
                    pl-4
                "
            >
                {item.children?.map((child) => (
                    <MobileNavItem
                        key={child.label}
                        item={child}
                        onClose={onClose}
                    />
                ))}
            </div>
        </details>
    );
}