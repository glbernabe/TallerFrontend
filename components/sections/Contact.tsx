import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import MainButton from "@/components/ui/MainButton";

export default function Contact() {
    const googleMapsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=Auto-Talleres+Orihuela,+Carretera+Murcia-Alicante,+km+28,+03300+Orihuela,+Alicante";

    // Puedes cambiar esta ruta por la imagen del mapa que quieras utilizar.
    const mapImage = "/content/images/maps.webp";

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
                                leading-tight

                                md:text-6xl
                            "
                        >
                            Tu taller de vehículos industriales en Orihuela
                        </h2>

                        <p
                            className="
                                mt-6

                                max-w-xl

                                font-text
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

                            {/* Teléfono */}

                            <div>

                                <h3 className="font-title text-xl">
                                    Teléfono
                                </h3>

                                <a
                                    href="tel:+34966744466"
                                    className="
                                        mt-2
                                        block

                                        font-text
                                        text-white/65

                                        transition-colors
                                        duration-200

                                        hover:text-white
                                    "
                                >
                                    966 744 466
                                </a>

                            </div>


                            {/* Correo */}

                            <div>

                                <h3 className="font-title text-xl">
                                    Correo electrónico
                                </h3>

                                <a
                                    href="mailto:orihuela.ato@autotalleresorihuela.es"
                                    className="
                                        mt-2
                                        block

                                        font-text
                                        text-white/65

                                        transition-colors
                                        duration-200

                                        hover:text-white
                                    "
                                >
                                    orihuela.ato@autotalleresorihuela.es
                                </a>

                            </div>


                            {/* Horario */}

                            <div>

                                <h3 className="font-title text-xl">
                                    Horario
                                </h3>

                                <p
                                    className="
                                        mt-2

                                        font-text
                                        text-white/65
                                    "
                                >
                                    Lunes - Viernes
                                    <br />
                                    08:30 - 14:00
                                    <br />
                                    15:30 - 19:00

                                    <br />
                                    <br />

                                    Sábado
                                    <br />
                                    08:30 - 13:30
                                </p>

                            </div>

                        </div>


                        <div className="mt-12">

                            <MainButton href="tel:+34966744466">
                                Llamar al taller
                            </MainButton>

                        </div>

                    </div>


                    {/* Ubicación */}

                    <div>

                        <div
                            className="
                                overflow-hidden

                                rounded-2xl

                                border
                                border-white/10

                                bg-white/[0.03]

                                p-4
                                md:p-5
                            "
                        >

                            {/* Mapa */}

                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ver la ubicación de Auto Talleres Orihuela en Google Maps"
                                className="group block"
                            >

                                <div
                                    className="
                                        relative

                                        h-56
                                        overflow-hidden

                                        rounded-xl

                                        md:h-64
                                    "
                                >

                                    <Image
                                        src={mapImage}
                                        alt="Ubicación de Auto Talleres Orihuela en Orihuela, Alicante"
                                        fill
                                        sizes="
                                            (min-width: 1024px) 55vw,
                                            100vw
                                        "
                                        loading="eager"
                                        className="
                                            object-cover

                                            grayscale
                                            contrast-[0.9]

                                            transition-all
                                            duration-700
                                            ease-out

                                            group-hover:grayscale-0
                                            group-hover:contrast-100
                                            group-hover:scale-[1.03]

                                            motion-reduce:transition-none
                                            motion-reduce:transform-none
                                        "
                                        quality={90}
                                    />


                                    {/* Gradiente */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0

                                            bg-gradient-to-t
                                            from-black/60
                                            via-black/5
                                            to-white/10

                                            transition-opacity
                                            duration-700

                                            group-hover:opacity-0
                                        "
                                    />


                                    {/* Indicador de interacción */}

                                    <div
                                        className="
                                            pointer-events-none

                                            absolute
                                            bottom-4
                                            right-4

                                            rounded-full

                                            border
                                            border-white/20

                                            bg-black/60

                                            px-4
                                            py-2

                                            font-text
                                            text-xs
                                            uppercase
                                            tracking-[0.14em]
                                            text-white

                                            opacity-0
                                            translate-y-2

                                            backdrop-blur-sm

                                            transition-all
                                            duration-500

                                            group-hover:translate-y-0
                                            group-hover:opacity-100
                                        "
                                    >
                                        Ver ubicación
                                    </div>

                                </div>

                            </a>


                            {/* Información de ubicación */}

                            <div
                                className="
                                    px-5
                                    pb-5
                                    pt-8

                                    md:px-7
                                    md:pb-7
                                    md:pt-9
                                "
                            >

                                <p
                                    className="
                                        font-text
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
                                        mt-5

                                        font-title

                                        text-4xl
                                        leading-[1.05]

                                        md:text-5xl
                                    "
                                >
                                    Orihuela,
                                    <br />
                                    Alicante
                                </h3>


                                <div
                                    className="
                                        mt-6

                                        h-px
                                        w-12

                                        bg-white/30
                                    "
                                />


                                <p
                                    className="
                                        mt-6

                                        font-text
                                        text-lg
                                        leading-8

                                        text-white/60
                                    "
                                >
                                    Carretera Murcia-Alicante, km 28
                                    <br />
                                    03300 Orihuela, Alicante
                                </p>


                                <div className="mt-8">

                                    <MainButton href={googleMapsUrl}>
                                        Cómo llegar
                                    </MainButton>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>

        </Section>
    );
}