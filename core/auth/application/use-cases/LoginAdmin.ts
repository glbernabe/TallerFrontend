import type { AdminCredentials } from "../../domain/AdminCredentials";
import type { AdminAuthRepository } from "../ports/AdminAuthRepository";

export class LoginAdmin {
    constructor(private readonly repository: AdminAuthRepository) {}

    async execute(credentials: AdminCredentials): Promise<void> {
        return this.repository.login(credentials);
    }
}