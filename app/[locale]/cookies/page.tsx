import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = {
    title: "Política de cookies",
    description: "Política de cookies de Auto-Talleres Orihuela S.L.",
    alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
    return (
        <>
            <Navbar />
            <LegalContent
                eyebrow="Información legal"
                title="Política de cookies"
                intro="Información sobre el uso de tecnologías de almacenamiento y recuperación de datos en este sitio web."
                sections={[
                    {
                        title: "Qué son las cookies",
                        content: <p>Las cookies son pequeños archivos que el navegador puede almacenar en su dispositivo al visitar un sitio web. Permiten recordar información técnica necesaria para que algunas funciones operen correctamente.</p>,
                    },
                    {
                        title: "Cookies utilizadas",
                        content: <p>Este sitio utiliza únicamente las cookies técnicas necesarias para su funcionamiento y seguridad. No se emplean cookies publicitarias ni se elaboran perfiles comerciales a través de cookies.</p>,
                    },
                    {
                        title: "Gestión de cookies",
                        content: <p>Puede permitir, bloquear o eliminar las cookies desde las opciones de configuración de su navegador. Tenga en cuenta que la desactivación de cookies técnicas puede afectar al funcionamiento de algunas partes del sitio.</p>,
                    },
                    {
                        title: "Actualizaciones",
                        content: <p>Esta política podrá actualizarse para reflejar cambios técnicos, legales o en el uso de cookies. Le recomendamos revisarla periódicamente.</p>,
                    },
                ]}
            />
            <Footer />
        </>
    );
}
