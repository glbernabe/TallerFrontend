import type { OpeningHour } from "../../domain/OpeningHour";
import type { OpeningHourRepository } from "../ports/OpeningHourRepository";

export class GetOpeningHours {
    constructor(
        private readonly openingHourRepository: OpeningHourRepository
    ) {}

    async execute(): Promise<OpeningHour[]> {
        return this.openingHourRepository.getOpeningHours();
    }
}