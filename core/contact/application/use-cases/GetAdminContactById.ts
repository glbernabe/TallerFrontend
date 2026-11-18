import type { AdminContactRepository } from "../ports/AdminContactRepository";

export class GetAdminContactById {
    constructor(private readonly repository: AdminContactRepository) {}

    execute(id: string) {
        const normalizedId = id.trim();
        if (!/^[1-9]\d*$/.test(normalizedId)) return Promise.resolve(null);
        return this.repository.getById(normalizedId);
    }
}
