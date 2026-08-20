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
                                Taller especializado en vehículos industriales,
                                camiones y furgonetas. Mantenimiento, diagnosis
                                y reparación para profesionales y empresas.
                            </p>

                        </div>

                        <div>

                            <h3 className="font-title text-lg">
                                Servicios
                            </h3>

                            <ul
                                className="
                                    mt-6
                                    space-y-3

                                    text-white/60
                                "
                            >

                                <li>Mantenimiento</li>
                                <li>Diagnosis</li>
                                <li>Reparaciones</li>
                                <li>Vehículo industrial</li>

                            </ul>

                        </div>

                        <FooterColumn
                            title="Empresa"
                            links={[
                                {
                                    label: "Sobre nosotros",
                                    href: "/about-us",
                                },
                                {
                                    label: "Contacto",
                                    href: "/contacto",
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
                            text-white/50

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
