import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingAppointmentButton from "@/components/ui/FloatingAppointmentButton";

import SiteChrome from "@/components/layout/SiteChrome";

type Props = Readonly<{
    children: ReactNode;
}>;

export default function SiteLayout({ children }: Props) {
    return (
        <SiteChrome
            header={<Navbar />}
            floating={<FloatingAppointmentButton />}
            footer={<Footer />}
        >
            {children}
        </SiteChrome>
    );
}