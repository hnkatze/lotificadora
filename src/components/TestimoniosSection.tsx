"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { siteConfig } from "@/config/site-config"

export default function TestimoniosSection() {
  const { testimonials } = siteConfig

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600">Testimonios reales de familias que ya viven su sueño</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonio, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">&ldquo;{testimonio.text}&rdquo;</p>
              <div>
                <p className="font-bold text-gray-800">{testimonio.name}</p>
                <p className="text-gray-500 text-sm">{testimonio.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}