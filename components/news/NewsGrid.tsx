import NewsCard from "./NewsCard";
import type { News } from "@/core/news/domain/News";

type NewsGridProps = {
    news: News[];
};

export default function NewsGrid({
    news,
}: NewsGridProps) {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
                <NewsCard
                    key={item.id}
                    news={item}
                    priority={index === 0}
                />
            ))}
        </div>
    );
}