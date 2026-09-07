import NewsCard, { type News } from "./NewsCard";

type NewsGridProps = {
    news: News[];
};

export default function NewsGrid({ news }: NewsGridProps) {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
                <NewsCard
                    key={item.slug}
                    news={item}
                />
            ))}
        </div>
    );
}