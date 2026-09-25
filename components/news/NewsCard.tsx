import Image from "next/image";
import {Link} from "@/i18n/navigation";
import type { News } from "@/core/news/domain/News";

type NewsCardProps = {
    news: News;
    priority?: boolean;
};

export default function NewsCard({
    news,
    priority = false,
}: NewsCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white">
            {news.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={news.image.url}
                        alt={news.image.alt}
                        fill
                        priority={priority}
                        loading={priority ? undefined : "lazy"}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            )}

            <div className="p-6">
                <h2 className="font-title text-2xl">
                    {news.title}
                </h2>

                {news.summary && (
                    <p className="mt-3 font-text text-black/70">
                        {news.summary}
                    </p>
                )}

                <Link
                    href={`/noticias/${news.slug}`}
                    className="mt-5 inline-block font-text text-sm font-medium"
                >
                    Leer noticia →
                </Link>
            </div>
        </article>
    );
}