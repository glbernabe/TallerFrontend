import { NextRequest } from "next/server";
import { proxyPublicGet } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ slug: string }> };
export async function GET(request: NextRequest, context: Context) {
    const { slug } = await context.params;
    return proxyPublicGet(request, `/api/public/noticias/${encodeURIComponent(slug)}`);
}
