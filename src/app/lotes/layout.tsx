import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"

export const metadata: Metadata = {
  title: `${siteConfig.pages.lots.hero.title} - ${siteConfig.general.siteName}`,
  description: `${siteConfig.pages.lots.hero.subtitle}. ${siteConfig.general.shortDescription}`,
  openGraph: {
    title: `${siteConfig.pages.lots.hero.title} - ${siteConfig.general.siteName}`,
    description: siteConfig.pages.lots.hero.subtitle,
    type: "website",
  },
}

export default function LotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}