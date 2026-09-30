import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LegalContent from "@/components/sections/LegalContent";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "Legal",
    });

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
        alternates: {
            canonical: `/${locale}/legal`,
        },
    };
}

export default async function LegalPage() {
    const t = await getTranslations("Legal");

    return (
        <>
            <Navbar />

            <LegalContent
                eyebrow={t("eyebrow")}
                title={t("title")}
                intro={t("intro")}
                sections={[
                    {
                        title: t("sections.ownership.title"),
                        content: (
                            <p>
                                {t("sections.ownership.content")}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.purpose.title"),
                        content: (
                            <p>
                                {t("sections.purpose.content")}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.use.title"),
                        content: (
                            <p>
                                {t("sections.use.content")}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.intellectualProperty.title"),
                        content: (
                            <p>
                                {t(
                                    "sections.intellectualProperty.content"
                                )}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.liability.title"),
                        content: (
                            <p>
                                {t("sections.liability.content")}
                            </p>
                        ),
                    },
                ]}
            />

            <Footer />
        </>
    );
}