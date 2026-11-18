import {
    CONTACT_DEPARTMENTS,
    type AdminContactInput,
} from "../../domain/AdminContact";

export type AdminContactValidationCode =
    | "name_required"
    | "surname_required"
    | "name_too_long"
    | "surname_too_long"
    | "invalid_department"
    | "job_title_too_long"
    | "invalid_email"
    | "email_too_long"
    | "phone_too_long"
    | "invalid_media_id"
    | "invalid_order";

export class AdminContactValidationError extends Error {
    constructor(public readonly code: AdminContactValidationCode) {
        super(code);
        this.name = "AdminContactValidationError";
    }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateAdminContactInput(input: AdminContactInput): void {
    const nombre = input.nombre.trim();
    const apellidos = input.apellidos.trim();

    if (!nombre) throw new AdminContactValidationError("name_required");
    if (!apellidos) throw new AdminContactValidationError("surname_required");
    if (nombre.length > 255) throw new AdminContactValidationError("name_too_long");
    if (apellidos.length > 255) throw new AdminContactValidationError("surname_too_long");

    if (
        input.departamento !== null &&
        !CONTACT_DEPARTMENTS.includes(input.departamento)
    ) {
        throw new AdminContactValidationError("invalid_department");
    }

    if ((input.cargo ?? "").trim().length > 120) {
        throw new AdminContactValidationError("job_title_too_long");
    }

    const email = (input.correo_electronico ?? "").trim();
    if (email.length > 255) throw new AdminContactValidationError("email_too_long");
    if (email && !EMAIL_PATTERN.test(email)) {
        throw new AdminContactValidationError("invalid_email");
    }

    if ((input.telefono ?? "").trim().length > 50) {
        throw new AdminContactValidationError("phone_too_long");
    }

    if (
        input.archivo_multimedia_id !== null &&
        (!Number.isSafeInteger(input.archivo_multimedia_id) || input.archivo_multimedia_id <= 0)
    ) {
        throw new AdminContactValidationError("invalid_media_id");
    }

    if (!Number.isSafeInteger(input.orden)) {
        throw new AdminContactValidationError("invalid_order");
    }
}
