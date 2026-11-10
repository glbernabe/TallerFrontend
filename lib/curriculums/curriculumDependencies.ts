import { SubmitCurriculumUseCase } from "@/core/curriculums/application/use-cases/SubmitCurriculumUseCase";
import { CurriculumApiRepository } from "@/infrastructure/api/curriculums/CurriculumApiRepository";

// Composition root: el caso de uso depende del puerto, no del proveedor HTTP.
const curriculumRepository = new CurriculumApiRepository();

export const submitCurriculum = new SubmitCurriculumUseCase(curriculumRepository);
