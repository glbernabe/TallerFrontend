import type { Metadata } from "next";
import Image from "next/image";

import Breadcrumb from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
    title: "Sobre Nosotros | Auto-Talleres Orihuela",
    description:
        "Conoce la historia, experiencia y especialización de Auto-Talleres Orihuela S.L. en el servicio de posventa y recambios originales para vehículos industriales.",
    alternates: {
        canonical: "/about-us/historia",
    },
    openGraph: {
        title: "Sobre Nosotros | Auto-Talleres Orihuela",
        description:
            "Conoce la trayectoria y especialización de Auto-Talleres Orihuela S.L.",
        url: "/about-us/historia",
        type: "website",
    },
};

const specializations = [
    {
        image: "/content/images/history/vans.svg",
        alt: "Mercedes-Benz Vans",
        title: "Mercedes-Benz Vans",
        description:
            "Mantenimiento integral y recambio original para furgonetas de combustión como Vito, Sprinter y Citan.",
    },
    {
        image: "/content/images/history/truck.svg",
        alt: "Daimler Truck España",
        title: "Daimler Truck España",
        description:
            "Asistencia especializada y repuestos oficiales para la gama de camiones Actros, Arocs, Atego y Unimog.",
    },
    {
        image: "/content/images/history/bus.svg",
        alt: "Daimler Buses",
        title: "Daimler Buses",
        description:
            "Soporte en taller y piezas originales para autobuses y autocares Setra y Mercedes-Benz.",
    },
    {
        image: "/content/images/history/fuso.svg",
        alt: "FUSO Trucks",
        title: "FUSO Trucks",
        description:
            "Servicio técnico oficial y recambios para la gama de camiones compactos FUSO Canter.",
    },
];

