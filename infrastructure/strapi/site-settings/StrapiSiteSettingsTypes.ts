export type StrapiSiteSettings = {
    phone: string;
    email: string;
    address: string;
    googleMapsUrl: string;

    instagramUrl?: string | null;
    facebookUrl?: string | null;
    tiktokUrl?: string | null;
    googleReviewsUrl?: string | null;

    recambiosEmail?: string | null;
    posventaEmail?: string | null;
    trabajaConNosotrosEmail?: string | null;
};

export type StrapiSiteSettingsResponse = {
    data: StrapiSiteSettings;
};