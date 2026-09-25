import type { Metadata } from "next";

import NewsPageContent from "@/components/news/NewsPageContent";
import {
    getNewsPage,
} from "@/lib/news/newsDependencies";

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export const metadata: Metadata = {
    title: "Noticias",
    description:
        "Las últimas novedades de Auto Talleres Orihuela.",
};

export default async function NoticiasPage({
    searchParams,
}: Props) {
    const params =
        await searchParams;

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
                    Noticias
                </h1>

                <p
                    className="
                        mt-4
                        max-w-2xl
                        font-text
                        text-black/60
                    "
                >
                    Las últimas novedades de
                    Auto Talleres Orihuela.
                </p>
            </header>

            <NewsPageContent
                newsPage={newsPage}
            />
        </main>
    );
}