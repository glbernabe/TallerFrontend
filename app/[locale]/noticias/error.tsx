"use client";

export default function Error({
    reset,
}: {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
}) {
    return (
        <main className="flex min-h-[60vh] items-center justify-center px-6">
            <div className="max-w-xl text-center">
                <p
                    className="
                        text-sm
                        uppercase
                        tracking-[0.15em]
                        text-black/40
                    "
                >
                    Noticias
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
                    las noticias.
                </h1>

                <p className="mt-5 text-lg text-black/60">
                    Ha ocurrido un problema al
                    obtener la información.
                </p>

                <button
                    onClick={reset}
                    className="
                        mt-8
                        border
                        border-black
                        px-6
                        py-3
                        font-text
                        text-sm
                        uppercase
                        tracking-[0.12em]
                        transition-colors
                        hover:bg-black
                        hover:text-white
                    "
                >
                    Intentar de nuevo
                </button>
            </div>
        </main>
    );
}