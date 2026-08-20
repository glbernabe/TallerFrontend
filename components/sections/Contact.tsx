import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import MainButton from "@/components/ui/MainButton";

export default function Contact() {
    return (
        <Section className="bg-neutral-950 py-32 text-white">

            <Container>

                <div
                    className="
                        grid
                        gap-16

                        lg:grid-cols-[1fr_1.2fr]
                        lg:items-center
                    "
                >

                    {/* Información */}

                    <div>

                        <h2
                            className="
                                font-title
                                text-5xl

                                md:text-6xl
                            "
                        >
                            Tu taller de vehículos industriales en Orihuela
                        </h2>

                        <p
                            className="
                                mt-6

                                max-w-xl

                                text-lg
                                leading-8

                                text-white/70
                            "
                        >
                            Estamos en Orihuela, Alicante, para ayudarte con el
                            mantenimiento, diagnosis y reparación de camiones,
                            furgonetas y vehículos comerciales.
                        </p>

                        <div className="mt-12 space-y-8">

                            <div>

                                <h3 className="font-title text-xl">
                                    Teléfono
                                </h3>

                                <a
                                    href="tel:+34966744466"
                                    className="
                                        mt-2
                                        block

                                        text-white/65

                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    966 744 466
                                </a>

                            </div>

                            <div>

                                <h3 className="font-title text-xl">
                                    Correo electrónico
                                </h3>

                                <a
                                    href="mailto:orihuela.ato@autotalleresorihuela.es"
                                    className="
                                        mt-2
                                        block

                                        text-white/65

                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    orihuela.ato@autotalleresorihuela.es
                                </a>

                            </div>

                            <div>

                                <h3 className="font-title text-xl">
                                    Horario
                                </h3>

                                <p className="mt-2 text-white/65">
                                    Lunes - Viernes
                                    <br />
                                    08:30 - 14:00
                                    <br />
                                    15:30 - 19:00
                                    <br /><br />
                                    Sábado
                                    <br />
                                    08:30 - 13:30
                                </p>

                            </div>

                        </div>

                        <div className="mt-12">

                            <MainButton
                                href="tel:+34966744466"
                            >
                                Llamar al taller
                            </MainButton>

                        </div>

                    </div>


                    {/* Ubicación */}

                    <div>

                        <div
                            className="
                                relative

                                flex
                                min-h-[500px]

                                flex-col
                                justify-between

                                overflow-hidden

                                rounded-2xl

                                border
                                border-white/10

                                bg-white/[0.03]

                                p-10
                                md:p-12
                            "
                        >

                            {/* Detalle visual sutil */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-32
                                    -top-32

                                    h-80
                                    w-80

                                    rounded-full

                                    border
                                    border-white/[0.04]
                                "
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20

                                    h-56
                                    w-56

                                    rounded-full

                                    border
                                    border-white/[0.04]
                                "
                            />


                            {/* Contenido */}

                            <div className="relative">

                                <p
                                    className="
                                        text-sm
                                        uppercase
                                        tracking-[0.2em]

                                        text-white/45
                                    "
                                >
                                    Nuestra ubicación
                                </p>

                                <h3
                                    className="
                                        mt-8

                                        max-w-md

                                        font-title

                                        text-5xl
                                        leading-[1.05]

                                        md:text-6xl
                                    "
                                >
                                    Orihuela,
                                    <br />
                                    Alicante
                                </h3>

                                <div
                                    className="
                                        mt-8

                                        h-px
                                        w-12

                                        bg-white/30
                                    "
                                />

                                <p
                                    className="
                                        mt-8

                                        max-w-sm

                                        text-lg
                                        leading-8

                                        text-white/60
                                    "
                                >
                                    Carretera Murcia-Alicante, km 28
                                    <br />
                                    03300 Orihuela, Alicante
                                </p>

                            </div>


                            {/* Acción */}

                            <div className="relative mt-12">

                                <MainButton
                                    href="https://www.google.com/maps/dir/?api=1&destination=Auto-Talleres+Orihuela,+Carretera+Murcia-Alicante,+km+28,+03300+Orihuela,+Alicante"
                                >
                                    Cómo llegar
                                </MainButton>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>

        </Section>
    );
}