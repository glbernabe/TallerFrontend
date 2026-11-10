import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const isDev = process.env.NODE_ENV === "development";
const publicApiUrl = new URL(
    process.env.API_PUBLIC_URL ?? "http://localhost:8000",
);

if (
    (publicApiUrl.protocol !== "http:" && publicApiUrl.protocol !== "https:") ||
    publicApiUrl.username ||
    publicApiUrl.password ||
    publicApiUrl.search ||
    publicApiUrl.hash ||
    publicApiUrl.pathname !== "/"
) {
    throw new Error("API_PUBLIC_URL debe contener únicamente el origen público de la API.");
}

const publicApiOrigin = publicApiUrl.origin;
const publicApiProtocol = publicApiUrl.protocol.slice(0, -1);

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: ${publicApiOrigin};
    font-src 'self';
    connect-src 'self' ${publicApiOrigin};
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'none';
    frame-ancestors 'none';
    media-src 'self';
    manifest-src 'self';
    worker-src 'self' blob:;
    ${isDev ? "" : "upgrade-insecure-requests;"}
`;

const nextConfig: NextConfig = {
    images: {
        qualities: [75, 100],
        dangerouslyAllowLocalIP: isDev,
        remotePatterns: [
            {
                protocol: publicApiProtocol,
                hostname: publicApiUrl.hostname,
                port: publicApiUrl.port,
                pathname: "/api/public/archivos-multimedia/**",
            },
        ],
    },

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: cspHeader.replace(/\s{2,}/g, " ").trim(),
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=()",
                    },
                ],
            },
        ];
    },
};

export default withNextIntl(nextConfig);
