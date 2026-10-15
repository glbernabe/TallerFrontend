import type { CurriculumSubmission } from "../../domain/CurriculumSubmission";
import type { CurriculumRepository } from "../ports/CurriculumRepository";

export type CurriculumValidationCode =
    | "name_required"
    | "name_too_long"
    | "message_too_long"
    | "invalid_email"
    | "invalid_pdf"
    | "file_too_large";

export class CurriculumValidationError extends Error {
    constructor(public readonly code: CurriculumValidationCode) {
        super(code);
        this.name = "CurriculumValidationError";
    }
}

/** Keep uploads small enough for common serverless request-body limits. */
export const MAX_CURRICULUM_FILE_SIZE = 4 * 1024 * 1024;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PDF_SIGNATURE = "%PDF-";

export class SubmitCurriculumUseCase {
    constructor(
        private readonly curriculumRepository: CurriculumRepository,
    ) {}

    async execute(submission: CurriculumSubmission): Promise<void> {
        const nombre = submission.nombre.trim();
        const email = submission.email.trim();
        const mensaje = submission.mensaje.trim();
        const { archivo } = submission;

        if (!nombre) {
            throw new CurriculumValidationError("name_required");
        }

        if (nombre.length > 100) {
            throw new CurriculumValidationError("name_too_long");
        }

        if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
            throw new CurriculumValidationError("invalid_email");
        }

        if (mensaje.length > 5000) {
            throw new CurriculumValidationError("message_too_long");
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

        // Check the actual file signature as well as its name and MIME type.
        const signatureBytes = await archivo.slice(0, 5).arrayBuffer();
        const signature = new TextDecoder().decode(signatureBytes);

        if (signature !== PDF_SIGNATURE) {
            throw new CurriculumValidationError("invalid_pdf");
        }

        await this.curriculumRepository.submit({
            nombre,
            email,
            mensaje,
            archivo,
        });
    }
}
