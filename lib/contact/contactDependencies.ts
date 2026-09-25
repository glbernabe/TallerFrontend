import { GetActiveContacts } from "@/core/contact/application/use-cases/GetActiveContacts";
import { GetContactById } from "@/core/contact/application/use-cases/GetContactById";
import { GetContactsByDepartment } from "@/core/contact/application/use-cases/GetContactsByDepartment";
import { SearchContacts } from "@/core/contact/application/use-cases/SearchContacts";
import { GroupContactsByDepartment } from "@/core/contact/application/use-cases/GroupContactsByDepartment";

import { StrapiContactRepository } from "@/infrastructure/contact/strapi/StrapiContactRepository";

const contactRepository =
    new StrapiContactRepository();

export const getActiveContacts =
    new GetActiveContacts(
        contactRepository
    );

export const getContactById =
    new GetContactById(
        contactRepository
    );

export const getContactsByDepartment =
    new GetContactsByDepartment(
        contactRepository
    );

export const searchContacts =
    new SearchContacts(
        contactRepository
    );

export const groupContactsByDepartment =
    new GroupContactsByDepartment();