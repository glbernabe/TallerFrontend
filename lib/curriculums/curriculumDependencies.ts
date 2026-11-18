import { SubmitCurriculumUseCase } from "@/core/curriculums/application/use-cases/SubmitCurriculumUseCase";
import { CurriculumApiRepository } from "@/infrastructure/api/curriculums/CurriculumApiRepository";

const curriculumRepository = new CurriculumApiRepository();
export const submitCurriculum = new SubmitCurriculumUseCase(curriculumRepository);
