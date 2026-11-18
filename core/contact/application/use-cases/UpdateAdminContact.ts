import type { AdminContact, AdminContactInput } from "../../domain/AdminContact";
import type { AdminContactRepository } from "../ports/AdminContactRepository";
import { validateAdminContactInput } from "./AdminContactValidation";

export class UpdateAdminContact {
    constructor(private readonly repository: AdminContactRepository) {}

    async execute(id: string, changes: Partial<AdminContactInput>): Promise<AdminContact> {
        if (!/^[1-9]\d*$/.test(id.trim())) throw new Error("invalid_contact_id");
        const current = await this.repository.getById(id);
        if (!current) throw new Error("contact_not_found");

        const merged: AdminContactInput = {
            nombre: changes.nombre ?? current.nombre,
            apellidos: changes.apellidos ?? current.apellidos,
            departamento: changes.departamento === undefined ? current.departamento : changes.departamento,
            cargo: changes.cargo === undefined ? current.cargo : changes.cargo,
            correo_electronico: changes.correo_electronico === undefined ? current.correo_electronico : changes.correo_electronico,
            telefono: changes.telefono === undefined ? current.telefono : changes.telefono,
            archivo_multimedia_id: changes.archivo_multimedia_id === undefined ? current.archivo_multimedia_id : changes.archivo_multimedia_id,
            activo: changes.activo ?? current.activo,
            orden: changes.orden ?? current.orden,
            fecha_publicacion: changes.fecha_publicacion === undefined ? current.fecha_publicacion : changes.fecha_publicacion,
        };

        merged.nombre = merged.nombre.trim();
        merged.apellidos = merged.apellidos.trim();
        merged.cargo = merged.cargo?.trim() || null;
        merged.correo_electronico = merged.correo_electronico?.trim().toLowerCase() || null;
        merged.telefono = merged.telefono?.trim() || null;
        validateAdminContactInput(merged);

        return this.repository.update(id, merged);
    }
}
