import type {
    OpeningDay,
    OpeningHour,
} from "@/core/opening-hours/domain/OpeningHour";
import type { ApiOpeningHour } from "./OpeningHourApiTypes";

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
        throw new Error(`Día de apertura desconocido en API: ${value}`);
    }

    return day;
}

function normalizeTime(value: string | null): string | null {
    if (!value || value.trim() === "") {
        return null;
    }

    const match = /^([01]\d|2[0-3]):([0-5]\d)(?::[0-5]\d(?:\.\d{1,6})?)?$/.exec(
        value.trim()
    );

    if (!match) {
        throw new Error(`Formato de hora no válido: ${value}`);
    }

    return `${match[1]}:${match[2]}`;
}

export function mapApiOpeningHour(
    openingHour: ApiOpeningHour,
): OpeningHour {
    const morningOpening = normalizeTime(openingHour.apertura_manana);
    const morningClosing = normalizeTime(openingHour.cierre_manana);
    const afternoonOpening = normalizeTime(openingHour.apertura_tarde);
    const afternoonClosing = normalizeTime(openingHour.cierre_tarde);

    const closedMorning =
        openingHour.cerrado || !morningOpening || !morningClosing;
    const closedAfternoon =
        openingHour.cerrado || !afternoonOpening || !afternoonClosing;

    return {
        id: String(openingHour.id),
        day: normalizeDay(openingHour.dia),
        morningOpening,
        morningClosing,
        afternoonOpening,
        afternoonClosing,
        closedMorning,
        closedAfternoon,
        closedAllDay: openingHour.cerrado || (
            closedMorning && closedAfternoon
        ),
        order: openingHour.orden,
    };
}
