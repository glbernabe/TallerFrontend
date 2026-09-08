import { getNews } from "@/lib/strapi/news";
import NewsGrid from "@/components/news/NewsGrid";

export default async function NoticiasPage() {
    const news = await getNews();

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

            <NewsGrid news={news} />
        </main>
    );
}