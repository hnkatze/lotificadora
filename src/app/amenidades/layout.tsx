import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"

export const metadata: Metadata = {
  title: `${siteConfig.pages.amenities.hero.title} - ${siteConfig.general.siteName}`,
  description: `${siteConfig.pages.amenities.hero.subtitle}. ${siteConfig.general.shortDescription}`,
  openGraph: {
    title: `${siteConfig.pages.amenities.hero.title} - ${siteConfig.general.siteName}`,
    description: siteConfig.pages.amenities.hero.subtitle,
    type: "website",
  },
}

export default function AmenidadesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}