import type { CurriculumRepository } from "@/core/curriculums/application/ports/CurriculumRepository";
import {
    CurriculumRepositoryError,
} from "@/core/curriculums/application/ports/CurriculumRepository";
import type { CurriculumSubmission } from "@/core/curriculums/domain/CurriculumSubmission";

export class FastApiCurriculumRepository implements CurriculumRepository {
    async submit(submission: CurriculumSubmission): Promise<void> {
        const configuredBaseUrl = process.env.BACKEND_URL?.trim();

        if (!configuredBaseUrl) {
            throw new CurriculumRepositoryError("not_configured");
        }

        let endpoint: URL;

        try {
            const baseUrl = configuredBaseUrl.replace(/\/+$/, "");
            endpoint = new URL(`${baseUrl}/curriculums`);
        } catch {
            throw new CurriculumRepositoryError("not_configured");
        }

        if (endpoint.protocol !== "http:" && endpoint.protocol !== "https:") {
            throw new CurriculumRepositoryError("not_configured");
        }

        const body = new FormData();
        body.set("nombre", submission.nombre);
        body.set("email", submission.email);
        body.set("mensaje", submission.mensaje);
        body.set("archivo", submission.archivo, submission.archivo.name);

        let response: Response;

        try {
            response = await fetch(endpoint, {
                method: "POST",
                body,
                cache: "no-store",
                signal: AbortSignal.timeout(20_000),
            });
        } catch {
            throw new CurriculumRepositoryError("unavailable");
        }

        if (!response.ok) {
            throw new CurriculumRepositoryError("rejected", response.status);
        }
    }
}
