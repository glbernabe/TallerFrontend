export type StrapiOpeningHour = {
    id: number;
    documentId: string;

    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;

    day: string;

    morningOpening: string | null;
    morningClosing: string | null;

    afternoonOpening: string | null;
    afternoonClosing: string | null;

    closed: boolean;
    order: number;
};

export type StrapiOpeningHourCollectionResponse = {
    data: StrapiOpeningHour[];
    meta?: Record<string, unknown>;
};