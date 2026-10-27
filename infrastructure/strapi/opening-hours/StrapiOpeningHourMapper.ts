import type {
    OpeningDay,
    OpeningHour,
} from "@/core/opening-hours/domain/OpeningHour";

import type { StrapiOpeningHour } from "./StrapiOpeningHourTypes";

function normalizeTime(value: string | null): string | null {
    if (!value || value.trim() === "") {
        return null;
    }

    return value;
}

function normalizeDay(value: string): OpeningDay {
    const days: Record<string, OpeningDay> = {
        Lunes: "Lunes",
        Martes: "Martes",
        Miercoles: "Miércoles",
        "Miércoles": "Miércoles",
        Jueves: "Jueves",
        Viernes: "Viernes",
        Sábado: "Sábado",
        Domingo: "Domingo",
    };

    const day = days[value];

    if (!day) {
        throw new Error(`Día de apertura desconocido en Strapi: ${value}`);
    }

    return day;
}

export function mapStrapiOpeningHour(
    openingHour: StrapiOpeningHour
): OpeningHour {
    const morningOpening = normalizeTime(openingHour.morningOpening);
    const morningClosing = normalizeTime(openingHour.morningClosing);

    const afternoonOpening = normalizeTime(openingHour.afternoonOpening);
    const afternoonClosing = normalizeTime(openingHour.afternoonClosing);

    const closedMorning =
        openingHour.closed || !morningOpening || !morningClosing;

    const closedAfternoon =
        openingHour.closed || !afternoonOpening || !afternoonClosing;

    return {
        id: openingHour.documentId,

        day: normalizeDay(openingHour.day),

        morningOpening,
        morningClosing,
        afternoonOpening,
        afternoonClosing,

        closedMorning,
        closedAfternoon,
        closedAllDay: openingHour.closed || (
            closedMorning && closedAfternoon
        ),

        order: openingHour.order,
    };
}