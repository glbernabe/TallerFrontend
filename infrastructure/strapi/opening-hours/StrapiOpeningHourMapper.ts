import type { OpeningHour } from "@/core/opening-hours/domain/OpeningHour";

import type { StrapiOpeningHour } from "./StrapiOpeningHourTypes";

function normalizeTime(
    value: string | null
): string | null {
    if (!value || value.trim() === "") {
        return null;
    }

    return value;
}

export function mapStrapiOpeningHour(
    openingHour: StrapiOpeningHour
): OpeningHour {
    return {
        id: openingHour.documentId,

        day: openingHour.Dia,

        morningOpening:
            normalizeTime(
                openingHour.HoraAperturaManana
            ),

        morningClosing:
            normalizeTime(
                openingHour.HoraCierreManana
            ),

        afternoonOpening:
            normalizeTime(
                openingHour.HoraAperturaTarde
            ),

        afternoonClosing:
            normalizeTime(
                openingHour.HoraCierreTarde
            ),

        closedMorning:
            openingHour.CerradoManana,

        closedAfternoon:
            openingHour.CerradoTarde,

        closedAllDay:
            openingHour.CerradoTodoElDia,

        order:
            openingHour.Orden,
    };
}