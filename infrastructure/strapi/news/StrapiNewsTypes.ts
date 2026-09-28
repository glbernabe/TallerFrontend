export type StrapiNewsImageFormat = {
    url: string;
    width: number;
    height: number;
};

export type StrapiNewsImage = {
    url: string;
    alternativeText?: string | null;
    width: number;
    height: number;
    formats?: {
        medium?: StrapiNewsImageFormat;
        small?: StrapiNewsImageFormat;
        thumbnail?: StrapiNewsImageFormat;
    };
};

export type StrapiNews = {
    documentId: string;
    Titulo: string;
    Slug: string;
    Resumen: string | null;
    Cuerpo: unknown[];
    Imagen: StrapiNewsImage | null;
    publishedAt: string | null;
};

export type StrapiNewsCollectionResponse = {
    data: StrapiNews[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};

export type StrapiNewsSingleResponse = {
    data: StrapiNews;
};