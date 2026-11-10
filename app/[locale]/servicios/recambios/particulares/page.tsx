import SparePartsIndividualsPage from "@/components/sections/spare-parts/SparePartsIndividualsPage";

import { getContactsByDepartment } from "@/lib/contact/contactDependencies";
import type { ContactDepartmentGroup } from "@/core/contact/domain/ContactDepartmentGroup";

export default async function Page() {
    let contactGroup: ContactDepartmentGroup | null = null;

    try {
        const people = await getContactsByDepartment.execute("Recambios");

        if (people.length > 0) {
            contactGroup = {
                department: "Recambios",
                people,
            };
        }
    } catch (error) {
        console.error(
            "[SparePartsIndividualsPage] Error obteniendo contactos del departamento:",
            error,
        );
    }

    return <SparePartsIndividualsPage contactGroup={contactGroup} />;
}
