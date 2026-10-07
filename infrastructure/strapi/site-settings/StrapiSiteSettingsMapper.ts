import type { SiteSettings } from "@/core/site-settings/domain/SiteSettings";

import type {
    StrapiSiteSettings,
} from "./StrapiSiteSettingsTypes";

export function mapStrapiSiteSettings(
    settings: StrapiSiteSettings
): SiteSettings {
    return {
        phone: settings.phone,
        email: settings.email,
        address: settings.address,
        googleMapsUrl: settings.googleMapsUrl,

        instagramUrl:
            settings.instagramUrl ?? null,

        facebookUrl:
            settings.facebookUrl ?? null,

        tiktokUrl:
            settings.tiktokUrl ?? null,

        googleReviewsUrl:
            settings.googleReviewsUrl ?? null,

        recambiosEmail:
            settings.recambiosEmail ?? null,

        posventaEmail:
            settings.posventaEmail ?? null,

        trabajaConNosotrosEmail:
            settings.trabajaConNosotrosEmail ?? null,
    };
}