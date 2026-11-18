import { NextRequest } from "next/server";
import { proxyAuthLogout } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
export function POST(request: NextRequest) { return proxyAuthLogout(request, "/api/admin/auth/logout"); }
