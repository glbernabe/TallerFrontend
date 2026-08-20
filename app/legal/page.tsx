import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = {
    title: "Aviso legal",
    description: "Aviso legal de Auto-Talleres Orihuela S.L.",
    alternates: { canonical: "/legal" },
};

export default function LegalPage() {
    return (
        <>
            <Navbar />
            <LegalContent
                eyebrow="Información legal"
                title="Aviso legal"
                intro="Condiciones de acceso y uso del sitio web de Auto-Talleres Orihuela S.L."
                sections={[
                    {
                        title: "Titularidad del sitio web",
                        content: <p>Este sitio web es titularidad de Autotalleres Orihuela S.L., con NIF B03934908 y domicilio en Carretera Murcia-Alicante, km 28, 03300 Orihuela, Alicante, España. Para cualquier consulta puede contactar a través del teléfono 966 74 44 66 o del correo orihuela.ato@autotalleresorihuela.es.</p>,
                    },
                    {
                        title: "Objeto",
                        content: <p>Este sitio tiene carácter informativo y presenta los servicios de mantenimiento, diagnosis y reparación ofrecidos por el taller. La información publicada no constituye una oferta contractual y puede actualizarse cuando sea necesario.</p>,
                    },
                    {
                        title: "Uso del sitio",
                        content: <p>La persona usuaria se compromete a utilizar el sitio de forma lícita, diligente y respetuosa, evitando cualquier actuación que pueda afectar a su seguridad, funcionamiento o contenidos.</p>,
                    },
                    {
                        title: "Propiedad intelectual",
                        content: <p>Los textos, imágenes, diseño, logotipos y demás contenidos de este sitio están protegidos por la normativa aplicable. No se permite su reproducción, distribución o transformación sin autorización previa del titular, salvo los usos legalmente permitidos.</p>,
                    },
                    {
                        title: "Responsabilidad",
                        content: <p>Auto-Talleres Orihuela S.L. procura mantener la información del sitio actualizada y exacta, sin que pueda garantizar la ausencia total de errores o interrupciones. El uso de la información se realiza bajo la responsabilidad de la persona usuaria.</p>,
                    },
                ]}
            />
            <Footer />
        </>
    );
}
