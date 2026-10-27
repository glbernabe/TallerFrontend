
import type { ContactRepository } from "@/core/contact/application/ports/ContactRepository";
import type { ContactPerson } from "@/core/contact/domain/ContactPerson";

import { strapiFetch } from "@/lib/strapi/client";

import { mapStrapiContact } from "./StrapiContactMapper";

import type {
    StrapiContactCollectionResponse,
    StrapiContactSingleResponse,
} from "./StrapiContactTypes";

const CONTACT_POPULATE = "populate=photo";

export class StrapiContactRepository implements ContactRepository {
    async getActiveContacts(): Promise<ContactPerson[]> {
        const response =
            await strapiFetch<StrapiContactCollectionResponse>(
                `/api/contacts?filters[active][$eq]=true&sort=order:asc&${CONTACT_POPULATE}`
            );

        return response.data.map(mapStrapiContact);
    }

    async getById(id: string): Promise<ContactPerson | null> {
        try {
            const response =
                await strapiFetch<StrapiContactSingleResponse>(
                    `/api/contacts/${encodeURIComponent(id)}?${CONTACT_POPULATE}`
                );

            return mapStrapiContact(response.data);
        } catch {
            return null;
        }
    }

    async getByDepartment(
        department: string
    ): Promise<ContactPerson[]> {
        const response =
            await strapiFetch<StrapiContactCollectionResponse>(
                `/api/contacts?filters[active][$eq]=true&filters[department][$eq]=${encodeURIComponent(
                    department
                )}&sort=order:asc&${CONTACT_POPULATE}`
            );

        return response.data.map(mapStrapiContact);
    }

    async search(query: string): Promise<ContactPerson[]> {
        const encodedQuery = encodeURIComponent(query);

        const response =
            await strapiFetch<StrapiContactCollectionResponse>(
                `/api/contacts?filters[active][$eq]=true&filters[$or][0][firstName][$containsi]=${encodedQuery}&filters[$or][1][lastName][$containsi]=${encodedQuery}&filters[$or][2][email][$containsi]=${encodedQuery}&sort=order:asc&${CONTACT_POPULATE}`
            );

        return response.data.map(mapStrapiContact);
    }
}
