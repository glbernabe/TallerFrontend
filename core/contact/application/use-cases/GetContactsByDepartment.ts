import type { ContactRepository } from "../ports/ContactRepository";

export class GetContactsByDepartment {
    constructor(
        private readonly contactRepository: ContactRepository
    ) {}

    async execute(department: string) {
        if (!department.trim()) {
            return [];
        }

        return this.contactRepository.getByDepartment(
            department.trim()
        );
    }
}