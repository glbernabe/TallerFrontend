import type { SiteSettings } from "@/core/site-settings/domain/SiteSettings";
import type { ApiSiteSettings } from "./SiteSettingsApiTypes";

export function mapApiSiteSettings(
    settings: ApiSiteSettings,
): SiteSettings {
    return {
        phone: settings.telefono ?? "",
        email: settings.correo_electronico ?? "",
        address: settings.direccion ?? "",
        googleMapsUrl: settings.url_google_maps,
        instagramUrl: settings.url_instagram ?? null,
        facebookUrl: settings.url_facebook ?? null,
        tiktokUrl: settings.url_tiktok ?? null,
        googleReviewsUrl: settings.url_resenas_google ?? null,
    };
}
