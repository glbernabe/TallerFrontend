
import Image from "next/image";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { getPathname, Link } from "@/i18n/navigation";
import MainButton from "@/components/ui/MainButton";
import BudgetRequestForm from "@/components/services/BudgetRequestForm";
import { getSiteSettings } from "@/lib/site-settings/siteSettingsDependencies";

const DEFAULT_QUOTE_EMAIL = "orihuela.ato@autotalleresorihuela.es";
const SITE_SETTINGS_TIMEOUT_MS = 2500;

function withTimeout<T>(
    promise: Promise<T>,
    timeoutMs: number
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(
                new Error("Timeout while loading quote contact settings")
            );
        }, timeoutMs);

        promise.then(
            (value) => {
                clearTimeout(timeout);
                resolve(value);
            },
            (error: unknown) => {
                clearTimeout(timeout);
                reject(error);
            }
        );
    });
}

async function getQuoteRecipient(): Promise<string> {
    const configuredEmail =
        process.env.BUDGET_REQUEST_EMAIL?.trim();

    if (
        configuredEmail &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail)
    ) {
        return configuredEmail;
    }

    try {
        const settings = await withTimeout(
            getSiteSettings.execute(),
            SITE_SETTINGS_TIMEOUT_MS
        );

        const candidate =
            settings.posventaEmail?.trim() ||
            settings.email?.trim();

        if (
            candidate &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate)
        ) {
            return candidate;
        }
    } catch (error) {
        // La página sigue funcionando si Strapi no responde.
        console.error(
            "No se pudo cargar el correo de presupuestos desde Strapi:",
            error
        );
    }

    return DEFAULT_QUOTE_EMAIL;
}

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("BudgetPage");
    const locale = await getLocale();

    const canonical = getPathname({
        locale,
        href: "/servicios/taller/presupuestos",
    });

    const localizedPaths = {
        es: getPathname({
            locale: "es",
            href: "/servicios/taller/presupuestos",
        }),
        en: getPathname({
            locale: "en",
            href: "/servicios/taller/presupuestos",
        }),
        fr: getPathname({
            locale: "fr",
            href: "/servicios/taller/presupuestos",
        }),
        de: getPathname({
            locale: "de",
            href: "/servicios/taller/presupuestos",
        }),
    };

    const languages = Object.fromEntries(
        Object.entries(localizedPaths).filter(
            ([language]) => language !== locale
        )
    );

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
        alternates: {
            canonical,
            languages,
        },
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

export default async function BudgetPage() {
    const t = await getTranslations("BudgetPage");
    const quoteRecipient = await getQuoteRecipient();

    return (
        <main className="bg-black text-white">
            {/* HERO */}
            <section className="relative isolate min-h-[66vh] overflow-hidden md:min-h-[72vh]">
                <Image
                    src="/content/images/background/Trucks_display.webp"
                    alt={t("hero.imageAlt")}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 -z-0 bg-black/60" />

                <div className="absolute inset-x-0 bottom-0 z-0 h-2/3 bg-linear-to-t from-black via-black/45 to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-[66vh] w-full max-w-[1560px] items-end px-6 pb-20 pt-28 sm:px-8 md:min-h-[72vh] md:pb-28 lg:px-10 xl:px-12">
                    <div className="max-w-5xl animate-[textRiseAnimation_1.1s_ease-out_both]">
                        <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.18em] text-white/70 md:text-sm">
                            <Link
                                href="/servicios"
                                className="transition-colors hover:text-white"
                            >
                                {t("hero.servicesLink")}
                            </Link>

                            <span aria-hidden="true">/</span>
                            <span>{t("hero.workshopLabel")}</span>
                            <span aria-hidden="true">/</span>
                            <span className="text-white">
                                {t("hero.eyebrow")}
                            </span>
                        </div>

                        <h1 className="font-title text-6xl leading-[0.92] md:text-8xl lg:text-[7.5rem]">
                            {t("hero.titleLine1")}
                            <br />
                            {t("hero.titleLine2")}
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                            {t("hero.description")}
                        </p>

                        <p className="mt-7 text-sm font-medium uppercase tracking-[0.14em] text-white/85 md:text-base">
                            {t("hero.vehicleScope")}
                        </p>
                    </div>
                </div>
            </section>

            {/* EXPLICACIÓN Y FORMULARIO */}
            <section className="bg-white py-20 text-black md:py-28">
                <div className="mx-auto grid w-full max-w-[1560px] gap-14 px-6 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-10 xl:px-12">
                    <div className="flex flex-col justify-between gap-12">
                        <div className="max-w-xl">
                            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                                {t("intro.eyebrow")}
                            </p>

                            <h2 className="mt-5 font-title text-4xl leading-tight md:text-5xl lg:text-6xl">
                                {t("intro.title")}
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-neutral-600">
                                {t("intro.description")}
                            </p>
                        </div>

                        <div className="space-y-7 border-t border-neutral-200 pt-7">
                            {(["vehicle", "work", "contact"] as const).map(
                                (step, index) => (
                                    <div key={step} className="flex gap-5">
                                        <span className="font-title text-2xl text-[#0078d6]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div>
                                            <h3 className="font-title text-xl">
                                                {t(`intro.steps.${step}.title`)}
                                            </h3>

                                            <p className="mt-1 max-w-sm leading-6 text-neutral-600">
                                                {t(`intro.steps.${step}.description`)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="border-l-2 border-[#0078d6] pl-5">
                            <h3 className="font-title text-xl">
                                {t("intro.contactTitle")}
                            </h3>

                            <p className="mt-2 max-w-sm leading-6 text-neutral-600">
                                {t("intro.contactDescription")}
                            </p>

                            <div className="mt-5">
                                <MainButton href="tel:+34966744466">
                                    {t("intro.callButton")}
                                </MainButton>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-0 border border-neutral-200 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:p-8 md:p-10">
                        <div className="mb-8 border-b border-neutral-200 pb-7">
                            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                                {t("form.eyebrow")}
                            </p>

                            <h2 className="mt-3 font-title text-3xl leading-tight md:text-4xl">
                                {t("form.title")}
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                                {t("form.description")}
                            </p>
                        </div>

                        <BudgetRequestForm recipient={quoteRecipient} />
                    </div>
                </div>
            </section>
        </main>
    );
}
