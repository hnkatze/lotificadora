'use client'
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import { MapPin } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import OptimizedImage from "@/components/OptimizedImage"
import { siteConfig } from "@/config/site-config"

export default function UbicacionPage() {
  const prefersReducedMotion = useReducedMotion()
  const { location } = siteConfig.pages

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60 z-10"></div>
        <div className="absolute inset-0">
          <OptimizedImage
            src={location.hero.backgroundImage.src}
            alt={location.hero.backgroundImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{location.hero.title}</h1>
          <p className="text-xl text-gray-200">{location.hero.subtitle}</p>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        animate={prefersReducedMotion ? undefined : "animate"}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ubicación del Proyecto</h2>
            <p className="text-xl text-gray-600">Fácil acceso y excelente conectividad</p>
          </motion.div>

          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            {location.mapEmbed ? (
              <div dangerouslySetInnerHTML={{ __html: location.mapEmbed }} className="w-full h-full" />
            ) : (
              <>
                <MapPin className="h-16 w-16 text-emerald-600" />
                <p className="text-gray-600 ml-4">Mapa interactivo próximamente</p>
              </>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Nearby Places */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Lugares Cercanos</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas a pocos minutos</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {location.nearby.map((place, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <place.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{place.name}</h3>
                <p className="text-gray-600 mb-2">{place.distance}</p>
                <p className="text-emerald-600 font-semibold">{place.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Transport Options */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Opciones de Transporte</h2>
            <p className="text-xl text-gray-600">Múltiples formas de llegar</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {location.transport.map((option, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{option.type}</h3>
                <ul className="space-y-2">
                  {option.routes.map((route, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{route}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ventajas de la Ubicación</h2>
            <p className="text-xl text-gray-600">¿Por qué esta es la mejor zona para vivir?</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Conectividad</h3>
              <p className="text-gray-600">
                Acceso directo a las principales vías de comunicación, facilitando el desplazamiento a cualquier
                punto de la ciudad.
              </p>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Desarrollo Urbano</h3>
              <p className="text-gray-600">
                Zona en constante crecimiento con nuevos comercios, servicios y proyectos que aumentan la plusvalía.
              </p>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Entorno Natural</h3>
              <p className="text-gray-600">
                Alejado del ruido de la ciudad pero con todas las comodidades urbanas a pocos minutos.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20 bg-emerald-600"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">¿Te gusta la ubicación?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Agenda una visita para conocer personalmente todas las ventajas de vivir en {siteConfig.general.siteName}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Agendar Visita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Ver Disponibilidad
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}