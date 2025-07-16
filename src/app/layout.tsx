import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valle Sereno - Lotes Residenciales Premium",
  description: "Descubre Valle Sereno, el desarrollo residencial con lotes desde 250m², infraestructura de primer nivel, seguridad 24/7 y excelente ubicación. ¡Invierte en tu futuro hoy!",
  keywords: "lotes residenciales, terrenos en venta, desarrollo inmobiliario, valle sereno, inversión inmobiliaria, lotes premium",
  authors: [{ name: "Valle Sereno" }],
  openGraph: {
    title: "Valle Sereno - Lotes Residenciales Premium",
    description: "Lotes desde 250m² con infraestructura completa y seguridad 24/7",
    type: "website",
    locale: "es_ES",
    siteName: "Valle Sereno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valle Sereno - Lotes Residenciales Premium",
    description: "Lotes desde 250m² con infraestructura completa y seguridad 24/7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
