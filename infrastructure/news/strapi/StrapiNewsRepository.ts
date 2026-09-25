import type { NewsRepository } from "@/core/news/application/ports/NewsRepository";
import type { News } from "@/core/news/domain/News";
import type { NewsPage } from "@/core/news/domain/NewsPage";

import { strapiFetch } from "@/lib/strapi/client";

import {
    mapStrapiNews,
} from "./StrapiNewsMapper";

import type {
    StrapiNewsCollectionResponse,
    StrapiNewsSingleResponse,
} from "./StrapiNewsTypes";

const NEWS_QUERY =
    "populate=Imagen&sort=publishedAt:desc";

export class StrapiNewsRepository
    implements NewsRepository
{
    async getPublishedNews(): Promise<News[]> {
        const response =
            await strapiFetch<StrapiNewsCollectionResponse>(
                `/api/news?${NEWS_QUERY}`
            );

        return response.data.map(
            mapStrapiNews
        );
    }

    async getNewsPage(
        page: number,
        pageSize: number
    ): Promise<NewsPage> {
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
            page:
                pagination.page,
            pageSize:
                pagination.pageSize,
            pageCount:
                pagination.pageCount,
            total:
                pagination.total,
        };
    }

    async getBySlug(
        slug: string
    ): Promise<News | null> {
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
    }

    async search(
        query: string
    ): Promise<News[]> {
        const encodedQuery =
            encodeURIComponent(query);

        const response =
            await strapiFetch<StrapiNewsCollectionResponse>(
                `/api/news?filters[$or][0][Titulo][$containsi]=${encodedQuery}&filters[$or][1][Resumen][$containsi]=${encodedQuery}&${NEWS_QUERY}`
            );

        return response.data.map(
            mapStrapiNews
        );
    }
}