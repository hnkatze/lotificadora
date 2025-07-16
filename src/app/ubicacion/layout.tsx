import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"

export const metadata: Metadata = {
  title: `${siteConfig.pages.location.hero.title} - ${siteConfig.general.siteName}`,
  description: `${siteConfig.pages.location.hero.subtitle}. ${siteConfig.general.shortDescription}`,
  openGraph: {
    title: `${siteConfig.pages.location.hero.title} - ${siteConfig.general.siteName}`,
    description: siteConfig.pages.location.hero.subtitle,
    type: "website",
  },
}

export default function UbicacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}