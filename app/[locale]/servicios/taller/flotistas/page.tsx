import type { Metadata } from "next";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import FleetCustomersForm from "@/components/services/FleetOperatorsForm";

import MainButton from "@/components/ui/MainButton";
import { getPathname, Link } from "@/i18n/navigation";

const serviceKeys = ["planning", "maintenance", "communication"] as const;

const DEFAULT_FLEET_EMAIL =
    process.env.FLEET_REQUEST_EMAIL?.trim() ||
    "orihuela.ato@autotalleresorihuela.es";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("FleetCustomersPage");
    const locale = await getLocale();
    const canonical = getPathname({
        locale,
        href: "/servicios/taller/flotistas",
    });

    const localizedPaths = {
        es: getPathname({ locale: "es", href: "/servicios/taller/flotistas" }),
        en: getPathname({ locale: "en", href: "/servicios/taller/flotistas" }),
        fr: getPathname({ locale: "fr", href: "/servicios/taller/flotistas" }),
        de: getPathname({ locale: "de", href: "/servicios/taller/flotistas" }),
    };

    const languages = Object.fromEntries(
        Object.entries(localizedPaths).filter(
            ([language]) => language !== locale
        )
    );

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
        alternates: { canonical, languages },
        openGraph: {
            title: t("metadata.openGraphTitle"),
            description: t("metadata.openGraphDescription"),
            url: canonical,
            type: "website",
            images: [
                {
                    url: "/content/images/background/Trucks_display.webp",
                    width: 1648,
                    height: 928,
                    alt: t("hero.imageAlt"),
                },
            ],
        },
    };
}

export default async function FleetCustomersPage() {
    const t = await getTranslations("FleetCustomersPage");

    return (
        <main className="bg-black text-white">
            <section className="relative isolate min-h-[72vh] overflow-hidden">
                <Image
                    src="/content/images/background/Trucks_display.webp"
                    alt={t("hero.imageAlt")}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 -z-0 bg-black/65" />
                <div className="absolute inset-x-0 bottom-0 z-0 h-2/3 bg-linear-to-t from-black via-black/55 to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-[1560px] items-end px-6 pb-20 pt-28 sm:px-8 md:pb-28 lg:px-10 xl:px-12">
                    <div className="max-w-5xl animate-[textRiseAnimation_1.1s_ease-out_both]">
                        <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.18em] text-white/70 md:text-sm">
                            <Link href="/servicios" className="transition-colors hover:text-white">
                                {t("hero.servicesLink")}
                            </Link>
                            <span aria-hidden="true">/</span>
                            <span>{t("hero.workshopLabel")}</span>
                            <span aria-hidden="true">/</span>
                            <span className="text-white">{t("hero.eyebrow")}</span>
                        </div>

                        <h1 className="font-title text-6xl leading-[0.92] tracking-[-0.03em] md:text-8xl lg:text-[8rem]">
                            {t("hero.titleLine1")}
                            <br />
                            {t("hero.titleLine2")}
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                            {t("hero.description")}
                        </p>

                        <div className="mt-10">
                            <MainButton href="tel:+34966744466">
                                {t("hero.callButton")}
                            </MainButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black">
                <div className="mx-auto grid w-full max-w-[1560px] gap-16 px-6 py-24 md:px-8 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 xl:px-12">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                            {t("introduction.eyebrow")}
                        </p>
                        <h2 className="mt-6 max-w-xl font-title text-5xl leading-[1.05] md:text-6xl">
                            {t("introduction.titleLine1")}
                            <br />
                            {t("introduction.titleLine2")}
                        </h2>
                    </div>

                    <div className="max-w-3xl text-lg leading-8 text-black/65 md:text-xl">
                        <p>{t("introduction.description")}</p>
                        <p className="mt-8">{t("introduction.detail")}</p>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-950 text-white">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 xl:px-12">
                    <div className="max-w-4xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                            {t("services.eyebrow")}
                        </p>
                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-7xl">
                            {t("services.titleLine1")}
                            <br />
                            {t("services.titleLine2")}
                        </h2>
                    </div>

                    <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
                        {serviceKeys.map((key, index) => (
                            <article key={key} className="bg-neutral-950 p-8 md:p-10">
                                <span className="font-title text-6xl text-white/20">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-10 font-title text-3xl leading-tight md:text-4xl">
                                    {t(`services.items.${key}.title`)}
                                </h3>
                                <p className="mt-5 text-base leading-7 text-white/55">
                                    {t(`services.items.${key}.description`)}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white text-black">
                <div className="mx-auto grid w-full max-w-[1560px] gap-14 px-6 py-24 md:px-8 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24 lg:px-10 xl:px-12">
                    {/* PRESENTACIÓN Y CONTACTO DIRECTO */}

                    <div className="flex flex-col items-start">
                        <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                            {t("contact.eyebrow")}
                        </p>

                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-6xl">
                            {t("contact.titleLine1")}
                            <br />
                            {t("contact.titleLine2")}
                        </h2>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
                            {t("contact.description")}
                        </p>

                        <div className="mt-9">
                            <MainButton href="tel:+34966744466">
                                {t("contact.callButton")}
                            </MainButton>
                        </div>

                        <p className="mt-6 max-w-md text-sm leading-6 text-black/50">
                            {t("form.directContactNote")}
                        </p>
                    </div>

                    {/* FORMULARIO PARA FLOTISTAS */}

                    <div
                        id="solicitud-flotas"
                        className="min-w-0 border border-neutral-200 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:p-8 md:p-10"
                    >
                        <div className="mb-8 border-b border-neutral-200 pb-7">
                            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                                {t("form.eyebrow")}
                            </p>

                            <h3 className="mt-3 font-title text-3xl leading-tight md:text-4xl">
                                {t("form.title")}
                            </h3>

                            <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                                {t("form.description")}
                            </p>
                        </div>

                        <FleetCustomersForm recipient={DEFAULT_FLEET_EMAIL} />
                    </div>
                </div>
            </section>
        </main>
    );
}
