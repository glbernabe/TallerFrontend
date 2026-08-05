"use client";

import { useState, useCallback } from "react";

import dynamic from "next/dynamic";

import Logo from "./Logo";

import NavButton from "@/components/ui/NavButton";
import ActionButton from "@/components/ui/ActionButton";

/* ==========================
   Dynamic Imports
========================== */

const SearchOverlay = dynamic(
    () => import("../overlays/SearchOverlay"),
    {
        ssr: false,
        loading: () => null,
    },
);

const CartOverlay = dynamic(
    () => import("../overlays/CartOverlay"),
    {
        ssr: false,
        loading: () => null,
    },
);

const ProfileOverlay = dynamic(
    () => import("../overlays/ProfileOverlay"),
    {
        ssr: false,
        loading: () => null,
    },
);

export default function Navbar() {

    /* ==========================
       Estados
    ========================== */

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    /* ==========================
       Handlers
    ========================== */

    const openSearch = useCallback(
        () => setIsSearchOpen(true),
        [],
    );

    const closeSearch = useCallback(
        () => setIsSearchOpen(false),
        [],
    );

    const openCart = useCallback(
        () => setIsCartOpen(true),
        [],
    );

    const closeCart = useCallback(
        () => setIsCartOpen(false),
        [],
    );

    const openProfile = useCallback(
        () => setIsProfileOpen(true),
        [],
    );

    const closeProfile = useCallback(
        () => setIsProfileOpen(false),
        [],
    );

    return (

        <>

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

                                gap-2
                                md:gap-4
                            "
                        >

                            <ActionButton
                                src="/content/action_button/Search_Icon.svg"
                                alt="Buscar"
                                onClick={openSearch}
                            />

                            <ActionButton
                                src="/content/action_button/Shopping_Icon.svg"
                                alt="Carrito"
                                onClick={openCart}
                            />

                            <ActionButton
                                src="/content/action_button/User_Icon.svg"
                                alt="Perfil"
                                onClick={openProfile}
                            />

                        </div>

                    </div>

                </div>

            </header>

            {/* ==========================
                Overlays
            ========================== */}

            {isSearchOpen && (

                <SearchOverlay
                    isOpen={isSearchOpen}
                    onClose={closeSearch}
                />

            )}

            {isCartOpen && (

                <CartOverlay
                    isOpen={isCartOpen}
                    onClose={closeCart}
                />

            )}

            {isProfileOpen && (

                <ProfileOverlay
                    isOpen={isProfileOpen}
                    onClose={closeProfile}
                />

            )}

        </>

    );

}