import Image from "next/image";

type Props = {
    icon: string;
    title: string;
    description: string;
    iconClassName?: string;
};

export default function Feature({
    icon,
    title,
    description,
    iconClassName = "",
}: Props) {

    return (
        <article
            className="
                flex
                flex-col

                rounded-xl

                border
                border-white/10

                bg-white/3

                p-9

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-white/5
            "
        >
            {/* Icono */}

            <div
                className="mb-6 flex h-10 items-center"
            >
                <div className={iconClassName}>
                    <Image
                        src={icon}
                        alt=""
                        width={32}
                        height={32}
                    />
                </div>
            </div>

            {/* Línea Mercedes */}

            <div
                className="
                    mt-6
                    h-[2px]
                    w-10
                    rounded-full

                    bg-[var(--color-blue-button)]
                "
            />

            {/* Título */}

            <h3
                className="
                    mt-8

                    font-title

                    text-[2rem]
                    leading-tight
                "
            >
                {title}
            </h3>

            {/* Descripción */}

            <p
                className="
                    mt-5

                    text-[17px]
                    leading-8

                    text-white/65
                "
            >
                {description}
            </p>
        </article>
    );
}
