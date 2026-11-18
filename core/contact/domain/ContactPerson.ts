export type ContactPersonImage = {
    url: string;
    alt: string;
    width: number;
    height: number;
};

/** Modelo público normalizado del directorio de trabajadores. */
export type ContactPerson = {
    id: string;
    firstName: string;
    lastName: string;
    department: string;
    jobTitle: string | null;
    email: string;
    phone: string;
    image: ContactPersonImage | null;
    active: boolean;
    order: number;
};
