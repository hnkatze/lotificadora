'use client'
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import { Award, Users, Calendar, MapPin, Shield, Leaf, Building, TrendingUp } from "lucide-react"

export default function ProyectoPage() {
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

  const stats = [
    { number: "15", label: "Hectáreas", icon: MapPin },
    { number: "120", label: "Lotes disponibles", icon: Building },
    { number: "3", label: "Años de desarrollo", icon: Calendar },
    { number: "95%", label: "Satisfacción cliente", icon: Award },
  ]

  const features = [
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Sistema de vigilancia 24/7 con tecnología de punta y acceso controlado para máxima tranquilidad.",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Proyecto eco-amigable con áreas verdes, manejo de aguas pluviales y energías renovables.",
    },
    {
      icon: TrendingUp,
      title: "Plusvalía Garantizada",
      description: "Ubicación estratégica con crecimiento urbano planificado que asegura la valorización.",
    },
    {
      icon: Users,
      title: "Comunidad Familiar",
      description: "Diseñado para familias que buscan calidad de vida en un ambiente seguro y natural.",
    },
  ]

  const timeline = [
    { year: "2023", title: "Inicio del Proyecto", desc: "Adquisición del terreno y estudios preliminares" },
    { year: "2024", title: "Fase de Urbanización", desc: "Construcción de infraestructura y servicios básicos" },
    { year: "2025", title: "Entrega de Lotes", desc: "Inicio de ventas y entrega de primeros lotes" },
    { year: "2026", title: "Consolidación", desc: "Finalización de amenidades y consolidación del residencial" },
  ]

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nuestro Proyecto</h1>
          <p className="text-xl text-gray-200">Un desarrollo inmobiliario pensado para el futuro de tu familia</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <stat.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 mb-6">
                Valle Sereno nace de la visión de crear un espacio donde las familias puedan construir no solo su hogar,
                sino su futuro. Un lugar donde la naturaleza y la modernidad se encuentran para ofrecer calidad de vida
                excepcional.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Cada detalle ha sido cuidadosamente planificado para garantizar que nuestros residentes disfruten de un
                entorno seguro, sostenible y en constante crecimiento.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
              >
                Conocer Más
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <Building className="h-24 w-24 text-emerald-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Por qué elegir Valle Sereno?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Características únicas que hacen de nuestro proyecto la mejor opción para tu inversión
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Cronograma del Proyecto</h2>
            <p className="text-xl text-gray-600">Conoce las etapas de desarrollo de Valle Sereno</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start mb-12 last:mb-0">
                <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">¿Listo para ser parte de Valle Sereno?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              No pierdas la oportunidad de invertir en tu futuro. Contáctanos hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Lotes Disponibles
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Agendar Visita
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}
