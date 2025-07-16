'use client'
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import OptimizedImage from "@/components/OptimizedImage"
import { siteConfig } from "@/config/site-config"

export default function ProyectoPage() {
  const prefersReducedMotion = useReducedMotion()
  const { project } = siteConfig.pages
  const { info } = project

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60 z-10"></div>
        <div className="absolute inset-0">
          <OptimizedImage
            src={project.hero.backgroundImage.src}
            alt={project.hero.backgroundImage.alt}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.hero.title}</h1>
          <p className="text-xl text-gray-200">{project.hero.subtitle}</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        animate={prefersReducedMotion ? undefined : "animate"}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {info.stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={prefersReducedMotion ? undefined : fadeInUp} 
                className="text-center bg-white p-8 rounded-2xl shadow-lg"
              >
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
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{info.vision.title}</h2>
              <p className="text-xl text-gray-600 mb-8">{info.vision.description}</p>
              <ul className="space-y-4">
                {info.vision.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="relative h-96 rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/images/forest-view.jpg"
                alt="Visión del proyecto Valle Sereno"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Por qué elegir {info.name}?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Características únicas que hacen de nuestro proyecto la mejor opción para tu inversión
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {info.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                whileHover={prefersReducedMotion ? undefined : { y: -5 }}
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
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={prefersReducedMotion ? undefined : staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Línea de Tiempo del Proyecto</h2>
            <p className="text-xl text-gray-600">El desarrollo progresivo de {info.name}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {info.timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-emerald-600">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-2 mr-8 relative">
                  {index !== info.timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-emerald-200"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">¿Te interesa nuestro proyecto?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Conoce más detalles y encuentra el lote perfecto para ti
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
                Contactar Asesor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}