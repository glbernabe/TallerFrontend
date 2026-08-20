import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Card from "@/components/ui/Card";

export default function Services() {

    return (

        <Section
            className="
                bg-black
                py-32
                text-white
            "
        >

            <Container>

                {/* CABECERA */}

                <div
                    className="
                        mb-18
                        max-w-4xl
                    "
                >

                    <h2
                        className="
                            font-title

                            text-5xl
                            leading-tight

                            md:text-6xl
                            xl:text-7xl
                        "
                    >
                        Un servicio pensado
                        <br />
                        para el trabajo
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
                        Mantenemos y reparamos vehículos industriales que
                        forman parte del día a día de profesionales y empresas.
                        Desde el mantenimiento preventivo hasta la diagnosis y
                        reparación, trabajamos para que tu vehículo pueda
                        seguir en marcha.
                    </p>

                </div>


                {/* SERVICIOS */}

                <div
                    className="
                        grid
                        gap-6

                        lg:grid-cols-3
                    "
                >

                    <Card
                        src="/content/images/cards/oil_change.webp"
                        alt="Mantenimiento de un vehículo industrial"
                        title="Mantenimiento"
                        description="
                            Revisiones, cambios de aceite, filtros, líquidos
                            y mantenimiento preventivo para mantener el
                            vehículo en condiciones óptimas.
                        "
                    />

                    <Card
                        src="/content/images/cards/electric_equipment.webp"
                        alt="Diagnosis de un vehículo industrial"
                        title="Diagnosis"
                        description="
                            Diagnóstico electrónico para identificar averías
                            con precisión y facilitar una reparación eficaz.
                        "
                    />

                    <Card
                        src="/content/images/cards/motor_up.webp"
                        alt="Reparación de un vehículo industrial"
                        title="Reparaciones"
                        description="
                            Intervenciones mecánicas y electrónicas para
                            resolver averías y mantener el vehículo operativo.
                        "
                    />

                </div>

            </Container>

        </Section>

    );

}