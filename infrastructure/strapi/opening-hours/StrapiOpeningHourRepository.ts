import type { OpeningHourRepository } from "@/core/opening-hours/application/ports/OpeningHourRepository";
import type { OpeningHour } from "@/core/opening-hours/domain/OpeningHour";

import { strapiFetch } from "@/lib/strapi/client";

import {
    mapStrapiOpeningHour,
} from "./StrapiOpeningHourMapper";

import type {
    StrapiOpeningHourCollectionResponse,
} from "./StrapiOpeningHourTypes";

export class StrapiOpeningHourRepository
    implements OpeningHourRepository
{
    async getOpeningHours(): Promise<OpeningHour[]> {
        const response =
            await strapiFetch<StrapiOpeningHourCollectionResponse>(
                "/api/opening-hours?sort=Orden:asc"
            );

        return response.data.map(
            mapStrapiOpeningHour
        );
    }
}