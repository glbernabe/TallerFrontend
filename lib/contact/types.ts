export type ContactPersonImage = {
    url: string;
    alt: string;
    width: number;
    height: number;
};

export type ContactPerson = {
    id: string;

    firstName: string;

    lastName: string;

    department: string;

    email: string;

    phone: string;

    image: ContactPersonImage | null;

    active: boolean;

    order: number;
};

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

export type StrapiContactResponse = {
    data: StrapiContact[];
};