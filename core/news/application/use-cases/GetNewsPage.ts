import type { NewsRepository } from "../ports/NewsRepository";

export class GetNewsPage {
    constructor(
        private readonly newsRepository: NewsRepository
    ) {}

    async execute(
        page = 1,
        pageSize = 9
    ) {
        const normalizedPage =
            Number.isInteger(page) && page > 0
                ? page
                : 1;

        const normalizedPageSize =
            Number.isInteger(pageSize) && pageSize > 0
                ? pageSize
                : 9;

        return this.newsRepository.getNewsPage(
            normalizedPage,
            normalizedPageSize
        );
    }
}