import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Breadcrumb from "@/components/navigation/Breadcrumb";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

const specializations = [
    {
        key: "vans",
        image: "/content/images/history/Vans.svg",
    },
    {
        key: "truck",
        image: "/content/images/history/Daimler-truck.svg",
    },
    {
        key: "buses",
        image: "/content/images/history/Bus.svg",
    },
    {
        key: "fuso",
        image: "/content/images/history/MitsubishiFUSO.svg",
    },
];

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "History",
    });

    const historyPaths: Record<string, string> = {
        es: "/es/sobre-nosotros/historia",
        en: "/en/about-us/history",
        fr: "/fr/a-propos/histoire",
        de: "/de/ueber-uns/geschichte",
    };

    const pathname =
        historyPaths[locale] ??
        historyPaths.es;

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
        alternates: {
            canonical: pathname,
        },
        openGraph: {
            title: t("metadata.openGraph.title"),
            description: t("metadata.openGraph.description"),
            url: pathname,
            type: "website",
        },
    };
}

export default async function HistoryPage() {
    const t = await getTranslations("History");

    return (
        <main className="bg-black text-white">
            {/* HERO */}

            <section className="flex min-h-[calc(100vh-72px)] items-center bg-black">
                <div className="mx-auto w-full max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 xl:px-12">
                    <div className="max-w-6xl">
                        <div className="mb-10">
                            <Breadcrumb
                                items={[
                                    {
                                        label: t("breadcrumb.home"),
                                        href: "/",
                                    },
                                    {
                                        label: t(
                                            "breadcrumb.aboutUs"
                                        ),
                                        href: "/sobre-nosotros",
                                    },
                                    {
                                        label: t(
                                            "breadcrumb.history"
                                        ),
                                    },
                                ]}
                                color="white"
                            />
                        </div>

                        <p className="mb-8 text-sm uppercase tracking-[0.2em] text-white/50">
                            {t("hero.eyebrow")}
                        </p>

                        <h1 className="font-title text-6xl leading-[0.92] tracking-[-0.03em] md:text-8xl lg:text-[9rem]">
                            {t("hero.titleLine1")}
                            <br />
                            {t("hero.titleLine2")}
                            <br />
                            {t("hero.titleLine3")}
                        </h1>

                        <p className="mt-10 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
                            {t("hero.description")}
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
                                {t("passion.eyebrow")}
                            </p>

                            <h2 className="mt-6 max-w-lg font-title text-5xl leading-[1.05] md:text-6xl">
                                {t("passion.titleLine1")}
                                <br />
                                {t("passion.titleLine2")}
                            </h2>
                        </div>

                        <div className="max-w-3xl text-lg leading-8 text-black/65 md:text-xl">
                            <p>
                                {t("passion.paragraph1")}
                            </p>

                            <p className="mt-8">
                                {t("passion.paragraph2")}
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
                            {t("roots.eyebrow")}
                        </p>

                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-7xl">
                            {t("roots.titleLine1")}
                            <br />
                            {t("roots.titleLine2")}
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
                                {t("roots.subtitle")}
                            </h3>

                            <p className="mt-6">
                                {t("roots.paragraph1")}
                            </p>

                            <p className="mt-8">
                                {t("roots.paragraph2")}
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
                                {t("facilities.eyebrow")}
                            </p>

                            <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-6xl">
                                {t("facilities.titleLine1")}
                                <br />
                                {t("facilities.titleLine2")}
                            </h2>
                        </div>

                        <div className="max-w-3xl text-lg leading-8 text-black/65 md:text-xl">
                            <p>
                                {t("facilities.paragraph1")}
                            </p>

                            <p className="mt-8">
                                {t("facilities.paragraph2")}
                            </p>

                            <p className="mt-8">
                                {t("facilities.paragraph3")}
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
                            {t("specialization.eyebrow")}
                        </p>

                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-7xl">
                            {t("specialization.titleLine1")}
                            <br />
                            {t("specialization.titleLine2")}
                        </h2>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                            {t("specialization.description")}
                        </p>
                    </div>

                    <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
                        {specializations.map((item) => (
                            <article
                                key={item.key}
                                className="bg-neutral-950 p-8 md:p-10"
                            >
                                <div className="relative h-16 w-24">
                                    <Image
                                        src={item.image}
                                        alt={t(
                                            `specializations.${item.key}.alt`
                                        )}
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
                                    {t(
                                        `specializations.${item.key}.title`
                                    )}
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
                                    {t(
                                        `specializations.${item.key}.description`
                                    )}
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
                            {t("pillars.eyebrow")}
                        </p>

                        <h2 className="mt-6 font-title text-5xl leading-[1.05] md:text-7xl">
                            {t("pillars.titleLine1")}
                            <br />
                            {t("pillars.titleLine2")}
                        </h2>
                    </div>

                    <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-black/10 bg-black/10 md:grid-cols-2">
                        <article className="bg-white p-8 md:p-12">
                            <span className="font-title text-6xl text-black/15">
                                01
                            </span>

                            <h3 className="mt-10 font-title text-3xl md:text-4xl">
                                {t("pillars.customers.title")}
                            </h3>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
                                {t(
                                    "pillars.customers.description"
                                )}
                            </p>
                        </article>

                        <article className="bg-white p-8 md:p-12">
                            <span className="font-title text-6xl text-black/15">
                                02
                            </span>

                            <h3 className="mt-10 font-title text-3xl md:text-4xl">
                                {t("pillars.team.title")}
                            </h3>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
                                {t(
                                    "pillars.team.description"
                                )}
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
                            {t("closing.eyebrow")}
                        </p>

                        <h2 className="mt-8 font-title text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
                            {t("closing.titleLine1")}
                            <br />
                            {t("closing.titleLine2")}
                            <br />
                            {t("closing.titleLine3")}
                        </h2>
                    </div>
                </div>
            </section>
        </main>
    );
}