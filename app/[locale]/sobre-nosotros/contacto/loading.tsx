export default function Loading() {
    return (
        <main className="bg-black text-white">
            <section className="py-24 md:py-32">
                <div
                    className="
                        mx-auto
                        max-w-[1560px]
                        px-6
                        md:px-8
                        lg:px-10
                        xl:px-12
                    "
                >
                    <div className="animate-pulse">
                        <div className="h-4 w-32 bg-white/10" />

                        <div className="mt-6 h-14 w-96 max-w-full bg-white/10" />

                        <div className="mt-4 h-6 w-[500px] max-w-full bg-white/10" />
                    </div>

                    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {Array.from({
                            length: 6,
                        }).map((_, index) => (
                            <div
                                key={index}
                                className="
                                    h-[420px]
                                    animate-pulse
                                    bg-white/5
                                "
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}