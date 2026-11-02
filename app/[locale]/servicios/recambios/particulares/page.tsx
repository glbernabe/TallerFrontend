import SparePartsIndividualsPage from "@/components/sections/spare-parts/SparePartsIndividualsPage";

import { GetContactsByDepartment } from "@/core/contact/application/use-cases/GetContactsByDepartment";
import { StrapiContactRepository } from "@/infrastructure/strapi/contact/StrapiContactRepository";

import type { ContactDepartmentGroup } from "@/core/contact/domain/ContactDepartmentGroup";

export default async function Page() {
    let contactGroup: ContactDepartmentGroup | null = null;

    try {
        const contactRepository = new StrapiContactRepository();

        const getContactsByDepartment =
            new GetContactsByDepartment(contactRepository);

        const people =
            await getContactsByDepartment.execute("Recambios");

        if (people.length > 0) {
            contactGroup = {
                department: "Recambios",
                people,
            };
        }
    } catch (error) {
        console.error(
            "[SparePartsIndividualsPage] Error obteniendo contactos de Strapi:",
            error
        );
    }

    return (
        <SparePartsIndividualsPage
            contactGroup={contactGroup}
        />
    );
}