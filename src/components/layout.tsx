"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Home, MessageCircle, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { siteConfig } from "@/config/site-config"

const WhatsAppButton = dynamic(() => import("./WhatsAppButton"), {
  ssr: false,
  loading: () => null,
})

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside or on link
  const closeMenu = () => setIsMenuOpen(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyecto", href: "/proyecto" },
    { name: "Ubicación", href: "/ubicacion" },
    { name: "Lotes", href: "/lotes" },
    { name: "Amenidades", href: "/amenidades" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50"
      >
        Saltar al contenido principal
      </a>
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50 relative">
            <Home className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-800">{siteConfig.general.siteName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contacto')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.location.href = '/contacto'
              }
            }}
            className="hidden lg:block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors font-medium"
          >
            Agendar Visita
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 relative p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg"
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Outside of header */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

              {/* Mobile Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-hidden"
              >
                <div className="flex flex-col h-full overflow-hidden">
                  {/* Menu Header with Close Button */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Home className="h-6 w-6 text-emerald-600" />
                          <span className="text-xl font-bold text-gray-800">{siteConfig.general.siteName}</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">{siteConfig.general.tagline}</p>
                      </div>
                      <button
                        onClick={closeMenu}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Cerrar menú"
                      >
                        <X className="h-6 w-6 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 px-6 py-8 overflow-y-auto">
                    <ul className="space-y-6">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.name}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors group"
                          >
                            <div className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-lg font-medium">{item.name}</span>
                          </Link>
                        </motion.li>
                      ))}

                      {/* Agendar Visita Button in Navigation - Al final de la lista */}
                      <motion.li
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (navItems.length + 1) * 0.1, duration: 0.3 }}
                        className="pt-4 border-t border-gray-100"
                      >
                        <motion.button
                          onClick={() => {
                            closeMenu()
                            const contactSection = document.getElementById('contacto')
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' })
                            } else {
                              window.location.href = '/contacto'
                            }
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-emerald-600 text-white py-3 px-4 rounded-full hover:bg-emerald-700 transition-colors font-medium text-center"
                        >
                          Agendar Visita
                        </motion.button>
                      </motion.li>
                    </ul>
                  </nav>

                  {/* Menu Footer */}
                  <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                      className="text-center"
                    >
                      <p className="text-gray-600 text-sm mb-3">¿Necesitas ayuda inmediata?</p>
                      <button 
                        onClick={() => {
                          const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hola, me interesa obtener más información sobre los lotes en " + siteConfig.general.siteName)}`
                          window.open(url, '_blank', 'noopener,noreferrer')
                          closeMenu()
                        }}
                        className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-700 transition-colors mx-auto">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Contactar por WhatsApp</span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      {/* Main Content */}
      <main id="main-content" className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">{siteConfig.general.siteName}</span>
              </div>
              <p className="text-gray-400">{siteConfig.general.tagline}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Aviso Legal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{siteConfig.contact.phone}</li>
                <li>{siteConfig.contact.email}</li>
                <li>{siteConfig.contact.address}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Recibe promociones exclusivas</p>
              <div className="flex">
                <input type="email" placeholder="Tu email" className="flex-1 p-2 rounded-l-lg text-gray-800" />
                <button className="bg-emerald-600 px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {siteConfig.general.companyName}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppButton />
    </div>
  )
}
