export type StrapiImageFormat = {
    url: string;
    width: number;
    height: number;
};

export type StrapiImage = {
    url: string;
    width: number;
    height: number;
    alternativeText: string | null;
    formats?: {
        small?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        thumbnail?: StrapiImageFormat;
    };
};

export type StrapiNews = {
    id: number;
    documentId: string;

    Titulo: string;
    Slug: string;
    Imagen: StrapiImage | null;
    Resumen: string | null;
    Cuerpo: unknown[];

    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
};

export type StrapiNewsResponse = {
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