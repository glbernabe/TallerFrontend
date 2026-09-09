import Link from "next/link";

export default function FloatingAppointmentButton() {
    return (
        <Link
            href="/cita-previa"
            aria-label="Pedir cita previa"
            className="
                fixed
                right-6
                top-1/2
                z-50
                -translate-y-1/2

                flex
                h-40
                w-14
                flex-col
                items-center
                justify-center

                border
                border-black
                bg-white
                text-black

                shadow-[0_8px_25px_rgba(0,0,0,0.12)]

                transition-all
                duration-300

                hover:bg-black
                hover:text-white
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
            "
        >
            <span className="font-text text-xs font-medium tracking-[0.12em]">
                PEDIR
            </span>

            <span className="mt-1 font-text text-xs font-medium tracking-[0.12em]">
                CITA
            </span>
        </Link>
    );
}