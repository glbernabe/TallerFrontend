export type ApiOpeningHour = {
    id: number;
    dia: string;
    apertura_manana: string | null;
    cierre_manana: string | null;
    apertura_tarde: string | null;
    cierre_tarde: string | null;
    cerrado: boolean;
    orden: number;
    fecha_publicacion: string;
};
