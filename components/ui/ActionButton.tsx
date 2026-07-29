import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  src: string;
  alt: string;
};

export default function ActionButton({ href, src, alt }: Props) {
  return (
    <Link
      href={href}
      aria-label={alt}
      className="
        flex h-8 w-8 items-center justify-center
        rounded
        transition-colors duration-150 ease-out
        hover:bg-(--hover-darkgray)
      "
    >
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className="pointer-events-none select-none"
      />
    </Link>
  );
}