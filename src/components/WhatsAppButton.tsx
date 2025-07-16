"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { memo } from "react"
import { siteConfig } from "@/config/site-config"

const WhatsAppButton = memo(function WhatsAppButton() {
  const phoneNumber = siteConfig.contact.whatsapp
  const message = `Hola, me interesa obtener m\u00e1s informaci\u00f3n sobre los lotes en ${siteConfig.general.siteName}`
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-30"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          \u00bfNecesitas ayuda?
        </span>
      </motion.button>
    </motion.div>
  )
})

export default WhatsAppButton