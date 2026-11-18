import { NextRequest, NextResponse } from "next/server";
import { proxyPublicGet } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ fileId: string }> };
export async function GET(request: NextRequest, context: Context) {
    const { fileId } = await context.params;
    if (!/^[1-9]\d*$/.test(fileId)) return NextResponse.json({ detail: "Identificador no válido." }, { status: 400 });
    return proxyPublicGet(request, `/api/public/archivos-multimedia/${fileId}`);
}
