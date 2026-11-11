import type { ReactNode } from "react";

type Props = Readonly<{
    children: ReactNode;
    header: ReactNode;
    floating?: ReactNode;
    footer: ReactNode;
}>;

export default function SiteChrome({
    children,
    header,
    floating,
    footer,
}: Props) {
    return (
        <>
            {header}
            {children}
            {floating}
            {footer}
        </>
    );
}