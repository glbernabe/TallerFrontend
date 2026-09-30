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
        namespace: "Privacy",
    });

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
        alternates: {
            canonical: `/${locale}/privacidad`,
        },
    };
}

export default async function PrivacyPage() {
    const t = await getTranslations("Privacy");

    return (
        <>
            <Navbar />

            <LegalContent
                eyebrow={t("eyebrow")}
                title={t("title")}
                intro={t("intro")}
                sections={[
                    {
                        title: t("sections.controller.title"),
                        content: (
                            <p>
                                {t("sections.controller.content")}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.dataAndPurpose.title"),
                        content: (
                            <p>
                                {t("sections.dataAndPurpose.content")}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.legalBasis.title"),
                        content: (
                            <p>
                                {t("sections.legalBasis.content")}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.recipients.title"),
                        content: (
                            <p>
                                {t("sections.recipients.content")}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.rights.title"),
                        content: (
                            <p>
                                {t("sections.rights.content")}
                            </p>
                        ),
                    },
                ]}
            />

            <Footer />
        </>
    );
}