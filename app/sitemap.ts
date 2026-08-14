import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://www.autotalleresorihuela.es";

    const lastModified = new Date();

    return [

        {
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: `${baseUrl}/about-us`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/contacto`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },

    ];

}