import type { News } from "@/core/news/domain/News";
import { getPublicAssetUrl } from "../ApiClient";
import type { ApiNews } from "./NewsApiTypes";

export function mapApiNews(news: ApiNews): News {
    const media = news.archivo_multimedia;

    return {
        id: String(news.id),
        title: news.titulo,
        slug: news.identificador_url,
        summary: news.resumen,
        content: Array.isArray(news.contenido) ? news.contenido : [],
        image: media?.url_publica
            ? {
                  url: getPublicAssetUrl(media.url_publica),
                  alt: media.texto_alternativo ?? news.titulo,
                  // La subida actual puede dejar las dimensiones en NULL.
                  // Se utiliza una proporción 16:9 hasta guardar dimensiones reales.
                  width: media.ancho_pixeles ?? 1200,
                  height: media.alto_pixeles ?? 675,
              }
            : null,
        publishedAt: news.fecha_publicacion,
    };
}
