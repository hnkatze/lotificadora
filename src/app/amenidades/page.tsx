'use client'
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import OptimizedImage from "@/components/OptimizedImage"
import { siteConfig } from "@/config/site-config"

export default function AmenidadesPage() {
  const prefersReducedMotion = useReducedMotion()
  const { amenities } = siteConfig.pages

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60 z-10"></div>
        <div className="absolute inset-0">
          <OptimizedImage
            src={amenities.hero.backgroundImage.src}
            alt={amenities.hero.backgroundImage.alt}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{amenities.hero.title}</h1>
          <p className="text-xl text-gray-200">{amenities.hero.subtitle}</p>
        </motion.div>
      </section>

      {/* Main Amenities Categories */}
      {amenities.categories.map((category, categoryIndex) => (
        <motion.section
          key={categoryIndex}
          initial={prefersReducedMotion ? undefined : "initial"}
          whileInView={prefersReducedMotion ? undefined : "animate"}
          viewport={{ once: true }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          className={`py-20 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{category.title}</h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </motion.div>

            <div className={`grid ${category.amenities.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
              {category.amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={prefersReducedMotion ? undefined : fadeInUp}
                  whileHover={prefersReducedMotion ? undefined : category.amenities.length <= 3 ? { y: -5 } : { scale: 1.05 }}
                  className={`bg-white rounded-2xl shadow-lg p-${category.amenities.length <= 3 ? '8' : '6'} hover:shadow-xl transition-all duration-300`}
                >
                  {category.amenities.length <= 3 ? (
                    // Diseño detallado para categorías principales
                    <div className="flex items-start space-x-6">
                      <div className="bg-emerald-100 p-4 rounded-full">
                        <amenity.icon className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{amenity.title}</h3>
                        <p className="text-gray-600 mb-4">{amenity.description}</p>
                        {amenity.features && (
                          <ul className="space-y-2">
                            {amenity.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Diseño compacto para servicios de infraestructura
                    <div className="text-center">
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <amenity.icon className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{amenity.title}</h3>
                      <p className="text-gray-600">{amenity.description}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      ))}

      {/* Sustainability Features */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20 bg-emerald-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Compromiso Ambiental</h2>
            <p className="text-xl text-gray-600">Desarrollo sostenible para las futuras generaciones</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.sustainability.map((feature, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Preview */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Galería de Amenidades</h2>
            <p className="text-xl text-gray-600">Conoce nuestras instalaciones</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.gallery.map((image, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>

          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mt-12">
            <motion.button
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Ver Galería Completa
            </motion.button>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">¿Te gustan nuestras amenidades?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Agenda una visita para conocer personalmente todas las comodidades que {siteConfig.general.siteName} tiene para ti
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
                Descargar Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}