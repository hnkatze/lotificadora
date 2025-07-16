import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lotes Disponibles - Valle Sereno",
  description: "Lotes residenciales desde 250m² hasta 500m² con excelente ubicación, servicios completos y financiamiento disponible. ¡Invierte en tu patrimonio!",
  openGraph: {
    title: "Lotes desde 250m² - Valle Sereno",
    description: "Encuentra el lote perfecto para construir tu hogar",
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