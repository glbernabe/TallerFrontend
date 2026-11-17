import { NextResponse } from "next/server";

import {
    CurriculumValidationError,
    SubmitCurriculumUseCase,
} from "@/core/curriculums/application/use-cases/SubmitCurriculumUseCase";

import {
    CurriculumRepositoryError,
} from "@/core/curriculums/application/ports/CurriculumRepository";

import {
    submitCurriculum,
} from "@/lib/curriculums/curriculumDependencies";


export const runtime = "nodejs";

const MAX_REQUEST_SIZE = 5 * 1024 * 1024 + 128 * 1024;


function errorResponse(error: string, status: number) {
    return NextResponse.json(
        {
            ok: false,
            error,
        },
        {
            status,
            headers: {
                "Cache-Control": "no-store",
            },
        },
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
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().startsWith("multipart/form-data")) {
        return errorResponse("invalid_form", 400);
    }

    const contentLength = request.headers.get("content-length");

    if (contentLength !== null) {
        if (!/^\d+$/.test(contentLength)) {
            return errorResponse("invalid_form", 400);
        }

        if (Number(contentLength) > MAX_REQUEST_SIZE) {
            return errorResponse("file_too_large", 413);
        }
    }

    let formData: FormData;

    try {
        formData = await request.formData();
    } catch {
        return errorResponse("invalid_form", 400);
    }

    const nombre = getTextField(formData, "name");
    const email = getTextField(formData, "email");
    const telefono = getTextField(formData, "phone");
    const mensaje = getTextField(formData, "message");

    const archivo = formData.get("cv");
    const consentimiento = formData.get("terms") === "on";

    if (!(archivo instanceof File)) {
        return errorResponse("invalid_pdf", 400);
    }

    try {
        await submitCurriculum.execute({
            nombre,
            email,
            telefono,
            mensaje,
            consentimiento,
            archivo,
        });

        return NextResponse.json(
            { ok: true },
            {
                status: 201,
                headers: {
                    "Cache-Control": "no-store",
                },
            },
        );

    } catch (error) {
        if (error instanceof CurriculumValidationError) {
            const statusByCode: Record<string, number> = {
                name_required: 400,
                name_too_long: 400,
                phone_too_long: 400,
                message_too_long: 400,
                invalid_email: 400,
                invalid_pdf: 400,
                file_too_large: 413,
                terms_required: 400,
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

            if (error.status === 413) {
                return errorResponse("file_too_large", 413);
            }

            return errorResponse("send_failed", 502);
        }

        console.error(
            "Error inesperado al procesar una candidatura.",
        );

        return errorResponse("send_failed", 500);
    }
}