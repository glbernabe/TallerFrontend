import { GetActiveContacts } from "@/core/contact/application/use-cases/GetActiveContacts";
import { GetContactById } from "@/core/contact/application/use-cases/GetContactById";
import { GetContactsByDepartment } from "@/core/contact/application/use-cases/GetContactsByDepartment";
import { SearchContacts } from "@/core/contact/application/use-cases/SearchContacts";
import { GroupContactsByDepartment } from "@/core/contact/application/use-cases/GroupContactsByDepartment";

import { ContactApiRepository } from "@/infrastructure/api/contact/ContactApiRepository";

// Composition root: las páginas consumen casos de uso, nunca repositorios.
const contactRepository = new ContactApiRepository();

export const getActiveContacts = new GetActiveContacts(contactRepository);
export const getContactById = new GetContactById(contactRepository);
export const getContactsByDepartment = new GetContactsByDepartment(contactRepository);
export const searchContacts = new SearchContacts(contactRepository);
export const groupContactsByDepartment = new GroupContactsByDepartment();
