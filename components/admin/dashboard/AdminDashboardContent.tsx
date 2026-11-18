"use client";

import type { AdminSectionId, AdminUser } from "./types";
import { AdminIcon } from "./AdminSidebar";

type AdminDashboardContentProps = {
    activeSection: AdminSectionId;
    user: AdminUser;
    onNavigate: (section: AdminSectionId) => void;
};

const sectionInformation: Record<
    AdminSectionId,
    {
        title: string;
        description: string;
    }
> = {
    overview: {
        title: "Resumen general",
        description:
            "Vista general de la actividad y del contenido de la página web.",
    },
    news: {
        title: "Noticias",
        description:
            "Crea, edita y administra las noticias que aparecen en la página web.",
    },
    media: {
        title: "Archivos multimedia",
        description:
            "Administra imágenes, documentos y otros archivos utilizados en la web.",
    },
    contacts: {
        title: "Consultas y contactos",
        description:
            "Consulta y gestiona los mensajes enviados desde los formularios de contacto.",
    },
    "opening-hours": {
        title: "Horarios de apertura",
        description:
            "Gestiona los horarios que se muestran en la página de contacto.",
    },
    curriculums: {
        title: "Currículums",
        description:
            "Consulta las candidaturas y los documentos enviados mediante Trabaja con nosotros.",
    },
    users: {
        title: "Usuarios del panel",
        description:
            "Administra las cuentas que pueden acceder al panel de administración.",
    },
    settings: {
        title: "Configuración",
        description:
            "Administra la información general y los datos de contacto de la página web.",
    },
};

const statistics = [
    {
        title: "Noticias",
        description: "Contenido publicado en la web",
        icon: "news" as const,
    },
    {
        title: "Consultas",
        description: "Mensajes recibidos",
        icon: "contacts" as const,
    },
    {
        title: "Currículums",
        description: "Candidaturas recibidas",
        icon: "file" as const,
    },
    {
        title: "Archivos",
        description: "Recursos multimedia",
        icon: "media" as const,
    },
];

const quickAccess = [
    {
        id: "news" as const,
        title: "Gestionar noticias",
        description: "Publicaciones y novedades de la empresa.",
        icon: "news" as const,
    },
    {
        id: "media" as const,
        title: "Biblioteca multimedia",
        description: "Imágenes y documentos de la página web.",
        icon: "media" as const,
    },
    {
        id: "contacts" as const,
        title: "Ver consultas",
        description: "Mensajes recibidos a través de la web.",
        icon: "contacts" as const,
    },
    {
        id: "curriculums" as const,
        title: "Ver currículums",
        description: "Candidaturas de Trabaja con nosotros.",
        icon: "file" as const,
    },
];

function StatCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: "news" | "contacts" | "file" | "media";
}) {
    return (
        <article
            className="
                border
                border-[#e2e5e9]
                bg-white
                p-5
            "
        >
            <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-[#626a73]">
                    {title}
                </p>

                <div className="flex h-9 w-9 items-center justify-center bg-[#f0f3f6] text-[#4c5662]">
                    <AdminIcon
                        name={icon}
                        className="h-[18px] w-[18px]"
                    />
                </div>
            </div>

            <div className="mt-5 flex items-end justify-between gap-3">
                <p className="text-3xl font-semibold tracking-tight text-[#17191d]">
                    —
                </p>

                <span className="text-[10px] font-semibold uppercase tracking-wide text-[#8b929b]">
                    Sin datos
                </span>
            </div>

            <p className="mt-2 text-xs text-[#8b929b]">
                {description}
            </p>
        </article>
    );
}

function QuickAccessCard({
    title,
    description,
    icon,
    onClick,
}: {
    title: string;
    description: string;
    icon: "news" | "contacts" | "file" | "media";
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                group
                flex
                min-h-[112px]
                items-start
                gap-4
                border
                border-[#e2e5e9]
                bg-white
                p-5
                text-left
                transition-colors
                hover:border-[#0078d6]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#0078d6]
            "
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f0f3f6] text-[#4c5662] transition-colors group-hover:bg-[#e8f3fc] group-hover:text-[#0078d6]">
                <AdminIcon name={icon} />
            </div>

            <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#202328]">
                    {title}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#737b85]">
                    {description}
                </p>
            </div>

            <AdminIcon
                name="arrow"
                className="mt-1 h-4 w-4 shrink-0 text-[#a0a6ae] transition-colors group-hover:text-[#0078d6]"
            />
        </button>
    );
}

function Overview({
    onNavigate,
}: {
    onNavigate: (section: AdminSectionId) => void;
}) {
    return (
        <div className="space-y-8">
            {/* ESTADO DE CONEXIÓN */}

            <section
                className="
                    flex
                    flex-col
                    gap-3
                    border
                    border-[#dce3e9]
                    bg-white
                    p-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >
                <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-[#edf4fa] text-[#0078d6]">
                        <AdminIcon name="info" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-[#24282d]">
                            Panel de administración preparado
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#737b85]">
                            La interfaz está disponible. Los indicadores y
                            listados aparecerán cuando conectemos los
                            endpoints de administración.
                        </p>
                    </div>
                </div>

                <span
                    className="
                        inline-flex
                        w-fit
                        shrink-0
                        items-center
                        border
                        border-[#e2e5e9]
                        bg-[#f7f8f9]
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#646d77]
                    "
                >
                    Vista previa
                </span>
            </section>

            {/* INDICADORES */}

            <section>
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <h2 className="text-base font-semibold text-[#202328]">
                            Indicadores generales
                        </h2>

                        <p className="mt-1 text-xs text-[#858d96]">
                            Datos pendientes de conexión.
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {statistics.map((statistic) => (
                        <StatCard
                            key={statistic.title}
                            title={statistic.title}
                            description={statistic.description}
                            icon={statistic.icon}
                        />
                    ))}
                </div>
            </section>

            {/* ACCESOS RÁPIDOS */}

            <section>
                <div className="mb-4">
                    <h2 className="text-base font-semibold text-[#202328]">
                        Accesos rápidos
                    </h2>

                    <p className="mt-1 text-xs text-[#858d96]">
                        Accede directamente a las áreas principales.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {quickAccess.map((item) => (
                        <QuickAccessCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            onClick={() => onNavigate(item.id)}
                        />
                    ))}
                </div>
            </section>

            {/* ESTADO DE LAS ÁREAS */}

            <section className="border border-[#e2e5e9] bg-white">
                <div className="border-b border-[#e9ecef] px-5 py-4">
                    <h2 className="text-sm font-semibold text-[#202328]">
                        Estado de las áreas
                    </h2>

                    <p className="mt-1 text-xs text-[#858d96]">
                        Preparación de las diferentes secciones del panel.
                    </p>
                </div>

                <div className="divide-y divide-[#edf0f2]">
                    {[
                        ["Contenido web", "Noticias y archivos multimedia"],
                        ["Atención al cliente", "Consultas y currículums"],
                        ["Información del taller", "Horarios y configuración"],
                        ["Administración", "Usuarios y permisos"],
                    ].map(([title, description]) => (
                        <div
                            key={title}
                            className="
                                flex
                                flex-col
                                gap-2
                                px-5
                                py-4
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >
                            <div>
                                <p className="text-sm font-medium text-[#343a40]">
                                    {title}
                                </p>

                                <p className="mt-1 text-xs text-[#858d96]">
                                    {description}
                                </p>
                            </div>

                            <span className="w-fit border border-[#e4e7ea] bg-[#f7f8f9] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#717982]">
                                Pendiente de integración
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

function SectionPlaceholder({
    section,
    canManageUsers,
    onNavigate,
}: {
    section: AdminSectionId;
    canManageUsers: boolean;
    onNavigate: (section: AdminSectionId) => void;
}) {
    if (section === "users" && !canManageUsers) {
        return (
            <div className="border border-[#e2e5e9] bg-white p-8">
                <div className="mx-auto max-w-md text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#f0f3f6] text-[#69727d]">
                        <AdminIcon name="info" />
                    </div>

                    <h2 className="mt-5 text-base font-semibold text-[#202328]">
                        Acceso restringido
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#737b85]">
                        Tu cuenta tiene permisos de consulta y no puede
                        administrar otros usuarios.
                    </p>
                </div>
            </div>
        );
    }

    const descriptions: Record<AdminSectionId, string> = {
        overview: "",
        news: "En esta sección podrás crear, editar, publicar y retirar noticias de la página web.",
        media: "Aquí podrás consultar los archivos multimedia, subir nuevas imágenes y administrar los documentos utilizados por la web.",
        contacts: "Aquí aparecerán los mensajes recibidos desde los formularios de contacto y podrás consultar su contenido.",
        "opening-hours": "Desde aquí podrás modificar los horarios de apertura que aparecen en la página de contacto.",
        curriculums: "Aquí aparecerán las candidaturas recibidas, junto con la información de contacto y los archivos adjuntos.",
        users: "Desde aquí podrás consultar las cuentas del panel, crear nuevos administradores y modificar sus permisos.",
        settings: "Aquí podrás modificar los datos generales de la empresa, teléfonos, correos electrónicos y enlaces públicos.",
    };

    const sectionTitles: Record<AdminSectionId, string> = {
        overview: "Resumen general",
        news: "Gestión de noticias",
        media: "Biblioteca multimedia",
        contacts: "Gestión de consultas",
        "opening-hours": "Gestión de horarios",
        curriculums: "Gestión de currículums",
        users: "Gestión de usuarios",
        settings: "Configuración del sitio",
    };

    const iconBySection: Record<
        AdminSectionId,
        "news" | "media" | "contacts" | "clock" | "file" | "users" | "settings" | "dashboard"
    > = {
        overview: "dashboard",
        news: "news",
        media: "media",
        contacts: "contacts",
        "opening-hours": "clock",
        curriculums: "file",
        users: "users",
        settings: "settings",
    };

    return (
        <section className="border border-[#e2e5e9] bg-white">
            <div className="border-b border-[#e9ecef] px-6 py-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#f0f3f6] text-[#4c5662]">
                        <AdminIcon name={iconBySection[section]} />
                    </div>

                    <div>
                        <h2 className="text-base font-semibold text-[#202328]">
                            {sectionTitles[section]}
                        </h2>

                        <p className="mt-1 text-xs text-[#858d96]">
                            Área de administración
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 py-12 sm:px-10">
                <div className="mx-auto max-w-lg text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#e4e7ea] bg-[#f7f8f9] text-[#737b85]">
                        <AdminIcon
                            name={iconBySection[section]}
                            className="h-6 w-6"
                        />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#202328]">
                        Sección preparada
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#737b85]">
                        {descriptions[section]}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 border border-[#e5e8eb] bg-[#f7f8f9] px-3 py-2 text-xs font-medium text-[#646d77]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#a0a8b1]" />
                        Pendiente de conectar con la API
                    </div>

                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={() => onNavigate("overview")}
                            className="
                                inline-flex
                                min-h-10
                                items-center
                                justify-center
                                gap-2
                                bg-[#17191d]
                                px-5
                                text-xs
                                font-semibold
                                text-white
                                transition-colors
                                hover:bg-[#0078d6]
                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-[#0078d6]
                            "
                        >
                            <AdminIcon
                                name="arrow"
                                className="h-4 w-4 rotate-[-135deg]"
                            />
                            Volver al resumen
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function AdminDashboardContent({
    activeSection,
    user,
    onNavigate,
}: AdminDashboardContentProps) {
    const section = sectionInformation[activeSection];

    const canManageUsers =
        user.role === "admin_principal" || user.role === "admin";

    return (
        <div className="mx-auto w-full max-w-[1500px]">
            {/* CABECERA DE LA SECCIÓN */}

            <header className="mb-7 flex flex-col justify-between gap-4 border-b border-[#dfe3e7] pb-6 sm:flex-row sm:items-end">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0078d6]">
                        ADMINISTRACIÓN WEB
                    </p>

                    <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#17191d] sm:text-3xl">
                        {section.title}
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#737b85]">
                        {section.description}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#737b85]">
                    <span className="h-2 w-2 rounded-full bg-[#a0a8b1]" />
                    Panel en preparación
                </div>
            </header>

            {activeSection === "overview" ? (
                <Overview onNavigate={onNavigate} />
            ) : (
                <SectionPlaceholder
                    section={activeSection}
                    canManageUsers={canManageUsers}
                    onNavigate={onNavigate}
                />
            )}
        </div>
    );
}