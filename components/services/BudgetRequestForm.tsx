
"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import MainButton from "@/components/ui/MainButton";

type Props = {
    recipient: string;
};

type VehicleType = "van" | "truck" | "bus" | "fuso" | "other";
type OperationType = "maintenance" | "repair" | "diagnosis" | "other";

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

const labelClassName = "block text-sm font-medium text-neutral-800";

export default function BudgetRequestForm({ recipient }: Props) {
    const t = useTranslations("BudgetPage");
    const [emailNotice, setEmailNotice] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const read = (name: string) =>
            String(formData.get(name) ?? "").trim();

        const vehicleType = read("vehicleType") as VehicleType;
        const operationType = read("operationType") as OperationType;

        const vehicleLabels: Record<VehicleType, string> = {
            van: t("form.vehicleTypes.van"),
            truck: t("form.vehicleTypes.truck"),
            bus: t("form.vehicleTypes.bus"),
            fuso: t("form.vehicleTypes.fuso"),
            other: t("form.vehicleTypes.other"),
        };

        const operationLabels: Record<OperationType, string> = {
            maintenance: t("form.operationTypes.maintenance"),
            repair: t("form.operationTypes.repair"),
            diagnosis: t("form.operationTypes.diagnosis"),
            other: t("form.operationTypes.other"),
        };

        const subject =
            `${t("form.emailSubject")} — ${vehicleLabels[vehicleType]}`;

        const rows: Array<[string, string]> = [
            [t("form.emailFields.vehicleType"), vehicleLabels[vehicleType]],
            [t("form.emailFields.makeModel"), read("makeModel")],
            [t("form.emailFields.registration"), read("registration")],
            [t("form.emailFields.mileage"), read("mileage")],
            [t("form.emailFields.operationType"), operationLabels[operationType]],
            [t("form.emailFields.details"), read("details")],
            [t("form.emailFields.name"), read("name")],
            [t("form.emailFields.company"), read("company")],
            [t("form.emailFields.phone"), read("phone")],
            [t("form.emailFields.email"), read("email")],
        ];

        const body = [
            t("form.emailBodyIntro"),
            "",
            ...rows
                .filter(([, value]) => value.length > 0)
                .map(([label, value]) => `${label}: ${value}`),
        ].join("\n");

        const mailto =
            `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        setEmailNotice(true);
        window.location.href = mailto;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-9">
            <fieldset className="space-y-5">
                <legend className="font-title text-2xl">
                    {t("form.sections.vehicle")}
                </legend>

                <div>
                    <label
                        className={labelClassName}
                        htmlFor="budget-vehicle-type"
                    >
                        {t("form.fields.vehicleType")} <span aria-hidden="true">*</span>
                    </label>

                    <select
                        id="budget-vehicle-type"
                        name="vehicleType"
                        className={inputClassName}
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            {t("form.fields.vehicleTypePlaceholder")}
                        </option>
                        <option value="van">{t("form.vehicleTypes.van")}</option>
                        <option value="truck">{t("form.vehicleTypes.truck")}</option>
                        <option value="bus">{t("form.vehicleTypes.bus")}</option>
                        <option value="fuso">{t("form.vehicleTypes.fuso")}</option>
                        <option value="other">{t("form.vehicleTypes.other")}</option>
                    </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            className={labelClassName}
                            htmlFor="budget-make-model"
                        >
                            {t("form.fields.makeModel")} <span aria-hidden="true">*</span>
                        </label>

                        <input
                            id="budget-make-model"
                            name="makeModel"
                            autoComplete="off"
                            maxLength={120}
                            className={inputClassName}
                            placeholder={t("form.fields.makeModelPlaceholder")}
                            required
                        />
                    </div>

                    <div>
                        <label
                            className={labelClassName}
                            htmlFor="budget-registration"
                        >
                            {t("form.fields.registration")}
                        </label>

                        <input
                            id="budget-registration"
                            name="registration"
                            autoComplete="off"
                            maxLength={20}
                            className={inputClassName}
                            placeholder={t("form.fields.registrationPlaceholder")}
                        />
                    </div>
                </div>

                <div>
                    <label
                        className={labelClassName}
                        htmlFor="budget-mileage"
                    >
                        {t("form.fields.mileage")}
                    </label>

                    <input
                        id="budget-mileage"
                        name="mileage"
                        type="number"
                        min={0}
                        max={9999999}
                        className={inputClassName}
                        placeholder={t("form.fields.mileagePlaceholder")}
                    />
                </div>
            </fieldset>

            <fieldset className="space-y-5 border-t border-neutral-200 pt-8">
                <legend className="font-title text-2xl">
                    {t("form.sections.work")}
                </legend>

                <div>
                    <label
                        className={labelClassName}
                        htmlFor="budget-operation-type"
                    >
                        {t("form.fields.operationType")} <span aria-hidden="true">*</span>
                    </label>

                    <select
                        id="budget-operation-type"
                        name="operationType"
                        className={inputClassName}
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            {t("form.fields.operationTypePlaceholder")}
                        </option>
                        <option value="maintenance">
                            {t("form.operationTypes.maintenance")}
                        </option>
                        <option value="repair">
                            {t("form.operationTypes.repair")}
                        </option>
                        <option value="diagnosis">
                            {t("form.operationTypes.diagnosis")}
                        </option>
                        <option value="other">
                            {t("form.operationTypes.other")}
                        </option>
                    </select>
                </div>

                <div>
                    <label
                        className={labelClassName}
                        htmlFor="budget-details"
                    >
                        {t("form.fields.details")} <span aria-hidden="true">*</span>
                    </label>

                    <textarea
                        id="budget-details"
                        name="details"
                        rows={5}
                        minLength={10}
                        maxLength={4000}
                        className={`${inputClassName} resize-y`}
                        placeholder={t("form.fields.detailsPlaceholder")}
                        required
                    />
                </div>
            </fieldset>

            <fieldset className="space-y-5 border-t border-neutral-200 pt-8">
                <legend className="font-title text-2xl">
                    {t("form.sections.contact")}
                </legend>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            className={labelClassName}
                            htmlFor="budget-name"
                        >
                            {t("form.fields.name")} <span aria-hidden="true">*</span>
                        </label>

                        <input
                            id="budget-name"
                            name="name"
                            autoComplete="name"
                            maxLength={120}
                            className={inputClassName}
                            required
                        />
                    </div>

                    <div>
                        <label
                            className={labelClassName}
                            htmlFor="budget-company"
                        >
                            {t("form.fields.company")}
                        </label>

                        <input
                            id="budget-company"
                            name="company"
                            autoComplete="organization"
                            maxLength={160}
                            className={inputClassName}
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            className={labelClassName}
                            htmlFor="budget-phone"
                        >
                            {t("form.fields.phone")} <span aria-hidden="true">*</span>
                        </label>

                        <input
                            id="budget-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            maxLength={40}
                            className={inputClassName}
                            required
                        />
                    </div>

                    <div>
                        <label
                            className={labelClassName}
                            htmlFor="budget-email"
                        >
                            {t("form.fields.email")} <span aria-hidden="true">*</span>
                        </label>

                        <input
                            id="budget-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            maxLength={254}
                            className={inputClassName}
                            required
                        />
                    </div>
                </div>
            </fieldset>

            <div className="border-t border-neutral-200 pt-7">
                <div className="flex items-start gap-3">
                    <input
                        id="budget-privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="mt-1 size-4 shrink-0 accent-[#0078d6]"
                    />

                    <label
                        htmlFor="budget-privacy"
                        className="text-sm leading-6 text-neutral-600"
                    >
                        {t("form.fields.privacyPrefix")}{" "}
                        <Link
                            href="/privacidad"
                            className="underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-black"
                        >
                            {t("form.fields.privacyLink")}
                        </Link>{" "}
                        {t("form.fields.privacySuffix")}
                    </label>
                </div>

                <p className="mt-5 text-sm leading-6 text-neutral-500">
                    {t("form.emailNotice")}
                </p>

                <div className="mt-7 flex flex-col items-start gap-4">
                    <MainButton
                        type="submit"
                        className="w-full sm:w-auto"
                    >
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
