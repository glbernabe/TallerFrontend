import Image from "next/image";

type ContactPersonMiniCardProps = {
    firstName: string;
    lastName: string;
    department: string;
    phone: string;
    email: string;
    image: {
        url: string;
        alternativeText?: string | null;
        width?: number;
        height?: number;
    } | null;
};

export default function ContactPersonMiniCard({
    firstName,
    lastName,
    department,
    phone,
    email,
    image,
}: ContactPersonMiniCardProps) {
    return (
        <article
            className="
                flex
                min-w-0
                items-center
                gap-3
                rounded-sm
                border
                border-black/10
                bg-white
                px-3
                py-2.5
            "
        >
            <div
                className="
                    relative
                    h-11
                    w-11
                    shrink-0
                    overflow-hidden
                    rounded-full
                    bg-neutral-100
                "
            >
                {image ? (
                    <Image
                        src={image.url}
                        alt={
                            image.alternativeText ||
                            `${firstName} ${lastName}`
                        }
                        fill
                        sizes="44px"
                        className="object-cover"
                    />
                ) : (
                    <div
                        className="
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            font-text
                            text-xs
                            font-medium
                            text-black/35
                        "
                        aria-hidden="true"
                    >
                        {firstName.charAt(0)}
                        {lastName.charAt(0)}
                    </div>
                )}
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="truncate font-text text-sm font-medium text-black">
                    {firstName} {lastName}
                </h3>

                <p className="truncate font-text text-xs text-black/45">
                    {department}
                </p>

                <a
                    href={`mailto:${email}`}
                    className="
                        block
                        truncate
                        font-text
                        text-xs
                        text-black/55
                        transition-colors
                        duration-200
                        hover:text-black
                    "
                >
                    {email}
                </a>
            </div>

            <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                aria-label={`Llamar a ${firstName} ${lastName}`}
                className="
                    shrink-0
                    font-text
                    text-xs
                    font-medium
                    text-black/55
                    transition-colors
                    duration-200
                    hover:text-black
                "
            >
                Llamar
            </a>
        </article>
    );
}