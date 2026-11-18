export type ApiContactMedia = {
    id: number;
    url_publica?: string | null;
    texto_alternativo?: string | null;
    ancho_pixeles?: number | null;
    alto_pixeles?: number | null;
};

/** Respuesta de GET /api/public/contactos (cargo puede no venir hasta actualizar FastAPI). */
export type ApiContact = {
    id: number | string;
    nombre: string;
    apellidos: string;
    departamento: string | null;
    cargo?: string | null;
    correo_electronico: string | null;
    telefono: string | null;
    archivo_multimedia_id: number | null;
    orden: number;
    fecha_publicacion: string;
    archivo_multimedia?: ApiContactMedia | null;
};
