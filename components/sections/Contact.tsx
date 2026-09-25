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


                    <div
                        className="
                            relative
                            aspect-square
                            overflow-hidden
                            bg-white
                        "
                    >
                        {/* CAPA 1 — Fondo blanco */}
                        <div className="absolute inset-0 bg-white" />

                        {/* CAPA 2 — Imagen del mapa */}
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver la ubicación de Auto Talleres Orihuela en Google Maps"
                            className="group absolute inset-0 block"
                        >
                            <Image
                                src={mapImage}
                                alt="Ubicación de Auto Talleres Orihuela en Orihuela, Alicante"
                                fill
                                sizes="
                                    (min-width: 1024px) 50vw,
                                    100vw
                                "
                                loading="eager"
                                quality={75}
                                className="
                                    object-cover

                                    grayscale
                                    contrast-[0.9]

                                    transition-transform
                                    duration-700
                                    ease-out

                                    group-hover:scale-[1.03]

                                    motion-reduce:transition-none
                                    motion-reduce:transform-none
                                "
                            />
                        </a>

                        {/* CAPA 3 — Contenido */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                z-10

                                flex
                                flex-col
                                justify-between

                                p-8
                                md:p-10
                                lg:p-12

                                text-white
                            "
                        >
                            {/* Parte superior */}
                            <div
                                className="
                                    max-w-[75%]
                                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                                "
                            >
                                <p
                                    className="
                                        font-text
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/80
                                        md:text-sm
                                    "
                                >
                                    Nuestra ubicación
                                </p>

                                <h3
                                    className="
                                        mt-4

                                        font-title
                                        text-4xl
                                        leading-[0.95]
                                        tracking-[-0.02em]

                                        md:text-5xl
                                        lg:text-6xl
                                    "
                                >
                                    Orihuela,
                                    <br />
                                    Alicante
                                </h3>
                            </div>

                            {/* Parte inferior */}
                            <div
                                className="
                                        flex
                                        items-end
                                        justify-between
                                        gap-8

                                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                                    "
                            >
                                <div className="max-w-md">
                                    <div
                                        className="
                        mb-5
                        h-px
                        w-12
                        bg-white/80
                    "
                                    />

                                    <p
                                        className="
                        font-text
                        text-sm
                        leading-6
                        text-white/85

                        md:text-base
                        md:leading-7
                    "
                                    >
                                        Carretera Murcia-Alicante, km 28
                                        <br />
                                        03300 Orihuela, Alicante
                                    </p>
                                </div>

                                <div className="pointer-events-auto shrink-0">
                                    <MainButton href={googleMapsUrl}>
                                        Cómo llegar
                                    </MainButton>
                                </div>
                            </div>
                        </div>

                        {/* Borde visible */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                z-20
                                border-2
                                border-white
                            "
                            aria-hidden="true"
                        />
                    </div>

                </div>

            </Container>

        </Section>
    );
}