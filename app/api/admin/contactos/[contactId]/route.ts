import { NextRequest, NextResponse } from "next/server";
import { proxyAdminGet, proxyAdminMutation } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ contactId: string }> };
async function getId(context: Context) {
    const { contactId } = await context.params;
    return /^[1-9]\d*$/.test(contactId) ? contactId : null;
}
export async function GET(request: NextRequest, context: Context) {
    const id = await getId(context);
    if (!id) return NextResponse.json({ detail: "Identificador no válido." }, { status: 400 });
    return proxyAdminGet(request, `/api/admin/contactos/${id}`);
}
export async function PUT(request: NextRequest, context: Context) {
    const id = await getId(context);
    if (!id) return NextResponse.json({ detail: "Identificador no válido." }, { status: 400 });
    return proxyAdminMutation(request, `/api/admin/contactos/${id}`, "PUT");
}
export async function DELETE(request: NextRequest, context: Context) {
    const id = await getId(context);
    if (!id) return NextResponse.json({ detail: "Identificador no válido." }, { status: 400 });
    return proxyAdminMutation(request, `/api/admin/contactos/${id}`, "DELETE");
}
