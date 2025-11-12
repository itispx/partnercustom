import "../styles/globals.scss";

import type { Metadata } from "next";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Partner Custom",
  description:
    "Empresa especializada na criação e personalização de Trailers e Motorhomes localizada na cidade de Portão, no estado do Rio Grande do sul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header logoSrc="/logo.png" logoAlt="PartnerCustom" />

        <main>{children}</main>

        <div style={{ margin: 150 }} />

        <Footer />
      </body>
    </html>
  );
}
