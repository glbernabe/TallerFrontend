import type { OpeningHour } from "../../domain/OpeningHour";

export interface OpeningHourRepository {
    getOpeningHours(): Promise<OpeningHour[]>;
}