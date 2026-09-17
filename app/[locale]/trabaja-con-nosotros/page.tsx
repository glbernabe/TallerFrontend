import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Breadcrumb from "@/components/navigation/Breadcrumb";
import WorkWithUsForm from "@/components/work-with-us/WorkWithUsForm";

export default function WorkWithUsPage() {
    return (
        <main>

            <Section
                className="
                    bg-white
                    py-20
                    text-black

                    md:py-28
                "
            >

                <Container>

                    <Breadcrumb
                        items={[
                            {
                                label: "Inicio",
                                href: "/",
                            },
                            {
                                label: "Trabaja con nosotros",
                            },
                        ]}
                    />


                    {/* Cabecera */}

                    <header
                        className="
                            mt-16
                            max-w-5xl
                        "
                    >

                        <h1
                            className="
                                font-title
                                text-4xl
                                leading-tight

                                sm:text-5xl
                                md:text-6xl
                                xl:text-7xl
                            "
                        >
                            Trabaja con nosotros
                        </h1>

                        <p
                            className="
                                mt-6
                                max-w-3xl

                                font-text
                                text-lg
                                leading-8
                                text-black/60

                                md:text-xl
                            "
                        >
                            Si quieres formar parte de Auto Talleres Orihuela,
                            envíanos tus datos y tu currículum. Revisaremos tu
                            candidatura y nos pondremos en contacto contigo.
                        </p>

                    </header>


                    {/* Formulario */}

                    <div className="mt-16 md:mt-20">
                        <WorkWithUsForm />
                    </div>

                </Container>

            </Section>

        </main>
    );
}