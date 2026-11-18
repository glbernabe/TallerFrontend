import { NextRequest } from "next/server";
import { proxyAdminGet, proxyAdminMutation } from "@/infrastructure/api/next/ApiRouteProxy";
export const dynamic = "force-dynamic";
export function GET(request: NextRequest) { return proxyAdminGet(request, "/api/admin/contactos"); }
export function POST(request: NextRequest) { return proxyAdminMutation(request, "/api/admin/contactos", "POST"); }
