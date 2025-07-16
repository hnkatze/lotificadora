import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Valle Sereno",
  description: "Contáctanos para más información sobre los lotes residenciales en Valle Sereno. Atención personalizada, visitas guiadas y asesoría completa.",
  openGraph: {
    title: "Contacto - Valle Sereno",
    description: "Agenda tu visita y conoce tu futuro hogar",
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