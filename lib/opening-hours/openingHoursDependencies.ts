import { GetOpeningHours } from "@/core/opening-hours/application/use-cases/GetOpeningHours";
import { OpeningHourApiRepository } from "@/infrastructure/api/opening-hours/OpeningHourApiRepository";

const openingHourRepository = new OpeningHourApiRepository();

export const getOpeningHours = new GetOpeningHours(openingHourRepository);
