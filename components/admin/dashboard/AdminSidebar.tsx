"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import type {
    AdminIconName,
    AdminRole,
    AdminSectionId,
} from "./types";

type AdminSidebarProps = {
    activeSection: AdminSectionId;
    role: AdminRole;
    displayName: string;
    locale: string;
    mobileOpen: boolean;
    onNavigate: (section: AdminSectionId) => void;
    onClose: () => void;
};

type NavigationItem = {
    id: AdminSectionId;
    label: string;
    icon: AdminIconName;
};

type NavigationGroup = {
    label: string;
    items: NavigationItem[];
};

const navigationGroups: NavigationGroup[] = [
    {
        label: "GENERAL",
        items: [
            {
                id: "overview",
                label: "Resumen",
                icon: "dashboard",
            },
        ],
    },
    {
        label: "CONTENIDO WEB",
        items: [
            {
                id: "news",
                label: "Noticias",
                icon: "news",
            },
            {
                id: "media",
                label: "Archivos multimedia",
                icon: "media",
            },
            {
                id: "opening-hours",
                label: "Horarios",
                icon: "clock",
            },
        ],
    },
    {
        label: "ATENCIÓN AL CLIENTE",
        items: [
            {
                id: "contacts",
                label: "Consultas",
                icon: "contacts",
            },
            {
                id: "curriculums",
                label: "Currículums",
                icon: "file",
            },
        ],
    },
    {
        label: "ADMINISTRACIÓN",
        items: [
            {
                id: "users",
                label: "Usuarios",
                icon: "users",
            },
            {
                id: "settings",
                label: "Configuración",
                icon: "settings",
            },
        ],
    },
];

const iconPaths: Record<AdminIconName, ReactNode> = {
    dashboard: (
        <>
            <rect x="3" y="3" width="8" height="8" rx="1" />
            <rect x="13" y="3" width="8" height="5" rx="1" />
            <rect x="13" y="10" width="8" height="11" rx="1" />
            <rect x="3" y="13" width="8" height="8" rx="1" />
        </>
    ),

    news: (
        <>
            <path d="M4 4h16v16H4z" />
            <path d="M8 8h8M8 12h8M8 16h5" />
        </>
    ),

    media: (
        <>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
        </>
    ),

    contacts: (
        <>
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
        </>
    ),

    clock: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </>
    ),

    file: (
        <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M8 13h8M8 17h5" />
        </>
    ),

    users: (
        <>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
        </>
    ),

    settings: (
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 1.9z" />
        </>
    ),

    globe: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </>
    ),

    menu: (
        <>
            <path d="M4 6h16M4 12h16M4 18h16" />
        </>
    ),

    close: (
        <>
            <path d="m18 6-12 12M6 6l12 12" />
        </>
    ),

    arrow: (
        <>
            <path d="M7 17 17 7M7 7h10v10" />
        </>
    ),

    check: (
        <>
            <path d="m5 12 4 4L19 6" />
        </>
    ),

    info: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 8h.01" />
        </>
    ),
};

export function AdminIcon({
    name,
    className = "h-5 w-5",
}: {
    name: AdminIconName;
    className?: string;
}) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {iconPaths[name]}
        </svg>
    );
}

function SidebarNavigationItem({
    item,
    active,
    onClick,
}: {
    item: NavigationItem;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-current={active ? "page" : undefined}
            className={`
                flex
                min-h-11
                w-full
                items-center
                gap-3
                border-l-2
                px-4
                text-left
                text-sm
                transition-colors
                focus-visible:outline-2
                focus-visible:outline-offset-[-2px]
                focus-visible:outline-[#0078d6]
                ${
                    active
                        ? "border-[#0078d6] bg-white/[0.09] font-semibold text-white"
                        : "border-transparent text-white/60 hover:bg-white/[0.05] hover:text-white"
                }
            `}
        >
            <AdminIcon
                name={item.icon}
                className="h-[18px] w-[18px] shrink-0"
            />

            <span>{item.label}</span>

            {active && (
                <span
                    className="ml-auto h-1.5 w-1.5 rounded-full bg-[#0078d6]"
                    aria-hidden="true"
                />
            )}
        </button>
    );
}

