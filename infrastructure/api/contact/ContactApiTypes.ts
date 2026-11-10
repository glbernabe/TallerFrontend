export type ApiContactMedia = {
    id: number;
    url_publica?: string | null;
    texto_alternativo?: string | null;
    ancho_pixeles?: number | null;
    alto_pixeles?: number | null;
};

/** Respuesta actual de GET /api/public/contactos. */
export type ApiContact = {
    id: number;
    nombre: string;
    apellidos: string;
    departamento: string | null;
    correo_electronico: string | null;
    telefono: string | null;
    archivo_multimedia_id: number | null;
    orden: number;
    fecha_publicacion: string;

    /** Opcional para permitir una futura respuesta con JOIN multimedia. */
    archivo_multimedia?: ApiContactMedia | null;
};
