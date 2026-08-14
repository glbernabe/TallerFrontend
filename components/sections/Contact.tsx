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
                                    Dirección
                                </h3>

                                <p className="mt-2 text-white/65">
                                    Auto-Talleres Orihuela
                                    <br />
                                    Carretera Murcia-Alicante, km 28
                                    <br />
                                    03300 Orihuela, Alicante
                                </p>

                            </div>

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
                                    08:00 - 20:00
                                    <br /><br />
                                    Sábado
                                    <br />
                                    08:00 - 13:00
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

                    {/* Mapa */}

                    <div>

                        <div
                            className="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                            "
                        >

                            <iframe
                                src="https://www.google.com/maps?q=Auto-Talleres+Orihuela,+Orihuela,+Alicante&output=embed"
                                width="100%"
                                height="600"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Auto-Talleres Orihuela"
                            />

                        </div>

                    </div>

                </div>

            </Container>

        </Section>
    );
}