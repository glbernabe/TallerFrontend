
import { getTranslations } from "next-intl/server";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import WorkWithUsForm from "@/components/work-with-us/WorkWithUsForm";

export default async function WorkWithUsPage() {
    const t = await getTranslations("WorkWithUs");

    return (
        <main>
            <Navbar />
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
                                label: t("breadcrumbHome"),
                                href: "/",
                            },
                            {
                                label: t("breadcrumbCurrent"),
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
                            {t("title")}
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
                            {t("description")}
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
