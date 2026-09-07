import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: http://localhost:1337 https://cms.autotalleres-orihuela.es;
    font-src 'self';
    connect-src 'self' http://localhost:1337 https://cms.autotalleres-orihuela.es;
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
                protocol: "http",
                hostname: "127.0.0.1",
                port: "1337",
                pathname: "/uploads/**",
            },
            {
                protocol: "https",
                hostname: "cms.autotalleres-orihuela.es",
                pathname: "/uploads/**",
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