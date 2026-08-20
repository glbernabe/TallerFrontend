import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Nosotros | Auto-Talleres Orihuela",

    description:
        "Conoce Auto-Talleres Orihuela S.L., empresa fundada en 1994 y especializada en mantenimiento, reparación y servicio posventa de vehículos industriales en Orihuela, Alicante.",

    alternates: {
        canonical: "/about-us",
    },

    openGraph: {
        title: "Sobre Nosotros | Auto-Talleres Orihuela",

        description:
            "Conoce la trayectoria de Auto-Talleres Orihuela S.L. y nuestra especialización en vehículos industriales, vans, truck y bus.",

        url: "/about-us",

        type: "website",
    },
};

const milestones = [
    {
        year: "1994",
        title: "El comienzo de Auto-Talleres Orihuela",
        body:
            "Auto-Talleres Orihuela S.L. se constituye el 11 de abril de 1994. Desde entonces, la actividad de la empresa queda vinculada al sector de la automoción y al mantenimiento y reparación de vehículos.",
    },
    {
        year: "2006",
        title: "Una empresa con continuidad",
        body:
            "La sociedad mantiene su actividad y queda registrada una nueva etapa en su administración. Es uno de los cambios societarios documentados durante la trayectoria de la empresa.",
    },
    {
        year: "2012",
        title: "Nueva etapa de gestión",
        body:
            "En 2012 vuelve a registrarse un cambio en la administración de Auto-Talleres Orihuela S.L., manteniéndose la sociedad dentro del sector de la automoción.",
    },
    {
        year: "2018",
        title: "Continuidad y evolución",
        body:
            "La empresa continúa su actividad en Orihuela y en 2018 se registra un nuevo cambio en su administración. La sociedad mantiene su presencia dentro del sector de mantenimiento y reparación de vehículos.",
    },
    {
        year: "2023",
        title: "Experiencia también al servicio de empresas",
        body:
            "En 2023, el Ayuntamiento de Orihuela adjudicó a Auto-Talleres Orihuela S.L. un lote para la reparación y mantenimiento de los vehículos utilizados en el servicio municipal de limpieza viaria y recogida de residuos.",
    },
];

