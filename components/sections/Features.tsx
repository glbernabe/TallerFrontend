import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Feature from "@/components/ui/Feature";

export default function Features() {
    return (
        <Section className="bg-neutral-950 py-32 text-white">

            <Container>

                <div className="mx-auto max-w-3xl text-center">

                    <h2
                        className="
                            font-title

                            text-5xl

                            md:text-6xl
                        "
                    >
                        ¿Por qué confiar en nosotros?
                    </h2>

                    <p
                        className="
                            mt-6

                            text-lg
                            leading-8

                            text-white/70
                        "
                    >
                        Trabajamos siguiendo los estándares oficiales de
                        Mercedes-Benz para ofrecer un servicio preciso,
                        transparente y de máxima calidad.
                    </p>

                </div>

                <div
                    className="
                        mt-20

                        grid

                        gap-3

                        sm:grid-cols-2

                        xl:grid-cols-4
                    "
                >

                    <Feature
                        icon="/content/icons/features/group.svg"
                        title="Técnicos certificados"
                        description="Especialistas formados según los estándares oficiales de Mercedes-Benz."
                        iconClassName="translate-y-1.5"
                    />

                    <Feature
                        icon="/content/icons/features/tools.svg"
                        title="Recambios originales"
                        description="Componentes originales que garantizan la calidad y el rendimiento del vehículo."
                    />

                    <Feature
                        icon="/content/icons/features/authorized_tools.svg"
                        title="Equipamiento oficial"
                        description="Diagnosis electrónica y herramientas homologadas por Mercedes-Benz."
                    />

                    <Feature
                        icon="/content/icons/features/guarantee.svg"
                        title="Garantía y confianza"
                        description="Cada intervención sigue los procedimientos recomendados por el fabricante."
                    />

                </div>

            </Container>

        </Section>
    );
}
