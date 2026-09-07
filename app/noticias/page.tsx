import { getNews } from "@/lib/strapi/news";
import NewsGrid from "@/components/news/NewsGrid";
import type { News } from "@/components/news/NewsCard";

type NewsResponse = {
    data: News[];
};

export default async function NoticiasPage() {
    const response = await getNews() as NewsResponse;

    return (
        <main className="mx-auto max-w-7xl px-6 py-20">

            <header className="mb-12">
                <h1 className="font-title text-5xl">
                    Noticias
                </h1>

                <p className="mt-4 max-w-2xl font-text text-black/60">
                    Las últimas novedades de Auto Talleres Orihuela.
                </p>
            </header>

            <NewsGrid news={response.data} />

        </main>
    );
}