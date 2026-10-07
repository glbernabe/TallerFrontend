import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Feature from "@/components/ui/Feature";

export default async function Features() {
    const t = await getTranslations("Features");

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
                        {t("title")}
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
                        {t("description")}
                    </p>

                </div>


                {/* FEATURES */}

                <div
                    className="
                        mt-24
                        grid
                        gap-x-12
                        gap-y-20
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    <Feature
                        icon="/content/icons/features/group.svg"
                        title={t("items.specializedTechnicians.title")}
                        description={t("items.specializedTechnicians.description")}
                        iconClassName="translate-y-1.5"
                    />

                    <Feature
                        icon="/content/icons/features/tools.svg"
                        title={t("items.qualityParts.title")}
                        description={t("items.qualityParts.description")}
                    />

                    <Feature
                        icon="/content/icons/features/authorized_tools.svg"
                        title={t("items.specializedEquipment.title")}
                        description={t("items.specializedEquipment.description")}
                    />

                    <Feature
                        icon="/content/icons/features/guarantee.svg"
                        title={t("items.trustAndWarranty.title")}
                        description={t("items.trustAndWarranty.description")}
                    />

                </div>

            </Container>

        </Section>
    );
}