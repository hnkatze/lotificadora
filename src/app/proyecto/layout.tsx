import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyecto - Valle Sereno",
  description: "Conoce el proyecto Valle Sereno: desarrollo residencial moderno con visión sustentable, calidad de vida y crecimiento patrimonial garantizado.",
  openGraph: {
    title: "Conoce el Proyecto - Valle Sereno",
    description: "Desarrollo residencial con visión de futuro",
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