import type { ContactDepartmentGroup } from "../../domain/ContactDepartmentGroup";
import type { ContactPerson } from "../../domain/ContactPerson";

export class GroupContactsByDepartment {
    execute(
        people: ContactPerson[]
    ): ContactDepartmentGroup[] {
        const groups = new Map<
            string,
            ContactPerson[]
        >();

        for (const person of people) {
            const existing = groups.get(person.department);

            if (existing) {
                existing.push(person);
                continue;
            }

            groups.set(
                person.department,
                [person]
            );
        }

        return Array.from(groups.entries()).map(
            ([department, people]) => ({
                department,
                people,
            })
        );
    }
}