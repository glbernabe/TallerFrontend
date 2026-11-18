import { NextRequest } from "next/server";
import { proxyPublicGet } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ departamento: string }> };
export async function GET(request: NextRequest, context: Context) {
    const { departamento } = await context.params;
    return proxyPublicGet(request, `/api/public/contactos/departamento/${encodeURIComponent(departamento)}`);
}
