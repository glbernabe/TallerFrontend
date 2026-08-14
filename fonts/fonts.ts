import localFont from "next/font/local";

export const mbCorpoText = localFont({
    src: [
        {
            path: "./daimler/CorporateSDemi.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-mb-text",
});

export const mbCorpoTitle = localFont({
    src: [
        {
            path: "./daimler/CorporateA-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-mb-title",
});