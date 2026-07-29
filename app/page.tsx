import "./globals.css";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NavButton from "@/components/ui/NavButton";
import Logo from "@/components/layout/Logo";
import MainButton from "@/components/ui/MainButton";
import ActionButton from "@/components/ui/ActionButton";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar
                left={
                    <>
                        <NavButton href="/">Inicio</NavButton>
                        <NavButton href="/servicios">Servicios</NavButton>
                        <NavButton href="/contacto">Contacto</NavButton>
                    </>
                }
                center={<Logo />}
                right={
                    <>
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
                    </>
                }
                mobileMenuButton={
                    <ActionButton
                        href="#"
                        src="/content/action_button/Hamburger_List_Icon.svg"
                        alt="Abrir menú"
                    />
                }
            />

            <Section className="relative h-screen min-h-[700px] overflow-hidden">

                {/* Fondo */}
                <div className="absolute inset-0">

                    <Image
                        src="/content/images/background/Mercedes_Benz_Pattern.jpeg"
                        alt=""
                        fill
                        priority
                        quality={100}
                        className="object-cover object-center"
                    />

                    {/* Oscurecer ligeramente */}
                    <div className="absolute inset-0 bg-black/55" />

                    {/* Degradado izquierdo */}
                    <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

                    {/* Degradado inferior */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />

                </div>

                {/* Contenido */}
                <Container className="relative z-10 flex h-full">

                    <div
                        className="
                flex
                flex-col
                justify-start

                pt-[22vh]

                sm:pt-[21vh]

                md:pt-[20vh]

                lg:pt-[19vh]

                xl:pt-[18vh]

                2xl:pt-[17vh]

                max-w-[760px]
            "
                    >

                        <h1
                            className="
                    font-title
                    text-white
                    tracking-[-0.02em]

                    text-[2.3rem]
                    leading-[1.12]

                    sm:text-[3rem]

                    md:text-[3.8rem]

                    lg:text-[4.5rem]

                    xl:text-[5rem]

                    2xl:text-[5.6rem]
                "
                        >
                            Servicio Oficial
                            <br />
                            Mercedes-Benz
                            <br />
                            Autotalleres Orihuela
                        </h1>

                        <p
                            className="
                    mt-5

                    max-w-[650px]

                    text-white/90

                    text-base
                    sm:text-lg
                    md:text-xl
                    xl:text-2xl

                    leading-relaxed
                "
                        >
                            Mantenimiento, diagnosis y reparación.
                        </p>

                        <div className="mt-10">
                            <MainButton href="#">
                                Reserva ahora
                            </MainButton>
                        </div>

                    </div>

                </Container>

            </Section>

            <Section>
                <Container>
                    <h2 className="mb-8 text-3xl font-semibold">
                        Servicios destacados
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border p-6">
                            Cambio de aceite
                        </div>

                        <div className="rounded-xl border p-6">
                            Cambio de frenos
                        </div>

                        <div className="rounded-xl border p-6">
                            Revisión oficial
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-neutral-900 text-white">
                <Container>
                    <h2 className="text-3xl font-semibold">
                        Reserva tu cita
                    </h2>

                    <p className="mt-4 max-w-xl">
                        Elige el servicio que necesitas y reserva tu cita online en pocos minutos.
                    </p>
                </Container>
            </Section>
        </>
    );
}