import type { NewsRepository } from "@/core/news/application/ports/NewsRepository";
import type { News } from "@/core/news/domain/News";
import type { NewsPage } from "@/core/news/domain/NewsPage";

import { strapiFetch } from "@/lib/strapi/client";
import { StrapiError } from "@/lib/strapi/StrapiError";

import {
    mapStrapiNews,
} from "./StrapiNewsMapper";

import type {
    StrapiNewsCollectionResponse,
} from "./StrapiNewsTypes";

const NEWS_QUERY =
    "populate=Imagen&sort=publishedAt:desc";

export class StrapiNewsRepository
    implements NewsRepository
{
    async getPublishedNews(): Promise<News[]> {
        try {
            const response =
                await strapiFetch<StrapiNewsCollectionResponse>(
                    `/api/news?${NEWS_QUERY}`
                );

            return response.data.map(
                mapStrapiNews
            );
        } catch (error) {
            throw this.createRepositoryError(
                "obtener las noticias publicadas",
                error
            );
        }
    }

    async getNewsPage(
        page: number,
        pageSize: number
    ): Promise<NewsPage> {
        try {
            const response =
                await strapiFetch<StrapiNewsCollectionResponse>(
                    `/api/news?${NEWS_QUERY}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
                );

            const pagination =
                response.meta.pagination;

            return {
                items: response.data.map(
                    mapStrapiNews
                ),
                page: pagination.page,
                pageSize: pagination.pageSize,
                pageCount: pagination.pageCount,
                total: pagination.total,
            };
        } catch (error) {
            throw this.createRepositoryError(
                `obtener la página ${page} de noticias`,
                error
            );
        }
    }

    async getBySlug(
        slug: string
    ): Promise<News | null> {
        try {
            const response =
                await strapiFetch<StrapiNewsCollectionResponse>(
                    `/api/news?filters[Slug][$eq]=${encodeURIComponent(
                        slug
                    )}&${NEWS_QUERY}`
                );

            const news = response.data[0];

            if (!news) {
                return null;
            }

            return mapStrapiNews(news);
        } catch (error) {
            throw this.createRepositoryError(
                `obtener la noticia con slug "${slug}"`,
                error
            );
        }
    }

    async search(
        query: string
    ): Promise<News[]> {
        try {
            const encodedQuery =
                encodeURIComponent(query);

            const response =
                await strapiFetch<StrapiNewsCollectionResponse>(
                    `/api/news?filters[$or][0][Titulo][$containsi]=${encodedQuery}&filters[$or][1][Resumen][$containsi]=${encodedQuery}&${NEWS_QUERY}`
                );

            return response.data.map(
                mapStrapiNews
            );
        } catch (error) {
            throw this.createRepositoryError(
                `buscar noticias con el término "${query}"`,
                error
            );
        }
    }

    private createRepositoryError(
        operation: string,
        error: unknown
    ): Error {
        if (error instanceof StrapiError) {
            return new Error(
                [
                    `No se pudieron ${operation}.`,
                    "",
                    `HTTP: ${error.status}`,
                    `Endpoint: ${error.endpoint}`,
                    `Método: ${error.method}`,
                    "",
                    `Strapi: ${error.message}`,
                    "",
                    this.explainStrapiError(error),
                ].join("\n")
            );
        }

        if (error instanceof Error) {
            return new Error(
                [
                    `No se pudieron ${operation}.`,
                    "",
                    `Error: ${error.message}`,
                ].join("\n")
            );
        }

        return new Error(
            `No se pudieron ${operation} debido a un error desconocido.`
        );
    }

    private explainStrapiError(
        error: StrapiError
    ): string {
        if (
            error.message ===
            "Invalid key Imagen"
        ) {
            return [
                "Posible causa:",
                'El campo "Imagen" no existe o no puede utilizarse en el parámetro "populate".',
                "",
                "Comprueba en Strapi que:",
                '- El campo se llama exactamente "Imagen".',
                "- El campo pertenece al Content-Type News.",
                "- El campo es de tipo Media.",
                "- El Content-Type utilizado por la API es realmente /api/news.",
            ].join("\n");
        }

        return "Revisa la configuración del Content-Type y los parámetros enviados a Strapi.";
    }
}