import { SubmitCurriculumUseCase } from "@/core/curriculums/application/use-cases/SubmitCurriculumUseCase";
import { FastApiCurriculumRepository } from "@/infrastructure/fastapi/curriculums/FastApiCurriculumRepository";

/** Composition root: bind the application port to the FastAPI adapter. */
const curriculumRepository = new FastApiCurriculumRepository();

export const submitCurriculum = new SubmitCurriculumUseCase(
    curriculumRepository,
);