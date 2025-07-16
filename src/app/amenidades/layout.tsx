import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Amenidades - Valle Sereno",
  description: "Descubre las amenidades premium de Valle Sereno: seguridad 24/7, áreas verdes, vías pavimentadas, servicios completos y más para tu comodidad.",
  openGraph: {
    title: "Amenidades Premium - Valle Sereno",
    description: "Seguridad 24/7, parques, servicios completos y más",
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