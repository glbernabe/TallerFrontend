import type { ContactRepository } from "@/core/contact/application/ports/ContactRepository";
import type { ContactPerson } from "@/core/contact/domain/ContactPerson";

import { strapiFetch } from "@/lib/strapi/client";

import {
    mapStrapiContact,
} from "./StrapiContactMapper";

import type {
    StrapiContactCollectionResponse,
    StrapiContactSingleResponse,
} from "./StrapiContactTypes";

const CONTACT_POPULATE =
    "populate=Foto";

export class StrapiContactRepository
    implements ContactRepository
{
    async getActiveContacts(): Promise<ContactPerson[]> {
        const response =
            await strapiFetch<StrapiContactCollectionResponse>(
                `/api/contacts?filters[Activo][$eq]=true&sort=Orden:asc&${CONTACT_POPULATE}`
            );

        return response.data.map(
            mapStrapiContact
        );
    }

    async getById(
        id: string
    ): Promise<ContactPerson | null> {
        try {
            const response =
                await strapiFetch<StrapiContactSingleResponse>(
                    `/api/contacts/${encodeURIComponent(id)}?${CONTACT_POPULATE}`
                );

            return mapStrapiContact(
                response.data
            );
        } catch {
            return null;
        }
    }

    async getByDepartment(
        department: string
    ): Promise<ContactPerson[]> {
        const response =
            await strapiFetch<StrapiContactCollectionResponse>(
                `/api/contacts?filters[Activo][$eq]=true&filters[Departamento][$eq]=${encodeURIComponent(
                    department
                )}&sort=Orden:asc&${CONTACT_POPULATE}`
            );

        return response.data.map(
            mapStrapiContact
        );
    }

    async search(
        query: string
    ): Promise<ContactPerson[]> {
        const encodedQuery =
            encodeURIComponent(query);

        const response =
            await strapiFetch<StrapiContactCollectionResponse>(
                `/api/contacts?filters[Activo][$eq]=true&filters[$or][0][Nombre][$containsi]=${encodedQuery}&filters[$or][1][Apellidos][$containsi]=${encodedQuery}&filters[$or][2][Email][$containsi]=${encodedQuery}&sort=Orden:asc&${CONTACT_POPULATE}`
            );

        return response.data.map(
            mapStrapiContact
        );
    }
}