import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

export default function NavButton({
    children,
    href,
    className = "",
}: Props) {
    return (
        <Link
            href={href}
            className={`
                 flex h-8 items-center rounded cursor-pointer px-3 py-1 text-base leading-6 whitespace-nowrap transition-colors duration-150 ease-out hover:bg-(--hover-darkgray)
                ${className}
            `}
        >
            {children}
        </Link>
    );
}