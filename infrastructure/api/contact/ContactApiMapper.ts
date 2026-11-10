import type { ContactPerson } from "@/core/contact/domain/ContactPerson";
import { getPublicAssetUrl } from "../ApiClient";
import type { ApiContact } from "./ContactApiTypes";

export function mapApiContact(contact: ApiContact): ContactPerson {
    const media = contact.archivo_multimedia ?? null;
    const mediaId = media?.id ?? contact.archivo_multimedia_id;
    const mediaPath = media?.url_publica ?? (
        mediaId !== null && mediaId !== undefined
            ? `/api/public/archivos-multimedia/${mediaId}`
            : null
    );

    return {
        id: String(contact.id),
        firstName: contact.nombre,
        lastName: contact.apellidos,
        department: contact.departamento ?? "",
        email: contact.correo_electronico ?? "",
        phone: contact.telefono ?? "",
        image: mediaPath
            ? {
                  url: getPublicAssetUrl(mediaPath),
                  alt:
                      media?.texto_alternativo ??
                      `${contact.nombre} ${contact.apellidos}`,
                  // El endpoint actual de contactos solo devuelve el ID multimedia.
                  // Estos tamaños son una reserva de presentación hasta que la API
                  // incluya ancho_pixeles y alto_pixeles mediante un LEFT JOIN.
                  width: media?.ancho_pixeles ?? 800,
                  height: media?.alto_pixeles ?? 800,
              }
            : null,
        // La API solo entrega contactos activos y publicados.
        active: true,
        order: contact.orden,
    };
}
