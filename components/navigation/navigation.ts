import type { ComponentProps } from "react";

import { Link } from "@/i18n/navigation";

type NavigationHref = Extract<
    ComponentProps<typeof Link>["href"],
    string
>;

export type NavItem = {
    key: string;
    href?: NavigationHref;
    children?: NavItem[];
};

export const navigation: NavItem[] = [
    {
        key: "home",
        href: "/",
    },

    {
        key: "services",
        children: [
            {
                key: "workshop",
                children: [
                    {
                        key: "quote",
                        href: "/servicios/taller/presupuestos",
                    },
                    {
                        key: "appointment",
                        href: "/servicios/taller/cita-previa",
                    },
                    {
                        key: "offers",
                        href: "/servicios/taller/ofertas",
                    },
                    {
                        key: "florists",
                        href: "/servicios/taller/floristas",
                    },
                ],
            },

            {
                key: "originalParts",
                children: [
                    {
                        key: "individuals",
                        href: "/servicios/recambios/particulares",
                    },
                    {
                        key: "professionals",
                        href: "/servicios/recambios/profesionales",
                    },
                ],
            },
        ],
    },

    {
        key: "afterSales",
        children: [
            {
                key: "vans",
                href: "/posventa/furgonetas",
            },
            {
                key: "trucks",
                href: "/posventa/camiones",
            },
            {
                key: "buses",
                href: "/posventa/autobuses",
            },
            {
                key: "fuso",
                href: "/posventa/fuso",
            },
        ],
    },

    {
        key: "aboutUs",
        children: [
            {
                key: "contact",
                href: "/sobre-nosotros/contacto",
            },
            {
                key: "history",
                href: "/sobre-nosotros/historia",
            },
        ],
    },

    {
        key: "interestingLinks",
        children: [
            {
                key: "news",
                href: "/noticias",
            },
        ],
    },
];