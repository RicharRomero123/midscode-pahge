import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import FooterBlock from "@/components/ui/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Midscode",
  description: "Midscode ofrece desarrollo de páginas web en Perú y servicios de diseño de flyers para todo tipo de negocios. Nuestro desarrollo es moderno, rápido y a precios accesibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Midscode, desarrollo de páginas web, Perú, diseño de flyers, negocios, desarrollo moderno, desarrollo rápido, precios accesibles" />
        <meta name="author" content="Midscode" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.midscode.com" />
        <meta property="og:title" content="Midscode - Desarrollo de Páginas Web y Diseño de Flyers en Perú" />
        <meta property="og:description" content="Midscode ofrece desarrollo de páginas web en Perú y servicios de diseño de flyers para todo tipo de negocios. Nuestro desarrollo es moderno, rápido y a precios accesibles." />
        <meta property="og:url" content="https://www.midscode.com" />
        <meta property="og:type" content="website" />
        <title>Midscode - Desarrollo de Páginas Web y Diseño de Flyers en Perú</title>
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <FooterBlock />
      </body>
    </html>
  );
}
