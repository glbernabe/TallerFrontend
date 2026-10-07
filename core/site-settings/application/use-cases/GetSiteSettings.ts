import type { SiteSettings } from "../../domain/SiteSettings";
import type { SiteSettingsRepository } from "../ports/SiteSettingsRepository";

export class GetSiteSettings {
    constructor(
        private readonly siteSettingsRepository: SiteSettingsRepository
    ) {}

    async execute(): Promise<SiteSettings> {
        return this.siteSettingsRepository.getSiteSettings();
    }
}