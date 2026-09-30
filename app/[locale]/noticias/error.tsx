"use client";

import { useTranslations } from "next-intl";

import ErrorContent from "@/components/errors/ErrorContent";

type Props = {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
};

export default function Error({ reset }: Props) {
    const t = useTranslations("Errors");

    return (
        <ErrorContent
            title={t("news.title")}
            description={t("news.description")}
            retryLabel={t("retry")}
            reset={reset}
        />
    );
}