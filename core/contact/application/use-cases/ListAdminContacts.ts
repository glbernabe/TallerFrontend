import type { AdminContactFilters } from "../../domain/AdminContact";
import type { AdminContactRepository } from "../ports/AdminContactRepository";

export class ListAdminContacts {
    constructor(private readonly repository: AdminContactRepository) {}

    execute(filters: AdminContactFilters = {}) {
        return this.repository.list(filters);
    }
}
