import "./globals.css";

import { mbCorpoText, mbCorpoTitle } from "@/fonts/fonts";

import GoogleProvider from "@/components/providers/GoogleProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <html
            lang="es"
            className={`${mbCorpoText.variable} ${mbCorpoTitle.variable}`}
        >

            <body>

                <GoogleProvider>

                    {children}

                </GoogleProvider>

            </body>

        </html>

    );

}