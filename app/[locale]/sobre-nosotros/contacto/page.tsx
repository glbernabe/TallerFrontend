import Image from "next/image";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ContactPeopleSection from "@/components/contact/ContactPeopleSection";

import {
    getActiveContacts,
    groupContactsByDepartment,
} from "@/lib/contact/contactDependencies";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("ContactPage");
    const locale = await getLocale();
    const canonical = `/${locale}/contacto`;

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
        alternates: {
            canonical,
        },
        openGraph: {
            title: t("metadata.openGraphTitle"),
            description: t("metadata.openGraphDescription"),
            url: canonical,
            type: "website",
        },
    };
}

export default async function ContactPage() {
    const t = await getTranslations("ContactPage");

    const people = await getActiveContacts.execute();

    const departments = groupContactsByDepartment.execute(
        people
    );

    return (
        <main className="bg-black text-white">

            {/* HERO */}

            <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
                <Image
                    src="/content/images/Assistance_client.webp"
                    alt={t("hero.imageAlt")}
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
                                {t("hero.eyebrow")}
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
                                {t("hero.titleLine1")}
                                <br />
                                {t("hero.titleLine2")}
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
                                {t("hero.description")}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <MainButton href="tel:+34966744466">
                                    {t("hero.callButton")}
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
                                    {t("hero.emailButton")}
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactPeopleSection groups={departments} />
        </main>
    );
}