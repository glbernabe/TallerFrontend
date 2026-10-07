import type { SiteSettingsRepository } from "@/core/site-settings/application/ports/SiteSettingsRepository";
import type { SiteSettings } from "@/core/site-settings/domain/SiteSettings";

import { strapiFetch } from "@/lib/strapi/client";

import {
    mapStrapiSiteSettings,
} from "./StrapiSiteSettingsMapper";

import type {
    StrapiSiteSettingsResponse,
} from "./StrapiSiteSettingsTypes";

export class StrapiSiteSettingsRepository
    implements SiteSettingsRepository
{
    async getSiteSettings(): Promise<SiteSettings> {
        const response =
            await strapiFetch<StrapiSiteSettingsResponse>(
                "/api/site-setting"
            );

        return mapStrapiSiteSettings(
            response.data
        );
    }
}