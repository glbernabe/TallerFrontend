import type { News } from "../../domain/News";
import type { NewsPage } from "../../domain/NewsPage";

export interface NewsRepository {
    getPublishedNews(): Promise<News[]>;

    getNewsPage(
        page: number,
        pageSize: number
    ): Promise<NewsPage>;

    getBySlug(
        slug: string
    ): Promise<News | null>;

    search(
        query: string
    ): Promise<News[]>;
}