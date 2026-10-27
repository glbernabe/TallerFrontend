
import SparePartsIndividualsPage from "@/components/sections/spare-parts/SparePartsIndividualsPage";

import { GetContactsByDepartment } from "@/core/contact/application/use-cases/GetContactsByDepartment";
import { StrapiContactRepository } from "@/infrastructure/strapi/contact/StrapiContactRepository";

import type { ContactDepartmentGroup } from "@/core/contact/domain/ContactDepartmentGroup";

export default async function Page() {
    const contactRepository = new StrapiContactRepository();    

    const getContactsByDepartment =
        new GetContactsByDepartment(contactRepository);

    const people =
        await getContactsByDepartment.execute("Recambios");

    const contactGroup: ContactDepartmentGroup | null =
        people.length > 0
            ? {
                  department: "Recambios",
                  people,
              }
            : null;

    return (
        <SparePartsIndividualsPage
            contactGroup={contactGroup}
        />
    );
}
