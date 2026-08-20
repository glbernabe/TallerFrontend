"use client";

import Image from "next/image";

import NavButton from "@/components/ui/NavButton";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileMenu({
    isOpen,
    onClose,
}: Props) {
    return (
        <>
            {/* Fondo */}

            <div
                className={`
                    fixed
                    inset-0
                    z-40

                    bg-black/60
                    backdrop-blur-sm

                    transition-opacity
                    duration-300

                    ${
                        isOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                    }
                `}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel */}

            <aside
                className={`
                    fixed
                    inset-y-0
                    left-0
                    z-50

                    w-[min(85vw,420px)]

                    bg-neutral-950
                    text-white

                    shadow-2xl

                    transition-transform
                    duration-300
                    ease-out

                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
                aria-hidden={!isOpen}
            >

                {/* Cabecera */}

                <div
                    className="
                        flex
                        h-18

                        items-center
                        justify-end

                        border-b
                        border-white/10

                        px-6
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
                        aria-label="Cerrar menú"
                    >

                        <Image
                            src="/content/action_button/Cancel_Icon.svg"
                            alt=""
                            width={20}
                            height={20}
                        />

                    </button>

                </div>


                {/* Navegación */}

                <nav
                    className="
                        flex
                        flex-col

                        px-6
                        py-10
                    "
                >

                    <NavButton
                        href="/"
                        className="
                            h-auto
                            w-full
                            justify-start

                            rounded-none

                            border-b
                            border-white/10

                            px-2
                            py-5

                            text-xl

                            hover:bg-transparent
                        "
                    >
                        Inicio
                    </NavButton>

                    <NavButton
                        href="/servicios"
                        className="
                            h-auto
                            w-full
                            justify-start

                            rounded-none

                            border-b
                            border-white/10

                            px-2
                            py-5

                            text-xl

                            hover:bg-transparent
                        "
                    >
                        Servicios
                    </NavButton>

                    <NavButton
                        href="/contacto"
                        className="
                            h-auto
                            w-full
                            justify-start

                            rounded-none

                            border-b
                            border-white/10

                            px-2
                            py-5

                            text-xl

                            hover:bg-transparent
                        "
                    >
                        Contacto
                    </NavButton>

                    <NavButton
                        href="/about-us"
                        className="
                            h-auto
                            w-full
                            justify-start

                            rounded-none

                            px-2
                            py-5

                            text-xl

                            hover:bg-transparent
                        "
                    >
                        Sobre Nosotros
                    </NavButton>

                </nav>

            </aside>
        </>
    );
}