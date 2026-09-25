import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["es", "en", "fr", "de"],

    defaultLocale: "es",

    localePrefix: "always",

    pathnames: {
        "/": {
            es: "/",
            en: "/",
            fr: "/",
            de: "/",
        },

        "/servicios": {
            es: "/servicios",
            en: "/services",
            fr: "/services",
            de: "/dienstleistungen",
        },

        "/servicios/taller/cita-previa": {
            es: "/servicios/taller/cita-previa",
            en: "/services/workshop/appointment",
            fr: "/services/atelier/rendez-vous",
            de: "/dienstleistungen/werkstatt/termin",
        },

        "/servicios/taller/floristas": {
            es: "/servicios/taller/floristas",
            en: "/services/workshop/florists",
            fr: "/services/atelier/fleuristes",
            de: "/dienstleistungen/werkstatt/floristen",
        },

        "/servicios/taller/ofertas": {
            es: "/servicios/taller/ofertas",
            en: "/services/workshop/offers",
            fr: "/services/atelier/offres",
            de: "/dienstleistungen/werkstatt/angebote",
        },

        "/servicios/taller/presupuestos": {
            es: "/servicios/taller/presupuestos",
            en: "/services/workshop/quotes",
            fr: "/services/atelier/devis",
            de: "/dienstleistungen/werkstatt/kostenvoranschlag",
        },

        "/servicios/recambios/particulares": {
            es: "/servicios/recambios/particulares",
            en: "/services/spare-parts/individuals",
            fr: "/services/pieces-detachees/particuliers",
            de: "/dienstleistungen/ersatzteile/privatkunden",
        },

        "/servicios/recambios/profesionales": {
            es: "/servicios/recambios/profesionales",
            en: "/services/spare-parts/professionals",
            fr: "/services/pieces-detachees/professionnels",
            de: "/dienstleistungen/ersatzteile/gewerbekunden",
        },

        "/posventa/furgonetas": {
            es: "/posventa/furgonetas",
            en: "/after-sales/vans",
            fr: "/apres-vente/fourgonnettes",
            de: "/after-sales/transporter",
        },

        "/posventa/camiones": {
            es: "/posventa/camiones",
            en: "/after-sales/trucks",
            fr: "/apres-vente/camions",
            de: "/after-sales/lkw",
        },

        "/posventa/autobuses": {
            es: "/posventa/autobuses",
            en: "/after-sales/buses",
            fr: "/apres-vente/autobus",
            de: "/after-sales/busse",
        },

        "/posventa/fuso": {
            es: "/posventa/fuso",
            en: "/after-sales/fuso",
            fr: "/apres-vente/fuso",
            de: "/after-sales/fuso",
        },

        "/sobre-nosotros/contacto": {
            es: "/sobre-nosotros/contacto",
            en: "/about-us/contact",
            fr: "/a-propos/contact",
            de: "/ueber-uns/kontakt",
        },

        "/sobre-nosotros/historia": {
            es: "/sobre-nosotros/historia",
            en: "/about-us/history",
            fr: "/a-propos/histoire",
            de: "/ueber-uns/geschichte",
        },

        "/noticias": {
            es: "/noticias",
            en: "/news",
            fr: "/actualites",
            de: "/nachrichten",
        },

        "/noticias/[slug]": {
            es: "/noticias/[slug]",
            en: "/news/[slug]",
            fr: "/actualites/[slug]",
            de: "/nachrichten/[slug]",
        },

        "/cookies": {
            es: "/cookies",
            en: "/cookie-policy",
            fr: "/politique-de-cookies",
            de: "/cookie-richtlinie",
        },

        "/legal": {
            es: "/legal",
            en: "/legal-notice",
            fr: "/mentions-legales",
            de: "/impressum",
        },

        "/privacidad": {
            es: "/privacidad",
            en: "/privacy-policy",
            fr: "/politique-de-confidentialite",
            de: "/datenschutz",
        },

        "/trabaja-con-nosotros": {
            es: "/trabaja-con-nosotros",
            en: "/work-with-us",
            fr: "/rejoignez-nous",
            de: "/arbeiten-bei-uns",
        },
    },
});