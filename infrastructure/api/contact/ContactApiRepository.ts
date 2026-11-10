import type { ContactRepository } from "@/core/contact/application/ports/ContactRepository";
import type { ContactPerson } from "@/core/contact/domain/ContactPerson";

import { ApiError, apiFetch } from "../ApiClient";
import { mapApiContact } from "./ContactApiMapper";
import type { ApiContact } from "./ContactApiTypes";

function normalizeText(value: string): string {
    return value
        .trim()
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export class ContactApiRepository implements ContactRepository {
    async getActiveContacts(): Promise<ContactPerson[]> {
        const { data } = await apiFetch<ApiContact[]>(
            "api/public/contactos",
        );

        return data.map(mapApiContact);
    }

    async getById(id: string): Promise<ContactPerson | null> {
        const numericId = Number(id);

        if (!Number.isSafeInteger(numericId) || numericId <= 0) {
            return null;
        }

        try {
            const { data } = await apiFetch<ApiContact>(
                `api/public/contactos/${numericId}`,
            );
            return mapApiContact(data);
        } catch (error) {
            if (error instanceof ApiError && error.status === 404) {
                return null;
            }
            throw error;
        }
    }

    async getByDepartment(department: string): Promise<ContactPerson[]> {
        const encodedDepartment = encodeURIComponent(department.trim());
        const { data } = await apiFetch<ApiContact[]>(
            `api/public/contactos/departamento/${encodedDepartment}`,
        );

        return data.map(mapApiContact);
    }

    /**
     * La API actual no tiene endpoint de búsqueda de contactos.
     * Como el listado del taller es pequeño, filtramos localmente tras una única
     * petición al listado público. Si crece, conviene añadir ?buscar= en API.
     */
    async search(query: string): Promise<ContactPerson[]> {
        const normalizedQuery = normalizeText(query);

        if (!normalizedQuery) {
            return this.getActiveContacts();
        }

        const contacts = await this.getActiveContacts();

        return contacts.filter((contact) => {
            const searchableText = normalizeText(
                [
                    contact.firstName,
                    contact.lastName,
                    contact.department,
                    contact.email,
                    contact.phone,
                ].join(" "),
            );

            return searchableText.includes(normalizedQuery);
        });
    }
}
