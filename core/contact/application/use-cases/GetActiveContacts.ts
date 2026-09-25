import type { ContactRepository } from "../ports/ContactRepository";

export class GetActiveContacts {
    constructor(
        private readonly contactRepository: ContactRepository
    ) {}

    async execute() {
        return this.contactRepository.getActiveContacts();
    }
}