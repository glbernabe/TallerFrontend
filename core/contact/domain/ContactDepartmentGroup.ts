import type { ContactPerson } from "./ContactPerson";

export type ContactDepartmentGroup = {
    department: string;
    people: ContactPerson[];
};