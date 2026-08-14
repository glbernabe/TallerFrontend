import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Feature from "@/components/ui/Feature";

export default function Features() {

    return (

        <Section
            className="
                bg-neutral-950

                py-28
                md:py-36

                text-white
            "
        >

            <Container>

                {/* CABECERA */}

                <div
                    className="
                        mx-auto

                        max-w-4xl

                        text-center
                    "
                >

                    <h2
                        className="
                            font-title

                            text-5xl
                            leading-[1.05]

                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        ¿Por qué confiar en nosotros?
                    </h2>

                    <p
                        className="
                            mx-auto

                            mt-8

                            max-w-2xl

                            text-lg
                            leading-8

                            text-white/65

                            md:text-xl
                        "
                    >
                        Experiencia, tecnología y profesionales preparados
                        para mantener su vehículo siempre en las mejores
                        condiciones.
                    </p>

                </div>


                {/* FEATURES */}

                <div
                    className="
                        mt-24

                        grid

                        gap-y-20
                        gap-x-12

                        sm:grid-cols-2

                        xl:grid-cols-4
                    "
                >

                    <Feature
                        icon="/content/icons/features/group.svg"
                        title="Técnicos especializados"
                        description="
                            Profesionales preparados para trabajar con las
                            exigencias de los vehículos industriales.
                        "
                        iconClassName="translate-y-1.5"
                    />

                    <Feature
                        icon="/content/icons/features/tools.svg"
                        title="Recambios de calidad"
                        description="
                            Componentes seleccionados para garantizar la
                            fiabilidad y el rendimiento de cada intervención.
                        "
                    />

                    <Feature
                        icon="/content/icons/features/authorized_tools.svg"
                        title="Equipamiento especializado"
                        description="
                            Tecnología y herramientas adecuadas para realizar
                            diagnosis y reparaciones con precisión.
                        "
                    />

                    <Feature
                        icon="/content/icons/features/guarantee.svg"
                        title="Confianza y garantía"
                        description="
                            Trabajamos con procedimientos profesionales y
                            buscamos que cada intervención cumpla nuestras
                            exigencias de calidad.
                        "
                    />

                </div>

            </Container>

        </Section>

    );

}