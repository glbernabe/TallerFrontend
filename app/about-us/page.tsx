import type { Metadata } from "next";

import AboutSection from "@/components/sections/About";

export const metadata: Metadata = {

    title: "Sobre Nosotros",

    description:
        "Conoce Auto-Talleres Orihuela S.L., nuestro taller y nuestra experiencia en el mantenimiento, diagnosis y reparación de vehículos en Orihuela, Alicante.",

    alternates: {
        canonical: "/about-us",
    },

    openGraph: {

        title: "Sobre Nosotros",

        description:
            "Conoce Auto-Talleres Orihuela S.L., nuestro taller y nuestra experiencia en el mantenimiento, diagnosis y reparación de vehículos.",

        url: "/about-us",

        type: "website",

    },

};

export default function AboutUsPage() {

    return (

        <main className="bg-white text-black">

            {/* ==========================
                HERO
            ========================== */}

            <section
                className="
                    flex
                    min-h-[calc(100vh-72px)]

                    items-center

                    bg-black
                    text-white
                "
            >

                <div
                    className="
                        mx-auto
                        w-full
                        max-w-[1560px]

                        px-6
                        md:px-8
                        lg:px-10
                        xl:px-12
                    "
                >

                    <div
                        className="
                            max-w-5xl

                            animate-[textRiseAnimation_1.2s_ease-out_both]
                        "
                    >

                        <p
                            className="
                                mb-8

                                text-sm
                                uppercase

                                tracking-[0.2em]

                                text-white/60
                            "
                        >
                            Sobre nosotros
                        </p>

                        <h1
                            className="
                                font-title

                                text-6xl
                                leading-[0.95]

                                md:text-8xl

                                lg:text-[9rem]
                            "
                        >
                            Más que un taller.
                            <br />
                            Una forma de trabajar.
                        </h1>

                    </div>

                </div>

            </section>


            {/* ==========================
                INTRODUCCIÓN
            ========================== */}

            <AboutSection
                title="Una historia que queremos contar"
                body="
                    Detrás de cada vehículo hay una persona que confía
                    en nosotros. Por eso creemos que conocer quiénes somos,
                    cómo trabajamos y qué nos mueve es tan importante como
                    conocer los servicios que ofrecemos.
                "
            />


            {/* ==========================
                HISTORIA
            ========================== */}

            <AboutSection
                title="Nuestra historia"
                body="
                    Aquí contaremos la historia de Autotalleres Orihuela:
                    cómo comenzó el taller, cómo ha evolucionado con el
                    paso del tiempo y qué momentos han marcado nuestra
                    trayectoria.
                "
                image="/content/about-us/history.jpg"
                imageAlt="Instalaciones de Autotalleres Orihuela"
            />


            {/* ==========================
                FORMA DE TRABAJAR
            ========================== */}

            <AboutSection
                title="Nuestra forma de trabajar"
                body="
                    Apostamos por un trato cercano, un trabajo profesional
                    y una comunicación clara con nuestros clientes.
                    Cada vehículo recibe la atención que necesita y cada
                    intervención se realiza buscando ofrecer un servicio
                    de confianza.
                "
                image="/content/about-us/workshop.jpg"
                imageAlt="Trabajo en el taller"
                reverse
            />


            {/* ==========================
                EQUIPO
            ========================== */}

            <AboutSection
                title="Las personas detrás del taller"
                body="
                    Un taller no son solamente sus instalaciones o sus
                    herramientas. Son las personas que trabajan cada día
                    para mantener los vehículos de nuestros clientes en
                    las mejores condiciones posibles.
                "
                image="/content/about-us/team.jpg"
                imageAlt="Equipo de Autotalleres Orihuela"
            />


            {/* ==========================
                CIERRE
            ========================== */}

            <section
                className="
                    bg-black
                    text-white
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[1560px]

                        px-6
                        md:px-8
                        lg:px-10
                        xl:px-12

                        py-24
                        md:py-32
                        lg:py-40
                    "
                >

                    <div
                        className="
                            max-w-4xl
                        "
                    >

                        <h2
                            className="
                                font-title

                                text-5xl
                                leading-tight

                                md:text-7xl
                            "
                        >
                            Queremos que tu vehículo
                            esté en buenas manos.
                        </h2>

                    </div>

                </div>

            </section>

        </main>

    );

}