import { GetSiteSettings } from "@/core/site-settings/application/use-cases/GetSiteSettings";
import { SiteSettingsApiRepository } from "@/infrastructure/api/site-settings/SiteSettingsApiRepository";

const siteSettingsRepository = new SiteSettingsApiRepository();

export const getSiteSettings = new GetSiteSettings(siteSettingsRepository);
