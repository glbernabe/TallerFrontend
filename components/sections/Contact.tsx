import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import MainButton from "@/components/ui/MainButton";

import {
    getOpeningHours,
} from "@/lib/opening-hours/openingHoursDependencies";

import {
    getSiteSettings,
} from "@/lib/site-settings/siteSettingsDependencies";

const FALLBACK_CONTACT = {
    phone: "+34966744466",
    email: "orihuela.ato@autotalleresorihuela.es",
    address: "Orihuela, Alicante",
    googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Auto-Talleres%20Orihuela%20S.L.%2C%20Orihuela%2C%20Alicante",
} as const;

const STRAPI_TIMEOUT_MS = 4_000;

function withTimeout<T>(
    operation: () => Promise<T>,
    timeoutMs: number
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error("Strapi request timed out"));
        }, timeoutMs);

        Promise.resolve()
            .then(operation)
            .then(
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

export default async function Contact() {
    const t = await getTranslations("Contact");

    // Cada consulta se resuelve de forma independiente.
    const [siteSettingsResult, openingHoursResult] =
        await Promise.allSettled([
            withTimeout(
                () => getSiteSettings.execute(),
                STRAPI_TIMEOUT_MS
            ),
            withTimeout(
                () => getOpeningHours.execute(),
                STRAPI_TIMEOUT_MS
            ),
        ]);

    const siteSettingsUnavailable =
        siteSettingsResult.status === "rejected";

    const openingHoursUnavailable =
        openingHoursResult.status === "rejected";

    const siteSettings =
        siteSettingsResult.status === "fulfilled"
            ? siteSettingsResult.value
            : null;

    const openingHours =
        openingHoursResult.status === "fulfilled"
            ? openingHoursResult.value
            : [];

    if (siteSettingsUnavailable) {
        console.error(
            "No se pudieron cargar los ajustes del sitio:",
            siteSettingsResult.reason
        );
    }

    if (openingHoursUnavailable) {
        console.error(
            "No se pudieron cargar los horarios del taller:",
            openingHoursResult.reason
        );
    }

    // Se conserva la información de contacto aunque falle Strapi.
    const phone =
        siteSettings?.phone || FALLBACK_CONTACT.phone;

    const email =
        siteSettings?.email || FALLBACK_CONTACT.email;

    const address =
        siteSettings?.address || FALLBACK_CONTACT.address;

    const googleMapsUrl =
        siteSettings?.googleMapsUrl ||
        FALLBACK_CONTACT.googleMapsUrl;

    const mapImage = "/content/images/maps.webp";

    // Evita dejar vacío el bloque de horarios si no hay datos.
    const showOpeningHoursFallback =
        openingHoursUnavailable || openingHours.length === 0;

    return (
        <Section
            className="
                bg-neutral-950
                py-32
                text-white
            "
        >
            <Container>
                <div
                    className="
                        grid
                        gap-16
                        lg:grid-cols-[1fr_1.2fr]
                        lg:items-center
                    "
                >
                    {/* INFORMACIÓN */}

                    <div>
                        <h2
                            className="
                                font-title
                                text-5xl
                                leading-tight
                                md:text-6xl
                            "
                        >
                            {t("title")}
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-xl
                                font-text
                                text-lg
                                leading-8
                                text-white/70
                            "
                        >
                            {t("description")}
                        </p>

                        {siteSettingsUnavailable && (
                            <p
                                role="status"
                                className="
                                    mt-4
                                    max-w-xl
                                    font-text
                                    text-sm
                                    leading-6
                                    text-white/60
                                "
                            >
                                {t("siteSettingsUnavailable")}
                            </p>
                        )}

                        {/* DATOS DE CONTACTO */}

                        <div className="mt-12 space-y-8">
                            {/* TELÉFONO */}

                            <div>
                                <h3 className="font-title text-xl">
                                    {t("phone")}
                                </h3>

                                <a
                                    href={`tel:${phone.replace(/\s+/g, "")}`}
                                    className="
                                        mt-2
                                        block
                                        font-text
                                        text-white/65
                                        transition-colors
                                        duration-200
                                        hover:text-white
                                    "
                                >
                                    {phone}
                                </a>
                            </div>

                            {/* CORREO */}

                            <div>
                                <h3 className="font-title text-xl">
                                    {t("email")}
                                </h3>

                                <a
                                    href={`mailto:${email}`}
                                    className="
                                        mt-2
                                        block
                                        font-text
                                        text-white/65
                                        transition-colors
                                        duration-200
                                        hover:text-white
                                    "
                                >
                                    {email}
                                </a>
                            </div>

                            {/* HORARIO */}

                            <div>
                                <h3 className="font-title text-xl">
                                    {t("openingHours")}
                                </h3>

                                <div
                                    className="
                                        mt-3
                                        space-y-3
                                        font-text
                                        text-white/65
                                    "
                                >
                                    {showOpeningHoursFallback ? (
                                        <p
                                            role="status"
                                            className="max-w-xl leading-7"
                                        >
                                            {t("openingHoursUnavailable")}
                                        </p>
                                    ) : (
                                        openingHours.map(
                                            (openingHour) => (
                                                <div
                                                    key={openingHour.id}
                                                    className="
                                                        flex
                                                        flex-col
                                                        gap-1
                                                        sm:flex-row
                                                        sm:items-baseline
                                                        sm:gap-4
                                                    "
                                                >
                                                    <span
                                                        className="
                                                            min-w-24
                                                            text-white/90
                                                        "
                                                    >
                                                        {t(
                                                            `days.${openingHour.day}`
                                                        )}
                                                    </span>

                                                    <span>
                                                        {formatOpeningHour(
                                                            openingHour,
                                                            t("closed")
                                                        )}
                                                    </span>
                                                </div>
                                            )
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* BOTÓN */}

                        <div className="mt-12">
                            <MainButton
                                href={`tel:${phone.replace(/\s+/g, "")}`}
                            >
                                {t("callButton")}
                            </MainButton>
                        </div>
                    </div>

                    {/* UBICACIÓN */}

                    <div
                        className="
                            relative
                            aspect-square
                            overflow-hidden
                            bg-white
                        "
                    >
                        {/* CAPA 1 — Fondo blanco */}

                        <div className="absolute inset-0 bg-white" />

                        {/* CAPA 2 — Imagen del mapa */}

                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("mapAriaLabel")}
                            className="
                                group
                                absolute
                                inset-0
                                block
                            "
                        >
                            <Image
                                src={mapImage}
                                alt={t("mapAlt")}
                                fill
                                sizes="
                                    (min-width: 1024px) 50vw,
                                    100vw
                                "
                                loading="eager"
                                quality={75}
                                className="
                                    object-cover
                                    grayscale
                                    contrast-[0.9]
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-[1.03]
                                    motion-reduce:transition-none
                                    motion-reduce:transform-none
                                "
                            />
                        </a>

                        {/* CAPA 3 — Contenido */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                z-10
                                flex
                                flex-col
                                justify-between
                                p-8
                                text-white
                                md:p-10
                                lg:p-12
                            "
                        >
                            {/* PARTE SUPERIOR */}

                            <div
                                className="
                                    max-w-[75%]
                                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                                "
                            >
                                <p
                                    className="
                                        font-text
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/80
                                        md:text-sm
                                    "
                                >
                                    {t("locationLabel")}
                                </p>

                                <h3
                                    className="
                                        mt-4
                                        font-title
                                        text-4xl
                                        leading-[0.95]
                                        tracking-[-0.02em]
                                        md:text-5xl
                                        lg:text-6xl
                                    "
                                >
                                    Orihuela,
                                    <br />
                                    Alicante
                                </h3>
                            </div>

                            {/* PARTE INFERIOR */}

                            <div
                                className="
                                    flex
                                    items-end
                                    justify-between
                                    gap-8
                                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                                "
                            >
                                <div className="max-w-md">
                                    <div
                                        className="
                                            mb-5
                                            h-px
                                            w-12
                                            bg-white/80
                                        "
                                    />

                                    <p
                                        className="
                                            font-text
                                            text-sm
                                            leading-6
                                            text-white/85
                                            md:text-base
                                            md:leading-7
                                        "
                                    >
                                        {address}
                                    </p>
                                </div>

                                <div
                                    className="
                                        pointer-events-auto
                                        shrink-0
                                    "
                                >
                                    <MainButton href={googleMapsUrl}>
                                        {t("directionsButton")}
                                    </MainButton>
                                </div>
                            </div>
                        </div>

                        {/* BORDE VISIBLE */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                z-20
                                border-2
                                border-white
                            "
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}

function formatOpeningHour(
    openingHour: {
        morningOpening: string | null;
        morningClosing: string | null;
        afternoonOpening: string | null;
        afternoonClosing: string | null;
        closedMorning: boolean;
        closedAfternoon: boolean;
        closedAllDay: boolean;
    },
    closedLabel: string
): string {
    if (openingHour.closedAllDay) {
        return closedLabel;
    }

    const periods: string[] = [];

    if (
        !openingHour.closedMorning &&
        openingHour.morningOpening &&
        openingHour.morningClosing
    ) {
        periods.push(
            `${openingHour.morningOpening} - ${openingHour.morningClosing}`
        );
    }

    if (
        !openingHour.closedAfternoon &&
        openingHour.afternoonOpening &&
        openingHour.afternoonClosing
    ) {
        periods.push(
            `${openingHour.afternoonOpening} - ${openingHour.afternoonClosing}`
        );
    }

    if (periods.length === 0) {
        return closedLabel;
    }

    return periods.join(" / ");
}