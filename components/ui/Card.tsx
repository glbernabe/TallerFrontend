import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    title: string;
    description: string;
    href?: string;
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
                border
                border-white/30
                bg-black
                transition-all
                duration-300
                hover:border-white/50
            "
        >
            {/* Imagen */}

            <div
                className="
                    relative
                    h-[420px]
                    overflow-hidden
                "
            >

                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                    "
                    quality={75}
                />

                {/* Degradado */}

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

            <div
                className="
                    flex
                    flex-col
                    gap-3
                    px-5
                    py-5
                "
            >

                <h3
                    className="
                        font-title
                        text-[2rem]
                        leading-tight
                        text-white
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        font-text
                        text-base
                        leading-relaxed
                        text-white/80
                    "
                >
                    {description}
                </p>

            </div>

        </article>
    );
}