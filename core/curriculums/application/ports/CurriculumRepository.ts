import type { CurriculumSubmission } from "../../domain/CurriculumSubmission";

/** Normalised failures returned by a curriculum repository implementation. */
export type CurriculumRepositoryErrorCode =
    | "not_configured"
    | "unavailable"
    | "rejected";

/**
 * Shared error contract so the Next.js route can handle failures from any
 * CurriculumRepository implementation without depending on infrastructure.
 */
export class CurriculumRepositoryError extends Error {
    constructor(
        public readonly code: CurriculumRepositoryErrorCode,
        public readonly status?: number,
    ) {
        super(code);
        this.name = "CurriculumRepositoryError";
    }
}

/** Output port that hides the service receiving a curriculum submission. */
export interface CurriculumRepository {
    submit(submission: CurriculumSubmission): Promise<void>;
}
