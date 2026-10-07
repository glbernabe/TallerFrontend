import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export default async function FloatingAppointmentButton() {
    const t = await getTranslations("FloatingAppointment");

    return (
        <Link
            href="/servicios/taller/cita-previa"
            aria-label={t("ariaLabel")}
            className="
                fixed
                right-6
                top-1/2
                z-50
                -translate-y-1/2

                flex
                h-40
                w-20
                flex-col
                items-center
                justify-center

                border
                border-black
                bg-white
                text-black

                shadow-[0_8px_25px_rgba(0,0,0,0.12)]

                transition-all
                duration-300

                hover:bg-black
                hover:text-white
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
            "
        >
            <span
                className="
                    max-w-full
                    px-1
                    text-center
                    font-text
                    text-[10px]
                    font-medium
                    leading-tight
                    tracking-[0.08em]
                "
            >
                {t("request")}
            </span>

            <span
                className="
                    mt-1
                    max-w-full
                    px-1
                    text-center
                    font-text
                    text-[10px]
                    font-medium
                    leading-tight
                    tracking-[0.08em]
                "
            >
                {t("appointment")}
            </span>
        </Link>
    );
}