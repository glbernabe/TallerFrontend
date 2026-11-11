import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";
import { getPathname } from "@/i18n/navigation";



export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("HomeMetadata");
    const locale = await getLocale();
    const canonical = getPathname({ locale, href: "/" });

    return {
        title: t("title"),
        description: t("description"),
        alternates: { canonical },
        openGraph: {
            title: t("openGraphTitle"),
            description: t("openGraphDescription"),
            url: canonical,
            type: "website",
        },
    };
}

export default async function Home() {
    return (
        <>

            
            <Hero />


            <Services />

            <Features />

            <Contact />

        </>
    );
}
