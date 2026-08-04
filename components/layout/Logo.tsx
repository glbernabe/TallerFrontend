import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/content/icons/logo.svg"
      alt="Mercedes-Benz"
      width={38}
      height={38}
      className="h-9.5 w-9.5"
    />
  );
}
