import type { ReactNode } from "react";

import SiteLayout from "@/components/layout/SiteLayout";

type Props = Readonly<{
    children: ReactNode;
}>;

export default function PublicLayout({ children }: Props) {
    return (
        <SiteLayout>
            {children}
        </SiteLayout>
    );
}