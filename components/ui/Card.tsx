import Image from "next/image";
import Link from "next/link";
import MainButton from "@/components/ui/MainButton";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
};

export default function Card({
  src,
  alt,
  title,
  description,
  href,
}: Props) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-sm
        border border-white/30
        bg-black
        transition-all duration-300
        hover:border-white/50
      "
    >
      {/* Imagen */}
      <div className="relative h-[420px] overflow-hidden">

        <Image
          src={src}
          alt={alt}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Degradado Mercedes */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-t
            from-black
            via-black/80
            to-transparent
          "
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-3 px-5 py-5">

        <h3 className="font-title text-[2rem] leading-tight text-white">
          {title}
        </h3>

        <p className="font-text text-base leading-relaxed text-white/80">
          {description} 
        </p>

        <div className="pt-2">
          <MainButton href={href}>
            Descubrir →
          </MainButton>
        </div>

      </div>
    </article>
  );
}