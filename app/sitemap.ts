import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://www.autotalleresorihuela.es";

    return [

        {
            url: baseUrl,
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: `${baseUrl}/about-us`,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/contacto`,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/servicios`,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/legal`,
            changeFrequency: "yearly",
            priority: 0.3,
        },

        {
            url: `${baseUrl}/privacidad`,
            changeFrequency: "yearly",
            priority: 0.3,
        },

        {
            url: `${baseUrl}/cookies`,
            changeFrequency: "yearly",
            priority: 0.3,
        },

    ];

}
