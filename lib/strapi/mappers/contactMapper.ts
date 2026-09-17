import type {
    StrapiContact,
    StrapiContactResponse,
} from "@/lib/contact/types";

import type { ContactPerson } from "@/lib/contact/types";

const STRAPI_URL = process.env.STRAPI_URL;

if (!STRAPI_URL) {
    throw new Error("STRAPI_URL no está definida");
}

function getStrapiImageUrl(url: string): string {
    return url.startsWith("http")
        ? url
        : `${STRAPI_URL}${url}`;
}

export function mapContact(
    contact: StrapiContact
): ContactPerson {
    const image = contact.Foto;

    const imageFormat =
        image?.formats?.medium ??
        image?.formats?.small ??
        image ??
        null;

    return {
        id: contact.documentId,

        firstName: contact.Nombre,

        lastName: contact.Apellidos,

        department: contact.Departamento,

        email: contact.Email,

        phone: contact.Telefono,

        image:
            imageFormat
                ? {
                    url: getStrapiImageUrl(
                        imageFormat.url
                    ),
                    alt:
                        image?.alternativeText ??
                        `${contact.Nombre} ${contact.Apellidos}`,
                    width: imageFormat.width,
                    height: imageFormat.height,
                }
                : null,

        active: contact.Activo,

        order: contact.Orden,
    };
}

export function mapContactResponse(
    response: StrapiContactResponse
): ContactPerson[] {
    return response.data.map(mapContact);
}