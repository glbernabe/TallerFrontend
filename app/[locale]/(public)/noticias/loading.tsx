export default function Loading() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-20">
            <header>
                <div className="h-14 w-64 animate-pulse bg-black/10" />

                <div className="mt-5 h-6 w-96 max-w-full animate-pulse bg-black/10" />
            </header>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({
                    length: 9,
                }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            h-[420px]
                            animate-pulse
                            bg-black/5
                        "
                    />
                ))}
            </div>
        </main>
    );
}