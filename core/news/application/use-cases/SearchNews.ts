import type { NewsRepository } from "../ports/NewsRepository";

export class SearchNews {
    constructor(
        private readonly newsRepository: NewsRepository
    ) {}

    async execute(query: string) {
        const normalizedQuery = query.trim();

        if (!normalizedQuery) {
            return this.newsRepository.getPublishedNews();
        }

        return this.newsRepository.search(
            normalizedQuery
        );
    }
}