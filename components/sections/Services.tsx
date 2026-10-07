import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Card from "@/components/ui/Card";

export default async function Services() {
    const t = await getTranslations("Services");

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
                        {t("title")}
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
                        {t("description")}
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
                        alt={t("cards.maintenance.alt")}
                        title={t("cards.maintenance.title")}
                        description={t("cards.maintenance.description")}
                        imageClassName="
                            grayscale
                            group-hover:grayscale-0
                        "
                    />

                    <Card
                        src="/content/images/cards/electric_equipment.webp"
                        alt={t("cards.diagnosis.alt")}
                        title={t("cards.diagnosis.title")}
                        description={t("cards.diagnosis.description")}
                        imageClassName="
                            grayscale
                            group-hover:grayscale-0
                        "
                    />

                    <Card
                        src="/content/images/cards/motor_up.webp"
                        alt={t("cards.repairs.alt")}
                        title={t("cards.repairs.title")}
                        description={t("cards.repairs.description")}
                        imageClassName="
                            grayscale
                            group-hover:grayscale-0
                        "
                    />

                </div>

            </Container>

        </Section>
    );
}