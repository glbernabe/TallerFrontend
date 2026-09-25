"use client";

type Props = {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
};

export default function Error({
    reset,
}: Props) {
    return (
        <main className="flex min-h-[60vh] items-center justify-center bg-black px-6 text-white">
            <div className="max-w-xl text-center">
                <p
                    className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-white/50
                    "
                >
                    Contacto
                </p>

                <h1
                    className="
                        mt-5
                        font-title
                        text-4xl
                        md:text-5xl
                    "
                >
                    No hemos podido cargar
                    el equipo.
                </h1>

                <p
                    className="
                        mt-6
                        text-lg
                        leading-8
                        text-white/60
                    "
                >
                    Ha ocurrido un problema
                    al obtener la información.
                    Inténtalo de nuevo.
                </p>

                <button
                    type="button"
                    onClick={reset}
                    className="
                        mt-8
                        border
                        border-white
                        px-6
                        py-3
                        font-text
                        text-sm
                        uppercase
                        tracking-[0.12em]
                        transition-colors
                        hover:bg-white
                        hover:text-black
                    "
                >
                    Intentar de nuevo
                </button>
            </div>
        </main>
    );
}