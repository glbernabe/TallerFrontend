export class StrapiError extends Error {
    readonly status: number;
    readonly endpoint: string;
    readonly method: string;
    readonly details?: unknown;

    constructor({
        message,
        status,
        endpoint,
        method = "GET",
        details,
    }: {
        message: string;
        status: number;
        endpoint: string;
        method?: string;
        details?: unknown;
    }) {
        super(message);

        this.name = "StrapiError";

        this.status = status;
        this.endpoint = endpoint;
        this.method = method;
        this.details = details;
    }
}