import type { CurriculumSubmission } from "../../domain/CurriculumSubmission";
import type { CurriculumRepository } from "../ports/CurriculumRepository";

export type CurriculumValidationCode =
    | "name_required"
    | "name_too_long"
    | "phone_too_long"
    | "message_too_long"
    | "invalid_email"
    | "invalid_pdf"
    | "file_too_large"
    | "terms_required";

export class CurriculumValidationError extends Error {
    constructor(public readonly code: CurriculumValidationCode) {
        super(code);
        this.name = "CurriculumValidationError";
    }
}

export const MAX_CURRICULUM_FILE_SIZE = 5 * 1024 * 1024;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PDF_SIGNATURE = "%PDF-";

export class SubmitCurriculumUseCase {
    constructor(
        private readonly curriculumRepository: CurriculumRepository,
    ) {}

    async execute(submission: CurriculumSubmission): Promise<void> {
        const nombre = submission.nombre.trim();
        const email = submission.email.trim().toLowerCase();
        const telefono = submission.telefono.trim();
        const mensaje = submission.mensaje.trim();
        const { archivo, consentimiento } = submission;

        if (!nombre) {
            throw new CurriculumValidationError("name_required");
        }

        if (
            nombre.length > 100 ||
            /[\u0000-\u001f\u007f]/.test(nombre)
        ) {
            throw new CurriculumValidationError("name_too_long");
        }

        if (email.length > 150 || !EMAIL_PATTERN.test(email)) {
            throw new CurriculumValidationError("invalid_email");
        }

        if (telefono.length > 40) {
            throw new CurriculumValidationError("phone_too_long");
        }

        if (mensaje.length > 1000) {
            throw new CurriculumValidationError("message_too_long");
        }

        if (!consentimiento) {
            throw new CurriculumValidationError("terms_required");
        }

        const hasPdfExtension = archivo.name.toLowerCase().endsWith(".pdf");

        const hasAcceptableMime =
            !archivo.type || archivo.type === "application/pdf";

        if (
            archivo.size <= 0 ||
            !hasPdfExtension ||
            !hasAcceptableMime
        ) {
            throw new CurriculumValidationError("invalid_pdf");
        }

        if (archivo.size > MAX_CURRICULUM_FILE_SIZE) {
            throw new CurriculumValidationError("file_too_large");
        }

        const signatureBytes = await archivo.slice(0, 5).arrayBuffer();
        const signature = new TextDecoder().decode(signatureBytes);

        if (signature !== PDF_SIGNATURE) {
            throw new CurriculumValidationError("invalid_pdf");
        }

        await this.curriculumRepository.submit({
            nombre,
            email,
            telefono,
            mensaje,
            consentimiento,
            archivo,
        });
    }
}