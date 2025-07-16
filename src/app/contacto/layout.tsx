import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"

export const metadata: Metadata = {
  title: `${siteConfig.pages.contact.hero.title} - ${siteConfig.general.siteName}`,
  description: `${siteConfig.pages.contact.hero.subtitle}. ${siteConfig.general.shortDescription}`,
  openGraph: {
    title: `${siteConfig.pages.contact.hero.title} - ${siteConfig.general.siteName}`,
    description: siteConfig.pages.contact.hero.subtitle,
    type: "website",
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}