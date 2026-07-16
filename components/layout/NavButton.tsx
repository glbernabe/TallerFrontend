import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="
        rounded
        px-3
        py-1
        text-[15px]
        leading-6
        transition-colors
        duration-150
        hover:bg-neutral-200
      "
    >
      {children}
    </Link>
  );
}