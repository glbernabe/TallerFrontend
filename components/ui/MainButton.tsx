import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

export default function MainButton({
    children,
    href,
    className = "",
}: Props) {
    return (
        <Link
            href={href}
            className={`
                 inline-flex
items-center
justify-center
font-sans
font-medium
rounded
h-13
px-7
text-base
leading-6
text-white
bg-(--blue-button)
transition-colors
duration-150
ease-out
hover:bg-(--hover-blue-button)
active:bg-(--hover-blue-button)
focus:outline-none
focus:ring-2
focus:ring-[#00ADEF]
focus:ring-offset-2
                ${className}
            `}
        >
            {children}
        </Link>
    );
}