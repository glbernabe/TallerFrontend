type LegalSection = {
    title: string;
    content: React.ReactNode;
};

type Props = {
    eyebrow: string;
    title: string;
    intro: string;
    sections: LegalSection[];
};

export default function LegalContent({
    eyebrow,
    title,
    intro,
    sections,
}: Props) {
    return (
        <main className="bg-white text-black">
            <section className="bg-black text-white">
                <div className="mx-auto max-w-[1560px] px-6 py-24 md:px-8 md:py-32 lg:px-10 xl:px-12">
                    <div className="max-w-5xl animate-[textRiseAnimation_1.1s_ease-out_both]">
                        <p className="mb-7 text-sm uppercase tracking-[0.2em] text-white/60">
                            {eyebrow}
                        </p>

                        <h1 className="font-title text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                            {title}
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                            {intro}
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-[1560px] px-6 py-20 md:px-8 md:py-28 lg:px-10 xl:px-12">
                <div className="max-w-4xl space-y-14">
                    {sections.map((section) => (
                        <article key={section.title} className="border-t border-black/15 pt-8">
                            <h2 className="font-title text-3xl leading-tight md:text-4xl">
                                {section.title}
                            </h2>

                            <div className="mt-5 space-y-4 text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                                {section.content}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
