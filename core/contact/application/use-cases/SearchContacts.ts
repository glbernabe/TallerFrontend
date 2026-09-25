import type { ContactRepository } from "../ports/ContactRepository";

export class SearchContacts {
    constructor(
        private readonly contactRepository: ContactRepository
    ) {}

    async execute(query: string) {
        const normalizedQuery = query.trim();

        if (!normalizedQuery) {
            return this.contactRepository.getActiveContacts();
        }

        return this.contactRepository.search(
            normalizedQuery
        );
    }
}