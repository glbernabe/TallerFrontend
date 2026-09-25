import type { ContactPerson } from "../../domain/ContactPerson";

export interface ContactRepository {
    getActiveContacts(): Promise<ContactPerson[]>;

    getById(id: string): Promise<ContactPerson | null>;

    getByDepartment(
        department: string
    ): Promise<ContactPerson[]>;

    search(
        query: string
    ): Promise<ContactPerson[]>;
}