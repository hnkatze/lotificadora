import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"

export const metadata: Metadata = {
  title: `${siteConfig.pages.project.hero.title} - ${siteConfig.general.siteName}`,
  description: `${siteConfig.pages.project.hero.subtitle}. ${siteConfig.general.shortDescription}`,
  openGraph: {
    title: `${siteConfig.pages.project.hero.title} - ${siteConfig.general.siteName}`,
    description: siteConfig.pages.project.hero.subtitle,
    type: "website",
  },
}

export default function ProyectoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}