import { GetSiteSettings } from "@/core/site-settings/application/use-cases/GetSiteSettings";

import { StrapiSiteSettingsRepository } from "@/infrastructure/strapi/site-settings/StrapiSiteSettingsRepository";

const siteSettingsRepository =
    new StrapiSiteSettingsRepository();

export const getSiteSettings =
    new GetSiteSettings(
        siteSettingsRepository
    );