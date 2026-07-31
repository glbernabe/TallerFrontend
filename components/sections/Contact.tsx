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
                            ¿Necesitas ayuda?
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
                            Nuestro equipo está disponible para ayudarte con
                            cualquier consulta sobre mantenimiento,
                            reparaciones, diagnosis o recambios originales
                            Mercedes-Benz.
                        </p>

                        <div className="mt-12 space-y-8">

                            <div>

                                <h3 className="font-title text-xl">
                                    Dirección
                                </h3>

                                <p className="mt-2 text-white/65">
                                    Autotalleres Orihuela
                                    <br />
                                    Calle XXXXX
                                    <br />
                                    Orihuela, Alicante
                                </p>

                            </div>

                            <div>

                                <h3 className="font-title text-xl">
                                    Teléfono
                                </h3>

                                <p className="mt-2 text-white/65">
                                    +34 965 XXX XXX
                                </p>

                            </div>

                            <div>

                                <h3 className="font-title text-xl">
                                    Correo electrónico
                                </h3>

                                <p className="mt-2 text-white/65">
                                    info@autotalleresorihuela.es
                                </p>

                            </div>

                            <div>

                                <h3 className="font-title text-xl">
                                    Horario
                                </h3>

                                <p className="mt-2 text-white/65">
                                    Lunes - Viernes
                                    <br />
                                    08:00 - 18:00
                                </p>

                            </div>

                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">

                            <MainButton href="/contacto">
                                Contactar
                            </MainButton>

                            <MainButton
                                href="/reservar-cita"
                                className="border border-white bg-transparent hover:bg-white hover:text-black"
                            >
                                Reservar cita
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
                                src="https://www.google.com/maps?q=Autotalleres+Orihuela&output=embed"
                                width="100%"
                                height="600"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>

                    </div>

                </div>

            </Container>

        </Section>
    );
}