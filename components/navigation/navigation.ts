export type NavItem = {
    label: string;
    href?: string;
    children?: NavItem[];
};

export const navigation: NavItem[] = [
    {
        label: "Inicio",
        href: "/",
    },

    {
        label: "Servicios",
        children: [
            {
                label: "Taller",
                children: [
                    {
                        label: "Presupuesto",
                        href: "/servicios/taller/presupuesto",
                    },
                    {
                        label: "Cita Previa",
                        href: "/servicios/taller/cita-previa",
                    },
                    {
                        label: "Ofertas",
                        href: "/servicios/taller/ofertas",
                    },
                    {
                        label: "Floristas",
                        href: "/servicios/taller/floristas",
                    },
                ],
            },

            {
                label: "Recambios originales",
                children: [
                    {
                        label: "Particulares",
                        href: "/servicios/recambios/particulares",
                    },
                    {
                        label: "Profesionales",
                        href: "/servicios/recambios/profesionales",
                    },
                ],
            },
        ],
    },

    {
        label: "Posventa",
        children: [
            {
                label: "Furgonetas",
                href: "/posventa/furgonetas",
            },
            {
                label: "Camiones",
                href: "/posventa/camiones",
            },
            {
                label: "Autobuses",
                href: "/posventa/autobuses",
            },
            {
                label: "FUSO",
                href: "/posventa/fuso",
            },
        ],
    },

    {
        label: "Nosotros",
        href: "/about-us",
    },

    {
        label: "Enlaces de interés",
        href: "/enlaces-de-interes",
    },
];