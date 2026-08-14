import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {

    title:
        "Auto-Talleres Orihuela | Servicio Oficial Mercedes-Benz",

    description:
        "Auto-Talleres Orihuela S.L., Servicio Oficial Mercedes-Benz en Orihuela, Alicante. Mantenimiento, diagnosis y reparación de vehículos.",

    alternates: {
        canonical: "/",
    },

    openGraph: {

        title:
            "Auto-Talleres Orihuela | Servicio Oficial Mercedes-Benz",

        description:
            "Mantenimiento, diagnosis y reparación de vehículos en Auto-Talleres Orihuela, Orihuela, Alicante.",

        url: "/",

        type: "website",

    },

};

export default function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            <Services />

            <Features />

            <Contact />

            <Footer />
        </>
    );
}
