import type { AdminContactRepository } from "../ports/AdminContactRepository";

/** Elimina de forma lógica (activo = false), no borra el registro de MariaDB. */
export class ArchiveAdminContact {
    constructor(private readonly repository: AdminContactRepository) {}

    execute(id: string): Promise<void> {
        if (!/^[1-9]\d*$/.test(id.trim())) throw new Error("invalid_contact_id");
        return this.repository.archive(id);
    }
}
