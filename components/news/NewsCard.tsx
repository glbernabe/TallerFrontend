import Image from "next/image";

type NewsImageFormat = {
    url: string;
    width: number;
    height: number;
};

type NewsImage = {
    url: string;
    width: number;
    height: number;
    alternativeText: string | null;
    formats?: {
        small?: NewsImageFormat;
        medium?: NewsImageFormat;
        thumbnail?: NewsImageFormat;
    };
};

export type News = {
    title: string;
    slug: string;
    excerpt: string | null;
    image: NewsImage | null;
};

type NewsCardProps = {
    news: News;
};

const STRAPI_URL = process.env.STRAPI_URL;

export default function NewsCard({ news }: NewsCardProps) {
    const imageUrl =
        news.image?.formats?.medium?.url ??
        news.image?.url ??
        null;

    const fullImageUrl = imageUrl
        ? `${STRAPI_URL}${imageUrl}`
        : null;

    return (
        <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white">

            {fullImageUrl && (
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={fullImageUrl}
                        alt={
                            news.image?.alternativeText ??
                            news.title
                        }
                        fill
                        loading="eager"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            )}

            <div className="p-6">

                <h2 className="font-title text-2xl">
                    {news.title}
                </h2>

                {news.excerpt && (
                    <p className="mt-3 font-text text-black/70">
                        {news.excerpt}
                    </p>
                )}

                <a
                    href={`/noticias/${news.slug}`}
                    className="mt-5 inline-block font-text text-sm font-medium"
                >
                    Leer noticia →
                </a>

            </div>

        </article>
    );
}