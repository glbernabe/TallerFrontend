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
        medium?: StrapiContactImageFormat;
        small?: StrapiContactImageFormat;
        thumbnail?: StrapiContactImageFormat;
    };
};

export type StrapiContact = {
    documentId: string;
    Nombre: string;
    Apellidos: string;
    Departamento: string;
    Email: string;
    Telefono: string;
    Foto: StrapiContactImage | null;
    Activo: boolean;
    Orden: number;
};

export type StrapiContactCollectionResponse = {
    data: StrapiContact[];
};

export type StrapiContactSingleResponse = {
    data: StrapiContact;
};