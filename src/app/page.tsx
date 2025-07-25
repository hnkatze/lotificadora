'use client'
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import {
  MapPin,
  Shield,
  Trees,
  Car,
  Wifi,
  Droplets,
  Zap,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle,
  Calculator,
  FileText,
  Users,
  Award,
  Clock,
  DollarSign,
} from "lucide-react"
import Layout from "../components/layout"
import OptimizedImage from "../components/OptimizedImage"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/useReducedMotion"

// Lazy load heavy sections
const TestimoniosSection = dynamic(() => import("@/components/TestimoniosSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false,
})

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false,
})

export default function ResidencialLanding() {
  const prefersReducedMotion = useReducedMotion()

  const lotes = [
    {
      size: "250",
      price: "$45,000",
      location: "Frente a parque",
      features: ["Topografía plana", "Servicios incluidos", "Escrituración rápida"],
    },
    {
      size: "350",
      price: "$62,000",
      location: "Esquina arbolada",
      features: ["Vista panorámica", "Doble frente", "Zona premium"],
    },
    {
      size: "500+",
      price: "$90,000",
      location: "Zona premium",
      features: ["Máxima privacidad", "Terreno irregular", "Exclusividad total"],
    },
  ]

  const amenidades = [
    { icon: Shield, title: "Seguridad 24/7", desc: "Cerco perimetral y vigilancia" },
    { icon: Trees, title: "Áreas Verdes", desc: "Parques y senderos naturales" },
    { icon: Car, title: "Vías Pavimentadas", desc: "Calles de concreto hidráulico" },
    { icon: Wifi, title: "Fibra Óptica", desc: "Internet de alta velocidad" },
    { icon: Droplets, title: "Agua Potable", desc: "Red municipal certificada" },
    { icon: Zap, title: "Energía Eléctrica", desc: "Instalación subterránea" },
  ]


  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60 z-10"></div>
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/hero-landscape.jpg"
              alt="Vista aérea del desarrollo residencial Valle Sereno"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Construye tu sueño en el lugar perfecto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Lotes desde 250m² con infraestructura de primer nivel y seguridad 24/7
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Ver Lotes Disponibles
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Solicitar Precios
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </motion.div>
        </section>

        {/* Introducción al Proyecto */}
        <motion.section
          initial={prefersReducedMotion ? undefined : "initial"}
          whileInView={prefersReducedMotion ? undefined : "animate"}
          viewport={{ once: true }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          id="proyecto"
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Un espacio diseñado para familias</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Que buscan tranquilidad, naturaleza y crecimiento patrimonial en un entorno seguro y moderno
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Planos Certificados", desc: "Urbanización con todos los permisos municipales" },
                {
                  icon: CheckCircle,
                  title: "Infraestructura Completa",
                  desc: "Calles, agua, luz, drenaje y telecomunicaciones",
                },
                {
                  icon: DollarSign,
                  title: "Plusvalía Garantizada",
                  desc: "Ubicación estratégica con crecimiento asegurado",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={prefersReducedMotion ? undefined : fadeInUp}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <item.icon className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Ubicación */}
        <motion.section
          initial={prefersReducedMotion ? undefined : "initial"}
          whileInView={prefersReducedMotion ? undefined : "animate"}
          viewport={{ once: true }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          id="ubicacion"
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ubicación Privilegiada</h2>
              <p className="text-xl text-gray-600">
                A 10 minutos del centro urbano, con acceso directo a carretera principal
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="relative h-96 rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/images/aerial-view.jpg"
                  alt="Vista aérea de la ubicación del desarrollo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Centros Educativos</h3>
                    <p className="text-gray-600">Escuelas y universidades a menos de 5 km</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Centros Comerciales</h3>
                    <p className="text-gray-600">Plazas y supermercados en un radio de 3 km</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Trees className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Entorno Natural</h3>
                    <p className="text-gray-600">Rodeado de áreas verdes y baja densidad poblacional</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Tipos de Lotes */}
        <motion.section
          initial={prefersReducedMotion ? undefined : "initial"}
          whileInView={prefersReducedMotion ? undefined : "animate"}
          viewport={{ once: true }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          id="lotes"
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Lotes Disponibles</h2>
              <p className="text-xl text-gray-600">Diferentes tamaños para adaptarse a tus necesidades y presupuesto</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {lotes.map((lote, index) => (
                <motion.div
                  key={index}
                  variants={prefersReducedMotion ? undefined : fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-emerald-600 text-white p-6 text-center">
                    <h3 className="text-3xl font-bold mb-2">{lote.size}m²</h3>
                    <p className="text-emerald-100">{lote.location}</p>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-gray-800">{lote.price}</span>
                      <p className="text-gray-600">Precio desde</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {lote.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                    >
                      Más Información
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Amenidades */}
        <motion.section
          initial={prefersReducedMotion ? undefined : "initial"}
          whileInView={prefersReducedMotion ? undefined : "animate"}
          viewport={{ once: true }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          id="amenidades"
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Amenidades y Servicios</h2>
              <p className="text-xl text-gray-600">Todo lo que necesitas para vivir cómodamente</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenidades.map((amenidad, index) => (
                <motion.div
                  key={index}
                  variants={prefersReducedMotion ? undefined : fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenidad.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{amenidad.title}</h3>
                  <p className="text-gray-600">{amenidad.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Proceso de Compra */}
        <motion.section
          initial={prefersReducedMotion ? undefined : "initial"}
          whileInView={prefersReducedMotion ? undefined : "animate"}
          viewport={{ once: true }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Proceso de Compra Simplificado</h2>
              <p className="text-xl text-gray-600">En solo 3 pasos puedes ser propietario de tu lote</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Calculator, title: "Reserva", desc: "10% de enganche para apartar tu lote", step: "01" },
                { icon: FileText, title: "Personalización", desc: "Elección del lote y plan de pago", step: "02" },
                { icon: Award, title: "Escrituración", desc: "Asesoría legal incluida", step: "03" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={prefersReducedMotion ? undefined : fadeInUp}
                  className="relative bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <item.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4 mt-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Opciones de Pago</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-gray-200 rounded-xl">
                  <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-800 mb-2">Contado</h4>
                  <p className="text-gray-600">5% de descuento</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-xl">
                  <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-800 mb-2">Financiamiento</h4>
                  <p className="text-gray-600">Hasta 60 meses sin intereses</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-xl">
                  <FileText className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-800 mb-2">Crédito Bancario</h4>
                  <p className="text-gray-600">Convenios con bancos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonios */}
        <TestimoniosSection />

        {/* FAQ */}
        <FAQSection />

        {/* Contacto */}
        <motion.section
          initial={prefersReducedMotion ? undefined : "initial"}
          whileInView={prefersReducedMotion ? undefined : "animate"}
          viewport={{ once: true }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          id="contacto"
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">¿Listo para invertir en tu futuro?</h2>
              <p className="text-xl text-gray-600">Contáctanos y te ayudamos a encontrar el lote perfecto</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
                <form className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 mb-6"
                  />
                  <textarea
                    placeholder="Mensaje (opcional)"
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 mb-6"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    ¡Quiero que me contacten!
                  </motion.button>
                </form>
              </motion.div>

              <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Teléfono</h3>
                    <p className="text-gray-600">+504 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">info@vallesereno.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Oficinas</h3>
                    <p className="text-gray-600">Av. Principal #100, Ciudad</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                    <p className="text-gray-600">Asesor en línea disponible</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}
