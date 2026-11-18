import { NextRequest } from "next/server";
import { proxyPublicGet } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
export function GET(request: NextRequest) { return proxyPublicGet(request, "/api/public/noticias"); }
