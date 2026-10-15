import { NextResponse } from "next/server";

import {
    CurriculumValidationError,
} from "@/core/curriculums/application/use-cases/SubmitCurriculumUseCase";

import {
    CurriculumRepositoryError,
} from "@/core/curriculums/application/ports/CurriculumRepository";

import {
    submitCurriculum,
} from "@/lib/curriculums/curriculumDependencies";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = 5 * 1024 * 1024;

function errorResponse(error: string, status: number) {
    return NextResponse.json(
        { ok: false, error },
        { status },
    );
}

function getTextField(formData: FormData, ...keys: string[]): string {
    for (const key of keys) {
        const value = formData.get(key);

        if (typeof value === "string") {
            return value;
        }
    }

    return "";
}

export async function POST(request: Request) {
    let formData: FormData;

    try {
        const contentType = request.headers.get("content-type") ?? "";

        if (!contentType.toLowerCase().includes("multipart/form-data")) {
            return errorResponse("invalid_form", 400);
        }

        const contentLength = Number(
            request.headers.get("content-length") ?? 0,
        );

        if (contentLength > MAX_REQUEST_SIZE) {
            return errorResponse("file_too_large", 413);
        }

        formData = await request.formData();
    } catch {
        return errorResponse("invalid_form", 400);
    }

    const nombre = getTextField(formData, "name", "nombre");
    const email = getTextField(formData, "email");
    const mensaje = getTextField(formData, "message", "mensaje");

    // El formulario actual utiliza "cv"; el dominio utiliza "archivo".
    const cv = formData.get("cv");
    const archivo = cv instanceof File ? cv : formData.get("archivo");

    if (!(archivo instanceof File)) {
        return errorResponse("invalid_pdf", 400);
    }

    const terms = formData.get("terms");

    if (terms !== "on" && terms !== "true") {
        return errorResponse("terms_required", 400);
    }

    try {
        await submitCurriculum.execute({
            nombre,
            email,
            mensaje,
            archivo,
        });

        return NextResponse.json(
            { ok: true },
            { status: 201 },
        );
    } catch (error) {
        if (error instanceof CurriculumValidationError) {
            const statusByCode: Record<string, number> = {
                name_required: 400,
                name_too_long: 400,
                message_too_long: 400,
                invalid_email: 400,
                invalid_pdf: 400,
                file_too_large: 413,
            };

            return errorResponse(
                error.code,
                statusByCode[error.code] ?? 400,
            );
        }

        if (error instanceof CurriculumRepositoryError) {
            if (error.code === "not_configured") {
                return errorResponse("backend_not_configured", 500);
            }

            if (error.code === "unavailable") {
                return errorResponse("backend_unavailable", 502);
            }

            return errorResponse(
                "send_failed",
                error.status && error.status >= 400 && error.status <= 599
                    ? error.status
                    : 502,
            );
        }

        console.error("Error inesperado al procesar una candidatura.");

        return errorResponse("send_failed", 500);
    }
}
