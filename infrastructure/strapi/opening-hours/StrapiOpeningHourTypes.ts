export type StrapiOpeningHour = {
    documentId: string;

    Dia:
        | "Lunes"
        | "Martes"
        | "Miércoles"
        | "Jueves"
        | "Viernes"
        | "Sábado"
        | "Domingo";

    HoraAperturaManana: string | null;
    HoraCierreManana: string | null;

    HoraAperturaTarde: string | null;
    HoraCierreTarde: string | null;

    CerradoTarde: boolean;
    CerradoManana: boolean;
    CerradoTodoElDia: boolean;

    Orden: number;
};

export type StrapiOpeningHourCollectionResponse = {
    data: StrapiOpeningHour[];
};