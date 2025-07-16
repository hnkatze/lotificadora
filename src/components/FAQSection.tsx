"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const faqs = [
  {
    q: "¿Cuánto tiempo toma la escrituración?",
    a: "El proceso de escrituración toma entre 30 a 45 días hábiles una vez completado el pago.",
  },
  {
    q: "¿Puedo construir cualquier estilo de casa?",
    a: "Sí, respetando las normas de construcción y el reglamento interno del residencial.",
  },
  { 
    q: "¿Hay restricciones de altura?", 
    a: "La altura máxima permitida es de 3 niveles o 12 metros de altura." 
  },
  {
    q: "¿Incluyen estudios topográficos?",
    a: "Sí, todos los lotes incluyen levantamiento topográfico y certificado de linderos.",
  },
]

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600">Resolvemos tus dudas más comunes</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full bg-white p-6 rounded-xl shadow-lg text-left flex justify-between items-center hover:shadow-xl transition-shadow"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-800">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gray-100 p-6 rounded-b-xl"
                >
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}