function SidebarNavigationGroup({
    group,
    activeSection,
    onNavigate,
    onClose,
}: {
    group: NavigationGroup;
    activeSection: AdminSectionId;
    onNavigate: (section: AdminSectionId) => void;
    onClose: () => void;
}) {
    return (
        <div className="mb-7">
            <p className="mb-2 px-4 text-[10px] font-semibold tracking-[0.16em] text-white/35">
                {group.label}
            </p>

            <div className="space-y-1">
                {group.items.map((item) => (
                    <SidebarNavigationItem
                        key={item.id}
                        item={item}
                        active={activeSection === item.id}
                        onClick={() => {
                            onNavigate(item.id);
                            onClose();
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default function AdminSidebar({
    activeSection,
    role,
    displayName,
    locale,
    mobileOpen,
    onNavigate,
    onClose,
}: AdminSidebarProps) {
    const canManageUsers =
        role === "admin_principal" || role === "admin";

    const visibleGroups = navigationGroups
        .map((group) => ({
            ...group,
            items: group.items.filter(
                (item) => item.id !== "users" || canManageUsers
            ),
        }))
        .filter((group) => group.items.length > 0);

    const roleLabel =
        role === "admin_principal"
            ? "Administrador principal"
            : role === "admin"
              ? "Administrador"
              : "Acceso de consulta";

    return (
        <>
            {mobileOpen && (
                <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={onClose}
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-black/50
                        lg:hidden
                    "
                />
            )}

            <aside
                aria-label="Navegación del panel"
                className={`
                    fixed
                    inset-y-0
                    left-0
                    z-50
                    flex
                    h-screen
                    w-[278px]
                    shrink-0
                    flex-col
                    border-r
                    border-white/10
                    bg-[#090b0e]
                    text-white
                    transition-transform
                    duration-200
                    lg:sticky
                    lg:top-0
                    lg:z-auto
                    lg:translate-x-0
                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* IDENTIDAD DE LA EMPRESA */}

                <div className="flex min-h-[86px] items-center justify-between border-b border-white/10 px-5">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/[0.04]">
                            <Image
                                src="/content/icons/logo.svg"
                                alt="Logo de Auto-Talleres Orihuela"
                                width={32}
                                height={32}
                                priority
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-[13px] font-semibold tracking-wide">
                                AUTO TALLERES
                            </p>

                            <p className="truncate text-[11px] text-white/50">
                                ORIHUELA S.L.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar menú"
                        className="ml-2 rounded p-2 text-white/60 hover:bg-white/10 hover:text-white lg:hidden"
                    >
                        <AdminIcon name="close" />
                    </button>
                </div>

                {/* NAVEGACIÓN */}

                <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-7">
                    {visibleGroups.map((group) => (
                        <SidebarNavigationGroup
                            key={group.label}
                            group={group}
                            activeSection={activeSection}
                            onNavigate={onNavigate}
                            onClose={onClose}
                        />
                    ))}
                </nav>

                {/* PIE DEL MENÚ */}

                <div className="border-t border-white/10 p-4">
                    <div className="mb-4 flex items-center gap-3 px-2">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/10 text-sm font-semibold text-white">
                            {displayName.slice(0, 1).toUpperCase()}
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-white">
                                {displayName}
                            </p>

                            <p className="truncate text-[11px] text-white/45">
                                {roleLabel}
                            </p>
                        </div>
                    </div>

                    <Link
                        href={`/${locale}`}
                        className="
                            flex
                            min-h-10
                            items-center
                            gap-3
                            px-3
                            text-xs
                            text-white/55
                            transition-colors
                            hover:bg-white/[0.05]
                            hover:text-white
                            focus-visible:outline-2
                            focus-visible:outline-[#0078d6]
                        "
                    >
                        <AdminIcon name="globe" className="h-4 w-4" />
                        Volver a la página web
                        <AdminIcon
                            name="arrow"
                            className="ml-auto h-3.5 w-3.5"
                        />
                    </Link>

                    <p className="mt-4 px-3 text-[9px] uppercase tracking-[0.12em] text-white/25">
                        Panel interno · Auto-Talleres Orihuela S.L.
                    </p>
                </div>
            </aside>
        </>
    );
}