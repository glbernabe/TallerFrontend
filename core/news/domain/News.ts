export type NewsImage = {
    url: string;
    alt: string;
    width: number;
    height: number;
};

export type News = {
    id: string;
    title: string;
    slug: string;
    summary: string | null;
    content: unknown[];
    image: NewsImage | null;
    publishedAt: string | null;
};