import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingAppointmentButton from "@/components/ui/FloatingAppointmentButton";

type Props = {
    children: ReactNode;
};

/** Shared chrome for every localized public page. */
export default function SiteLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <FloatingAppointmentButton />
            <Footer />
        </>
    );
}
