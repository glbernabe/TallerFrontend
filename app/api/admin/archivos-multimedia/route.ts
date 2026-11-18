import { NextRequest, NextResponse } from "next/server";
import { proxyAdminUpload } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("multipart/form-data")) {
        return NextResponse.json({ detail: "Se esperaba un formulario multipart." }, { status: 400 });
    }
    return proxyAdminUpload(request, "/api/admin/archivos-multimedia");
}