export default function HistoryPage() {
    return (
        <main className="bg-black text-white">
            {/* HERO */}
            <section className="flex min-h-[calc(100vh-72px)] items-center bg-black">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
                    <div className="max-w-6xl">
                        <div className="mb-10">
                            <Breadcrumb
                                items={[
                                    { label: "Inicio", href: "/" },
                                    { label: "Nosotros", href: "/about-us" },
                                    { label: "Historia" },
                                ]}
                                color="white"
                            />
                        </div>

                        <p className="mb-8 text-sm uppercase tracking-[0.2em] text-white/50">
                            Sobre nosotros
                        </p>

                        <h1 className="font-title text-6xl leading-[0.92] tracking-[-0.03em] md:text-8xl lg:text-[9rem]">
                            Más de cuatro décadas
                            <br />
                            al servicio del
                            <br />
                            transporte.
                        </h1>

                        <p className="mt-10 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                            Nuestra pasión en cada kilómetro. En Auto Talleres
                            Orihuela conocemos de primera mano lo que significa
                            el valor de una herramienta de trabajo.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRODUCCIÓN */}
            <section className="bg-white text-black">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                                Nuestra pasión
                            </p>

                            <h2 className="mt-6 max-w-lg font-title text-5xl leading-[1.05] md:text-6xl">
                                Un punto de apoyo para quienes mantienen el país
                                en movimiento.
                            </h2>
                        </div>

                        <div className="max-w-3xl text-lg leading-8 text-black/65 md:text-xl">
                            <p>
                                En Auto Talleres Orihuela, S.L. sabemos lo que
                                significa depender de un vehículo para trabajar.
                                Somos el punto de apoyo de cientos de
                                transportistas, empresas de logística y
                                autónomos que necesitan mantener sus vehículos
                                en condiciones óptimas.
                            </p>

                            <p className="mt-8">
                                Esa responsabilidad es la que nos motiva a
                                levantar la persiana cada mañana con el mismo
                                compromiso del primer día.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RAÍCES */}
            <section className="bg-neutral-950 text-white">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
                    <div className="max-w-5xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                            Nuestras raíces
                        </p>

                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-7xl">
                            Pasión y tradición
                            <br />
                            familiar.
                        </h2>
                    </div>

                    <div className="mt-20 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        <div>
                            <span className="font-title text-7xl text-white/20 md:text-8xl">
                                01
                            </span>
                        </div>

                        <div className="max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                            <h3 className="font-title text-3xl leading-tight text-white md:text-4xl">
                                El comienzo de un proyecto familiar.
                            </h3>

                            <p className="mt-6">
                                Nuestra historia comenzó de la mano de Francisco
                                Parres Sánchez, quien fundó este proyecto con una
                                visión muy clara: ofrecer a la comarca de la Vega
                                Baja un servicio técnico de reparación y
                                mantenimiento de vehículos industriales
                                caracterizado por la honestidad, la precisión y
                                la máxima cercanía.
                            </p>

                            <p className="mt-8">
                                Lo que empezó como un taller técnico familiar
                                ha evolucionado, con el paso de los años, hasta
                                consolidarse en un referente de la posventa en
                                nuestra comarca, manteniendo intactos los
                                valores de dedicación y calidad técnica que nos
                                vieron nacer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTALACIONES */}
            <section className="bg-white text-black">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                                Nuestras instalaciones
                            </p>

                            <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-6xl">
                                Instalaciones de vanguardia al servicio de tu
                                flota.
                            </h2>
                        </div>

                        <div className="max-w-3xl text-lg leading-8 text-black/65 md:text-xl">
                            <p>
                                Ubicados en un enclave estratégico, en la Ctra.
                                Murcia-Alicante, km 28, Orihuela, contamos con
                                instalaciones totalmente equipadas para dar
                                respuesta inmediata a las necesidades de
                                nuestros clientes.
                            </p>

                            <p className="mt-8">
                                Nuestro trabajo abarca las necesidades
                                mecánicas, electromecánicas, de frenado y de
                                mantenimiento preventivo de vehículos
                                comerciales y pesados.
                            </p>

                            <p className="mt-8">
                                Cuidamos tu vehículo para que tú solo tengas
                                que preocuparte de tu ruta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESPECIALIZACIÓN */}
            <section className="bg-neutral-950 text-white">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
                    <div className="max-w-5xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                            Posventa y recambio original
                        </p>

                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-7xl">
                            Especialistas en lo que
                            <br />
                            mejor sabemos hacer.
                        </h2>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                            Nos enfocamos al 100 % en el servicio técnico de
                            posventa y la venta de recambios originales,
                            respaldados por los máximos estándares de calidad
                            del sector.
                        </p>
                    </div>

                    <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
                        {specializations.map((item) => (
                            <article
                                key={item.title}
                                className="bg-neutral-950 p-8 md:p-10"
                            >
                                <div className="relative h-16 w-24">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="96px"
                                        className="object-contain object-left"
                                    />
                                </div>

                                <h3
                                    className="
                                        mt-8
                                        font-title
                                        text-3xl
                                        leading-tight
                                        md:text-4xl
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        max-w-xl
                                        text-base
                                        leading-7
                                        text-white/55
                                    "
                                >
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOS PILARES */}
            <section className="bg-white text-black">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
                    <div className="max-w-5xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                            Nuestros pilares
                        </p>

                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-7xl">
                            Tú y nuestro
                            <br />
                            equipo.
                        </h2>
                    </div>

                    <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-black/10 bg-black/10 md:grid-cols-2">
                        <article className="bg-white p-8 md:p-12">
                            <span className="font-title text-6xl text-black/15">
                                01
                            </span>

                            <h3 className="mt-10 font-title text-3xl md:text-4xl">
                                Nuestros clientes
                            </h3>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
                                Transportistas y empresas que confían en
                                nosotros para mantener sus herramientas de
                                trabajo en perfecto estado.
                            </p>
                        </article>

                        <article className="bg-white p-8 md:p-12">
                            <span className="font-title text-6xl text-black/15">
                                02
                            </span>

                            <h3 className="mt-10 font-title text-3xl md:text-4xl">
                                Nuestro equipo humano
                            </h3>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
                                Profesionales apasionados, cualificados y
                                cercanos, cuya experiencia técnica es la
                                garantía de que tu vehículo está en las mejores
                                manos.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* CIERRE */}
            <section className="bg-black text-white">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-32 md:px-8 md:py-40 lg:px-10 lg:py-48 xl:px-12">
                    <div className="max-w-6xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                            Auto-Talleres Orihuela
                        </p>

                        <h2 className="mt-8 font-title text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
                            Gracias por confiar
                            <br />
                            en nosotros.
                            <br />
                            Seguimos rodando juntos.
                        </h2>
                    </div>
                </div>
            </section>
        </main>
    );
}
