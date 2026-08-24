import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    connect-src 'self';
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
    },

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: cspHeader
                            .replace(/\s{2,}/g, " ")
                            .trim(),
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
                        value:
                            "camera=(), microphone=(), geolocation=()",
                    },
                ],
            },
        ];
    },

};

export default nextConfig;