import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Card from "@/components/ui/Card";

export default function Services() {
    return (
        <Section className="bg-black py-32 text-white">

            <Container>

                {/* Cabecera */}

                <div className="mb-18 max-w-4xl">

                    <h2
                        className="
                            font-title
                            text-5xl
                            leading-tight

                            md:text-6xl
                            xl:text-7xl
                        "
                    >
                        Todo lo que tu Mercedes-Benz necesita
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl

                            text-lg
                            leading-8
                            text-white/70
                        "
                    >
                        Como Servicio Oficial Mercedes-Benz ponemos a tu
                        disposición un servicio integral para el mantenimiento,
                        diagnóstico y reparación de tu vehículo. Trabajamos con
                        herramientas oficiales, recambios originales y
                        procedimientos certificados para ofrecer la máxima
                        calidad en cada intervención.
                    </p>

                </div>

                {/* Tarjetas */}

                <div className="grid gap-6 lg:grid-cols-3">

                    <Card
                        src="/content/images/cards/tecnicos.webp"
                        alt="Mantenimiento Mercedes"
                        title="Mantenimiento"
                        description="Revisiones oficiales, cambios de aceite, filtros, líquidos y mantenimiento preventivo."
                        href="/servicios/mantenimiento"
                    />

                    <Card
                        src="/content/images/cards/recambios.webp"
                        alt="Diagnosis Mercedes"
                        title="Diagnosis"
                        description="Diagnóstico electrónico mediante equipamiento oficial Mercedes-Benz."
                        href="/servicios/diagnosis"
                    />

                    <Card
                        src="/content/images/cards/asesoramiento.webp"
                        alt="Reparaciones Mercedes"
                        title="Reparaciones"
                        description="Motor, transmisión, suspensión, climatización y sistemas electrónicos."
                        href="/servicios/reparaciones"
                    />

                </div>

            </Container>

        </Section>
    );
}