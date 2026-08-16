import Image from "next/image";

type Props = {
    title: string;
    body: string;
    image?: string;
    imageAlt?: string;
    reverse?: boolean;
};

export default function AboutSection({
    title,
    body,
    image,
    imageAlt = "",
    reverse = false,
}: Props) {

    return (

        <section
            className="
                mx-auto
                max-w-[1560px]

                px-6
                md:px-8
                lg:px-10
                xl:px-12

                py-20
                md:py-28
                lg:py-36
            "
        >

            <div
                className={`
                    grid
                    gap-12
                    lg:grid-cols-2
                    lg:gap-20
                    lg:items-center

                    ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                `}
            >

                {/* TEXTO */}

                <div
                    className="
                        max-w-2xl
                    "
                >

                    <h2
                        className="
                            font-title

                            text-4xl
                            leading-tight

                            md:text-5xl

                            lg:text-6xl

                            text-black
                        "
                    >
                        {title}
                    </h2>

                    <p
                        className="
                            mt-8

                            max-w-xl

                            text-base
                            leading-7

                            md:text-lg
                            md:leading-8

                            text-neutral-600
                        "
                    >
                        {body}
                    </p>

                </div>

                {/* IMAGEN */}

                {image && (

                    <div
                        className="
                            relative

                            aspect-[4/3]

                            overflow-hidden
                            rounded-sm

                            bg-neutral-100
                        "
                    >

                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="
                                object-cover

                                transition-transform
                                duration-700
                                ease-out

                                hover:scale-[1.02]
                            "
                        />

                    </div>

                )}

            </div>

        </section>

    );
}