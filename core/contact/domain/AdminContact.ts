export const CONTACT_DEPARTMENTS = [
    "Posventa",
    "Recambios",
    "Taller",
    "Administración",
    "Recepción",
    "Atención al cliente",
    "Gerencia",
    "Ayuda y asistencia",
] as const;

export type ContactDepartment = (typeof CONTACT_DEPARTMENTS)[number];

/** Datos normalizados del contacto dentro del área privada. */
export type AdminContact = {
    id: string;
    nombre: string;
    apellidos: string;
    departamento: ContactDepartment | null;
    cargo: string | null;
    correo_electronico: string | null;
    telefono: string | null;
    archivo_multimedia_id: number | null;
    activo: boolean;
    orden: number;
    fecha_publicacion: string | null;
    fecha_creacion?: string | null;
    fecha_actualizacion?: string | null;
};

export type AdminContactInput = {
    nombre: string;
    apellidos: string;
    departamento: ContactDepartment | null;
    cargo: string | null;
    correo_electronico: string | null;
    telefono: string | null;
    archivo_multimedia_id: number | null;
    activo: boolean;
    orden: number;
    fecha_publicacion: string | null;
};

export type AdminContactFilters = {
    busqueda?: string;
    departamento?: ContactDepartment;
    activo?: boolean;
};
