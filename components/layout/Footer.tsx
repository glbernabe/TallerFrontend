import Container from "./Container";

import Logo from "./Logo";

import FooterColumn from "../ui/FooterColumn";

function InstagramIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.67.33-1 1-1Z" />
        </svg>
    );
}

function TikTokIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M15.5 3c.3 2.2 1.6 3.5 3.5 3.7v3.1c-1.4-.1-2.6-.5-3.5-1.2v6.8c0 3.3-2.3 5.6-5.6 5.6-3.1 0-5.4-2.1-5.4-5.1 0-3.1 2.5-5.3 5.8-5.3.4 0 .8 0 1.2.1v3.2c-.4-.1-.7-.2-1.1-.2-1.4 0-2.5.9-2.5 2.2 0 1.2.9 2.1 2.1 2.1 1.4 0 2.2-.9 2.2-2.6V3h3.3Z" />
        </svg>
    );
}

function GoogleIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="M21.35 12.27c0-.73-.06-1.25-.2-1.8H12v3.4h5.37a4.59 4.59 0 0 1-1.99 3.01v2.5h3.22c1.88-1.73 2.75-4.28 2.75-7.11Z"
            />
            <path
                fill="currentColor"
                d="M12 21.75c2.7 0 4.96-.89 6.61-2.37l-3.22-2.5c-.89.6-2.03.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.06v2.58A9.99 9.99 0 0 0 12 21.75Z"
            />
            <path
                fill="currentColor"
                d="M6.39 13.71A5.98 5.98 0 0 1 6.08 12c0-.59.11-1.17.31-1.71V7.71H3.06A10 10 0 0 0 2 12c0 1.61.39 3.13 1.06 4.29l3.33-2.58Z"
            />
            <path
                fill="currentColor"
                d="M12 6.16c1.47 0 2.79.5 3.83 1.49l2.87-2.87C16.96 3.22 14.7 2.25 12 2.25a9.99 9.99 0 0 0-8.94 5.46l3.33 2.58C7.18 7.92 9.39 6.16 12 6.16Z"
            />
        </svg>
    );
}

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


                        {/* Servicios */}

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
                                <li>
                                    <a
                                        href="/servicios"
                                        className="transition-colors hover:text-white"
                                    >
                                        Mantenimiento
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/servicios"
                                        className="transition-colors hover:text-white"
                                    >
                                        Diagnosis
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/servicios"
                                        className="transition-colors hover:text-white"
                                    >
                                        Reparaciones
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/servicios"
                                        className="transition-colors hover:text-white"
                                    >
                                        Vehículo industrial
                                    </a>
                                </li>
                            </ul>

                        </div>


                        {/* Empresa */}

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
                                {
                                    label: "Trabaja con nosotros",
                                    href: "/trabaja-con-nosotros",
                                },
                            ]}
                        />


                        {/* Información */}

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


                    {/* Redes sociales */}

                    <div
                        className="
                            mt-16
                            flex
                            flex-col
                            gap-6
                            border-t
                            border-white/10
                            pt-10

                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >

                        <div>

                            <h3 className="font-title text-lg">
                                Síguenos
                            </h3>

                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-5
                                "
                            >

                                <a
                                    href="https://www.instagram.com/autotalleresorihuela/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="
                                        text-white/60
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    <InstagramIcon />
                                </a>

                                <a
                                    href="https://www.facebook.com/AutoTalleresOrihuelaMB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="
                                        text-white/60
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    <FacebookIcon />
                                </a>

                                <a
                                    href="https://www.tiktok.com/@auto.talleres.ori"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="TikTok"
                                    className="
                                        text-white/60
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    <TikTokIcon />
                                </a>

                                <a
                                    href="https://share.google/AKOiwxkeLV1rZIzbC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Google Reviews"
                                    className="
                                        text-white/60
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    <GoogleIcon />
                                </a>

                            </div>

                        </div>


                        {/* Trabaja con nosotros destacado */}

                        <a
                            href="/trabaja-con-nosotros"
                            className="
                                inline-flex
                                items-center
                                gap-3

                                font-text
                                text-sm
                                font-medium

                                text-white

                                transition-opacity
                                duration-200

                                hover:opacity-60
                            "
                        >
                            Trabaja con nosotros

                            <span aria-hidden="true">
                                →
                            </span>
                        </a>

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
                                items-center
                                gap-6
                            "
                        >

                            <div className="flex items-center gap-3">
                                <Logo />

                                <span>
                                    Auto Talleres Orihuela
                                </span>
                            </div>

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