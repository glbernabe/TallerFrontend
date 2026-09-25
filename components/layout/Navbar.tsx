"use client";

import { useState } from "react";

import BrandLockup from "./BrandLockup";

import NavButton from "@/components/navigation/NavButton";
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";

import MobileMenu from "@/components/overlays/MobileMenu";

import ActionButton from "@/components/ui/ActionButton";

import { navigation } from "@/components/navigation/navigation";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    return (
        <header
            className="
                h-18
                border-b
                border-white/20
                bg-black
                text-white
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    h-full
                    w-full
                    max-w-[1560px]

                    items-center
                    justify-between

                    px-6
                    md:px-8
                    lg:px-10
                    xl:px-12
                "
            >
                {/* IZQUIERDA */}

                <div
                    className="
                        flex
                        min-w-0
                        shrink-0
                        items-center
                    "
                >
                    <BrandLockup />
                </div>

                {/* DERECHA */}

                <div className="flex items-center">

                    {/* NAVEGACIÓN DESKTOP */}

                    <nav
                        className="
                            hidden
                            items-center
                            gap-6
                            lg:flex
                        "
                        aria-label="Navegación principal"
                    >
                        {navigation.map((item) => (
                            <NavButton
                                key={item.key}
                                item={item}
                            />
                        ))}

                        <LanguageSwitcher />
                    </nav>

                    {/* MENÚ MÓVIL */}

                    <div className="flex lg:hidden">
                        <ActionButton
                            src="/content/action_button/Hamburger_List_Icon.svg"
                            alt="Abrir menú"
                            onClick={() =>
                                setIsMobileMenuOpen(true)
                            }
                        />
                    </div>
                </div>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() =>
                    setIsMobileMenuOpen(false)
                }
            />
        </header>
    );
}