import Image from "next/image";

type LocationMapProps = {
    src: string;
    alt: string;
    href: string;
};

export default function LocationMap({
    src,
    alt,
    href,
}: LocationMapProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver la ubicación de Auto Talleres Orihuela en Google Maps"
            className="
                group
                relative
                block
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
            "
        >
            <div
                className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                "
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="
                        (min-width: 1024px) 50vw,
                        100vw
                    "
                    className="
                        object-cover
                        grayscale
                        transition-all
                        duration-700
                        ease-out

                        group-hover:grayscale-0
                        group-hover:scale-[1.03]

                        motion-reduce:transition-none
                        motion-reduce:transform-none
                    "
                    quality={90}
                />

                {/* Overlay sutil */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-black/10
                        transition-opacity
                        duration-700
                        group-hover:opacity-0
                    "
                />

                {/* Indicador de interacción */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-5
                        right-5

                        flex
                        items-center
                        gap-2

                        rounded-full
                        border
                        border-white/20
                        bg-black/60
                        px-4
                        py-2

                        font-text
                        text-xs
                        uppercase
                        tracking-[0.14em]
                        text-white

                        opacity-0
                        translate-y-2

                        transition-all
                        duration-500

                        group-hover:translate-y-0
                        group-hover:opacity-100

                        backdrop-blur-sm
                    "
                >
                    Ver ubicación
                </div>
            </div>
        </a>
    );
}