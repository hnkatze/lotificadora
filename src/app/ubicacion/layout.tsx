import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ubicación - Valle Sereno",
  description: "Ubicación estratégica de Valle Sereno: a 10 minutos del centro urbano, cerca de escuelas, hospitales y centros comerciales. Fácil acceso vial.",
  openGraph: {
    title: "Ubicación Estratégica - Valle Sereno",
    description: "Conectividad y naturaleza en perfecto equilibrio",
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