import { NextRequest } from "next/server";
import { proxyAuthJson } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
export function POST(request: NextRequest) { return proxyAuthJson(request, "/api/admin/auth/login"); }
