import type { CurriculumRepository } from "@/core/curriculums/application/ports/CurriculumRepository";
import {
    CurriculumRepositoryError,
} from "@/core/curriculums/application/ports/CurriculumRepository";
import type { CurriculumSubmission } from "@/core/curriculums/domain/CurriculumSubmission";

import { ApiError, apiRequest } from "../ApiClient";

export class CurriculumApiRepository implements CurriculumRepository {
    async submit(submission: CurriculumSubmission): Promise<void> {
        // Por defecto coincide con el router actual /curriculums.
        // Si se monta bajo un prefijo adicional, configurar API_CURRICULUMS_PATH con la ruta completa.
        const endpoint = (
            process.env.API_CURRICULUMS_PATH?.trim() || "curriculums"
        ).replace(/^\/+/, "");

        const body = new FormData();
        body.set("nombre", submission.nombre);
        body.set("email", submission.email);
        body.set("mensaje", submission.mensaje);
        body.set("archivo", submission.archivo, submission.archivo.name);

        try {
            await apiRequest(endpoint, {
                method: "POST",
                body,
            });
        } catch (error) {
            if (error instanceof ApiError) {
                if (error.status === null) {
                    throw new CurriculumRepositoryError("unavailable");
                }
                throw new CurriculumRepositoryError("rejected", error.status);
            }

            throw new CurriculumRepositoryError("not_configured");
        }
    }
}
