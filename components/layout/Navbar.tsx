"use client";

import { useState } from "react";

import Logo from "./Logo";

import NavButton from "@/components/ui/NavButton";
import ActionButton from "@/components/ui/ActionButton";
import MobileMenu from "@/components/overlays/MobileMenu";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

                    h-full
                    max-w-[1560px]

                    px-6
                    md:px-8
                    lg:px-10
                    xl:px-12
                "
            >

                <div
                    className="
                        grid
                        h-full

                        grid-cols-3

                        items-center
                    "
                >

                    {/* ==========================
                        IZQUIERDA
                    ========================== */}

                    <div
                        className="
                            flex
                            items-center
                            justify-start
                        "
                    >

                        <nav
                            className="
                                hidden
                                md:flex

                                items-center

                                gap-6
                            "
                        >

                            <NavButton href="/">
                                Inicio
                            </NavButton>

                            <NavButton href="/servicios">
                                Servicios
                            </NavButton>

                            <NavButton href="/contacto">
                                Contacto
                            </NavButton>

                        </nav>

                        <div
                            className="
                                flex
                                md:hidden
                            "
                        >

                            <ActionButton
                                src="/content/action_button/Hamburger_List_Icon.svg"
                                alt="Abrir menú"
                                onClick={() =>
                                    setIsMobileMenuOpen(true)
                                }
                            />

                        </div>

                    </div>

                    {/* ==========================
                        CENTRO
                    ========================== */}

                    <div
                        className="
                            flex
                            justify-center
                        "
                    >

                        <Logo />

                    </div>

                    {/* ==========================
                        DERECHA
                    ========================== */}

                    <div
                        className="
                            flex
                            items-center
                            justify-end
                        "
                    >

                        <NavButton href="/about-us">
                            Sobre Nosotros
                        </NavButton>

                    </div>

                </div>

            </div>

            {/* ==========================
                MENÚ MÓVIL
            ========================== */}

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() =>
                    setIsMobileMenuOpen(false)
                }
            />

        </header>

    );

}