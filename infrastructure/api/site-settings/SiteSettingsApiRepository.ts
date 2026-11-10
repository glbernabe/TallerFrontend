import type { SiteSettingsRepository } from "@/core/site-settings/application/ports/SiteSettingsRepository";
import type { SiteSettings } from "@/core/site-settings/domain/SiteSettings";

import { apiFetch } from "../ApiClient";
import { mapApiSiteSettings } from "./SiteSettingsApiMapper";
import type { ApiSiteSettings } from "./SiteSettingsApiTypes";

export class SiteSettingsApiRepository implements SiteSettingsRepository {
    async getSiteSettings(): Promise<SiteSettings> {
        const { data } = await apiFetch<ApiSiteSettings>(
            "api/public/configuracion-sitio",
        );

        return mapApiSiteSettings(data);
    }
}
