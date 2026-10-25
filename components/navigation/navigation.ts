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
                        key: "fleetCustomers",
                        href: "/servicios/taller/flotistas",
                    },
                ],
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
