import type {
    StrapiNews,
    StrapiNewsResponse,
} from "../types";

import type { News } from "@/lib/news/types";

const STRAPI_URL = process.env.STRAPI_URL;

if (!STRAPI_URL) {
    throw new Error("STRAPI_URL no está definida");
}

function getStrapiImageUrl(url: string): string {
    return url.startsWith("http")
        ? url
        : `${STRAPI_URL}${url}`;
}

export function mapNews(news: StrapiNews): News {
    const image = news.Imagen;

    const imageFormat =
        image?.formats?.medium ??
        image?.formats?.small ??
        image ??
        null;

    return {
        id: news.documentId,

        title: news.Titulo,

        slug: news.Slug,

        summary: news.Resumen,

        content: news.Cuerpo,

        image:
            imageFormat
                ? {
                      url: getStrapiImageUrl(imageFormat.url),
                      alt:
                          image?.alternativeText ??
                          news.Titulo,
                      width: imageFormat.width,
                      height: imageFormat.height,
                  }
                : null,

        publishedAt: news.publishedAt,
    };
}

export function mapNewsResponse(
    response: StrapiNewsResponse
): News[] {
    return response.data.map(mapNews);
}