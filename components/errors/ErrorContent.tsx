type Props = {
    title: string;
    description: string;
    retryLabel: string;
    reset: () => void;
};

export default function ErrorContent({
    title,
    description,
    retryLabel,
    reset,
}: Props) {
    return (
        <main className="flex min-h-[60vh] items-center justify-center px-6">
            <div className="max-w-xl text-center">
                <h1
                    className="
                        font-title
                        text-4xl
                        md:text-5xl
                    "
                >
                    {title}
                </h1>

                <p className="mt-5 text-lg text-black/60">
                    {description}
                </p>

                <button
                    type="button"
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
                    {retryLabel}
                </button>
            </div>
        </main>
    );
}