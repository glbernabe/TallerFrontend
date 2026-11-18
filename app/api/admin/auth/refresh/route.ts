import { NextRequest } from "next/server";
import { proxyAuthRefresh } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
export function POST(request: NextRequest) { return proxyAuthRefresh(request, "/api/admin/auth/refresh"); }
