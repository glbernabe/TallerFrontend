import type { AdminCredentials } from "../../domain/AdminCredentials";

export interface AdminAuthRepository {
    login(credentials: AdminCredentials): Promise<void>;
}