import Image from "next/image";

import type { Metadata } from "next";

import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export const metadata: Metadata = {

    title: "Contacto",

    description:
        "Contacta con Auto-Talleres Orihuela S.L. Estamos en Orihuela, Alicante. Consulta nuestra ubicación, teléfono, correo electrónico y horario de atención.",

    alternates: {
        canonical: "/contacto",
    },

    openGraph: {

        title: "Contacto",

        description:
            "Encuentra Auto-Talleres Orihuela S.L. en Orihuela, Alicante. Consulta nuestra ubicación, teléfono, correo electrónico y horario.",

        url: "/contacto",

        type: "website",

    },

};

export default function ContactPage() {

    return (

        <main className="bg-black text-white">

            {/* ==========================
                HERO CONTACTO
            ========================== */}

            <section
                className="
                    relative
                    min-h-[calc(100vh-72px)]

                    overflow-hidden
                "
            >

                {/* Imagen */}

                <Image
                    src="/content/images/Assistance_client.webp"
                    alt="Asistencia de vehículos"
                    fill
                    priority
                    className="
                        object-cover
                    "
                />

                {/* Oscurecimiento */}

                <div
                    className="
                        absolute
                        inset-0

                        bg-black/55
                    "
                />

                {/* Gradiente inferior */}

                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0

                        h-1/2

                        bg-gradient-to-t
                        from-black
                        to-transparent
                    "
                />

                {/* Contenido */}

                <div
                    className="
                        relative
                        z-10

                        flex
                        min-h-[calc(100vh-72px)]

                        items-end
                    "
                >

                    <div
                        className="
                            mx-auto
                            w-full
                            max-w-[1560px]

                            px-6
                            pb-20

                            md:px-8
                            md:pb-24

                            lg:px-10
                            lg:pb-28

                            xl:px-12
                        "
                    >

                        <div
                            className="
                                max-w-4xl

                                animate-[textRiseAnimation_1.1s_ease-out_both]
                            "
                        >

                            <p
                                className="
                                    mb-6

                                    text-sm
                                    uppercase

                                    tracking-[0.2em]

                                    text-white/70
                                "
                            >
                                Contacto
                            </p>

                            <h1
                                className="
                                    font-title

                                    text-6xl
                                    leading-[0.95]

                                    md:text-8xl

                                    lg:text-[8rem]
                                "
                            >
                                Estamos aquí
                                <br />
                                para ayudarte.
                            </h1>

                            <p
                                className="
                                    mt-8

                                    max-w-2xl

                                    text-lg
                                    leading-8

                                    text-white/80

                                    md:text-xl
                                "
                            >
                                ¿Necesitas asistencia, tienes alguna consulta
                                o quieres hablar con nuestro equipo?
                                Ponte en contacto directamente con nosotros.
                            </p>

                            {/* Acciones */}

                            <div
                                className="
                                    mt-10

                                    flex
                                    flex-wrap

                                    gap-4
                                "
                            >

                                <MainButton
                                    href="tel:+34966744466"
                                >
                                    Llamar al taller
                                </MainButton>

                                <SecondaryButton
                                    href="mailto:orihuela.ato@autotalleresorihuela.es"
                                    className="
                                        border-white/40
                                        bg-white/10
                                        text-white

                                        backdrop-blur-sm

                                        hover:bg-white
                                        hover:text-black
                                    "
                                >
                                    Enviar un correo
                                </SecondaryButton>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==========================
                INFORMACIÓN
            ========================== */}

            <section
                className="
                    bg-black

                    py-20

                    md:py-28
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
                    "
                >

                    <div
                        className="
                            grid
                            gap-12

                            md:grid-cols-3
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/50
                                "
                            >
                                Teléfono
                            </p>

                            <a
                                href="tel:+34966744466"
                                className="
                                    mt-3
                                    block

                                    font-title
                                    text-2xl

                                    transition-opacity
                                    hover:opacity-60
                                "
                            >
                                966 74 44 66
                            </a>

                        </div>

                        <div>

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/50
                                "
                            >
                                Correo electrónico
                            </p>

                            <a
                                href="mailto:orihuela.ato@autotalleresorihuela.es"
                                className="
                                    mt-3
                                    block

                                    break-words

                                    font-title
                                    text-xl

                                    transition-opacity
                                    hover:opacity-60
                                "
                            >
                                orihuela.ato@autotalleresorihuela.es
                            </a>

                        </div>

                        <div>

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/50
                                "
                            >
                                Dirección
                            </p>

                            <p
                                className="
                                    mt-3

                                    text-lg
                                    leading-7

                                    text-white/80
                                "
                            >
                                Carretera Murcia-Alicante,
                                <br />
                                km 28
                                <br />
                                03300 Orihuela, Alicante
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}