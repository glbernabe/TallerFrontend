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