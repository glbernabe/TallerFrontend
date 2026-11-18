export type AdminSectionId =
    | "overview"
    | "news"
    | "media"
    | "contacts"
    | "opening-hours"
    | "curriculums"
    | "users"
    | "settings";

export type AdminRole =
    | "admin_principal"
    | "admin"
    | "privilegiado";

export type AdminUser = {
    username: string;
    displayName: string;
    role: AdminRole;
};

export type AdminIconName =
    | "dashboard"
    | "news"
    | "media"
    | "contacts"
    | "clock"
    | "file"
    | "users"
    | "settings"
    | "globe"
    | "menu"
    | "close"
    | "arrow"
    | "check"
    | "info";