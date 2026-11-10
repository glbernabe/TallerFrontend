import type { NewsRepository } from "@/core/news/application/ports/NewsRepository";
import type { News } from "@/core/news/domain/News";
import type { NewsPage } from "@/core/news/domain/NewsPage";

import { ApiError, apiFetch } from "../ApiClient";
import { mapApiNews } from "./NewsApiMapper";
import type { ApiNews } from "./NewsApiTypes";

const API_PAGE_SIZE = 50; // El endpoint limita limite a 50.

function normalizeText(value: string): string {
    return value
        .trim()
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export class NewsApiRepository implements NewsRepository {
    /**
     * La API actual devuelve una lista, no el sobre de paginación del proveedor anterior.
     * Recuperamos bloques de hasta 50 hasta llegar al final. En las primeras
     * versiones (normalmente menos de 50 noticias) supone una sola petición.
     */
    async getPublishedNews(): Promise<News[]> {
        const allRows: ApiNews[] = [];
        let desplazamiento = 0;

        while (true) {
            const query = new URLSearchParams({
                limite: String(API_PAGE_SIZE),
                desplazamiento: String(desplazamiento),
            });

            const { data } = await apiFetch<ApiNews[]>(
                `api/public/noticias?${query.toString()}`,
            );

            allRows.push(...data);

            if (data.length < API_PAGE_SIZE) {
                break;
            }

            desplazamiento += API_PAGE_SIZE;
        }

        return allRows.map(mapApiNews);
    }

    /**
     * API actualmente acepta limite/desplazamiento, pero no devuelve total
     * ni page_count. Para conservar el contrato NewsPage con metadatos exactos,
     * calculamos la página sobre el conjunto publicado. Para catálogos grandes
     * convendría añadir total en la respuesta de API.
     */
    async getNewsPage(page: number, pageSize: number): Promise<NewsPage> {
        const allNews = await this.getPublishedNews();
        const total = allNews.length;
        const pageCount = Math.ceil(total / pageSize);
        const start = (page - 1) * pageSize;

        return {
            items: allNews.slice(start, start + pageSize),
            page,
            pageSize,
            pageCount,
            total,
        };
    }

    async getBySlug(slug: string): Promise<News | null> {
        try {
            const { data } = await apiFetch<ApiNews>(
                `api/public/noticias/${encodeURIComponent(slug)}`,
            );

            return mapApiNews(data);
        } catch (error) {
            if (error instanceof ApiError && error.status === 404) {
                return null;
            }
            throw error;
        }
    }

    /**
     * La API actual no dispone de parámetro de búsqueda. Filtramos el conjunto
     * publicado en el servidor Next.js para mantener el contrato del dominio.
     */
    async search(query: string): Promise<News[]> {
        const normalizedQuery = normalizeText(query);

        if (!normalizedQuery) {
            return this.getPublishedNews();
        }

        const news = await this.getPublishedNews();

        return news.filter((item) => {
            const searchableText = normalizeText(
                `${item.title} ${item.summary ?? ""}`,
            );
            return searchableText.includes(normalizedQuery);
        });
    }
}
