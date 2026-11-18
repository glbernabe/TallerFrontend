import type {
    AdminContact,
    AdminContactFilters,
    AdminContactInput,
} from "../../domain/AdminContact";

export interface AdminContactRepository {
    list(filters?: AdminContactFilters): Promise<AdminContact[]>;
    getById(id: string): Promise<AdminContact | null>;
    create(input: AdminContactInput): Promise<AdminContact>;
    update(id: string, input: AdminContactInput): Promise<AdminContact>;
    archive(id: string): Promise<void>;
}
