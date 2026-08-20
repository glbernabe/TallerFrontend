import type { Metadata } from "next";

import "./globals.css";

import { mbCorpoText, mbCorpoTitle } from "@/fonts/fonts";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.autotalleresorihuela.es";

export const metadata: Metadata = {

    metadataBase: new URL(siteUrl),

    title: {
        default:
            "Auto-Talleres Orihuela | Servicio Oficial Mercedes-Benz",
        template:
            "%s | Auto-Talleres Orihuela",
    },

    description:
        "Auto-Talleres Orihuela, Servicio Oficial Mercedes-Benz en Orihuela, Alicante. Mantenimiento, diagnosis y reparación de camiones, furgonetas y vehículos comerciales.",

    keywords: [
        "Auto-Talleres Orihuela",
        "taller Mercedes Orihuela",
        "Mercedes-Benz Orihuela",
        "taller Mercedes Alicante",
        "servicio oficial Mercedes-Benz",
        "mantenimiento Mercedes",
        "reparación Mercedes",
        "diagnosis Mercedes",
        "taller vehículos industriales Orihuela",
    ],

    authors: [
        {
            name: "Auto-Talleres Orihuela",
        },
    ],

    creator: "Auto-Talleres Orihuela",

    publisher: "Auto-Talleres Orihuela",

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,

            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {

        type: "website",

        locale: "es_ES",

        url: siteUrl,

        siteName: "Auto-Talleres Orihuela",

        title:
            "Auto-Talleres Orihuela | Servicio Oficial Mercedes-Benz",

        description:
            "Mantenimiento, diagnosis y reparación de vehículos en Auto-Talleres Orihuela.",

        images: [
            {
                url: "/content/images/background/Mercedes_Benz_Pattern.webp",

                width: 1200,
                height: 630,

                alt:
                    "Auto-Talleres Orihuela",
            },
        ],

    },

    twitter: {

        card: "summary_large_image",

        title:
            "Auto-Talleres Orihuela | Servicio Oficial Mercedes-Benz",

        description:
            "Mantenimiento, diagnosis y reparación de vehículos en Orihuela, Alicante.",

        images: [
            "/content/images/background/Mercedes_Benz_Pattern.webp",
        ],

    },

    alternates: {
        canonical: siteUrl,
    },

    icons: {
        icon: "/content/icons/logo.svg",
    },

};

const structuredData = {

    "@context": "https://schema.org",

    "@type": "AutoRepair",

    "@id": `${siteUrl}/#autotaller`,

    name: "Auto-Talleres Orihuela",

    legalName: "Autotalleres Orihuela S.L.",

    taxID: "B03934908",

    description:
        "Servicio Oficial Mercedes-Benz especializado en mantenimiento, diagnosis y reparación de camiones, furgonetas y vehículos comerciales.",

    url: siteUrl,

    telephone: "+34966744466",

    email: "orihuela.ato@autotalleresorihuela.es",

    image: `${siteUrl}/content/images/background/Trucks_display.webp`,

    address: {
        "@type": "PostalAddress",
        streetAddress: "Murcia-Alicante km28",
        postalCode: "03300",
        addressLocality: "Orihuela",
        addressRegion: "Alicante",
        addressCountry: "ES",
    },

    areaServed: [
        {
            "@type": "City",
            name: "Orihuela",
        },
        {
            "@type": "AdministrativeArea",
            name: "Vega Baja del Segura",
        },
        {
            "@type": "AdministrativeArea",
            name: "Alicante",
        },
        {
            "@type": "AdministrativeArea",
            name: "Región de Murcia",
        },
    ],

    sameAs: [
        "https://www.facebook.com/autotalleres.orihuela/?locale=es_ES",
        "https://www.instagram.com/autotalleresorihuela/",
        "https://www.linkedin.com/company/autotalleresorihuela/?originalSubdomain=es",
    ],

    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            opens: "08:30",
            closes: "14:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            opens: "15:30",
            closes: "19:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:30",
            closes: "13:30",
        },
    ],

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <html
            lang="es"
            className={`
                ${mbCorpoText.variable}
                ${mbCorpoTitle.variable}
            `}
        >

            <body>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html:
                            JSON.stringify(structuredData),
                    }}
                />

                {children}

            </body>

        </html>

    );

}
