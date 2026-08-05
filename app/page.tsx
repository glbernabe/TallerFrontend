import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";

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
