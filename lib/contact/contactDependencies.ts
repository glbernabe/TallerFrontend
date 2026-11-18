import { GetActiveContacts } from "@/core/contact/application/use-cases/GetActiveContacts";
import { GetContactById } from "@/core/contact/application/use-cases/GetContactById";
import { GetContactsByDepartment } from "@/core/contact/application/use-cases/GetContactsByDepartment";
import { SearchContacts } from "@/core/contact/application/use-cases/SearchContacts";
import { GroupContactsByDepartment } from "@/core/contact/application/use-cases/GroupContactsByDepartment";
import { ContactApiRepository } from "@/infrastructure/api/contact/ContactApiRepository";

const repository = new ContactApiRepository();
export const getActiveContacts = new GetActiveContacts(repository);
export const getContactById = new GetContactById(repository);
export const getContactsByDepartment = new GetContactsByDepartment(repository);
export const searchContacts = new SearchContacts(repository);
export const groupContactsByDepartment = new GroupContactsByDepartment();
