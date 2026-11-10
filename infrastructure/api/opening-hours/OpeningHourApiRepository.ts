import type { OpeningHourRepository } from "@/core/opening-hours/application/ports/OpeningHourRepository";
import type { OpeningHour } from "@/core/opening-hours/domain/OpeningHour";

import { apiFetch } from "../ApiClient";
import { mapApiOpeningHour } from "./OpeningHourApiMapper";
import type { ApiOpeningHour } from "./OpeningHourApiTypes";

export class OpeningHourApiRepository implements OpeningHourRepository {
    async getOpeningHours(): Promise<OpeningHour[]> {
        const { data } = await apiFetch<ApiOpeningHour[]>(
            "api/public/horarios-apertura",
        );

        return data.map(mapApiOpeningHour);
    }
}
