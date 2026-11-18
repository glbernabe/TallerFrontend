import type { CurriculumRepository } from "@/core/curriculums/application/ports/CurriculumRepository";
import { CurriculumRepositoryError } from "@/core/curriculums/application/ports/CurriculumRepository";
import type { CurriculumSubmission } from "@/core/curriculums/domain/CurriculumSubmission";
import { ApiError, apiRequest } from "../ApiClient";

export class CurriculumApiRepository implements CurriculumRepository {
    async submit(submission: CurriculumSubmission): Promise<void> {
        const configuredPath = process.env.API_CURRICULUMS_PATH?.trim() || "curriculums";
        const endpoint = configuredPath.replace(/^\/+/, "");
        const body = new FormData();

        body.set("nombre", submission.nombre);
        body.set("email", submission.email);
        body.set("telefono", submission.telefono);
        body.set("mensaje", submission.mensaje);
        body.set("consentimiento", String(submission.consentimiento));
        body.set("archivo", submission.archivo, submission.archivo.name);

        try {
            await apiRequest(endpoint, {
                method: "POST",
                body,
                cache: "no-store",
            });
        } catch (error) {
            if (error instanceof ApiError) {
                if (error.status === null) throw new CurriculumRepositoryError("unavailable");
                throw new CurriculumRepositoryError("rejected", error.status);
            }
            if (error instanceof Error && error.message.includes("API_INTERNAL_URL")) {
                throw new CurriculumRepositoryError("not_configured");
            }
            throw new CurriculumRepositoryError("unavailable");
        }
    }
}
