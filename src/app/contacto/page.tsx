'use client'
import type React from "react"

import { motion } from "framer-motion"
import Layout from "../../components/layout"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+504 1234-5678",
      description: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@vallesereno.com",
      description: "Respuesta en menos de 24 horas",
    },
    {
      icon: MapPin,
      title: "Oficina de Ventas",
      info: "Av. Principal #100, Ciudad",
      description: "Lunes a Sábado: 9:00 AM - 5:00 PM",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+502 9876-5432",
      description: "Atención inmediata",
    },
  ]

  const officeHours = [
    { day: "Lunes - Viernes", hours: "8:00 AM - 6:00 PM" },
    { day: "Sábados", hours: "9:00 AM - 5:00 PM" },
    { day: "Domingos", hours: "10:00 AM - 3:00 PM" },
  ]

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-200">
            Estamos aquí para ayudarte a encontrar el lote perfecto para tu futuro
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        animate={prefersReducedMotion ? undefined : "animate"}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Envíanos un mensaje</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-emerald-600">Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nombre completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 transition-colors"
                        placeholder="+504 1234-5678"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Correo electrónico *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Interés principal</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 transition-colors"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="lote-250">Lote de 250m²</option>
                      <option value="lote-350">Lote de 350m²</option>
                      <option value="lote-500">Lote de 500m² o más</option>
                      <option value="informacion-general">Información general</option>
                      <option value="visita">Agendar visita</option>
                      <option value="financiamiento">Opciones de financiamiento</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 transition-colors"
                      placeholder="Cuéntanos más sobre lo que buscas..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensaje</span>
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Información de contacto</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-emerald-600 font-semibold mb-1">{info.info}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-emerald-600 mr-2" />
                  Horarios de Atención
                </h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-semibold text-gray-800">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors"
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Visita Nuestra Oficina</h2>
            <p className="text-xl text-gray-600">Te esperamos en nuestras instalaciones</p>
          </motion.div>

          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <p className="text-gray-600">Mapa de ubicación próximamente</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Quick Access */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Tienes preguntas frecuentes?</h2>
            <p className="text-xl text-gray-600 mb-8">Revisa nuestras preguntas más comunes antes de contactarnos</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Ver Preguntas Frecuentes
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Emergency Contact */}
      <motion.section
        initial={prefersReducedMotion ? undefined : "initial"}
        whileInView={prefersReducedMotion ? undefined : "animate"}
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-emerald-600"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">¿Necesitas atención inmediata?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo está disponible para atenderte por WhatsApp
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Chatear por WhatsApp</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  )
}
