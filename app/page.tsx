import "../app/global.css";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NavButton from "@/components/ui/NavButton";

export default function Home() {
    return (
        <>
            <Navbar>
                {/*Left navigation*/}
                <NavButton href="/">
                    Inicio
                </NavButton>

                <NavButton href="/servicios">
                    Servicios
                </NavButton>

                <NavButton href="/contacto">
                    Contacto
                </NavButton>

                {/*Center logo*/}
                <img src="/content/logo.svg" alt="Ir a Inicio" />

                {/*Right actions*/}
            </Navbar>

            <Section className="bg-neutral-100">
                <Container>
                    <h1 className="text-5xl font-bold">
                        Auto Talleres Orihuela
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-neutral-600">
                        Especialistas en mantenimiento y reparación de vehículos Mercedes-Benz.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <h2 className="mb-8 text-3xl font-semibold">
                        Servicios destacados
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border p-6">
                            Cambio de aceite
                        </div>

                        <div className="rounded-xl border p-6">
                            Cambio de frenos
                        </div>

                        <div className="rounded-xl border p-6">
                            Revisión oficial
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-neutral-900 text-white">
                <Container>
                    <h2 className="text-3xl font-semibold">
                        Reserva tu cita
                    </h2>

                    <p className="mt-4 max-w-xl">
                        Elige el servicio que necesitas y reserva tu cita online en pocos minutos.
                    </p>
                </Container>
            </Section>
        </>
    );
}