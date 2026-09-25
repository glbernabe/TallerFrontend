import type { ContactRepository } from "../ports/ContactRepository";

export class GetContactById {
    constructor(
        private readonly contactRepository: ContactRepository
    ) {}

    async execute(id: string) {
        if (!id.trim()) {
            return null;
        }

        return this.contactRepository.getById(id);
    }
}