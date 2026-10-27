
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import ContactPersonMiniCard from "@/components/contact/ContactPersonMiniCard";
import type { ContactDepartmentGroup } from "@/core/contact/domain/ContactDepartmentGroup";

import SparePartsCategoryGrid from "./SparePartsCategoryGrid";

type Props = {
    contactGroup: ContactDepartmentGroup | null;
};

export default async function SparePartsIndividualsPage({
    contactGroup,
}: Props) {
    const t = await getTranslations("SparePartsIndividuals");
    const tDepartments = await getTranslations("ContactDepartments");

    const translateDepartment = (department: string): string => {
        const key = department.trim();

        return tDepartments.has(key as never)
            ? tDepartments(key as never)
            : department;
    };

    const people = contactGroup?.people ?? [];

    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#111820]">
            <div
                className="
                    mx-auto max-w-[1560px]
                    px-5 py-8 md:px-8 md:py-10
                    xl:px-12
                "
            >
                <header
                    className="
                        grid grid-cols-1 items-start gap-8
                        lg:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)]
                    "
                >
                    <nav
                        aria-label={t("breadcrumbLabel")}
                        className="font-text text-sm md:text-base"
                    >
                        <ol className="flex flex-wrap items-center gap-3">
                            <li>
                                <Link
                                    href="/"
                                    className="
                                        transition-colors
                                        hover:text-[#102b4e]
                                    "
                                >
                                    {t("breadcrumbHome")}
                                </Link>
                            </li>

                            <li aria-hidden="true" className="text-black/35">
                                /
                            </li>

                            <li>{t("breadcrumbParts")}</li>

                            <li aria-hidden="true" className="text-black/35">
                                /
                            </li>

                            <li
                                aria-current="page"
                                className="text-black/45"
                            >
                                {t("breadcrumbIndividuals")}
                            </li>
                        </ol>
                    </nav>

                    <aside className="min-w-0">
                        <h2
                            className="
                                mb-4 text-left font-text
                                text-base font-semibold
                                lg:text-right
                            "
                        >
                            {t("contactHeading")}
                        </h2>

                        {people.length > 0 ? (
                            <div
                                className="
                                    grid grid-cols-1 gap-3
                                    sm:grid-cols-2
                                    xl:grid-cols-3
                                "
                            >
                                {people.map((person) => (
                                    <ContactPersonMiniCard
                                        key={person.id}
                                        firstName={person.firstName}
                                        lastName={person.lastName}
                                        department={translateDepartment(person.department)}
                                        phone={person.phone}
                                        email={person.email}
                                        image={person.image}
                                        callLabel={t("call")}
                                        callAriaLabel={t("callAriaLabel", {
                                            name: `${person.firstName} ${person.lastName}`,
                                        })}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p
                                className="
                                    text-sm leading-6
                                    text-black/55 lg:text-right
                                "
                            >
                                {t("contactsUnavailable")}
                            </p>
                        )}
                    </aside>
                </header>

                <section className="mt-12 md:mt-16">
                    <p
                        className="
                            text-center font-text text-xs
                            font-medium uppercase
                            tracking-[0.18em] text-black/50
                        "
                    >
                        {t("eyebrow")}
                    </p>

                    <h1
                        className="
                            mt-3 text-center font-title
                            text-4xl leading-tight
                            sm:text-5xl md:text-6xl
                        "
                    >
                        {t("title")}
                    </h1>

                    <p
                        className="
                            mx-auto mt-5 max-w-2xl
                            text-center font-text text-base
                            leading-7 text-black/60
                        "
                    >
                        {t("intro")}
                    </p>
                </section>

                <SparePartsCategoryGrid />
            </div>
        </main>
    );
}
