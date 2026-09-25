import type { ContactPerson } from "@/core/contact/domain/ContactPerson";
import type { StrapiContact } from "./StrapiContactTypes";

const STRAPI_URL = process.env.STRAPI_URL;

if (!STRAPI_URL) {
    throw new Error(
        "STRAPI_URL no está definida"
    );
}

function getStrapiImageUrl(
    url: string
): string {
    if (url.startsWith("http")) {
        return url;
    }

    return `${STRAPI_URL}${url}`;
}

export function mapStrapiContact(
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

        firstName:
            contact.Nombre,

        lastName:
            contact.Apellidos,

        department:
            contact.Departamento,

        email:
            contact.Email,

        phone:
            contact.Telefono,

        image: imageFormat
            ? {
                  url: getStrapiImageUrl(
                      imageFormat.url
                  ),
                  alt:
                      image?.alternativeText ??
                      `${contact.Nombre} ${contact.Apellidos}`,
                  width:
                      imageFormat.width,
                  height:
                      imageFormat.height,
              }
            : null,

        active:
            contact.Activo,

        order:
            contact.Orden,
    };
}