import type { SiteSettings } from "../../domain/SiteSettings";

export interface SiteSettingsRepository {
    getSiteSettings(): Promise<SiteSettings>;
}