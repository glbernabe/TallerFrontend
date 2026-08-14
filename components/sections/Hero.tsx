import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import MainButton from "@/components/ui/MainButton";

export default function Hero() {
    return (
        <Section className="relative h-screen min-h-[700px] overflow-hidden">

            {/* Fondo */}
            <div className="absolute inset-0">

                <Image
                    src="/content/images/background/Mercedes_Benz_Pattern.webp"
                    alt="Patrón Mercedes-Benz"
                    fill
                    priority
                    sizes="100vw"
                    quality={75}
                    className="object-cover object-center"
                />

                {/* Oscurecer ligeramente */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Degradado lateral */}
                <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

                {/* Degradado inferior */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />

            </div>

            {/* Contenido */}
            <Container className="relative z-10 flex h-full">

                <div
                    className="
                        flex
                        max-w-[820px]
                        flex-col
                        justify-start

                        pt-[22vh]

                        sm:pt-[21vh]
                        md:pt-[20vh]
                        lg:pt-[19vh]
                        xl:pt-[18vh]
                        2xl:pt-[17vh]
                    "
                >

                    <h1
                        className="
                            font-title
                            text-white
                            tracking-[-0.02em]

                            text-[2.3rem]
                            leading-[1.05]

                            sm:text-[3rem]
                            md:text-[3.8rem]
                            lg:text-[4.5rem]
                            xl:text-[5rem]
                            2xl:text-[5.6rem]
                        "
                    >
                        Vehículos industriales
                        <br />
                        preparados para seguir
                        <br />
                        trabajando
                    </h1>

                    <p
                        className="
                            mt-6
                            max-w-[680px]

                            text-base
                            leading-relaxed
                            text-white/90

                            sm:text-lg
                            md:text-xl
                            xl:text-2xl
                        "
                    >
                        Mantenimiento, diagnosis y reparación de camiones,
                        furgonetas y vehículos comerciales en Orihuela.
                    </p>

                    <div className="mt-10">

                        <MainButton href="tel:+34966744466">
                            Llamar al taller
                        </MainButton>

                    </div>

                </div>

            </Container>

        </Section>
    );
}