export type OpeningDay =
    | "Lunes"
    | "Martes"
    | "Miércoles"
    | "Jueves"
    | "Viernes"
    | "Sábado"
    | "Domingo";

export type OpeningHour = {
    id: string;

    day: OpeningDay;

    morningOpening: string | null;
    morningClosing: string | null;

    afternoonOpening: string | null;
    afternoonClosing: string | null;

    closedMorning: boolean;
    closedAfternoon: boolean;
    closedAllDay: boolean;

    order: number;
};