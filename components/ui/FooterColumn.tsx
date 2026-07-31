import Link from "next/link";

type LinkItem = {
    label: string;
    href: string;
};

type Props = {
    title: string;
    links: LinkItem[];
};

export default function FooterColumn({
    title,
    links,
}: Props) {
    return (
        <div>

            <h3
                className="
                    font-title
                    text-lg
                    text-white
                "
            >
                {title}
            </h3>

            <ul className="mt-6 space-y-4">

                {links.map((link) => (

                    <li key={link.href}>

                        <Link
                            href={link.href}
                            className="
                                text-white/65
                                transition-colors
                                hover:text-white
                            "
                        >
                            {link.label}
                        </Link>

                    </li>

                ))}

            </ul>

        </div>
    );
}