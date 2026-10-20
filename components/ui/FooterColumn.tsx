import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type InternalHref = Exclude<keyof typeof routing.pathnames, "/noticias/[slug]">;
type ExternalHref = `mailto:${string}`;
type LinkItem = {
    label: string;
    href: InternalHref | ExternalHref;
};

type Props = {
    title: string;
    links: LinkItem[];
};

function isMailtoHref(href: LinkItem["href"]): href is ExternalHref {
    return href.startsWith("mailto:");
}

export default function FooterColumn({ title, links }: Props) {
    return (
        <div>
            <h3 className="font-title text-lg text-white">
                {title}
            </h3>

            <ul className="mt-6 space-y-4">
                {links.map((link) => (
                    <li key={link.href}>
                        {isMailtoHref(link.href) ? (
                            <a
                                href={link.href}
                                className="text-white/65 transition-colors hover:text-white"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <Link
                                href={link.href}
                                className="text-white/65 transition-colors hover:text-white"
                            >
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
