import { getTranslations } from "next-intl/server";

import ContactPersonCard from "@/components/contact/ContactPersonCard";

import type { ContactDepartmentGroup } from "@/core/contact/domain/ContactDepartmentGroup";

type Props = {
    groups: ContactDepartmentGroup[];
};

export default async function ContactPeopleSection({
    groups,
}: Props) {
    const t = await getTranslations("ContactPeopleSection");
    const tDepartments = await getTranslations("ContactDepartments");

    const translateDepartment = (department: string): string => {
        const key = department.trim();

        return tDepartments.has(key as never)
            ? tDepartments(key as never)
            : department;
    };

    return (
        <section className="bg-black py-24 md:py-32">
            <div
                className="
                    mx-auto max-w-[1560px]
                    px-6
                    md:px-8
                    lg:px-10
                    xl:px-12
                "
            >
                <div className="max-w-4xl">
                    <p
                        className="
                            text-sm
                            uppercase
                            tracking-[0.15em]
                            text-white/50
                        "
                    >
                        {t("eyebrow")}
                    </p>

                    <h2
                        className="
                            mt-5
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
                            max-w-2xl
                            text-lg
                            leading-8
                            text-white/60
                        "
                    >
                        {t("description")}
                    </p>
                </div>

                <div className="mt-20 space-y-20">
                    {groups.map(({ department, people }) => (
                        <section key={department}>
                            <div className="mb-8">
                                <h3
                                    className="
                                        font-title
                                        text-3xl
                                        leading-tight
                                        md:text-4xl
                                    "
                                >
                                    {translateDepartment(department)}
                                </h3>

                                <div
                                    className="
                                        mt-4
                                        h-px
                                        w-12
                                        bg-white/30
                                    "
                                />
                            </div>

                            <div
                                className="
                                    grid
                                    gap-6
                                    md:grid-cols-2
                                    xl:grid-cols-3
                                "
                            >
                                {people.map((person) => (
                                    <ContactPersonCard
                                        key={person.id}
                                        firstName={person.firstName}
                                        lastName={person.lastName}
                                        department={translateDepartment(
                                            person.department
                                        )}
                                        phone={person.phone}
                                        email={person.email}
                                        image={person.image}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}