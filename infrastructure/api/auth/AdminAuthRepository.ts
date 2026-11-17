import type { AdminAuthRepository as AdminAuthRepositoryPort } from "@/core/auth/application/ports/AdminAuthRepository";
import type { AdminCredentials } from "@/core/auth/domain/AdminCredentials";
import { AdminLoginError } from "@/core/auth/domain/AdminLoginError";

export class AdminAuthRepository implements AdminAuthRepositoryPort {
    async login(credentials: AdminCredentials): Promise<void> {
        let response: Response;

        try {
            response = await fetch("/api/admin/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "same-origin",
                cache: "no-store",
                body: JSON.stringify(credentials),
            });
        } catch {
            throw new AdminLoginError("unavailable");
        }

        if (response.status === 401 || response.status === 403) {
            throw new AdminLoginError("invalid-credentials");
        }

        if (!response.ok) {
            throw new AdminLoginError("unavailable");
        }
    }
}