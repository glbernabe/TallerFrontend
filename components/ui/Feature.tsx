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
                group

                flex
                flex-col
                items-center

                text-center
            "
        >

            {/* ICONO */}

            <div
                className="
                    relative

                    flex
                    h-28
                    w-28

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.04]

                    transition-all
                    duration-500
                    ease-out

                    group-hover:-translate-y-2
                    group-hover:border-white/20
                    group-hover:bg-white/[0.08]
                "
            >

                {/* Halo */}

                <div
                    className="
                        absolute
                        inset-[-8px]

                        rounded-full

                        border
                        border-white/[0.04]

                        transition-all
                        duration-500

                        group-hover:inset-[-12px]
                        group-hover:border-white/[0.08]
                    "
                />

                <div
                    className={`
                        relative

                        flex
                        items-center
                        justify-center

                        ${iconClassName}
                    `}
                >

                    <Image
                        src={icon}
                        alt=""
                        width={48}
                        height={48}
                        className="
                            h-12
                            w-12

                            object-contain
                        "
                    />

                </div>

            </div>


            {/* TÍTULO */}

            <h3
                className="
                    mt-9

                    max-w-xs

                    font-title

                    text-2xl
                    leading-tight

                    md:text-[1.75rem]
                "
            >
                {title}
            </h3>


            {/* DESCRIPCIÓN */}

            <p
                className="
                    mt-5

                    max-w-xs

                    text-base
                    leading-7

                    text-white/60
                "
            >
                {description}
            </p>

        </article>

    );

}