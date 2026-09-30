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
        namespace: "Cookies",
    });

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
        alternates: {
            canonical: `/${locale}/cookies`,
        },
    };
}

export default async function CookiesPage() {
    const t = await getTranslations("Cookies");

    return (
        <>
            <Navbar />

            <LegalContent
                eyebrow={t("eyebrow")}
                title={t("title")}
                intro={t("intro")}
                sections={[
                    {
                        title: t("sections.whatAre.title"),
                        content: (
                            <p>
                                {t(
                                    "sections.whatAre.content"
                                )}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.used.title"),
                        content: (
                            <p>
                                {t(
                                    "sections.used.content"
                                )}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.management.title"),
                        content: (
                            <p>
                                {t(
                                    "sections.management.content"
                                )}
                            </p>
                        ),
                    },
                    {
                        title: t("sections.updates.title"),
                        content: (
                            <p>
                                {t(
                                    "sections.updates.content"
                                )}
                            </p>
                        ),
                    },
                ]}
            />

            <Footer />
        </>
    );
}