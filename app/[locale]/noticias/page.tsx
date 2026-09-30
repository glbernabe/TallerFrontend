import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import NewsPageContent from "@/components/news/NewsPageContent";

import {
    getNewsPage,
} from "@/lib/news/newsDependencies";

type Props = {
    params: Promise<{
        locale: string;
    }>;
    searchParams: Promise<{
        page?: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "News",
    });

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
    };
}

export default async function NoticiasPage({
    searchParams,
}: Props) {
    const t = await getTranslations("News");

    const params = await searchParams;

    const page = Number(
        params.page ?? "1"
    );

    const newsPage =
        await getNewsPage.execute(
            Number.isNaN(page)
                ? 1
                : page
        );

    return (
        <main className="mx-auto max-w-7xl px-6 py-20">
            <header className="mb-12">
                <h1 className="font-title text-5xl">
                    {t("title")}
                </h1>

                <p
                    className="
                        mt-4
                        max-w-2xl
                        font-text
                        text-black/60
                    "
                >
                    {t("description")}
                </p>
            </header>

            <NewsPageContent
                newsPage={newsPage}
            />
        </main>
    );
}