export default function AboutUsPage() {
    return (
        <main className="bg-black text-white">

            {/* ==========================
                HERO
            ========================== */}

            <section
                className="
                    flex
                    min-h-[calc(100vh-72px)]

                    items-center

                    bg-black
                "
            >
                <div
                    className="
                        mx-auto
                        w-full
                        max-w-[1560px]

                        px-6
                        py-32

                        md:px-8
                        md:py-40

                        lg:px-10
                        lg:py-48

                        xl:px-12
                    "
                >

                    <div
                        className="
                            max-w-6xl

                            animate-[textRiseAnimation_1.2s_ease-out_both]
                        "
                    >

                        <p
                            className="
                                mb-8

                                text-sm
                                uppercase
                                tracking-[0.2em]

                                text-white/50
                            "
                        >
                            Sobre nosotros
                        </p>

                        <h1
                            className="
                                font-title

                                text-6xl
                                leading-[0.92]
                                tracking-[-0.03em]

                                md:text-8xl

                                lg:text-[9rem]
                            "
                        >
                            Más de 30 años
                            <br />
                            trabajando en
                            <br />
                            Orihuela.
                        </h1>

                        <p
                            className="
                                mt-10

                                max-w-2xl

                                text-lg
                                leading-8

                                text-white/65

                                md:text-xl
                            "
                        >
                            Auto-Talleres Orihuela S.L. desarrolla su actividad
                            en el sector de la automoción desde 1994, con una
                            especialización orientada al mantenimiento,
                            reparación y servicio posventa de vehículos.
                        </p>

                    </div>

                </div>
            </section>


            {/* ==========================
                INTRODUCCIÓN
            ========================== */}

            <section
                className="
                    bg-white
                    text-black
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[1560px]

                        px-6
                        py-24

                        md:px-8
                        md:py-32

                        lg:px-10
                        lg:py-40

                        xl:px-12
                    "
                >

                    <div
                        className="
                            grid
                            gap-16

                            lg:grid-cols-[0.8fr_1.2fr]
                            lg:gap-24
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.2em]

                                    text-black/45
                                "
                            >
                                Nuestra trayectoria
                            </p>

                            <h2
                                className="
                                    mt-6

                                    max-w-lg

                                    font-title

                                    text-5xl
                                    leading-[1.05]

                                    md:text-6xl
                                "
                            >
                                Una empresa construida con continuidad.
                            </h2>

                        </div>

                        <div
                            className="
                                max-w-3xl

                                text-lg
                                leading-8

                                text-black/65

                                md:text-xl
                            "
                        >

                            <p>
                                Hay empresas que se definen por un momento
                                concreto. En nuestro caso, la historia se
                                entiende mejor a través de la continuidad.
                            </p>

                            <p className="mt-8">
                                Auto-Talleres Orihuela S.L. nació en 1994 y
                                mantiene desde entonces su actividad en el
                                sector de la automoción en Orihuela. Con el
                                paso de los años, la empresa ha continuado
                                desarrollando su actividad alrededor del
                                mantenimiento y reparación de vehículos.
                            </p>

                            <p className="mt-8">
                                Hoy esa experiencia está especialmente
                                orientada al entorno profesional y a los
                                vehículos industriales, donde la fiabilidad
                                y la continuidad del servicio son esenciales.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==========================
                TIMELINE
            ========================== */}

            <section
                className="
                    bg-neutral-950
                    text-white
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[1560px]

                        px-6
                        py-24

                        md:px-8
                        md:py-32

                        lg:px-10
                        lg:py-40

                        xl:px-12
                    "
                >

                    <div className="max-w-4xl">

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.2em]

                                text-white/45
                            "
                        >
                            Una trayectoria documentada
                        </p>

                        <h2
                            className="
                                mt-6

                                font-title

                                text-5xl
                                leading-tight

                                md:text-7xl
                            "
                        >
                            Algunos momentos
                            <br />
                            de nuestra trayectoria.
                        </h2>

                        <p
                            className="
                                mt-8

                                max-w-2xl

                                text-lg
                                leading-8

                                text-white/60
                            "
                        >
                            Estos hitos se basan en información empresarial y
                            documentación pública disponible sobre
                            Auto-Talleres Orihuela S.L.
                        </p>

                    </div>


                    {/* Timeline */}

                    <div
                        className="
                            mt-24

                            border-t
                            border-white/10
                        "
                    >

                        {milestones.map((milestone, index) => (
                            <article
                                key={milestone.year}
                                className="
                                    grid

                                    gap-8

                                    border-b
                                    border-white/10

                                    py-12

                                    md:grid-cols-[180px_1fr]
                                    md:gap-16
                                    md:py-16
                                "
                            >

                                <div
                                    className="
                                        font-title

                                        text-4xl
                                        text-white/35

                                        md:text-5xl
                                    "
                                >
                                    {milestone.year}
                                </div>

                                <div
                                    className="
                                        max-w-3xl
                                    "
                                >

                                    <h3
                                        className="
                                            font-title

                                            text-3xl
                                            leading-tight

                                            md:text-4xl
                                        "
                                    >
                                        {milestone.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-5

                                            text-base
                                            leading-8

                                            text-white/60

                                            md:text-lg
                                        "
                                    >
                                        {milestone.body}
                                    </p>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* ==========================
                ACTUALIDAD
            ========================== */}

            <section
                className="
                    bg-white
                    text-black
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[1560px]

                        px-6
                        py-24

                        md:px-8
                        md:py-32

                        lg:px-10
                        lg:py-40

                        xl:px-12
                    "
                >

                    <div
                        className="
                            grid
                            gap-16

                            lg:grid-cols-[1fr_1.2fr]
                            lg:items-start
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.2em]

                                    text-black/40
                                "
                            >
                                Hoy
                            </p>

                            <h2
                                className="
                                    mt-6

                                    font-title

                                    text-5xl
                                    leading-[1.05]

                                    md:text-6xl
                                "
                            >
                                Una empresa enfocada en el vehículo profesional.
                            </h2>

                        </div>


                        <div
                            className="
                                max-w-3xl

                                text-lg
                                leading-8

                                text-black/65

                                md:text-xl
                            "
                        >

                            <p>
                                Actualmente, Auto-Talleres Orihuela aparece
                                identificado como taller autorizado de
                                Mercedes-Benz y especializado en el entorno
                                de posventa de vans, truck y bus.
                            </p>

                            <p className="mt-8">
                                Esta orientación nos sitúa en un entorno donde
                                el vehículo no es solamente un medio de
                                transporte: para muchas empresas es una
                                herramienta de trabajo que debe mantenerse
                                operativo.
                            </p>

                            <p className="mt-8">
                                Por eso nuestra forma de trabajar está
                                orientada a ofrecer un servicio profesional,
                                directo y adaptado a las necesidades de
                                quienes dependen de sus vehículos para
                                desarrollar su actividad.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==========================
                CAPACIDAD
            ========================== */}

            <section
                className="
                    bg-neutral-950
                    text-white
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[1560px]

                        px-6
                        py-24

                        md:px-8
                        md:py-32

                        lg:px-10
                        lg:py-40

                        xl:px-12
                    "
                >

                    <div className="max-w-5xl">

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.2em]

                                text-white/40
                            "
                        >
                            Nuestra forma de trabajar
                        </p>

                        <h2
                            className="
                                mt-6

                                font-title

                                text-5xl
                                leading-[1.05]

                                md:text-7xl
                            "
                        >
                            Experiencia que se
                            <br />
                            pone al servicio del trabajo.
                        </h2>

                    </div>


                    <div
                        className="
                            mt-20

                            grid
                            gap-px

                            overflow-hidden

                            rounded-sm

                            border
                            border-white/10

                            bg-white/10

                            md:grid-cols-3
                        "
                    >

                        <div
                            className="
                                bg-neutral-950
                                p-8
                                md:p-10
                            "
                        >

                            <span
                                className="
                                    font-title
                                    text-5xl
                                "
                            >
                                1994
                            </span>

                            <p
                                className="
                                    mt-6

                                    text-base
                                    leading-7

                                    text-white/55
                                "
                            >
                                Año de constitución de
                                Auto-Talleres Orihuela S.L.
                            </p>

                        </div>


                        <div
                            className="
                                bg-neutral-950
                                p-8
                                md:p-10
                            "
                        >

                            <span
                                className="
                                    font-title
                                    text-5xl
                                "
                            >
                                Vans
                            </span>

                            <p
                                className="
                                    mt-6

                                    text-base
                                    leading-7

                                    text-white/55
                                "
                            >
                                Actividad de posventa orientada
                                también al entorno de vehículos
                                comerciales.
                            </p>

                        </div>


                        <div
                            className="
                                bg-neutral-950
                                p-8
                                md:p-10
                            "
                        >

                            <span
                                className="
                                    font-title
                                    text-5xl
                                "
                            >
                                Truck
                            </span>

                            <p
                                className="
                                    mt-6

                                    text-base
                                    leading-7

                                    text-white/55
                                "
                            >
                                Especialización dentro del entorno
                                profesional de vehículos industriales.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==========================
                CIERRE
            ========================== */}

            <section
                className="
                    bg-black
                    text-white
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[1560px]

                        px-6
                        py-32

                        md:px-8
                        md:py-40

                        lg:px-10
                        lg:py-48

                        xl:px-12
                    "
                >

                    <div className="max-w-5xl">

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.2em]

                                text-white/40
                            "
                        >
                            Auto-Talleres Orihuela
                        </p>

                        <h2
                            className="
                                mt-8

                                font-title

                                text-5xl
                                leading-[1.05]

                                md:text-7xl
                                lg:text-8xl
                            "
                        >
                            Más de tres décadas
                            <br />
                            después, seguimos
                            <br />
                            trabajando para que
                            <br />
                            el vehículo siga en marcha.
                        </h2>

                    </div>

                </div>

            </section>

        </main>
    );
}