import Image from "next/image";

type ContactPersonCardProps = {
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

export default function ContactPersonCard({
    firstName,
    lastName,
    department,
    phone,
    email,
    image,
}: ContactPersonCardProps) {
    return (
        <article
            className="
                overflow-hidden
                rounded-sm
                border
                border-black/10
                bg-white
                shadow-sm
            "
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                {image ? (
                    <Image
                        src={image.url}
                        alt={
                            image.alternativeText ||
                            `${firstName} ${lastName}`
                        }
                        fill
                        sizes="
                            (min-width: 1280px) 33vw,
                            (min-width: 768px) 50vw,
                            100vw
                        "
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
                            bg-neutral-100
                            font-title
                            text-4xl
                            text-black/20
                        "
                        aria-hidden="true"
                    >
                        {firstName.charAt(0)}
                        {lastName.charAt(0)}
                    </div>
                )}
            </div>

            <div className="px-5 py-5">
                <h3 className="font-title text-xl leading-tight text-black">
                    {firstName} {lastName}
                </h3>

                <p className="mt-1 font-text text-sm text-black/45">
                    {department}
                </p>

                <div className="mt-5 space-y-2">
                    <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="
                            block
                            font-text
                            text-sm
                            text-black/65
                            transition-colors
                            duration-200
                            hover:text-black
                        "
                    >
                        {phone}
                    </a>

                    <a
                        href={`mailto:${email}`}
                        className="
                            block
                            break-all
                            font-text
                            text-sm
                            text-black/65
                            transition-colors
                            duration-200
                            hover:text-black
                        "
                    >
                        {email}
                    </a>
                </div>
            </div>
        </article>
    );
}