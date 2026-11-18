import type { AdminContactRepository } from "@/core/contact/application/ports/AdminContactRepository";
import type {
    AdminContact,
    AdminContactFilters,
    AdminContactInput,
} from "@/core/contact/domain/AdminContact";

export class AdminContactHttpError extends Error {
    constructor(public readonly status: number, message: string) {
        super(message);
        this.name = "AdminContactHttpError";
    }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
    let response: Response;
    const headers = new Headers(init.headers);
    headers.set("Accept", "application/json");
    if (init.body && !headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }
    try {
        response = await fetch(path, {
            ...init,
            headers,
            credentials: "same-origin",
            cache: "no-store",
        });
    } catch {
        throw new AdminContactHttpError(0, "No se pudo conectar con el panel.");
    }

    if (!response.ok) {
        const payload = await response.json().catch(() => null) as { detail?: string } | null;
        throw new AdminContactHttpError(response.status, payload?.detail ?? "La operación no se pudo completar.");
    }

    if (response.status === 204) return undefined as T;
    return response.json() as Promise<T>;
}

export class AdminContactHttpRepository implements AdminContactRepository {
    async list(filters: AdminContactFilters = {}): Promise<AdminContact[]> {
        const query = new URLSearchParams();
        if (filters.busqueda?.trim()) query.set("busqueda", filters.busqueda.trim());
        if (filters.departamento) query.set("departamento", filters.departamento);
        if (filters.activo !== undefined) query.set("activo", String(filters.activo));
        const queryString = query.toString();
        const suffix = queryString ? `?${queryString}` : "";
        return request<AdminContact[]>(`/api/admin/contactos${suffix}`);
    }

    async getById(id: string): Promise<AdminContact | null> {
        try {
            return await request<AdminContact>(`/api/admin/contactos/${encodeURIComponent(id)}`);
        } catch (error) {
            if (error instanceof AdminContactHttpError && error.status === 404) return null;
            throw error;
        }
    }

    create(input: AdminContactInput): Promise<AdminContact> {
        return request<AdminContact>("/api/admin/contactos", { method: "POST", body: JSON.stringify(input) });
    }

    update(id: string, input: AdminContactInput): Promise<AdminContact> {
        return request<AdminContact>(`/api/admin/contactos/${encodeURIComponent(id)}`, {
            method: "PUT",
            body: JSON.stringify(input),
        });
    }

    archive(id: string): Promise<void> {
        return request<void>(`/api/admin/contactos/${encodeURIComponent(id)}`, { method: "DELETE" });
    }
}
