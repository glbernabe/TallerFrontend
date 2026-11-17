export type AdminLoginErrorCode =
    | "invalid-credentials"
    | "unavailable";

export class AdminLoginError extends Error {
    constructor(public readonly code: AdminLoginErrorCode) {
        super(code);
        this.name = "AdminLoginError";
    }
}