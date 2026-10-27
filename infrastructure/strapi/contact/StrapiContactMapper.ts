import type { ContactPerson } from "@/core/contact/domain/ContactPerson";
import type { StrapiContact } from "./StrapiContactTypes";

const STRAPI_URL = (() => {
    const url = process.env.STRAPI_URL;

    if (!url) {
        throw new Error("STRAPI_URL no está definida");
    }

    return url;
})();

function getStrapiImageUrl(url: string): string {
    if (/^https?:\/\//i.test(url)) {
        return url;
    }

    return `${STRAPI_URL.replace(/\/+$/, "")}/${url.replace(/^\/+/, "")}`;
}

export function mapStrapiContact(
    contact: StrapiContact
): ContactPerson {
    const image = contact.photo;

    const imageFormat =
        image?.formats?.medium ??
        image?.formats?.small ??
        image ??
        null;

    return {
        id: contact.documentId,
        firstName: contact.firstName,
        lastName: contact.lastName,
        department: contact.department,
        email: contact.email,
        phone: contact.phone,

        image: imageFormat
            ? {
                  url: getStrapiImageUrl(imageFormat.url),
                  alt:
                      image?.alternativeText ??
                      `${contact.firstName} ${contact.lastName}`,
                  width: imageFormat.width,
                  height: imageFormat.height,
              }
            : null,

        active: contact.active,
        order: contact.order,
    };
}