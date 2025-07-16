import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.general.siteName} - ${siteConfig.general.tagline}`,
  description: siteConfig.general.description,
  keywords: siteConfig.general.keywords,
  authors: [{ name: siteConfig.general.companyName }],
  openGraph: {
    title: `${siteConfig.general.siteName} - ${siteConfig.general.tagline}`,
    description: siteConfig.general.shortDescription,
    type: "website",
    locale: "es_ES",
    siteName: siteConfig.general.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.general.siteName} - ${siteConfig.general.tagline}`,
    description: siteConfig.general.shortDescription,
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
