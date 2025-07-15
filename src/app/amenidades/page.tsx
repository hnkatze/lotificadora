"use client"
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import {
  Shield,
  Trees,
  Car,
  Wifi,
  Droplets,
  Zap,
  Camera,
  Users,
  Dumbbell,
  Gamepad2,
  Waves,
  ParkingCircle,
  Phone,
  Trash2,
  Wind,
  Sun,
} from "lucide-react"

export default function AmenidadesPage() {
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

  const mainAmenities = [
    {
      icon: Shield,
      title: "Seguridad 24/7",
      description: "Sistema de vigilancia completo con cámaras HD, control de acceso y patrullaje constante",
      features: ["Cámaras de seguridad", "Control de acceso", "Patrullaje vehicular", "Alarmas perimetrales"],
    },
    {
      icon: Trees,
      title: "Áreas Verdes",
      description: "Espacios naturales diseñados para el disfrute familiar y la conservación del medio ambiente",
      features: ["Parques temáticos", "Senderos ecológicos", "Jardines botánicos", "Zonas de picnic"],
    },
    {
      icon: Waves,
      title: "Área Recreativa",
      description: "Instalaciones deportivas y recreativas para toda la familia",
      features: ["Piscina comunitaria", "Canchas deportivas", "Área de juegos", "Salón de eventos"],
    },
    {
      icon: Car,
      title: "Vialidad Premium",
      description: "Infraestructura vial de primera calidad con iluminación LED y señalización completa",
      features: ["Calles de concreto", "Iluminación LED", "Señalización vial", "Banquetas amplias"],
    },
  ]

  const infrastructureServices = [
    { icon: Zap, title: "Energía Eléctrica", desc: "Red subterránea de alta calidad" },
    { icon: Droplets, title: "Agua Potable", desc: "Sistema municipal certificado" },
    { icon: Wifi, title: "Fibra Óptica", desc: "Internet de alta velocidad" },
    { icon: Phone, title: "Telefonía", desc: "Red de telecomunicaciones" },
    { icon: Trash2, title: "Recolección", desc: "Servicio de basura incluido" },
    { icon: Wind, title: "Drenaje", desc: "Sistema pluvial y sanitario" },
  ]

  const recreationalAreas = [
    {
      icon: Dumbbell,
      title: "Gimnasio al Aire Libre",
      description: "Equipos de ejercicio en espacios naturales",
    },
    {
      icon: Gamepad2,
      title: "Área de Juegos Infantiles",
      description: "Zona segura con juegos modernos para niños",
    },
    {
      icon: Users,
      title: "Salón Comunitario",
      description: "Espacio para eventos y reuniones familiares",
    },
    {
      icon: ParkingCircle,
      title: "Estacionamiento Visitantes",
      description: "Áreas designadas para huéspedes",
    },
  ]

  const sustainabilityFeatures = [
    {
      icon: Sun,
      title: "Energía Solar",
      description: "Iluminación pública con paneles solares para reducir el impacto ambiental",
    },
    {
      icon: Droplets,
      title: "Captación Pluvial",
      description: "Sistema de recolección de agua de lluvia para riego de áreas verdes",
    },
    {
      icon: Trees,
      title: "Reforestación",
      description: "Programa de siembra de árboles nativos para preservar el ecosistema",
    },
    {
      icon: Wind,
      title: "Tratamiento de Aguas",
      description: "Planta de tratamiento para el manejo responsable de aguas residuales",
    },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Amenidades y Servicios</h1>
          <p className="text-xl text-gray-200">Todo lo que necesitas para vivir cómodamente en un solo lugar</p>
        </motion.div>
      </section>

      {/* Main Amenities */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Amenidades Principales</h2>
            <p className="text-xl text-gray-600">Servicios diseñados para mejorar tu calidad de vida</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <amenity.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{amenity.title}</h3>
                    <p className="text-gray-600 mb-4">{amenity.description}</p>
                    <ul className="space-y-2">
                      {amenity.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infrastructure Services */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Servicios de Infraestructura</h2>
            <p className="text-xl text-gray-600">Servicios básicos de la más alta calidad</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recreational Areas */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Áreas Recreativas</h2>
            <p className="text-xl text-gray-600">Espacios para el entretenimiento y la convivencia familiar</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recreationalAreas.map((area, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sustainability Features */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Compromiso Ambiental</h2>
            <p className="text-xl text-gray-600">Desarrollo sostenible para las futuras generaciones</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-emerald-100 p-4 rounded-full">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Preview */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Galería de Amenidades</h2>
            <p className="text-xl text-gray-600">Conoce nuestras instalaciones</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <Camera className="h-12 w-12 text-gray-400" />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Ver Galería Completa
            </motion.button>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">¿Te gustan nuestras amenidades?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Ven a conocer personalmente todas las comodidades que Valle Sereno tiene para ti
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Agendar Tour de Amenidades
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}
