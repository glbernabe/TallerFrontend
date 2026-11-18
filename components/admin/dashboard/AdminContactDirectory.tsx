"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

import type { AdminUser } from "./types";

type ContactDepartment =
    | "Posventa"
    | "Recambios"
    | "Taller"
    | "Administración"
    | "Recepción"
    | "Atención al cliente"
    | "Gerencia"
    | "Ayuda y asistencia";

type Contact = {
    id: number;
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

type ContactForm = {
    nombre: string;
    apellidos: string;
    departamento: ContactDepartment | "";
    cargo: string;
    correo_electronico: string;
    telefono: string;
    archivo_multimedia_id: number | null;
    activo: boolean;
    orden: number;
    fecha_publicacion: string;
};

type UploadedMedia = {
    id: number;
    nombre_original: string;
    url_publica: string;
    tipo_mime: string;
};

type FilterStatus = "all" | "active" | "archived";

const DEPARTMENTS: ContactDepartment[] = [
    "Posventa",
    "Recambios",
    "Taller",
    "Administración",
    "Recepción",
    "Atención al cliente",
    "Gerencia",
    "Ayuda y asistencia",
];

const EMPTY_FORM: ContactForm = {
    nombre: "",
    apellidos: "",
    departamento: "",
    cargo: "",
    correo_electronico: "",
    telefono: "",
    archivo_multimedia_id: null,
    activo: true,
    orden: 0,
    fecha_publicacion: "",
};

function localDateTimeValue(value = new Date()): string {
    const pad = (part: number) => String(part).padStart(2, "0");

    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}T${pad(value.getHours())}:${pad(value.getMinutes())}`;
}

function toLocalDateTimeInput(value: string | null): string {
    if (!value) return "";

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value.slice(0, 16);

    return localDateTimeValue(parsed);
}

async function readApiError(response: Response): Promise<string> {
    const raw = await response.text();

    if (!raw) {
        return `Error ${response.status}: ${response.statusText}`;
    }

    try {
        const data = JSON.parse(raw) as { detail?: unknown; message?: unknown };
        if (typeof data.detail === "string") return data.detail;
        if (typeof data.message === "string") return data.message;
        if (Array.isArray(data.detail)) {
            return data.detail
                .map((item) => typeof item === "string" ? item : JSON.stringify(item))
                .join(" · ");
        }
    } catch {
        // Algunas respuestas de proxy pueden ser texto sin formato.
    }

    return raw.slice(0, 300);
}

function contactImageUrl(mediaId: number | null): string | null {
    return mediaId ? `/api/public/archivos-multimedia/${mediaId}` : null;
}

function initials(contact: Pick<Contact, "nombre" | "apellidos">): string {
    return `${contact.nombre.trim().charAt(0)}${contact.apellidos.trim().charAt(0)}`.toUpperCase();
}

function ContactDirectoryIcon({ name }: { name: "plus" | "search" | "edit" | "archive" | "restore" | "close" | "image" | "phone" | "mail" | "refresh" }) {
    const paths: Record<typeof name, ReactNode> = {
        plus: <><path d="M12 5v14M5 12h14" /></>,
        search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
        edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
        archive: <><rect x="3" y="4" width="18" height="5" rx="1" /><path d="M5 9v11h14V9M10 13h4" /></>,
        restore: <><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
        close: <><path d="m18 6-12 12M6 6l12 12" /></>,
        image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></>,
        phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7L7.6 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.4a2 2 0 0 1 1.6 1.9Z" /></>,
        mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
        refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2" /></>,
    };

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4"
        >
            {paths[name]}
        </svg>
    );
}

function makeForm(contact?: Contact): ContactForm {
    if (!contact) {
        return {
            ...EMPTY_FORM,
            fecha_publicacion: localDateTimeValue(),
        };
    }

    return {
        nombre: contact.nombre ?? "",
        apellidos: contact.apellidos ?? "",
        departamento: contact.departamento ?? "",
        cargo: contact.cargo ?? "",
        correo_electronico: contact.correo_electronico ?? "",
        telefono: contact.telefono ?? "",
        archivo_multimedia_id: contact.archivo_multimedia_id,
        activo: Boolean(contact.activo),
        orden: contact.orden ?? 0,
        fecha_publicacion: toLocalDateTimeInput(contact.fecha_publicacion),
    };
}

export default function AdminContactDirectory({ user }: { user: AdminUser }) {
    const canManage = user.role !== "privilegiado";

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [notice, setNotice] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");
    const [reloadKey, setReloadKey] = useState(0);
    const [editingContact, setEditingContact] = useState<Contact | null>(null);
    const [formOpen, setFormOpen] = useState(false);
    const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const imagePreviewUrlRef = useRef<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);

    const activeCount = useMemo(
        () => contacts.filter((contact) => contact.activo).length,
        [contacts],
    );
    const archivedCount = contacts.length - activeCount;

    useEffect(() => {
        const controller = new AbortController();
        const timer = window.setTimeout(async () => {
            setLoading(true);
            setError(null);

            const params = new URLSearchParams();
            if (search.trim()) params.set("busqueda", search.trim());
            if (departmentFilter) params.set("departamento", departmentFilter);
            if (statusFilter === "active") params.set("activo", "true");
            if (statusFilter === "archived") params.set("activo", "false");

            const query = params.toString();
            const url = `/api/admin/contactos${query ? `?${query}` : ""}`;

            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: "same-origin",
                    cache: "no-store",
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(await readApiError(response));
                }

                const data = await response.json() as Contact[];
                setContacts(Array.isArray(data) ? data : []);
            } catch (cause) {
                if (controller.signal.aborted) return;
                setError(cause instanceof Error ? cause.message : "No se pudieron cargar los contactos.");
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }, 250);

        return () => {
            window.clearTimeout(timer);
            controller.abort();
        };
    }, [search, departmentFilter, statusFilter, reloadKey]);

    // Libera la URL temporal de la vista previa cuando se desmonta el componente.
    // La creación y actualización de la vista previa se hace en el evento de selección,
    // no dentro de un efecto, para evitar react-hooks/set-state-in-effect.
    useEffect(() => {
        return () => {
            if (imagePreviewUrlRef.current) {
                URL.revokeObjectURL(imagePreviewUrlRef.current);
                imagePreviewUrlRef.current = null;
            }
        };
    }, []);

    function clearSelectedImage() {
        if (imagePreviewUrlRef.current) {
            URL.revokeObjectURL(imagePreviewUrlRef.current);
            imagePreviewUrlRef.current = null;
        }

        setImagePreview(null);
        setSelectedImage(null);
    }

    function openCreateForm() {
        setEditingContact(null);
        setForm(makeForm());
        clearSelectedImage();
        setImageError(null);
        setNotice(null);
        setError(null);
        setFormOpen(true);
    }

    function openEditForm(contact: Contact) {
        setEditingContact(contact);
        setForm(makeForm(contact));
        clearSelectedImage();
        setImageError(null);
        setNotice(null);
        setError(null);
        setFormOpen(true);
    }

    function closeForm() {
        if (submitting) return;
        setFormOpen(false);
        setEditingContact(null);
        clearSelectedImage();
        setImageError(null);
    }

    function updateForm<K extends keyof ContactForm>(key: K, value: ContactForm[K]) {
        setForm((current) => ({ ...current, [key]: value }));
    }

    function handleImageChange(file: File | undefined) {
        setImageError(null);
        clearSelectedImage();

        if (!file) return;

        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!allowedTypes.includes(file.type)) {
            setImageError("Formato no permitido. Selecciona una imagen JPEG, PNG o WebP.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setImageError("La imagen supera el tamaño máximo de 5 MB.");
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        imagePreviewUrlRef.current = objectUrl;
        setImagePreview(objectUrl);
        setSelectedImage(file);
    }

    async function uploadContactImage(): Promise<number | null> {
        if (!selectedImage) return form.archivo_multimedia_id;

        const body = new FormData();
        body.append("archivo", selectedImage);
        body.append("texto_alternativo", `${form.nombre} ${form.apellidos}`.trim());
        if (form.cargo.trim()) body.append("leyenda", form.cargo.trim());

        const response = await fetch("/api/admin/archivos-multimedia", {
            method: "POST",
            credentials: "same-origin",
            body,
        });

        if (!response.ok) {
            throw new Error(`No se pudo subir la imagen: ${await readApiError(response)}`);
        }

        const uploaded = await response.json() as UploadedMedia;
        if (!uploaded.id) {
            throw new Error("La API no ha devuelto el identificador del archivo multimedia.");
        }

        return uploaded.id;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!canManage || submitting) return;

        setSubmitting(true);
        setError(null);
        setNotice(null);

        try {
            const mediaId = await uploadContactImage();
            const payload = {
                nombre: form.nombre.trim(),
                apellidos: form.apellidos.trim(),
                departamento: form.departamento || null,
                cargo: form.cargo.trim() || null,
                correo_electronico: form.correo_electronico.trim() || null,
                telefono: form.telefono.trim() || null,
                archivo_multimedia_id: mediaId,
                activo: form.activo,
                orden: Number.isFinite(form.orden) ? form.orden : 0,
                fecha_publicacion: form.fecha_publicacion || null,
            };

            const isEditing = Boolean(editingContact);
            const url = isEditing
                ? `/api/admin/contactos/${editingContact!.id}`
                : "/api/admin/contactos";

            const response = await fetch(url, {
                method: isEditing ? "PUT" : "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                // Conservamos el ID del archivo recién subido para que el usuario
                // pueda reintentar el guardado sin volver a subir la misma imagen.
                if (selectedImage && mediaId) {
                    setForm((current) => ({ ...current, archivo_multimedia_id: mediaId }));
                    clearSelectedImage();
                }
                throw new Error(await readApiError(response));
            }

            setFormOpen(false);
            setEditingContact(null);
            clearSelectedImage();
            setNotice(isEditing ? "Contacto actualizado correctamente." : "Contacto creado correctamente.");
            setReloadKey((value) => value + 1);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "No se pudo guardar el contacto.");
        } finally {
            setSubmitting(false);
        }
    }

    async function archiveContact(contact: Contact) {
        const confirmed = window.confirm(
            `¿Quieres archivar a ${contact.nombre} ${contact.apellidos}? El contacto dejará de mostrarse en la web, pero permanecerá guardado.`,
        );
        if (!confirmed) return;

        setError(null);
        setNotice(null);

        try {
            const response = await fetch(`/api/admin/contactos/${contact.id}`, {
                method: "DELETE",
                credentials: "same-origin",
            });

            if (!response.ok) throw new Error(await readApiError(response));

            setNotice("Contacto archivado correctamente.");
            setReloadKey((value) => value + 1);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "No se pudo archivar el contacto.");
        }
    }

    async function restoreContact(contact: Contact) {
        const payload = {
            nombre: contact.nombre,
            apellidos: contact.apellidos,
            departamento: contact.departamento,
            cargo: contact.cargo,
            correo_electronico: contact.correo_electronico,
            telefono: contact.telefono,
            archivo_multimedia_id: contact.archivo_multimedia_id,
            activo: true,
            orden: contact.orden,
            fecha_publicacion: contact.fecha_publicacion ?? localDateTimeValue(),
        };

        setError(null);
        setNotice(null);

        try {
            const response = await fetch(`/api/admin/contactos/${contact.id}`, {
                method: "PUT",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error(await readApiError(response));

            setNotice("Contacto reactivado correctamente.");
            setReloadKey((value) => value + 1);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "No se pudo reactivar el contacto.");
        }
    }

    return (
        <section className="space-y-5">
            <div className="flex flex-col gap-4 border border-[#e2e5e9] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold text-[#202328]">Directorio del equipo</p>
                    <p className="mt-1 text-xs leading-5 text-[#737b85]">
                        Administra las personas, sus datos de contacto y la información que aparece en la web.
                    </p>
                </div>

                {canManage && (
                    <button
                        type="button"
                        onClick={openCreateForm}
                        className="inline-flex min-h-10 items-center justify-center gap-2 bg-[#17191d] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#0078d6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0078d6]"
                    >
                        <ContactDirectoryIcon name="plus" />
                        Añadir contacto
                    </button>
                )}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
                <div className="border border-[#e2e5e9] bg-white p-4">
                    <p className="text-xs text-[#737b85]">Contactos encontrados</p>
                    <p className="mt-2 text-2xl font-semibold text-[#17191d]">{contacts.length}</p>
                </div>
                <div className="border border-[#e2e5e9] bg-white p-4">
                    <p className="text-xs text-[#737b85]">Activos en el panel</p>
                    <p className="mt-2 text-2xl font-semibold text-[#17191d]">{activeCount}</p>
                </div>
                <div className="border border-[#e2e5e9] bg-white p-4">
                    <p className="text-xs text-[#737b85]">Archivados</p>
                    <p className="mt-2 text-2xl font-semibold text-[#17191d]">{archivedCount}</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 border border-[#e2e5e9] bg-white p-4 lg:flex-row">
                <label className="relative min-w-0 flex-1">
                    <span className="sr-only">Buscar contactos</span>
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Buscar por nombre, cargo, correo o teléfono..."
                        className="min-h-10 w-full border border-[#dfe3e7] bg-white py-2 pl-10 pr-3 text-sm text-[#202328] outline-none placeholder:text-[#9aa1a9] focus:border-[#0078d6]"
                    />
                    <span className="pointer-events-none absolute left-3 top-3 text-[#8a929b]">
                        <ContactDirectoryIcon name="search" />
                    </span>
                </label>

                <select
                    value={departmentFilter}
                    onChange={(event) => setDepartmentFilter(event.target.value)}
                    aria-label="Filtrar por departamento"
                    className="min-h-10 border border-[#dfe3e7] bg-white px-3 text-sm text-[#454d56] outline-none focus:border-[#0078d6]"
                >
                    <option value="">Todos los departamentos</option>
                    {DEPARTMENTS.map((department) => (
                        <option key={department} value={department}>{department}</option>
                    ))}
                </select>

                <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value as FilterStatus)}
                    aria-label="Filtrar por estado"
                    className="min-h-10 border border-[#dfe3e7] bg-white px-3 text-sm text-[#454d56] outline-none focus:border-[#0078d6]"
                >
                    <option value="all">Todos los estados</option>
                    <option value="active">Activos</option>
                    <option value="archived">Archivados</option>
                </select>

                <button
                    type="button"
                    onClick={() => setReloadKey((value) => value + 1)}
                    title="Actualizar listado"
                    aria-label="Actualizar listado"
                    className="inline-flex min-h-10 items-center justify-center border border-[#dfe3e7] px-3 text-[#59636e] transition-colors hover:border-[#0078d6] hover:text-[#0078d6]"
                >
                    <ContactDirectoryIcon name="refresh" />
                </button>
            </div>

            {error && !formOpen && (
                <div role="alert" className="border border-[#f0c7c7] bg-[#fff7f7] px-4 py-3 text-sm text-[#9b2929]">
                    {error}
                </div>
            )}
            {notice && !formOpen && (
                <div role="status" className="border border-[#cfe4d6] bg-[#f5fbf6] px-4 py-3 text-sm text-[#28653a]">
                    {notice}
                </div>
            )}

            {loading ? (
                <div className="border border-[#e2e5e9] bg-white px-5 py-14 text-center text-sm text-[#737b85]">
                    Cargando contactos...
                </div>
            ) : error && contacts.length === 0 ? (
                <div className="border border-[#e2e5e9] bg-white px-5 py-12 text-center">
                    <p className="text-sm font-semibold text-[#202328]">No se ha podido cargar el directorio</p>
                    <p className="mt-2 text-sm text-[#737b85]">Comprueba la conexión con la API y que tu sesión siga activa.</p>
                    <button
                        type="button"
                        onClick={() => setReloadKey((value) => value + 1)}
                        className="mt-5 min-h-10 bg-[#17191d] px-4 text-xs font-semibold text-white hover:bg-[#0078d6]"
                    >
                        Reintentar
                    </button>
                </div>
            ) : contacts.length === 0 ? (
                <div className="border border-[#e2e5e9] bg-white px-5 py-14 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#f0f3f6] text-[#737b85]">
                        <ContactDirectoryIcon name="image" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-[#202328]">No hay contactos para mostrar</h3>
                    <p className="mt-2 text-xs text-[#737b85]">Prueba a cambiar los filtros o añade el primer integrante del equipo.</p>
                    {canManage && (
                        <button
                            type="button"
                            onClick={openCreateForm}
                            className="mt-5 min-h-10 bg-[#17191d] px-4 text-xs font-semibold text-white hover:bg-[#0078d6]"
                        >
                            Añadir contacto
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
                    {contacts.map((contact) => {
                        const imageUrl = contactImageUrl(contact.archivo_multimedia_id);

                        return (
                            <article key={contact.id} className="flex min-w-0 flex-col border border-[#e2e5e9] bg-white">
                                <div className="flex gap-4 p-5">
                                    <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden border border-[#e6e9ed] bg-[#f0f3f6] text-lg font-semibold text-[#737b85]">
                                        {imageUrl ? (
                                            <Image
                                                src={imageUrl}
                                                alt={`${contact.nombre} ${contact.apellidos}`}
                                                fill
                                                unoptimized
                                                sizes="76px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            initials(contact)
                                        )}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="truncate text-sm font-semibold text-[#202328]">
                                                {contact.nombre} {contact.apellidos}
                                            </h3>
                                            <span className={`border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${contact.activo ? "border-[#cfe4d6] bg-[#f5fbf6] text-[#28653a]" : "border-[#e4e7ea] bg-[#f7f8f9] text-[#737b85]"}`}>
                                                {contact.activo ? "Activo" : "Archivado"}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-xs font-medium text-[#0078d6]">{contact.cargo || contact.departamento || "Sin cargo indicado"}</p>
                                        {contact.departamento && (
                                            <p className="mt-1 text-[11px] text-[#858d96]">{contact.departamento}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2 border-t border-[#edf0f2] px-5 py-4">
                                    {contact.correo_electronico ? (
                                        <a href={`mailto:${contact.correo_electronico}`} className="flex min-w-0 items-center gap-2 text-xs text-[#626a73] hover:text-[#0078d6]">
                                            <ContactDirectoryIcon name="mail" />
                                            <span className="truncate">{contact.correo_electronico}</span>
                                        </a>
                                    ) : (
                                        <p className="flex items-center gap-2 text-xs text-[#a0a6ae]"><ContactDirectoryIcon name="mail" /> Sin correo electrónico</p>
                                    )}
                                    {contact.telefono ? (
                                        <a href={`tel:${contact.telefono}`} className="flex min-w-0 items-center gap-2 text-xs text-[#626a73] hover:text-[#0078d6]">
                                            <ContactDirectoryIcon name="phone" />
                                            <span>{contact.telefono}</span>
                                        </a>
                                    ) : (
                                        <p className="flex items-center gap-2 text-xs text-[#a0a6ae]"><ContactDirectoryIcon name="phone" /> Sin teléfono</p>
                                    )}
                                </div>

                                <div className="mt-auto flex items-center justify-between border-t border-[#edf0f2] bg-[#fbfcfd] px-5 py-3">
                                    <span className="text-[10px] text-[#858d96]">Orden: {contact.orden}</span>
                                    {canManage && (
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => openEditForm(contact)}
                                                className="inline-flex min-h-8 items-center gap-1.5 border border-[#dfe3e7] bg-white px-3 text-[10px] font-semibold text-[#4f5964] hover:border-[#0078d6] hover:text-[#0078d6]"
                                            >
                                                <ContactDirectoryIcon name="edit" />
                                                Editar
                                            </button>
                                            {contact.activo ? (
                                                <button
                                                    type="button"
                                                    onClick={() => void archiveContact(contact)}
                                                    className="inline-flex min-h-8 items-center gap-1.5 border border-[#ead6d6] bg-white px-3 text-[10px] font-semibold text-[#9b4545] hover:bg-[#fff7f7]"
                                                >
                                                    <ContactDirectoryIcon name="archive" />
                                                    Archivar
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => void restoreContact(contact)}
                                                    className="inline-flex min-h-8 items-center gap-1.5 border border-[#cfe4d6] bg-white px-3 text-[10px] font-semibold text-[#28653a] hover:bg-[#f5fbf6]"
                                                >
                                                    <ContactDirectoryIcon name="restore" />
                                                    Reactivar
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}

            {formOpen && (
                <div
                    className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-[#090b0e]/55 p-3 py-6 sm:p-6"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) closeForm();
                    }}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-form-title"
                        className="my-auto w-full max-w-3xl border border-[#e2e5e9] bg-white shadow-2xl"
                    >
                        <div className="flex items-center justify-between gap-4 border-b border-[#e9ecef] px-5 py-4 sm:px-7">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0078d6]">Directorio del equipo</p>
                                <h2 id="contact-form-title" className="mt-1 text-lg font-semibold text-[#202328]">
                                    {editingContact ? "Modificar contacto" : "Añadir contacto"}
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={closeForm}
                                disabled={submitting}
                                aria-label="Cerrar formulario"
                                className="flex h-9 w-9 items-center justify-center text-[#737b85] hover:bg-[#f0f3f6] hover:text-[#202328] disabled:opacity-50"
                            >
                                <ContactDirectoryIcon name="close" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 p-5 sm:p-7">
                            {error && (
                                <div role="alert" className="border border-[#f0c7c7] bg-[#fff7f7] px-4 py-3 text-sm text-[#9b2929]">
                                    {error}
                                </div>
                            )}

                            <div className="grid gap-5 md:grid-cols-[180px_1fr]">
                                <div>
                                    <label className="mb-2 block text-xs font-semibold text-[#454d56]">Fotografía</label>
                                    <div className="relative flex aspect-square w-full max-w-[180px] items-center justify-center overflow-hidden border border-dashed border-[#cbd2da] bg-[#f7f8f9]">
                                        {imagePreview ? (
                                            <Image src={imagePreview} alt="Vista previa de la fotografía" fill unoptimized sizes="180px" className="object-cover" />
                                        ) : form.archivo_multimedia_id ? (
                                            <Image src={contactImageUrl(form.archivo_multimedia_id)!} alt="Fotografía actual" fill unoptimized sizes="180px" className="object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-2 text-[#9299a1]">
                                                <ContactDirectoryIcon name="image" />
                                                <span className="text-[10px]">Sin fotografía</span>
                                            </div>
                                        )}
                                    </div>
                                    <label className="mt-3 inline-flex min-h-9 w-full cursor-pointer items-center justify-center border border-[#dfe3e7] bg-white px-3 text-xs font-semibold text-[#4f5964] hover:border-[#0078d6] hover:text-[#0078d6]">
                                        Seleccionar imagen
                                        <input
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp"
                                            className="sr-only"
                                            onChange={(event) => handleImageChange(event.target.files?.[0])}
                                        />
                                    </label>
                                    {(form.archivo_multimedia_id || selectedImage) && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                clearSelectedImage();
                                                updateForm("archivo_multimedia_id", null);
                                            }}
                                            className="mt-2 w-full text-center text-[11px] text-[#9b4545] hover:underline"
                                        >
                                            Quitar fotografía
                                        </button>
                                    )}
                                    <p className="mt-2 text-[10px] leading-4 text-[#9299a1]">JPEG, PNG o WebP. Máximo 5 MB.</p>
                                    {imageError && <p className="mt-2 text-[11px] text-[#b42318]">{imageError}</p>}
                                </div>

                                <div className="grid content-start gap-4 sm:grid-cols-2">
                                    <label className="sm:col-span-1">
                                        <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Nombre <span className="text-[#b42318]">*</span></span>
                                        <input required maxLength={255} value={form.nombre} onChange={(event) => updateForm("nombre", event.target.value)} className="min-h-10 w-full border border-[#dfe3e7] px-3 text-sm outline-none focus:border-[#0078d6]" />
                                    </label>
                                    <label className="sm:col-span-1">
                                        <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Apellidos <span className="text-[#b42318]">*</span></span>
                                        <input required maxLength={255} value={form.apellidos} onChange={(event) => updateForm("apellidos", event.target.value)} className="min-h-10 w-full border border-[#dfe3e7] px-3 text-sm outline-none focus:border-[#0078d6]" />
                                    </label>
                                    <label>
                                        <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Departamento</span>
                                        <select value={form.departamento} onChange={(event) => updateForm("departamento", event.target.value as ContactForm["departamento"])} className="min-h-10 w-full border border-[#dfe3e7] bg-white px-3 text-sm outline-none focus:border-[#0078d6]">
                                            <option value="">Sin departamento</option>
                                            {DEPARTMENTS.map((department) => <option key={department} value={department}>{department}</option>)}
                                        </select>
                                    </label>
                                    <label>
                                        <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Cargo</span>
                                        <input maxLength={120} value={form.cargo} onChange={(event) => updateForm("cargo", event.target.value)} placeholder="Ej. Asesor de servicio" className="min-h-10 w-full border border-[#dfe3e7] px-3 text-sm outline-none focus:border-[#0078d6]" />
                                    </label>
                                    <label>
                                        <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Correo electrónico</span>
                                        <input type="email" maxLength={255} value={form.correo_electronico} onChange={(event) => updateForm("correo_electronico", event.target.value)} placeholder="nombre@empresa.es" className="min-h-10 w-full border border-[#dfe3e7] px-3 text-sm outline-none focus:border-[#0078d6]" />
                                    </label>
                                    <label>
                                        <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Teléfono</span>
                                        <input type="tel" maxLength={50} value={form.telefono} onChange={(event) => updateForm("telefono", event.target.value)} placeholder="+34 000 000 000" className="min-h-10 w-full border border-[#dfe3e7] px-3 text-sm outline-none focus:border-[#0078d6]" />
                                    </label>
                                </div>
                            </div>

                            <div className="grid gap-4 border-t border-[#edf0f2] pt-5 sm:grid-cols-2">
                                <label>
                                    <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Orden de visualización</span>
                                    <input type="number" min={0} step={1} value={form.orden} onChange={(event) => updateForm("orden", Number(event.target.value))} className="min-h-10 w-full border border-[#dfe3e7] px-3 text-sm outline-none focus:border-[#0078d6]" />
                                    <span className="mt-1 block text-[10px] text-[#9299a1]">Los valores más bajos aparecen primero.</span>
                                </label>
                                <label>
                                    <span className="mb-1.5 block text-xs font-semibold text-[#454d56]">Fecha de publicación</span>
                                    <input type="datetime-local" required={form.activo} value={form.fecha_publicacion} onChange={(event) => updateForm("fecha_publicacion", event.target.value)} className="min-h-10 w-full border border-[#dfe3e7] px-3 text-sm outline-none focus:border-[#0078d6]" />
                                    <span className="mt-1 block text-[10px] text-[#9299a1]">Necesaria para mostrar el contacto en la web.</span>
                                </label>
                            </div>

                            <label className="flex cursor-pointer items-start gap-3 border border-[#e2e5e9] bg-[#fafbfc] p-4">
                                <input type="checkbox" checked={form.activo} onChange={(event) => updateForm("activo", event.target.checked)} className="mt-0.5 h-4 w-4 accent-[#0078d6]" />
                                <span>
                                    <span className="block text-xs font-semibold text-[#343a40]">Contacto activo</span>
                                    <span className="mt-1 block text-[11px] leading-4 text-[#737b85]">Los contactos activos con fecha de publicación alcanzada pueden mostrarse en la web.</span>
                                </span>
                            </label>

                            <div className="flex flex-col-reverse gap-2 border-t border-[#edf0f2] pt-5 sm:flex-row sm:justify-end">
                                <button type="button" onClick={closeForm} disabled={submitting} className="min-h-10 border border-[#dfe3e7] bg-white px-5 text-xs font-semibold text-[#59636e] hover:bg-[#f7f8f9] disabled:opacity-50">
                                    Cancelar
                                </button>
                                <button type="submit" disabled={submitting || Boolean(imageError)} className="inline-flex min-h-10 items-center justify-center gap-2 bg-[#17191d] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#0078d6] disabled:cursor-not-allowed disabled:opacity-60">
                                    {submitting ? "Guardando..." : editingContact ? "Guardar cambios" : "Crear contacto"}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            )}

            {!canManage && (
                <p className="text-xs text-[#9299a1]">Tu perfil tiene permisos de consulta. Para crear, modificar o archivar contactos, necesitas el rol de administrador.</p>
            )}
        </section>
    );
}
