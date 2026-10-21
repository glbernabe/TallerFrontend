"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import MainButton from "@/components/ui/MainButton";

type Props = {
    recipient: string;
};

const VEHICLE_TYPES = [
    "vans",
    "trucks",
    "buses",
    "fuso",
    "other",
] as const;

const inputClassName = `
    mt-2
    block
    min-h-12
    w-full
    rounded-sm
    border
    border-neutral-300
    bg-white
    px-4
    py-3
    font-text
    text-base
    text-black
    outline-none
    transition-colors
    placeholder:text-neutral-400
    focus:border-[#0078d6]
    focus:ring-2
    focus:ring-[#0078d6]/15
`;

const labelClassName =
    "block text-sm font-medium text-neutral-800";

export default function FleetOperatorsForm({
    recipient,
}: Props) {
    const t = useTranslations("FleetCustomersPage");

    const [vehicleError, setVehicleError] = useState(false);
    const [emailNotice, setEmailNotice] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const read = (name: string) =>
            String(formData.get(name) ?? "").trim();

        const selectedVehicles = formData
            .getAll("vehicleTypes")
            .map(String)
            .filter(
                (value): value is (typeof VEHICLE_TYPES)[number] =>
                    VEHICLE_TYPES.includes(
                        value as (typeof VEHICLE_TYPES)[number]
                    )
            );

        if (selectedVehicles.length === 0) {
            setVehicleError(true);
            return;
        }

        setVehicleError(false);

        const vehicleLabels: Record<
            (typeof VEHICLE_TYPES)[number],
            string
        > = {
            vans: t("form.vehicleTypes.vans"),
            trucks: t("form.vehicleTypes.trucks"),
            buses: t("form.vehicleTypes.buses"),
            fuso: t("form.vehicleTypes.fuso"),
            other: t("form.vehicleTypes.other"),
        };

        const serviceType = read("serviceType");
        const serviceLabels = {
            maintenance: t("form.serviceTypes.maintenance"),
            diagnosisRepair: t("form.serviceTypes.diagnosisRepair"),
            spareParts: t("form.serviceTypes.spareParts"),
            fleetSupport: t("form.serviceTypes.fleetSupport"),
            other: t("form.serviceTypes.other"),
        };

        const rows: Array<[string, string]> = [
            [t("form.emailFields.company"), read("company")],
            [t("form.emailFields.taxId"), read("taxId")],
            [t("form.emailFields.contactName"), read("contactName")],
            [t("form.emailFields.email"), read("email")],
            [t("form.emailFields.phone"), read("phone")],
            [t("form.emailFields.fleetSize"), read("fleetSize")],
            [
                t("form.emailFields.vehicleTypes"),
                selectedVehicles.map((vehicle) => vehicleLabels[vehicle]).join(", "),
            ],
            [
                t("form.emailFields.serviceType"),
                serviceLabels[serviceType as keyof typeof serviceLabels] ??
                    t("form.serviceTypes.other"),
            ],
            [t("form.emailFields.details"), read("details")],
            [
                t("form.emailFields.privacyAccepted"),
                t("form.emailFields.yes"),
            ],
        ];

        const subject =
            `${t("form.emailSubject")} — ${read("company")}`;

        const body = [
            t("form.emailBodyIntro"),
            "",
            ...rows
                .filter(([, value]) => value.length > 0)
                .map(([label, value]) => `${label}: ${value}`),
        ].join("\n");

        const mailto =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        setEmailNotice(true);
        window.location.href = mailto;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <fieldset className="space-y-5">
                <legend className="font-title text-2xl">
                    {t("form.sections.company")}
                </legend>

                <div>
                    <label className={labelClassName} htmlFor="fleet-company">
                        {t("form.fields.company")} *
                    </label>

                    <input
                        id="fleet-company"
                        name="company"
                        autoComplete="organization"
                        maxLength={160}
                        className={inputClassName}
                        required
                    />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label className={labelClassName} htmlFor="fleet-tax-id">
                            {t("form.fields.taxId")}
                        </label>

                        <input
                            id="fleet-tax-id"
                            name="taxId"
                            autoComplete="off"
                            maxLength={20}
                            className={inputClassName}
                        />
                    </div>

                    <div>
                        <label className={labelClassName} htmlFor="fleet-size">
                            {t("form.fields.fleetSize")} *
                        </label>

                        <input
                            id="fleet-size"
                            name="fleetSize"
                            type="number"
                            min={1}
                            max={100000}
                            className={inputClassName}
                            required
                        />
                    </div>
                </div>

                <div>
                    <span className={labelClassName}>
                        {t("form.fields.vehicleTypes")} *
                    </span>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {VEHICLE_TYPES.map((vehicle) => (
                            <label
                                key={vehicle}
                                className="flex items-center gap-3 text-sm text-neutral-700"
                            >
                                <input
                                    type="checkbox"
                                    name="vehicleTypes"
                                    value={vehicle}
                                    className="size-4 shrink-0 accent-[#0078d6]"
                                    onChange={() => setVehicleError(false)}
                                />

                                {t(`form.vehicleTypes.${vehicle}`)}
                            </label>
                        ))}
                    </div>

                    {vehicleError && (
                        <p role="alert" className="mt-3 text-sm text-red-700">
                            {t("form.vehicleTypesRequired")}
                        </p>
                    )}
                </div>
            </fieldset>

            <fieldset className="space-y-5 border-t border-neutral-200 pt-8">
                <legend className="font-title text-2xl">
                    {t("form.sections.needs")}
                </legend>

                <div>
                    <label className={labelClassName} htmlFor="fleet-service-type">
                        {t("form.fields.serviceType")} *
                    </label>

                    <select
                        id="fleet-service-type"
                        name="serviceType"
                        defaultValue=""
                        className={inputClassName}
                        required
                    >
                        <option value="" disabled>
                            {t("form.fields.serviceTypePlaceholder")}
                        </option>

                        <option value="maintenance">
                            {t("form.serviceTypes.maintenance")}
                        </option>

                        <option value="diagnosisRepair">
                            {t("form.serviceTypes.diagnosisRepair")}
                        </option>

                        <option value="spareParts">
                            {t("form.serviceTypes.spareParts")}
                        </option>

                        <option value="fleetSupport">
                            {t("form.serviceTypes.fleetSupport")}
                        </option>

                        <option value="other">
                            {t("form.serviceTypes.other")}
                        </option>
                    </select>
                </div>

                <div>
                    <label className={labelClassName} htmlFor="fleet-details">
                        {t("form.fields.details")}
                    </label>

                    <textarea
                        id="fleet-details"
                        name="details"
                        rows={4}
                        maxLength={4000}
                        className={`${inputClassName} resize-y`}
                        placeholder={t("form.fields.detailsPlaceholder")}
                    />
                </div>
            </fieldset>

            <fieldset className="space-y-5 border-t border-neutral-200 pt-8">
                <legend className="font-title text-2xl">
                    {t("form.sections.contact")}
                </legend>

                <div>
                    <label className={labelClassName} htmlFor="fleet-contact-name">
                        {t("form.fields.contactName")} *
                    </label>

                    <input
                        id="fleet-contact-name"
                        name="contactName"
                        autoComplete="name"
                        maxLength={120}
                        className={inputClassName}
                        required
                    />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label className={labelClassName} htmlFor="fleet-email">
                            {t("form.fields.email")} *
                        </label>

                        <input
                            id="fleet-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            maxLength={254}
                            className={inputClassName}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClassName} htmlFor="fleet-phone">
                            {t("form.fields.phone")} *
                        </label>

                        <input
                            id="fleet-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            maxLength={40}
                            className={inputClassName}
                            required
                        />
                    </div>
                </div>
            </fieldset>

            <div className="border-t border-neutral-200 pt-7">
                <div className="flex items-start gap-3">
                    <input
                        id="fleet-privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="mt-1 size-4 shrink-0 accent-[#0078d6]"
                    />

                    <label
                        htmlFor="fleet-privacy"
                        className="text-sm leading-6 text-neutral-600"
                    >
                        {t("form.fields.privacyPrefix")}{" "}
                        <Link
                            href="/privacidad"
                            className="underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-black"
                        >
                            {t("form.fields.privacyLink")}
                        </Link>
                        {t("form.fields.privacySuffix")}
                    </label>
                </div>

                <p className="mt-5 text-sm leading-6 text-neutral-500">
                    {t("form.emailNotice")}
                </p>

                <div className="mt-7 flex flex-col items-start gap-4">
                    <MainButton type="submit" className="w-full sm:w-auto">
                        {t("form.submit")}
                    </MainButton>

                    {emailNotice && (
                        <p role="status" className="text-sm leading-6 text-neutral-600">
                            {t("form.emailClientNotice")}
                        </p>
                    )}

                    <p className="text-xs leading-5 text-neutral-500">
                        {t("form.requiredNote")}
                    </p>
                </div>
            </div>
        </form>
    );
}