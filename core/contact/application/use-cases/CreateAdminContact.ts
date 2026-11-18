import type { AdminContact, AdminContactInput } from "../../domain/AdminContact";
import type { AdminContactRepository } from "../ports/AdminContactRepository";
import { validateAdminContactInput } from "./AdminContactValidation";

export class CreateAdminContact {
    constructor(private readonly repository: AdminContactRepository) {}

    execute(input: AdminContactInput): Promise<AdminContact> {
        const normalized: AdminContactInput = {
            ...input,
            nombre: input.nombre.trim(),
            apellidos: input.apellidos.trim(),
            cargo: input.cargo?.trim() || null,
            correo_electronico: input.correo_electronico?.trim().toLowerCase() || null,
            telefono: input.telefono?.trim() || null,
        };
        validateAdminContactInput(normalized);
        return this.repository.create(normalized);
    }
}
