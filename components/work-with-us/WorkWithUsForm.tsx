"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

function UserIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5.5 20c.7-3.5 3-5.5 6.5-5.5s5.8 2 6.5 5.5" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6.6 3.5 9 3l2 5-2.5 1.8a16 16 0 0 0 5.2 5.2l1.8-2.5 5 2-.5 2.4c-.2 1-1.1 1.7-2.1 1.6C10.3 17.5 6.5 13.7 3.5 7.1c-.1-1 .6-1.9 1.6-2.1Z" />
        </svg>
    );
}

function MessageIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m4 20 4.2-1 10.9-10.9a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z" />
            <path d="m14.5 6.5 3 3" />
        </svg>
    );
}

function FileIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h6" />
        </svg>
    );
}

export default function WorkWithUsForm() {
    const t = useTranslations("WorkWithUs.form");

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState("");
    const [formError, setFormError] = useState("");
    const [status, setStatus] = useState<SubmissionStatus>("idle");

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;

        setFileError("");
        setFormError("");
        setSelectedFile(null);
        setStatus("idle");

        if (!file) return;

        const hasPdfExtension = file.name.toLowerCase().endsWith(".pdf");
        const hasPdfMime = file.type === "application/pdf";

        if (!hasPdfExtension || (file.type && !hasPdfMime)) {
            setFileError(t("errors.invalidPdf"));
            event.target.value = "";
            return;
        }

        if (file.size === 0) {
            setFileError(t("errors.invalidPdf"));
            event.target.value = "";
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setFileError(t("errors.fileTooLarge"));
            event.target.value = "";
            return;
        }

        setSelectedFile(file);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (status === "submitting") return;

        setFileError("");
        setFormError("");

        if (!selectedFile) {
            setFileError(t("errors.pdfRequired"));
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        setStatus("submitting");

        try {
            const response = await fetch("/api/curriculums", {
                method: "POST",
                body: formData,
                cache: "no-store",
            });

            const result: {
                ok?: boolean;
                error?: string;
            } = await response.json().catch(() => ({}));

            if (!response.ok || result.ok === false) {
                const errorMessages: Record<string, string> = {
                    invalid_email: t("errors.invalidEmail"),
                    invalid_pdf: t("errors.invalidPdf"),
                    file_too_large: t("errors.fileTooLarge"),
                    terms_required: t("errors.termsRequired"),
                    send_failed: t("errors.sendFailed"),
                    invalid_form: t("errors.sendFailed"),
                    backend_unavailable: t("errors.network"),
                    backend_not_configured: t("errors.network"),
                };

                let errorMessage = t("errors.sendFailed");

                if (response.status === 413) {
                    errorMessage = t("errors.fileTooLarge");
                } else if (result.error && errorMessages[result.error]) {
                    errorMessage = errorMessages[result.error];
                }

                setFormError(errorMessage);
                setStatus("error");
                return;
            }

            form.reset();

            setSelectedFile(null);
            setFileError("");
            setFormError("");
            setStatus("success");

        } catch {
            setFormError(t("errors.network"));
            setStatus("error");
        }
    };

    const handleReset = (form: HTMLFormElement | null) => {
        if (!form || status === "submitting") return;

        form.reset();

        setSelectedFile(null);
        setFileError("");
        setFormError("");
        setStatus("idle");
    };

    const handleFormChange = () => {
        if (status === "submitting") return;

        setFormError("");

        if (status !== "idle") {
            setStatus("idle");
        }
    };

    const labelClass = `
        flex
        items-center
        gap-4
        font-text
        text-sm
        text-black/50
    `;

    const inputClass = `
        mt-4
        w-full
        border-0
        border-b
        border-black/25
        bg-transparent
        px-0
        pb-3
        font-text
        text-base
        text-black
        outline-none
        transition-colors
        duration-200
        focus:border-black
        disabled:opacity-50
    `;

    return (
        <form
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            className="w-full"
            encType="multipart/form-data"
        >
            {/* DATOS PERSONALES */}

            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <label htmlFor="name" className={labelClass}>
                        <UserIcon />
                        <span>{t("nameLabel")}</span>
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        autoComplete="name"
                        disabled={status === "submitting"}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="email" className={labelClass}>
                        <EmailIcon />
                        <span>{t("emailLabel")}</span>
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={150}
                        autoComplete="email"
                        disabled={status === "submitting"}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className={labelClass}>
                        <PhoneIcon />
                        <span>{t("phoneLabel")}</span>
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        maxLength={40}
                        autoComplete="tel"
                        disabled={status === "submitting"}
                        className={inputClass}
                    />
                </div>
            </div>

            {/* MENSAJE */}

            <div className="mt-12">
                <label
                    htmlFor="message"
                    className={`${labelClass} items-start`}
                >
                    <MessageIcon />
                    <span>{t("messageLabel")}</span>
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    disabled={status === "submitting"}
                    className="
                        mt-4
                        min-h-36
                        w-full
                        resize-y
                        border-0
                        border-b
                        border-black/25
                        bg-transparent
                        px-0
                        pb-3
                        font-text
                        text-base
                        leading-7
                        text-black
                        outline-none
                        transition-colors
                        duration-200
                        focus:border-black
                        disabled:opacity-50
                    "
                />
            </div>

            {/* CURRÍCULUM */}

            <div className="mt-12">
                <label htmlFor="cv" className={labelClass}>
                    <FileIcon />
                    <span>{t("cvLabel")}</span>
                </label>

                <div className="mt-5">
                    <label
                        htmlFor="cv"
                        className="
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-3
                            border
                            border-black/20
                            px-5
                            py-3
                            font-text
                            text-sm
                            font-medium
                            text-black
                            transition-all
                            duration-200
                            hover:border-black
                            hover:bg-black
                            hover:text-white
                        "
                    >
                        <FileIcon />
                        <span>{t("selectCv")}</span>
                    </label>

                    <input
                        id="cv"
                        name="cv"
                        type="file"
                        accept=".pdf,application/pdf"
                        required
                        disabled={status === "submitting"}
                        onChange={handleFileChange}
                        className="sr-only"
                        aria-describedby="cv-help cv-error"
                    />

                    {selectedFile && (
                        <p className="mt-4 font-text text-sm text-black/60">
                            {selectedFile.name}
                        </p>
                    )}

                    {fileError && (
                        <p
                            id="cv-error"
                            role="alert"
                            className="mt-4 font-text text-sm text-red-600"
                        >
                            {fileError}
                        </p>
                    )}

                    <p
                        id="cv-help"
                        className="mt-3 font-text text-xs text-black/45"
                    >
                        {t("pdfHelp")}
                    </p>
                </div>
            </div>

            {/* CONSENTIMIENTO */}

            <div className="mt-12">
                <label
                    htmlFor="terms"
                    className="
                        flex
                        cursor-pointer
                        items-start
                        gap-4
                        font-text
                        text-sm
                        leading-6
                        text-black/60
                    "
                >
                    <input
                        id="terms"
                        type="checkbox"
                        name="terms"
                        required
                        disabled={status === "submitting"}
                        className="
                            mt-1
                            h-5
                            w-5
                            shrink-0
                            cursor-pointer
                            accent-black
                        "
                    />

                    <span>
                        {t("privacyConsentPrefix")}{" "}
                        <Link
                            href="/privacidad"
                            className="underline underline-offset-4 hover:text-black"
                        >
                            {t("privacyPolicyLink")}
                        </Link>{" "}
                        {t("privacyConsentSuffix")}
                    </span>
                </label>
            </div>

            {/* MENSAJES DE ESTADO */}

            <div
                className="mt-8"
                aria-live="polite"
                aria-atomic="true"
            >
                {status === "success" && (
                    <div
                        role="status"
                        className="
                            border-l-4
                            border-green-700
                            bg-green-50
                            px-5
                            py-4
                            font-text
                            text-sm
                            leading-6
                            text-green-900
                        "
                    >
                        <p className="font-semibold">
                            {t("successMessage")}
                        </p>
                    </div>
                )}

                {status === "error" && (
                    <div
                        role="alert"
                        aria-live="assertive"
                        className="
                            border-l-4
                            border-red-600
                            bg-red-50
                            px-5
                            py-4
                            font-text
                            text-sm
                            leading-6
                            text-red-800
                        "
                    >
                        {formError || t("errors.sendFailed")}
                    </div>
                )}
            </div>

            {/* BOTONES */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                    type="button"
                    disabled={status === "submitting"}
                    onClick={(event) => {
                        handleReset(event.currentTarget.form);
                    }}
                    className="
                        min-w-40
                        border
                        border-black
                        bg-white
                        px-8
                        py-4
                        font-text
                        text-sm
                        font-medium
                        uppercase
                        tracking-wide
                        text-black
                        transition-colors
                        duration-200
                        hover:bg-black
                        hover:text-white
                        focus-visible:outline-2
                        focus-visible:outline-offset-3
                        focus-visible:outline-black
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    {t("cancelButton")}
                </button>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-busy={status === "submitting"}
                    className="
                        min-w-40
                        border
                        border-black
                        bg-black
                        px-8
                        py-4
                        font-text
                        text-sm
                        font-medium
                        uppercase
                        tracking-wide
                        text-white
                        transition-all
                        duration-200
                        hover:border-[#0078d6]
                        hover:bg-[#0078d6]
                        hover:text-white
                        active:border-[#005b9f]
                        active:bg-[#005b9f]
                        focus-visible:outline-2
                        focus-visible:outline-offset-3
                        focus-visible:outline-[#0078d6]
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    {status === "submitting"
                        ? t("sendingButton")
                        : t("submitButton")}
                </button>
            </div>
        </form>
    );
}
