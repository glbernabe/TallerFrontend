import Link from "next/link";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
    color?: "black" | "white";
};

export default function Breadcrumb({
    items,
    color = "black",
}: BreadcrumbProps) {

    const textColor =
        color === "white"
            ? "text-white"
            : "text-black";

    const currentColor =
        color === "white"
            ? "text-white/45"
            : "text-black/45";

    const separatorColor =
        color === "white"
            ? "text-white/30"
            : "text-black/30";

    const hoverColor =
        color === "white"
            ? "hover:text-white/70"
            : "hover:text-black/60";

    return (
        <nav
            aria-label="Migas de pan"
            className={`
                font-text
                text-sm
                ${textColor}
            `}
        >

            <ol
                className="
                    flex
                    flex-wrap
                    items-center
                "
            >

                {items.map((item, index) => {

                    const isLast =
                        index === items.length - 1;

                    return (
                        <li
                            key={`${item.label}-${index}`}
                            className="
                                flex
                                items-center
                            "
                        >

                            {isLast ? (
                                <span
                                    aria-current="page"
                                    className={currentColor}
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        href={item.href ?? "#"}
                                        className={`
                                            ${textColor}
                                            transition-colors
                                            duration-200
                                            ${hoverColor}
                                        `}
                                    >
                                        {item.label}
                                    </Link>

                                    <span
                                        aria-hidden="true"
                                        className={`
                                            mx-2
                                            ${separatorColor}
                                        `}
                                    >
                                        /
                                    </span>
                                </>
                            )}

                        </li>
                    );
                })}

            </ol>

        </nav>
    );
}