import { GetOpeningHours } from "@/core/opening-hours/application/use-cases/GetOpeningHours";
import { OpeningHourApiRepository } from "@/infrastructure/api/opening-hours/OpeningHourApiRepository";
const repository = new OpeningHourApiRepository();
export const getOpeningHours = new GetOpeningHours(repository);
