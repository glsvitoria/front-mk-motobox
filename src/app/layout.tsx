import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteNavigationElementData } from "@/utils/siteNavigationElementData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MK MotoBox - Motos Usadas com Qualidade e Procedência",
  description:
    "MK MotoBox oferece motos usadas de qualidade com curadoria e procedência garantida. Anuncie sua moto ou compre com confiança e segurança em todo o Brasil.",
  keywords:
    "motos usadas, MK MotoBox, motos seminovas, motos de qualidade, motos com procedência, comprar motos, vender motos, Barra World Shopping, Henrique Costa",
  authors: [
    {
      name: "Guilherme Vitória",
      url: "https://glsvitoria.vercel.app/",
    },
  ],
  openGraph: {
    title: "MK MotoBox - Motos Usadas de Qualidade em Todo o Brasil",
    description:
      "Encontre motos usadas com procedência garantida e excelente estado de conservação na MK MotoBox. Anuncie sua moto com segurança e confiança.",
    images: [
      {
        url: "https://res.cloudinary.com/dg0rly54r/image/upload/v1734636110/myn1ymsh1ynu7grugsvd.png",
      },
    ],
    url: "https://www.mkmotobox.com.br/",
  },
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: "/logo-mk.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <script
        id="site-navigation-element"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationElementData),
        }}
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-foundation-black-13 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
