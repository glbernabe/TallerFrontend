"use client";
import { useTranslations } from "next-intl";

import type { AdminIconName, AdminSectionId, AdminUser } from "./types";
import { AdminIcon } from "./AdminSidebar";
import AdminContactDirectory from "./AdminContactDirectory";

type AdminDashboardContentProps = {
    activeSection: AdminSectionId;
    user: AdminUser;
    onNavigate: (section: AdminSectionId) => void;
};

type CardIcon = Extract<
    AdminIconName,
    | "dashboard"
    | "news"
    | "contacts"
    | "file"
    | "media"
    | "users"
    | "clock"
    | "settings"
>;

function StatCard({
    title,
    description,
    icon,
    noDataLabel,
}: {
    title: string;
    description: string;
    icon: CardIcon;
    noDataLabel: string;
}) {
    return (
        <article className="border border-[#e2e5e9] bg-white p-5">
            <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-[#626a73]">
                    {title}
                </p>

                <div className="flex h-9 w-9 items-center justify-center bg-[#f0f3f6] text-[#4c5662]">
                    <AdminIcon name={icon} className="h-[18px] w-[18px]" />
                </div>
            </div>

            <div className="mt-5 flex items-end justify-between gap-3">
                <p className="text-3xl font-semibold tracking-tight text-[#17191d]">
                    —
                </p>

                <span className="text-[10px] font-semibold uppercase tracking-wide text-[#8b929b]">
                    {noDataLabel}
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
    icon: CardIcon;
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
    const t = useTranslations("Admin.dashboard");

    const statistics: {
        key: "news" | "contacts" | "curriculums" | "team";
        icon: CardIcon;
    }[] = [
        { key: "news", icon: "news" },
        { key: "contacts", icon: "contacts" },
        { key: "curriculums", icon: "file" },
        { key: "team", icon: "users" },
    ];

    const quickAccess: {
        key: "news" | "team" | "media" | "hours";
        section: AdminSectionId;
        icon: CardIcon;
    }[] = [
        { key: "news", section: "news", icon: "news" },
        { key: "team", section: "contactDirectory", icon: "users" },
        { key: "media", section: "media", icon: "media" },
        { key: "hours", section: "opening-hours", icon: "clock" },
    ];

    const areaKeys = [
        "website",
        "team",
        "customerService",
        "administration",
    ] as const;

    return (
        <div className="space-y-8">
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
                            {t("overview.ready.title")}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#737b85]">
                            {t("overview.ready.description")}
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
                    {t("overview.preview")}
                </span>
            </section>

            <section>
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <h2 className="text-base font-semibold text-[#202328]">
                            {t("overview.statistics.title")}
                        </h2>

                        <p className="mt-1 text-xs text-[#858d96]">
                            {t("overview.statistics.description")}
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {statistics.map(({ key, icon }) => (
                        <StatCard
                            key={key}
                            title={t(`overview.statistics.${key}.title`)}
                            description={t(`overview.statistics.${key}.description`)}
                            icon={icon}
                            noDataLabel={t("overview.noData")}
                        />
                    ))}
                </div>
            </section>

            <section>
                <div className="mb-4">
                    <h2 className="text-base font-semibold text-[#202328]">
                        {t("overview.quickAccess.title")}
                    </h2>

                    <p className="mt-1 text-xs text-[#858d96]">
                        {t("overview.quickAccess.description")}
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {quickAccess.map(({ key, section, icon }) => (
                        <QuickAccessCard
                            key={key}
                            title={t(`overview.quickAccess.${key}.title`)}
                            description={t(`overview.quickAccess.${key}.description`)}
                            icon={icon}
                            onClick={() => onNavigate(section)}
                        />
                    ))}
                </div>
            </section>

            <section className="border border-[#e2e5e9] bg-white">
                <div className="border-b border-[#e9ecef] px-5 py-4">
                    <h2 className="text-sm font-semibold text-[#202328]">
                        {t("overview.areas.title")}
                    </h2>

                    <p className="mt-1 text-xs text-[#858d96]">
                        {t("overview.areas.description")}
                    </p>
                </div>

                <div className="divide-y divide-[#edf0f2]">
                    {areaKeys.map((key) => (
                        <div
                            key={key}
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
                                    {t(`overview.areas.${key}.title`)}
                                </p>

                                <p className="mt-1 text-xs text-[#858d96]">
                                    {t(`overview.areas.${key}.description`)}
                                </p>
                            </div>

                            <span className="w-fit border border-[#e4e7ea] bg-[#f7f8f9] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#717982]">
                                {t("overview.areas.statusPending")}
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
    const t = useTranslations("Admin.dashboard");

    if (section === "users" && !canManageUsers) {
        return (
            <div className="border border-[#e2e5e9] bg-white p-8">
                <div className="mx-auto max-w-md text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#f0f3f6] text-[#69727d]">
                        <AdminIcon name="info" />
                    </div>

                    <h2 className="mt-5 text-base font-semibold text-[#202328]">
                        {t("placeholders.accessDenied.title")}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#737b85]">
                        {t("placeholders.accessDenied.description")}
                    </p>
                </div>
            </div>
        );
    }

    const placeholderBySection: Record<
        AdminSectionId,
        {
            title: string;
            description: string;
            icon: CardIcon;
        }
    > = {
        overview: {
            title: t("sections.overview.title"),
            description: t("sections.overview.description"),
            icon: "dashboard",
        },
        news: {
            title: t("placeholders.news.title"),
            description: t("placeholders.news.description"),
            icon: "news",
        },
        media: {
            title: t("placeholders.media.title"),
            description: t("placeholders.media.description"),
            icon: "media",
        },
        contacts: {
            title: t("placeholders.enquiries.title"),
            description: t("placeholders.enquiries.description"),
            icon: "contacts",
        },
        "opening-hours": {
            title: t("placeholders.openingHours.title"),
            description: t("placeholders.openingHours.description"),
            icon: "clock",
        },
        contactDirectory: {
            title: t("placeholders.contactDirectory.title"),
            description: t("placeholders.contactDirectory.description"),
            icon: "users",
        },
        curriculums: {
            title: t("placeholders.curriculums.title"),
            description: t("placeholders.curriculums.description"),
            icon: "file",
        },
        users: {
            title: t("placeholders.users.title"),
            description: t("placeholders.users.description"),
            icon: "users",
        },
        settings: {
            title: t("placeholders.settings.title"),
            description: t("placeholders.settings.description"),
            icon: "settings",
        },
    };

    const placeholder = placeholderBySection[section];

    return (
        <section className="border border-[#e2e5e9] bg-white">
            <div className="border-b border-[#e9ecef] px-6 py-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#f0f3f6] text-[#4c5662]">
                        <AdminIcon name={placeholder.icon} />
                    </div>

                    <div>
                        <h2 className="text-base font-semibold text-[#202328]">
                            {placeholder.title}
                        </h2>

                        <p className="mt-1 text-xs text-[#858d96]">
                            {t("placeholders.areaLabel")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 py-12 sm:px-10">
                <div className="mx-auto max-w-lg text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#e4e7ea] bg-[#f7f8f9] text-[#737b85]">
                        <AdminIcon
                            name={placeholder.icon}
                            className="h-6 w-6"
                        />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#202328]">
                        {t("placeholders.sectionPrepared")}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#737b85]">
                        {placeholder.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 border border-[#e5e8eb] bg-[#f7f8f9] px-3 py-2 text-xs font-medium text-[#646d77]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#a0a8b1]" />
                        {t("placeholders.pendingIntegration")}
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
                            {t("placeholders.returnToOverview")}
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
    const t = useTranslations("Admin.dashboard");

    const sectionInformation: Record<
        AdminSectionId,
        {
            title: string;
            description: string;
        }
    > = {
        overview: {
            title: t("sections.overview.title"),
            description: t("sections.overview.description"),
        },
        news: {
            title: t("sections.news.title"),
            description: t("sections.news.description"),
        },
        media: {
            title: t("sections.media.title"),
            description: t("sections.media.description"),
        },
        contacts: {
            title: t("sections.enquiries.title"),
            description: t("sections.enquiries.description"),
        },
        "opening-hours": {
            title: t("sections.openingHours.title"),
            description: t("sections.openingHours.description"),
        },
        contactDirectory: {
            title: t("sections.contactDirectory.title"),
            description: t("sections.contactDirectory.description"),
        },
        curriculums: {
            title: t("sections.curriculums.title"),
            description: t("sections.curriculums.description"),
        },
        users: {
            title: t("sections.users.title"),
            description: t("sections.users.description"),
        },
        settings: {
            title: t("sections.settings.title"),
            description: t("sections.settings.description"),
        },
    };

    const section = sectionInformation[activeSection];

    const canManageUsers =
        user.role === "admin_principal" || user.role === "admin";

    return (
        <div className="mx-auto w-full max-w-[1500px]">
            <header className="mb-7 flex flex-col justify-between gap-4 border-b border-[#dfe3e7] pb-6 sm:flex-row sm:items-end">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0078d6]">
                        {t("header.eyebrow")}
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
                    {t("header.preparationStatus")}
                </div>
            </header>

            {activeSection === "overview" ? (
                <Overview onNavigate={onNavigate} />
            ) : activeSection === "contactDirectory" ? (
                <AdminContactDirectory user={user} />
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