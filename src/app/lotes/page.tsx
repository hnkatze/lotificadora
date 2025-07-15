'use client'
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import { CheckCircle, TreePine, Shield, Zap, Droplets } from "lucide-react"
import { useState } from "react"

export default function LotesPage() {
  const [selectedLote, setSelectedLote] = useState("250")
  const [paymentPlan, setPaymentPlan] = useState("financiado")

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const lotes = [
    {
      id: "250",
      size: "250",
      price: 45000,
      location: "Frente a parque",
      features: ["Topografía plana", "Servicios incluidos", "Escrituración rápida", "Vista al parque"],
      available: 25,
      popular: false,
    },
    {
      id: "350",
      size: "350",
      price: 62000,
      location: "Esquina arbolada",
      features: ["Vista panorámica", "Doble frente", "Zona premium", "Árboles nativos"],
      available: 18,
      popular: true,
    },
    {
      id: "500",
      size: "500+",
      price: 90000,
      location: "Zona premium",
      features: ["Máxima privacidad", "Terreno irregular", "Exclusividad total", "Diseño personalizado"],
      available: 8,
      popular: false,
    },
  ]

  const includedServices = [
    { icon: Zap, name: "Energía eléctrica", desc: "Instalación subterránea" },
    { icon: Droplets, name: "Agua potable", desc: "Red municipal certificada" },
    { icon: Shield, name: "Seguridad", desc: "Vigilancia 24/7" },
    { icon: TreePine, name: "Áreas verdes", desc: "Mantenimiento incluido" },
  ]

  const calculatePayment = (price: number, plan: string) => {
    if (plan === "contado") {
      return price * 0.95 // 5% descuento
    } else if (plan === "financiado") {
      return price / 60 // 60 meses
    }
    return price
  }

  const selectedLoteData = lotes.find((lote) => lote.id === selectedLote)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/placeholder.svg?height=600&width=1920)",
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Lotes Disponibles</h1>
          <p className="text-xl text-gray-200">Encuentra el lote perfecto para construir el hogar de tus sueños</p>
        </motion.div>
      </section>

      {/* Lotes Grid */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Elige tu Lote Ideal</h2>
            <p className="text-xl text-gray-600">Diferentes tamaños y ubicaciones para adaptarse a tus necesidades</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {lotes.map((lote, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  lote.popular ? "ring-2 ring-emerald-500" : ""
                }`}
              >
                {lote.popular && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                )}

                <div className="bg-emerald-600 text-white p-6 text-center">
                  <h3 className="text-3xl font-bold mb-2">{lote.size}m²</h3>
                  <p className="text-emerald-100">{lote.location}</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold">${lote.price.toLocaleString()}</span>
                    <p className="text-emerald-100 text-sm">Precio desde</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Disponibles:</span>
                      <span className="font-semibold text-emerald-600">{lote.available} lotes</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {lote.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedLote(lote.id)}
                      className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                    >
                      Ver Detalles
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
                    >
                      Agendar Visita
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Payment Calculator */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Calculadora de Pagos</h2>
            <p className="text-xl text-gray-600">Descubre cuánto pagarías según tu plan preferido</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Configuración</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Tamaño del lote:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {lotes.map((lote) => (
                        <button
                          key={lote.id}
                          onClick={() => setSelectedLote(lote.id)}
                          className={`p-3 rounded-lg border-2 transition-colors ${
                            selectedLote === lote.id
                              ? "border-emerald-600 bg-emerald-50 text-emerald-600"
                              : "border-gray-300 hover:border-emerald-300"
                          }`}
                        >
                          {lote.size}m²
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Plan de pago:</label>
                    <div className="space-y-2">
                      <button
                        onClick={() => setPaymentPlan("contado")}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                          paymentPlan === "contado"
                            ? "border-emerald-600 bg-emerald-50"
                            : "border-gray-300 hover:border-emerald-300"
                        }`}
                      >
                        <div className="font-semibold">Pago de contado</div>
                        <div className="text-sm text-gray-600">5% de descuento</div>
                      </button>
                      <button
                        onClick={() => setPaymentPlan("financiado")}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                          paymentPlan === "financiado"
                            ? "border-emerald-600 bg-emerald-50"
                            : "border-gray-300 hover:border-emerald-300"
                        }`}
                      >
                        <div className="font-semibold">Financiamiento directo</div>
                        <div className="text-sm text-gray-600">Hasta 60 meses sin intereses</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Resumen</h3>
                {selectedLoteData && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lote seleccionado:</span>
                        <span className="font-semibold">{selectedLoteData.size}m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Precio base:</span>
                        <span className="font-semibold">${selectedLoteData.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plan de pago:</span>
                        <span className="font-semibold capitalize">{paymentPlan}</span>
                      </div>
                      <hr className="border-gray-300" />
                      {paymentPlan === "contado" ? (
                        <div className="flex justify-between text-lg">
                          <span className="font-bold text-gray-800">Total a pagar:</span>
                          <span className="font-bold text-emerald-600">
                            ${calculatePayment(selectedLoteData.price, paymentPlan).toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Enganche (10%):</span>
                            <span className="font-semibold">${(selectedLoteData.price * 0.1).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-lg">
                            <span className="font-bold text-gray-800">Pago mensual:</span>
                            <span className="font-bold text-emerald-600">
                              ${Math.round(calculatePayment(selectedLoteData.price, paymentPlan)).toLocaleString()}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors mt-6"
                    >
                      Solicitar Cotización
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Included Services */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Servicios Incluidos</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas está incluido en el precio</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includedServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-emerald-600"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">¿Encontraste tu lote ideal?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              No esperes más, los mejores lotes se agotan rápido. Reserva el tuyo hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Reservar Lote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Más Información
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}
