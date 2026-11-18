import { ListAdminContacts } from "@/core/contact/application/use-cases/ListAdminContacts";
import { GetAdminContactById } from "@/core/contact/application/use-cases/GetAdminContactById";
import { CreateAdminContact } from "@/core/contact/application/use-cases/CreateAdminContact";
import { UpdateAdminContact } from "@/core/contact/application/use-cases/UpdateAdminContact";
import { ArchiveAdminContact } from "@/core/contact/application/use-cases/ArchiveAdminContact";
import { AdminContactHttpRepository } from "@/infrastructure/api/contact/AdminContactHttpRepository";

const repository = new AdminContactHttpRepository();
export const listAdminContacts = new ListAdminContacts(repository);
export const getAdminContactById = new GetAdminContactById(repository);
export const createAdminContact = new CreateAdminContact(repository);
export const updateAdminContact = new UpdateAdminContact(repository);
export const archiveAdminContact = new ArchiveAdminContact(repository);
