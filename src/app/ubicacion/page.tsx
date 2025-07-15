"use client"
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import {
  MapPin,
  Car,
  GraduationCap,
  ShoppingCart,
  Hospital,
  Plane,
  Bus,
  Clock,
  Navigation,
  TreePine,
  Building2,
  Fuel,
} from "lucide-react"

export default function UbicacionPage() {
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

  const nearbyPlaces = [
    {
      icon: GraduationCap,
      name: "Centro Educativo San José",
      distance: "2.5 km",
      time: "5 min",
      type: "Educación",
    },
    {
      icon: ShoppingCart,
      name: "Plaza Comercial Central",
      distance: "3.2 km",
      time: "7 min",
      type: "Comercio",
    },
    {
      icon: Hospital,
      name: "Hospital Regional",
      distance: "4.1 km",
      time: "8 min",
      type: "Salud",
    },
    {
      icon: Plane,
      name: "Aeropuerto Internacional",
      distance: "25 km",
      time: "30 min",
      type: "Transporte",
    },
    {
      icon: Bus,
      name: "Terminal de Autobuses",
      distance: "8.5 km",
      time: "15 min",
      type: "Transporte",
    },
    {
      icon: Fuel,
      name: "Estación de Servicio",
      distance: "1.8 km",
      time: "3 min",
      type: "Servicios",
    },
  ]

  const advantages = [
    {
      icon: Car,
      title: "Acceso Vehicular Directo",
      description: "Conexión directa con la carretera principal sin tráfico urbano",
    },
    {
      icon: TreePine,
      title: "Entorno Natural",
      description: "Rodeado de bosques y áreas verdes que garantizan aire puro",
    },
    {
      icon: Building2,
      title: "Desarrollo Urbano Planificado",
      description: "Zona de crecimiento controlado con infraestructura moderna",
    },
    {
      icon: Navigation,
      title: "Ubicación Estratégica",
      description: "Punto central entre la ciudad y zonas de desarrollo futuro",
    },
  ]

  const transportOptions = [
    { type: "Automóvil", time: "10 min", destination: "Centro de la ciudad" },
    { type: "Transporte público", time: "25 min", destination: "Plaza principal" },
    { type: "Bicicleta", time: "20 min", destination: "Parque central" },
    { type: "Caminata", time: "35 min", destination: "Servicios básicos" },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ubicación Privilegiada</h1>
          <p className="text-xl text-gray-200">En el corazón del crecimiento urbano, cerca de todo lo que necesitas</p>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Encuentra Valle Sereno</h2>
            <p className="text-xl text-gray-600">Ubicado estratégicamente para ofrecerte la mejor calidad de vida</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mb-8"
          >
            <div className="text-center">
              <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <p className="text-gray-600">Mapa interactivo próximamente</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Dirección:</strong> Km 15.5 Carretera a San Lucas, Valle Sereno
            </p>
            <p className="text-gray-600">Coordenadas: 14.6349° N, 90.5069° W</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Nearby Places */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Lugares de Interés Cercanos</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas está a pocos minutos de distancia</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyPlaces.map((place, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <place.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">{place.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{place.type}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {place.distance}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {place.time}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advantages */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ventajas de la Ubicación</h2>
            <p className="text-xl text-gray-600">Por qué Valle Sereno está en el lugar perfecto</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-emerald-100 p-4 rounded-full">
                  <advantage.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Transport Options */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Opciones de Transporte</h2>
            <p className="text-xl text-gray-600">Múltiples formas de llegar a tu destino</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportOptions.map((option, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">{option.time}</div>
                <h3 className="font-bold text-gray-800 mb-2">{option.type}</h3>
                <p className="text-gray-600 text-sm">{option.destination}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-emerald-600"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">¿Quieres conocer la ubicación en persona?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Agenda una visita guiada y descubre por ti mismo las ventajas de nuestra ubicación
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Agendar Visita Guiada
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}
