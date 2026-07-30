import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/15 bg-black text-white">

            <div className="mx-auto max-w-[1560px] px-6 py-20">

                {/* Parte superior */}
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">

                    {/* Marca */}
                    <div className="lg:col-span-2">

                        <h2 className="font-title text-3xl">
                            Autotalleres Orihuela
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-white/70">
                            Servicio oficial Mercedes-Benz especializado en
                            mantenimiento, diagnosis, reparación y venta de
                            recambios originales.
                        </p>

                    </div>

                    {/* Servicios */}
                    <div>

                        <h3 className="mb-6 font-semibold uppercase tracking-wider text-white/80">
                            Servicios
                        </h3>

                        <ul className="space-y-3 text-white/70">

                            <li>
                                <Link href="/servicios">
                                    Taller
                                </Link>
                            </li>

                            <li>
                                <Link href="/cita">
                                    Reserva de cita
                                </Link>
                            </li>

                            <li>
                                <Link href="/recambios">
                                    Recambios
                                </Link>
                            </li>

                            <li>
                                <Link href="/diagnosis">
                                    Diagnosis
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Empresa */}
                    <div>

                        <h3 className="mb-6 font-semibold uppercase tracking-wider text-white/80">
                            Empresa
                        </h3>

                        <ul className="space-y-3 text-white/70">

                            <li>
                                <Link href="/nosotros">
                                    Sobre nosotros
                                </Link>
                            </li>

                            <li>
                                <Link href="/contacto">
                                    Contacto
                                </Link>
                            </li>

                            <li>
                                <Link href="/empleo">
                                    Empleo
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Atención */}
                    <div>

                        <h3 className="mb-6 font-semibold uppercase tracking-wider text-white/80">
                            Atención
                        </h3>

                        <ul className="space-y-3 text-white/70">

                            <li>
                                <Link href="/ayuda">
                                    Ayuda
                                </Link>
                            </li>

                            <li>
                                <Link href="/faq">
                                    Preguntas frecuentes
                                </Link>
                            </li>

                            <li>
                                <Link href="/soporte">
                                    Soporte
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

                {/* Línea */}
                <div className="my-12 h-px bg-white/10" />

                {/* Parte inferior */}
                <div className="flex flex-col gap-6 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">

                    <p>
                        © 2026 Autotalleres Orihuela. Todos los derechos reservados.
                    </p>

                    <div className="flex flex-wrap gap-6">

                        <Link href="/aviso-legal">
                            Aviso legal
                        </Link>

                        <Link href="/privacidad">
                            Política de privacidad
                        </Link>

                        <Link href="/cookies">
                            Política de cookies
                        </Link>

                        <Link href="/accesibilidad">
                            Accesibilidad
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}