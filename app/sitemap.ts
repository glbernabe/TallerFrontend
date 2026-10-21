import type { MetadataRoute } from "next";

const LOCALES = ["es", "en", "fr", "de"] as const;

type Locale = (typeof LOCALES)[number];

type LocalizedPaths = Record<Locale, string>;

type ChangeFrequency = "weekly" | "monthly" | "yearly";

type LocalizedPage = {
    paths: LocalizedPaths;
    changeFrequency: ChangeFrequency;
    priority: number;
};

export const revalidate = 3600;

const LOCALIZED_PAGES: LocalizedPage[] = [
    // Inicio
    {
        paths: {
            es: "/",
            en: "/",
            fr: "/",
            de: "/",
        },
        changeFrequency: "weekly",
        priority: 1,
    },

    // Servicios
    {
        paths: {
            es: "/servicios",
            en: "/services",
            fr: "/services",
            de: "/dienstleistungen",
        },
        changeFrequency: "monthly",
        priority: 0.9,
    },

    // Taller: Presupuesto
    {
        paths: {
            es: "/servicios/taller/presupuestos",
            en: "/services/workshop/quotes",
            fr: "/services/atelier/devis",
            de: "/dienstleistungen/werkstatt/kostenvoranschlag",
        },
        changeFrequency: "monthly",
        priority: 0.8,
    },

    // Taller: Cita previa
    {
        paths: {
            es: "/servicios/taller/cita-previa",
            en: "/services/workshop/appointment",
            fr: "/services/atelier/rendez-vous",
            de: "/dienstleistungen/werkstatt/termin",
        },
        changeFrequency: "monthly",
        priority: 0.8,
    },

    // Taller: Flotistas
    {
        paths: {
            es: "/servicios/taller/flotistas",
            en: "/services/workshop/fleet-customers",
            fr: "/services/atelier/gestionnaires-de-flotte",
            de: "/dienstleistungen/werkstatt/flottenkunden",
        },
        changeFrequency: "monthly",
        priority: 0.8,
    },

    // Contacto
    {
        paths: {
            es: "/sobre-nosotros/contacto",
            en: "/about-us/contact",
            fr: "/a-propos/contact",
            de: "/ueber-uns/kontakt",
        },
        changeFrequency: "monthly",
        priority: 0.9,
    },

    // Historia
    {
        paths: {
            es: "/sobre-nosotros/historia",
            en: "/about-us/history",
            fr: "/a-propos/histoire",
            de: "/ueber-uns/geschichte",
        },
        changeFrequency: "yearly",
        priority: 0.6,
    },

    // Listado de noticias
    {
        paths: {
            es: "/noticias",
            en: "/news",
            fr: "/actualites",
            de: "/nachrichten",
        },
        changeFrequency: "weekly",
        priority: 0.8,
    },

    // Trabaja con nosotros
    {
        paths: {
            es: "/trabaja-con-nosotros",
            en: "/work-with-us",
            fr: "/rejoignez-nous",
            de: "/arbeiten-bei-uns",
        },
        changeFrequency: "monthly",
        priority: 0.6,
    },

    // Aviso legal
    {
        paths: {
            es: "/legal",
            en: "/legal-notice",
            fr: "/mentions-legales",
            de: "/impressum",
        },
        changeFrequency: "yearly",
        priority: 0.3,
    },

    // Política de privacidad
    {
        paths: {
            es: "/privacidad",
            en: "/privacy-policy",
            fr: "/politique-de-confidentialite",
            de: "/datenschutz",
        },
        changeFrequency: "yearly",
        priority: 0.3,
    },

    // Política de cookies
    {
        paths: {
            es: "/cookies",
            en: "/cookie-policy",
            fr: "/politique-de-cookies",
            de: "/cookie-richtlinie",
        },
        changeFrequency: "yearly",
        priority: 0.3,
    },
];

function localizedUrl(
    baseUrl: string,
    locale: Locale,
    pathname: string
): string {
    const path =
        pathname === "/"
            ? ""
            : `/${pathname.replace(/^\/+/, "")}`;

    return `${baseUrl}/${locale}${path}`;
}

function createLocalizedEntries(
    baseUrl: string,
    page: LocalizedPage
): MetadataRoute.Sitemap {
    const languages: Record<Locale, string> = {
        es: localizedUrl(baseUrl, "es", page.paths.es),
        en: localizedUrl(baseUrl, "en", page.paths.en),
        fr: localizedUrl(baseUrl, "fr", page.paths.fr),
        de: localizedUrl(baseUrl, "de", page.paths.de),
    };

    return LOCALES.map((locale) => ({
        url: languages[locale],
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
            languages,
        },
    }));
}

/**
 * Obtiene las noticias publicadas desde Strapi.
 *
 * Si Strapi no está disponible, conserva el sitemap estático
 * y omite temporalmente las URL de noticias individuales.
 */
async function getNewsEntries(
    baseUrl: string
): Promise<MetadataRoute.Sitemap> {
    try {
        // Importación dinámica para que un fallo de configuración
        // de Strapi no impida generar el resto del sitemap.
        const { getNewsPage } = await import(
            "@/lib/news/newsDependencies"
        );

        const pageSize = 100;
        const firstPage = await getNewsPage.execute(1, pageSize);

        const news = [...firstPage.items];

        // Next.js y los buscadores admiten un máximo de 50.000 URL
        // por sitemap. Reservamos espacio para las páginas estáticas.
        const maxPage = Math.min(firstPage.pageCount, 499);

        for (let page = 2; page <= maxPage; page++) {
            try {
                const result = await getNewsPage.execute(
                    page,
                    pageSize
                );

                news.push(...result.items);
            } catch (error) {
                console.error(
                    `No se pudo cargar la página ${page} de noticias para el sitemap:`,
                    error
                );

                // Conservamos las noticias obtenidas hasta ese momento.
                break;
            }
        }

        // Evita URL duplicadas si Strapi devuelve algún slug repetido.
        const uniqueNews = new Map<
            string,
            (typeof news)[number]
        >();

        for (const article of news) {
            const slug = article.slug?.trim();

            if (slug) {
                uniqueNews.set(slug, article);
            }
        }

        return Array.from(uniqueNews.keys()).map((slug) => ({
            // El contenido de las noticias todavía no está
            // internacionalizado en Strapi: solo listamos español.
            url: `${baseUrl}/es/noticias/${encodeURIComponent(slug)}`,
            changeFrequency: "monthly",
            priority: 0.6,
        }));
    } catch (error) {
        console.error(
            "No se pudieron cargar las noticias para el sitemap:",
            error
        );

        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = (
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://www.autotalleresorihuela.es"
    ).replace(/\/+$/, "");

    const staticEntries = LOCALIZED_PAGES.flatMap((page) =>
        createLocalizedEntries(baseUrl, page)
    );

    const newsEntries = await getNewsEntries(baseUrl);

    return [
        ...staticEntries,
        ...newsEntries,
    ];
}
