import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Services from "@/components/sections/Services";
import MainButton from "@/components/ui/MainButton";

export const metadata: Metadata = {
    title: "Servicios para vehículos industriales",
    description:
        "Mantenimiento, diagnosis y reparación de camiones, furgonetas y vehículos comerciales en Orihuela, Alicante.",
    alternates: { canonical: "/servicios" },
    openGraph: {
        title: "Servicios para vehículos industriales",
        description:
            "Mantenimiento, diagnosis y reparación de vehículos industriales en Orihuela, Alicante.",
        url: "/servicios",
    },
};

export default function ServicesPage() {
    return (
        <>
            <main>
                <section className="bg-black text-white">
                    <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[1560px] items-end px-6 pb-20 md:px-8 md:pb-24 lg:px-10 lg:pb-28 xl:px-12">
                        <div className="max-w-5xl animate-[textRiseAnimation_1.1s_ease-out_both]">
                            <p className="mb-7 text-sm uppercase tracking-[0.2em] text-white/60">
                                Servicios
                            </p>

                            <h1 className="font-title text-6xl leading-[0.95] md:text-8xl lg:text-[8rem]">
                                Preparados para
                                <br />
                                mantener tu trabajo
                                <br />
                                en marcha.
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                                Un servicio técnico orientado a camiones, furgonetas
                                y vehículos comerciales que no pueden detenerse.
                            </p>
                        </div>
                    </div>
                </section>

                <Services />

                <section className="bg-white text-black">
                    <div className="mx-auto grid max-w-[1560px] gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.2fr] lg:px-10 xl:px-12">
                        <h2 className="font-title text-5xl leading-tight md:text-6xl">
                            Atención clara,
                            <br />
                            trabajo preciso.
                        </h2>

                        <div className="max-w-2xl">
                            <p className="text-lg leading-8 text-neutral-600">
                                Cada intervención comienza por entender el estado y las
                                necesidades del vehículo. Nuestro objetivo es ofrecer una
                                solución rigurosa, con una comunicación directa durante todo
                                el proceso.
                            </p>

                            <div className="mt-10">
                                <MainButton href="tel:+34966744466">
                                    Consultar con el taller
                                </MainButton>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
