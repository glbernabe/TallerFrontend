import { GetOpeningHours } from "@/core/opening-hours/application/use-cases/GetOpeningHours";

import { StrapiOpeningHourRepository } from "@/infrastructure/strapi/opening-hours/StrapiOpeningHourRepository";

const openingHourRepository =
    new StrapiOpeningHourRepository();

export const getOpeningHours =
    new GetOpeningHours(
        openingHourRepository
    );