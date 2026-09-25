import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
    getNewsBySlug,
} from "@/lib/news/newsDependencies";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const {slug} = await params;

    const news =
        await getNewsBySlug.execute(
            slug
        );

    if (!news) {
        return {};
    }

    return {
        title: news.title,
        description:
            news.summary ??
            undefined,
    };
}

export default async function NewsDetailPage({
    params,
}: Props) {
    const {slug} = await params;

    const news =
        await getNewsBySlug.execute(
            slug
        );

    if (!news) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-4xl px-6 py-20">
            <article>
                <p
                    className="
                        font-text
                        text-sm
                        uppercase
                        tracking-[0.15em]
                        text-black/50
                    "
                >
                    Noticias
                </p>

                <h1
                    className="
                        mt-5
                        font-title
                        text-5xl
                        leading-tight
                        md:text-7xl
                    "
                >
                    {news.title}
                </h1>

                {news.summary && (
                    <p
                        className="
                            mt-6
                            text-xl
                            leading-8
                            text-black/60
                        "
                    >
                        {news.summary}
                    </p>
                )}

                {news.image && (
                    <div className="relative mt-12 aspect-[16/9] overflow-hidden">
                        {/* Aquí irá tu componente de imagen */}
                    </div>
                )}

                <div className="mt-12">
                    {/* Aquí renderizamos Cuerpo */}
                </div>
            </article>
        </main>
    );
}