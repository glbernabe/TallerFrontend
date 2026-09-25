import type { NewsRepository } from "../ports/NewsRepository";

export class GetPublishedNews {
    constructor(
        private readonly newsRepository: NewsRepository
    ) {}

    async execute() {
        return this.newsRepository.getPublishedNews();
    }
}