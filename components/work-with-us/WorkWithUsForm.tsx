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
        setSelectedFile(null);

        if (!file) return;

        const hasPdfExtension = file.name.toLowerCase().endsWith(".pdf");
        const hasPdfMime = file.type === "application/pdf";

        if (!hasPdfExtension && !hasPdfMime) {
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
        setFormError("");
        setStatus("idle");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
            const response = await fetch("/api/work-with-us", {
                method: "POST",
                body: formData,
            });

            const result: { ok?: boolean; error?: string } = await response
                .json()
                .catch(() => ({}));

            if (!response.ok) {
                setStatus("error");
                const errorMessages: Record<string, string> = {
                    invalid_email: t("errors.invalidEmail"),
                    invalid_pdf: t("errors.invalidPdf"),
                    file_too_large: t("errors.fileTooLarge"),
                    terms_required: t("errors.termsRequired"),
                    email_not_configured: t("errors.emailNotConfigured"),
                    send_failed: t("errors.sendFailed"),
                };
                setFormError(errorMessages[result.error ?? "send_failed"] ?? t("errors.sendFailed"));
                return;
            }

            setStatus("success");
            setSelectedFile(null);
            form.reset();
        } catch {
            setStatus("error");
            setFormError(t("errors.network"));
        }
    };

    const handleReset = () => {
        setSelectedFile(null);
        setFileError("");
        setFormError("");
        setStatus("idle");
    };

    const labelClass = "flex items-center gap-4 font-text text-sm text-black/50";
    const inputClass = "mt-4 w-full border-0 border-b border-black/25 bg-transparent px-0 pb-3 font-text text-base text-black outline-none transition-colors duration-200 focus:border-black";

    return (
        <form onSubmit={handleSubmit} onReset={handleReset} className="w-full" encType="multipart/form-data">
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <label htmlFor="name" className={labelClass}>
                        <UserIcon />
                        <span>{t("nameLabel")}</span>
                    </label>
                    <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" className={inputClass} />
                </div>

                <div>
                    <label htmlFor="email" className={labelClass}>
                        <EmailIcon />
                        <span>{t("emailLabel")}</span>
                    </label>
                    <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} />
                </div>

                <div>
                    <label htmlFor="phone" className={labelClass}>
                        <PhoneIcon />
                        <span>{t("phoneLabel")}</span>
                    </label>
                    <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputClass} />
                </div>
            </div>

            <div className="mt-12">
                <label htmlFor="message" className={`${labelClass} items-start`}>
                    <MessageIcon />
                    <span>{t("messageLabel")}</span>
                </label>
                <textarea id="message" name="message" rows={5} maxLength={5000} className="mt-4 min-h-36 w-full resize-y border-0 border-b border-black/25 bg-transparent px-0 pb-3 font-text text-base leading-7 text-black outline-none transition-colors duration-200 focus:border-black" />
            </div>

            <div className="mt-12">
                <label htmlFor="cv" className={labelClass}>
                    <FileIcon />
                    <span>{t("cvLabel")}</span>
                </label>

                <div className="mt-5">
                    <label htmlFor="cv" className="inline-flex cursor-pointer items-center gap-3 border border-black/20 px-5 py-3 font-text text-sm font-medium text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white">
                        <FileIcon />
                        <span>{t("selectCv")}</span>
                    </label>
                    <input id="cv" name="cv" type="file" accept=".pdf,application/pdf" required onChange={handleFileChange} className="sr-only" aria-describedby="cv-help cv-error" />

                    {selectedFile && (
                        <p className="mt-4 font-text text-sm text-black/60">{selectedFile.name}</p>
                    )}
                    {fileError && (
                        <p id="cv-error" role="alert" className="mt-4 font-text text-sm text-red-600">{fileError}</p>
                    )}
                    <p id="cv-help" className="mt-3 font-text text-xs text-black/45">{t("pdfHelp")}</p>
                </div>
            </div>

            <div className="mt-12">
                <label htmlFor="terms" className="flex cursor-pointer items-start gap-4 font-text text-sm leading-6 text-black/60">
                    <input id="terms" type="checkbox" name="terms" required className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-black" />
                    <span>
                        {t("privacyConsentPrefix")} <Link href="/privacidad" className="underline underline-offset-4 hover:text-black">{t("privacyPolicyLink")}</Link> {t("privacyConsentSuffix")}
                    </span>
                </label>
            </div>

            {/* Provisional visual only: this is not a functioning CAPTCHA. */}
            <div className="mt-8">
                <div className="flex w-full max-w-sm items-center gap-4 border border-black/15 bg-white px-4 py-4">
                    <div className="h-7 w-7 shrink-0 border border-black/50" aria-hidden="true" />
                    <span className="flex-1 font-text text-sm text-black">{t("captchaLabel")}</span>
                    <span className="font-text text-[10px] uppercase tracking-wide text-black/40">reCAPTCHA</span>
                </div>
                <p className="mt-3 font-text text-xs text-black/40">{t("captchaNotice")}</p>
            </div>

            {formError && (
                <p role="alert" className="mt-8 font-text text-sm text-red-600">{formError}</p>
            )}

            {status === "success" && (
                <p role="status" className="mt-8 font-text text-sm text-green-700">{t("successMessage")}</p>
            )}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button type="reset" disabled={status === "submitting"} className="min-w-40 border border-black px-8 py-4 font-text text-sm font-medium uppercase tracking-wide text-black transition-all duration-200 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50">
                    {t("cancelButton")}
                </button>
                <button type="submit" disabled={status === "submitting"} className="min-w-40 border border-black bg-black px-8 py-4 font-text text-sm font-medium uppercase tracking-wide text-white transition-all duration-200 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50">
                    {status === "submitting" ? t("sendingButton") : t("submitButton")}
                </button>
            </div>
        </form>
    );
}
