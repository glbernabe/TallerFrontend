import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}