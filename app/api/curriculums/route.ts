import { NextResponse } from "next/server";
import {
    CurriculumValidationError,
} from "@/core/curriculums/application/use-cases/SubmitCurriculumUseCase";
import {
    CurriculumRepositoryError,
} from "@/core/curriculums/application/ports/CurriculumRepository";
import { submitCurriculum } from "@/lib/curriculums/curriculumDependencies";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const MAX_REQUEST_SIZE = 5 * 1024 * 1024 + 256 * 1024;

function errorResponse(error: string, status: number) {
    return NextResponse.json({ ok: false, error }, { status, headers: { "Cache-Control": "no-store" } });
}
function text(form: FormData, ...keys: string[]): string {
    for (const key of keys) {
        const value = form.get(key);
        if (typeof value === "string") return value;
    }
    return "";
}

export async function POST(request: Request) {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("multipart/form-data")) return errorResponse("invalid_form", 400);
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE) return errorResponse("file_too_large", 413);

    let form: FormData;
    try { form = await request.formData(); }
    catch { return errorResponse("invalid_form", 400); }

    const candidate = form.get("archivo") ?? form.get("cv");
    if (!(candidate instanceof File)) return errorResponse("invalid_pdf", 400);
    const consent = text(form, "consentimiento", "terms");
    if (!(["true", "on", "1"].includes(consent.toLowerCase()))) return errorResponse("terms_required", 400);

    try {
        await submitCurriculum.execute({
            nombre: text(form, "nombre", "name"),
            email: text(form, "email"),
            telefono: text(form, "telefono", "phone"),
            mensaje: text(form, "mensaje", "message"),
            consentimiento: true,
            archivo: candidate,
        });
        return NextResponse.json({ ok: true }, { status: 201, headers: { "Cache-Control": "no-store" } });
    } catch (error) {
        if (error instanceof CurriculumValidationError) {
            const code = error.code;
            const status = code === "file_too_large" ? 413 : code === "phone_too_long" ? 400 : 400;
            return errorResponse(code, status);
        }
        if (error instanceof CurriculumRepositoryError) {
            if (error.code === "not_configured") return errorResponse("backend_not_configured", 500);
            if (error.code === "unavailable") return errorResponse("backend_unavailable", 502);
            return errorResponse("send_failed", error.status && error.status >= 400 && error.status <= 599 ? error.status : 502);
        }
        return errorResponse("send_failed", 500);
    }
}
