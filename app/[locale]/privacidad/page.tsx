import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = {
    title: "Política de privacidad",
    description: "Política de privacidad de Auto-Talleres Orihuela S.L.",
    alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <LegalContent
                eyebrow="Información legal"
                title="Política de privacidad"
                intro="Así tratamos los datos personales que nos facilite al contactar con Auto-Talleres Orihuela."
                sections={[
                    {
                        title: "Responsable del tratamiento",
                        content: <p>El responsable del tratamiento es Autotalleres Orihuela S.L., con NIF B03934908 y domicilio en Carretera Murcia-Alicante, km 28, 03300 Orihuela, Alicante, España. Puede contactar en orihuela.ato@autotalleresorihuela.es o en el teléfono 966 74 44 66.</p>,
                    },
                    {
                        title: "Datos y finalidad",
                        content: <p>Tratamos los datos de contacto y la información que facilite en sus consultas para atender su solicitud, resolver dudas y gestionar la relación profesional o comercial que pueda derivarse de ella.</p>,
                    },
                    {
                        title: "Base jurídica y conservación",
                        content: <p>El tratamiento se basa en su consentimiento al contactar con nosotros y, cuando corresponda, en la ejecución de medidas precontractuales o de una relación contractual. Los datos se conservarán durante el tiempo necesario para atender la solicitud y cumplir las obligaciones legales aplicables.</p>,
                    },
                    {
                        title: "Destinatarios",
                        content: <p>No se cederán datos a terceros salvo obligación legal o cuando resulte necesario para prestar el servicio solicitado. Los proveedores que puedan acceder a datos personales lo harán bajo las garantías legales correspondientes.</p>,
                    },
                    {
                        title: "Sus derechos",
                        content: <p>Puede solicitar el acceso, rectificación, supresión, oposición, limitación o portabilidad de sus datos escribiendo a orihuela.ato@autotalleresorihuela.es. También puede presentar una reclamación ante la autoridad competente en materia de protección de datos.</p>,
                    },
                ]}
            />
            <Footer />
        </>
    );
}
