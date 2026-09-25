import type { NewsRepository } from "../ports/NewsRepository";

export class GetNewsBySlug {
    constructor(
        private readonly newsRepository: NewsRepository
    ) {}

    async execute(slug: string) {
        const normalizedSlug = slug.trim();

        if (!normalizedSlug) {
            return null;
        }

        return this.newsRepository.getBySlug(
            normalizedSlug
        );
    }
}