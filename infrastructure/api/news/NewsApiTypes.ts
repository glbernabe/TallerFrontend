export type ApiNewsMedia = {
    id: number;
    url_publica: string | null;
    texto_alternativo: string | null;
    leyenda?: string | null;
    ancho_pixeles: number | null;
    alto_pixeles: number | null;
};

/**
 * Respuesta de API: el listado devuelve resumen y multimedia; el detalle
 * incorpora contenido (bloques JSON).
 */
export type ApiNews = {
    id: number;
    titulo: string;
    identificador_url: string;
    resumen: string | null;
    contenido?: unknown[] | null;
    fecha_publicacion: string;
    archivo_multimedia: ApiNewsMedia | null;
};
