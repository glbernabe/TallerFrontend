
export type StrapiContactImageFormat = {
    url: string;
    width: number;
    height: number;
};

export type StrapiContactImage = {
    url: string;
    alternativeText?: string | null;
    width: number;
    height: number;
    formats?: {
        medium?: StrapiContactImageFormat | null;
        small?: StrapiContactImageFormat | null;
        thumbnail?: StrapiContactImageFormat | null;
    } | null;
};

export type StrapiContact = {
    id: number;
    documentId: string;

    firstName: string;
    lastName: string;
    department: string;
    email: string;
    phone: string;

    photo: StrapiContactImage | null;

    active: boolean;
    order: number;
};

export type StrapiContactCollectionResponse = {
    data: StrapiContact[];
    meta?: Record<string, unknown>;
};

export type StrapiContactSingleResponse = {
    data: StrapiContact;
    meta?: Record<string, unknown>;
};
