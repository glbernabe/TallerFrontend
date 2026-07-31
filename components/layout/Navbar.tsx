import Logo from "./Logo";

import NavButton from "@/components/ui/NavButton";
import ActionButton from "@/components/ui/ActionButton";

export default function Navbar() {
    return (
        <header className="h-18 border-b border-white/20 bg-black text-white">

            <div className="mx-auto h-full max-w-[1560px] px-6 md:px-8 lg:px-10 xl:px-12">

                <div className="grid h-full grid-cols-3 items-center">

                    {/* IZQUIERDA */}
                    <div className="flex items-center justify-start">

                        {/* Navegación escritorio */}
                        <nav className="hidden md:flex items-center gap-6">

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

                        {/* Botón hamburguesa móvil */}
                        <div className="flex md:hidden">

                            <ActionButton
                                href="#"
                                src="/content/action_button/Hamburger_List_Icon.svg"
                                alt="Abrir menú"
                            />

                        </div>

                    </div>

                    {/* CENTRO */}
                    <div className="flex justify-center">

                        <Logo />

                    </div>

                    {/* DERECHA */}
                    <div className="flex items-center justify-end gap-2 md:gap-4">

                        <ActionButton
                            href="/buscar"
                            src="/content/action_button/Search_Icon.svg"
                            alt="Buscar"
                        />

                        <ActionButton
                            href="/carrito"
                            src="/content/action_button/Shopping_Icon.svg"
                            alt="Carrito"
                        />

                        <ActionButton
                            href="/perfil"
                            src="/content/action_button/User_Icon.svg"
                            alt="Perfil"
                        />

                    </div>

                </div>

            </div>

        </header>
    );
}