import { NextRequest, NextResponse } from "next/server";
import { proxyPublicGet } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ contactId: string }> };
export async function GET(request: NextRequest, context: Context) {
    const { contactId } = await context.params;
    if (!/^[1-9]\d*$/.test(contactId)) return NextResponse.json({ detail: "Identificador no válido." }, { status: 400 });
    return proxyPublicGet(request, `/api/public/contactos/${contactId}`);
}
