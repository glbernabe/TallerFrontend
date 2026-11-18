import { NextRequest, NextResponse } from "next/server";
import { proxyAdminMutation } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ userId: string }> };
async function getId(context: Context) {
    const { userId } = await context.params;
    return /^[1-9]\d*$/.test(userId) ? userId : null;
}
export async function PATCH(request: NextRequest, context: Context) {
    const id = await getId(context);
    if (!id) return NextResponse.json({ detail: "Identificador no válido." }, { status: 400 });
    return proxyAdminMutation(request, `/api/admin/users/${id}`, "PATCH");
}
export async function DELETE(request: NextRequest, context: Context) {
    const id = await getId(context);
    if (!id) return NextResponse.json({ detail: "Identificador no válido." }, { status: 400 });
    return proxyAdminMutation(request, `/api/admin/users/${id}`, "DELETE");
}
