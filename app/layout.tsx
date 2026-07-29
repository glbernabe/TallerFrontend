import { mbCorpoText, mbCorpoTitle } from "@/fonts/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${mbCorpoText.variable} ${mbCorpoTitle.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}