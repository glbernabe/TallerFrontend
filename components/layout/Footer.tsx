import Container from "./Container";

import Logo from "./Logo";

import FooterColumn from "../ui/FooterColumn";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black text-white">

            <Container>

                <div className="py-20">

                    {/* Parte superior */}

                    <div
                        className="
                            grid
                            gap-16

                            lg:grid-cols-[1.2fr_1fr_1fr_1fr]
                        "
                    >

                        {/* Empresa */}

                        <div>

                            <Logo />

                            <p
                                className="
                                    mt-8
                                    max-w-sm

                                    leading-8

                                    text-white/65
                                "
                            >
                                Servicio Oficial Mercedes-Benz especializado
                                en mantenimiento, diagnosis y reparación.
                                Comprometidos con la calidad y la confianza
                                en cada intervención.
                            </p>

                        </div>

                        <FooterColumn
                            title="Servicios"
                            links={[
                                {
                                    label: "Mantenimiento",
                                    href: "/servicios/mantenimiento",
                                },
                                {
                                    label: "Diagnosis",
                                    href: "/servicios/diagnosis",
                                },
                                {
                                    label: "Reparaciones",
                                    href: "/servicios/reparaciones",
                                },
                                {
                                    label: "Recambios",
                                    href: "/servicios/recambios",
                                },
                            ]}
                        />

                        <FooterColumn
                            title="Empresa"
                            links={[
                                {
                                    label: "Sobre nosotros",
                                    href: "/empresa",
                                },
                                {
                                    label: "Contacto",
                                    href: "/contacto",
                                },
                                {
                                    label: "Reservar cita",
                                    href: "/reservar-cita",
                                },
                            ]}
                        />

                        <FooterColumn
                            title="Información"
                            links={[
                                {
                                    label: "Aviso legal",
                                    href: "/legal",
                                },
                                {
                                    label: "Política de privacidad",
                                    href: "/privacidad",
                                },
                                {
                                    label: "Cookies",
                                    href: "/cookies",
                                },
                            ]}
                        />

                    </div>

                    {/* Línea */}

                    <div className="my-16 border-t border-white/10" />

                    {/* Parte inferior */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-6

                            text-sm
                            text-white/45

                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >

                        <p>
                            © {new Date().getFullYear()} Autotalleres Orihuela.
                            Todos los derechos reservados.
                        </p>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-6
                            "
                        >

                            <span>
                                Mercedes-Benz® es una marca registrada de
                                Mercedes-Benz Group AG.
                            </span>

                        </div>

                    </div>

                </div>

            </Container>

        </footer>
    );
}