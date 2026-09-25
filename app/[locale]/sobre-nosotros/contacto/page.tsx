import Image from "next/image";
import type { Metadata } from "next";

import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ContactPeopleSection from "@/components/contact/ContactPeopleSection";

import {
    getActiveContacts,
    groupContactsByDepartment,
} from "@/lib/contact/contactDependencies";

export const metadata: Metadata = {
    title: "Contacto",
    description:
        "Contacta con Auto-Talleres Orihuela S.L. Conoce a nuestro equipo y encuentra los datos de contacto de los responsables de cada departamento.",
    alternates: {
        canonical: "/contacto",
    },
    openGraph: {
        title: "Contacto",
        description:
            "Conoce al equipo de Auto-Talleres Orihuela S.L. y contacta con los responsables de cada departamento.",
        url: "/contacto",
        type: "website",
    },
};

export default async function ContactPage() {
    const people =
        await getActiveContacts.execute();

    const departments =
        groupContactsByDepartment.execute(
            people
        );

    return (
        <main className="bg-black text-white">
            {/* HERO */}

            <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
                <Image
                    src="/content/images/Assistance_client.webp"
                    alt="Asistencia de vehículos"
                    fill
                    priority
                    sizes="100vw"
                    className="
                        object-cover
                        object-[65%_center]
                        sm:object-[60%_center]
                        md:object-center
                    "
                />

                <div className="absolute inset-0 bg-black/55" />

                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-1/2
                        bg-linear-to-t
                        from-black
                        to-transparent
                    "
                />

                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[calc(100vh-72px)]
                        items-end
                        md:items-center
                    "
                >
                    <div
                        className="
                            mx-auto
                            w-full
                            max-w-[1560px]
                            px-7
                            pt-24
                            pb-24
                            sm:px-8
                            sm:pt-28
                            sm:pb-24
                            md:px-8
                            md:py-0
                            lg:px-10
                            xl:px-12
                        "
                    >
                        <div
                            className="
                                max-w-4xl
                                animate-[textRiseAnimation_1.1s_ease-out_both]
                            "
                        >
                            <p
                                className="
                                    mb-6
                                    text-sm
                                    uppercase
                                    tracking-[0.2em]
                                    text-white/70
                                "
                            >
                                Contacto
                            </p>

                            <h1
                                className="
                                    font-title
                                    text-6xl
                                    leading-[0.95]
                                    md:text-8xl
                                    lg:text-[8rem]
                                "
                            >
                                Estamos aquí
                                <br />
                                para ayudarte.
                            </h1>

                            <p
                                className="
                                    mt-8
                                    max-w-2xl
                                    text-lg
                                    leading-8
                                    text-white/80
                                    md:text-xl
                                "
                            >
                                ¿Necesitas asistencia,
                                tienes alguna consulta
                                o quieres hablar con
                                nuestro equipo?
                                Ponte en contacto
                                directamente con
                                nosotros.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <MainButton href="tel:+34966744466">
                                    Llamar al taller
                                </MainButton>

                                <SecondaryButton
                                    href="mailto:orihuela.ato@autotalleresorihuela.es"
                                    className="
                                        border-white/40
                                        bg-white/10
                                        text-white
                                        backdrop-blur-sm
                                        hover:bg-white
                                        hover:text-black
                                    "
                                >
                                    Enviar un correo
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactPeopleSection
                groups={departments}
            />
        </main>
    );
}