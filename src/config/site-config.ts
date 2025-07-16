import type { SiteConfig } from "@/types/site-config"
import {
  Shield,
  Trees,
  Car,
  Wifi,
  Droplets,
  Zap,
  Award,
  CheckCircle,
  DollarSign,
  Calculator,
  FileText,
  Users,
  TreePine,
  MapPin,
  Building,
  Calendar,
  Leaf,
  TrendingUp,
  GraduationCap,
  ShoppingCart,
  Heart,
  Plane,
  Bus,
  Navigation,
  Building2,
  Fuel,
  Dumbbell,
  Gamepad2,
  Waves,
  ParkingCircle,
  Phone,
  Trash2,
  Wind,
  Sun,
} from "lucide-react"

export const siteConfig: SiteConfig = {
  // General site information
  general: {
    siteName: "Valle Sereno",
    companyName: "Desarrollos Valle Sereno S.A.",
    tagline: "Tu futuro comienza aquí",
    description: "Desarrollo residencial premium con lotes desde 250m², infraestructura de primer nivel y excelente ubicación",
    keywords: ["lotes residenciales", "terrenos en venta", "desarrollo inmobiliario", "valle sereno", "inversión inmobiliaria", "lotes premium"],
  },

  // Contact information
  contact: {
    phone: "+504 1234-5678",
    whatsapp: "50412345678",
    email: "info@vallesereno.com",
    address: "Av. Principal #100, Ciudad",
    schedule: {
      weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
      weekends: "Sábados: 9:00 AM - 1:00 PM",
    },
  },

  // Social media
  social: {
    facebook: "https://facebook.com/vallesereno",
    instagram: "https://instagram.com/vallesereno",
    youtube: "https://youtube.com/vallesereno",
  },

  // Shared data - Lots
  lots: [
    {
      id: "250",
      size: "250",
      price: 45000,
      location: "Frente a parque",
      features: ["Topografía plana", "Servicios incluidos", "Escrituración rápida", "Vista al parque"],
      available: 25,
      popular: false,
    },
    {
      id: "350",
      size: "350",
      price: 62000,
      location: "Esquina arbolada",
      features: ["Vista panorámica", "Doble frente", "Zona premium", "Árboles nativos"],
      available: 18,
      popular: true,
    },
    {
      id: "500",
      size: "500+",
      price: 90000,
      location: "Zona premium",
      features: ["Máxima privacidad", "Terreno irregular", "Exclusividad total", "Diseño personalizado"],
      available: 8,
      popular: false,
    },
  ],

  // Shared data - Testimonials
  testimonials: [
    {
      name: "Roberto Martínez",
      role: "Ingeniero",
      text: "Compré mi lote en 2023 y ya incrementó 30% su valor. La mejor inversión para mi familia.",
      rating: 5,
    },
    {
      name: "Ana García",
      role: "Arquitecta",
      text: "La ubicación es perfecta, cerca de todo pero con la tranquilidad que buscaba para mis hijos.",
      rating: 5,
    },
    {
      name: "Carlos López",
      role: "Empresario",
      text: "El proceso de compra fue transparente y rápido. Excelente atención al cliente.",
      rating: 5,
    },
  ],

  // Shared data - FAQs
  faqs: [
    {
      question: "¿Cuánto tiempo toma la escrituración?",
      answer: "El proceso de escrituración toma entre 30 a 45 días hábiles una vez completado el pago.",
    },
    {
      question: "¿Puedo construir cualquier estilo de casa?",
      answer: "Sí, respetando las normas de construcción y el reglamento interno del residencial.",
    },
    {
      question: "¿Hay restricciones de altura?",
      answer: "La altura máxima permitida es de 3 niveles o 12 metros de altura.",
    },
    {
      question: "¿Incluyen estudios topográficos?",
      answer: "Sí, todos los lotes incluyen levantamiento topográfico y certificado de linderos.",
    },
  ],

  // Payment plans
  paymentPlans: [
    {
      id: "contado",
      name: "Pago de contado",
      description: "5% de descuento",
      discount: 5,
    },
    {
      id: "financiado",
      name: "Financiamiento directo",
      description: "Hasta 60 meses sin intereses",
      months: 60,
    },
  ],

  // Page configurations
  pages: {
    // Home page
    home: {
      hero: {
        title: "Construye tu sueño en el lugar perfecto",
        subtitle: "Lotes desde 250m² con infraestructura de primer nivel y seguridad 24/7",
        backgroundImage: {
          src: "/images/hero-landscape.jpg",
          alt: "Vista aérea del desarrollo residencial Valle Sereno",
        },
        ctaButtons: {
          primary: {
            text: "Ver Lotes Disponibles",
            href: "#lotes",
          },
          secondary: {
            text: "Solicitar Precios",
            href: "#contacto",
          },
        },
      },
      introduction: {
        title: "Un espacio diseñado para familias",
        subtitle: "Que buscan tranquilidad, naturaleza y crecimiento patrimonial en un entorno seguro y moderno",
        features: [
          { 
            icon: Award, 
            title: "Planos Certificados", 
            description: "Urbanización con todos los permisos municipales" 
          },
          {
            icon: CheckCircle,
            title: "Infraestructura Completa",
            description: "Calles, agua, luz, drenaje y telecomunicaciones",
          },
          {
            icon: DollarSign,
            title: "Plusvalía Garantizada",
            description: "Ubicación estratégica con crecimiento asegurado",
          },
        ],
      },
      location: {
        title: "Ubicación Privilegiada",
        subtitle: "A 10 minutos del centro urbano, con acceso directo a carretera principal",
        mapImage: {
          src: "/images/aerial-view.jpg",
          alt: "Vista aérea de la ubicación del desarrollo",
        },
        highlights: [
          {
            icon: MapPin,
            title: "Centros Educativos",
            description: "Escuelas y universidades a menos de 5 km",
          },
          {
            icon: Users,
            title: "Centros Comerciales",
            description: "Plazas y supermercados en un radio de 3 km",
          },
          {
            icon: Trees,
            title: "Entorno Natural",
            description: "Rodeado de áreas verdes y baja densidad poblacional",
          },
        ],
      },
      amenities: [
        { icon: Shield, title: "Seguridad 24/7", description: "Cerco perimetral y vigilancia" },
        { icon: Trees, title: "Áreas Verdes", description: "Parques y senderos naturales" },
        { icon: Car, title: "Vías Pavimentadas", description: "Calles de concreto hidráulico" },
        { icon: Wifi, title: "Fibra Óptica", description: "Internet de alta velocidad" },
        { icon: Droplets, title: "Agua Potable", description: "Red municipal certificada" },
        { icon: Zap, title: "Energía Eléctrica", description: "Instalación subterránea" },
      ],
      process: {
        title: "Proceso de Compra Simplificado",
        subtitle: "En solo 3 pasos puedes ser propietario de tu lote",
        steps: [
          { icon: Calculator, title: "Reserva", description: "10% de enganche para apartar tu lote" },
          { icon: FileText, title: "Personalización", description: "Elección del lote y plan de pago" },
          { icon: Award, title: "Escrituración", description: "Asesoría legal incluida" },
        ],
      },
      cta: {
        title: "¿Listo para invertir en tu futuro?",
        subtitle: "Contáctanos y te ayudamos a encontrar el lote perfecto",
        buttons: {
          primary: "¡Quiero que me contacten!",
          secondary: "",
        },
      },
    },

    // Project page
    project: {
      hero: {
        title: "Conoce Valle Sereno",
        subtitle: "Un desarrollo inmobiliario pensado para el futuro de tu familia",
        backgroundImage: {
          src: "/images/mountain-sunset.jpg",
          alt: "Vista del proyecto Valle Sereno",
        },
      },
      info: {
        name: "Valle Sereno",
        tagline: "Desarrollo Residencial Premium",
        description: "Un proyecto diseñado para ofrecer calidad de vida, seguridad y plusvalía garantizada",
        stats: [
          { number: "15", label: "Hectáreas", icon: MapPin },
          { number: "120", label: "Lotes disponibles", icon: Building },
          { number: "3", label: "Años de desarrollo", icon: Calendar },
          { number: "95%", label: "Satisfacción", icon: Award },
        ],
        vision: {
          title: "Nuestra Visión",
          description: "Crear una comunidad residencial que combine armoniosamente la naturaleza con la modernidad",
          points: [
            "Desarrollo sustentable y amigable con el medio ambiente",
            "Infraestructura de primer nivel con servicios subterráneos",
            "Espacios diseñados para la convivencia familiar",
            "Crecimiento ordenado con plusvalía garantizada",
          ],
        },
        features: [
          {
            icon: Shield,
            title: "Seguridad Integral",
            description: "Sistema de seguridad 24/7 con control de acceso, cámaras de vigilancia y cerco perimetral para tu tranquilidad.",
          },
          {
            icon: Leaf,
            title: "Desarrollo Sustentable",
            description: "Compromiso con el medio ambiente mediante áreas verdes protegidas y sistemas de manejo responsable de recursos.",
          },
          {
            icon: Building,
            title: "Infraestructura Premium",
            description: "Servicios subterráneos, calles pavimentadas con concreto hidráulico y sistemas modernos de telecomunicaciones.",
          },
          {
            icon: TrendingUp,
            title: "Inversión Segura",
            description: "Ubicación estratégica y desarrollo planificado que garantizan el crecimiento constante del valor de tu inversión.",
          },
        ],
        timeline: [
          {
            year: "2022",
            title: "Inicio del Proyecto",
            description: "Adquisición del terreno y permisos municipales",
          },
          {
            year: "2023",
            title: "Desarrollo de Infraestructura",
            description: "Construcción de calles y servicios básicos",
          },
          {
            year: "2024",
            title: "Apertura de Ventas",
            description: "Inicio de comercialización y primeras entregas",
          },
          {
            year: "2025",
            title: "Consolidación",
            description: "Completar amenidades y áreas comunes",
          },
        ],
      },
    },

    // Location page
    location: {
      hero: {
        title: "Ubicación Estratégica",
        subtitle: "Conectividad y naturaleza en perfecto equilibrio",
        backgroundImage: {
          src: "/images/rural-path.jpg",
          alt: "Ubicación de Valle Sereno",
        },
      },
      nearby: [
        {
          icon: GraduationCap,
          name: "Centro Educativo San José",
          distance: "2.5 km",
          time: "5 minutos",
        },
        {
          icon: ShoppingCart,
          name: "Plaza Comercial Las Flores",
          distance: "3.8 km",
          time: "8 minutos",
        },
        {
          icon: Heart,
          name: "Hospital Regional",
          distance: "5.2 km",
          time: "10 minutos",
        },
        {
          icon: Plane,
          name: "Aeropuerto Internacional",
          distance: "25 km",
          time: "30 minutos",
        },
      ],
      transport: [
        {
          icon: Bus,
          type: "Transporte Público",
          routes: ["Ruta 101", "Ruta 205", "Ruta Express"],
        },
        {
          icon: Navigation,
          type: "Vías Principales",
          routes: ["Carretera CA-5", "Boulevard Principal", "Anillo Periférico"],
        },
        {
          icon: Building2,
          type: "Zonas Comerciales",
          routes: ["Centro Ciudad: 15 min", "Zona Industrial: 20 min", "Puerto: 45 min"],
        },
        {
          icon: Fuel,
          type: "Servicios Cercanos",
          routes: ["Gasolinera: 2 km", "Supermercado: 3 km", "Banco: 3.5 km"],
        },
      ],
    },

    // Lots page
    lots: {
      hero: {
        title: "Lotes Disponibles",
        subtitle: "Encuentra el lote perfecto para construir el hogar de tus sueños",
        backgroundImage: {
          src: "/images/forest-view.jpg",
          alt: "Lotes disponibles en Valle Sereno",
        },
      },
      includedServices: [
        { icon: Zap, title: "Energía eléctrica", description: "Instalación subterránea" },
        { icon: Droplets, title: "Agua potable", description: "Red municipal certificada" },
        { icon: Shield, title: "Seguridad", description: "Vigilancia 24/7" },
        { icon: TreePine, title: "Áreas verdes", description: "Mantenimiento incluido" },
      ],
      calculator: {
        title: "Calculadora de Pagos",
        subtitle: "Descubre cuánto pagarías según tu plan preferido",
      },
      cta: {
        title: "¿Encontraste tu lote ideal?",
        subtitle: "No esperes más, los mejores lotes se agotan rápido. Reserva el tuyo hoy mismo.",
      },
    },

    // Amenities page
    amenities: {
      hero: {
        title: "Amenidades Premium",
        subtitle: "Todo lo que necesitas para vivir cómodamente",
        backgroundImage: {
          src: "/images/mountain-sunset.jpg",
          alt: "Amenidades en Valle Sereno",
        },
      },
      categories: [
        {
          title: "Amenidades Principales",
          description: "Servicios diseñados para mejorar tu calidad de vida",
          amenities: [
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
              icon: Car,
              title: "Vialidades Premium",
              description: "Calles amplias con diseño moderno y funcional para tu comodidad",
              features: ["Concreto hidráulico", "Iluminación LED", "Señalización vial", "Ciclovías"],
            },
          ],
        },
        {
          title: "Servicios de Infraestructura",
          description: "Servicios básicos de la más alta calidad",
          amenities: [
            { icon: Wifi, title: "Internet Fibra Óptica", description: "Conexión de alta velocidad en todo el residencial" },
            { icon: Droplets, title: "Agua Potable", description: "Sistema de purificación y presión constante" },
            { icon: Zap, title: "Energía Subterránea", description: "Sin cables aéreos, mayor seguridad y estética" },
            { icon: Phone, title: "Telecomunicaciones", description: "Infraestructura para todos los proveedores" },
            { icon: Trash2, title: "Recolección de Basura", description: "Servicio diario con separación de residuos" },
            { icon: Shield, title: "Gas Natural", description: "Red de gas natural disponible" },
          ],
        },
        {
          title: "Áreas Recreativas",
          description: "Espacios para el entretenimiento y la convivencia familiar",
          amenities: [
            { icon: Waves, title: "Piscina", description: "Alberca semi-olímpica y chapoteadero" },
            { icon: Dumbbell, title: "Gimnasio", description: "Equipado con aparatos de última generación" },
            { icon: Gamepad2, title: "Área de Juegos", description: "Espacios seguros para niños" },
            { icon: ParkingCircle, title: "Estacionamiento", description: "Amplios espacios para visitantes" },
          ],
        },
      ],
      sustainability: [
        { icon: Sun, title: "Energía Solar", description: "Paneles solares en áreas comunes para reducir costos" },
        { icon: Droplets, title: "Captación Pluvial", description: "Sistema de recolección de agua de lluvia para riego" },
        { icon: Trees, title: "Reforestación", description: "Programa de siembra de árboles nativos" },
        { icon: Wind, title: "Ventilación Natural", description: "Diseño que aprovecha corrientes de aire" },
      ],
      gallery: [
        { src: "/images/rural-path.jpg", alt: "Vista de senderos" },
        { src: "/images/forest-view.jpg", alt: "Áreas verdes" },
        { src: "/images/mountain-sunset.jpg", alt: "Vista panorámica" },
        { src: "/images/hero-landscape.jpg", alt: "Parque central" },
        { src: "/images/aerial-view.jpg", alt: "Vista aérea" },
        { src: "/images/rural-path.jpg", alt: "Caminos internos" },
      ],
    },

    // Contact page
    contact: {
      hero: {
        title: "Contáctanos",
        subtitle: "Estamos aquí para ayudarte a encontrar el lote perfecto para tu futuro",
        backgroundImage: {
          src: "/images/hero-landscape.jpg",
          alt: "Contacto Valle Sereno",
        },
      },
      form: {
        title: "Envíanos un mensaje",
        fields: {
          name: "Nombre completo",
          email: "Correo electrónico",
          phone: "Teléfono",
          interest: "¿En qué tamaño de lote estás interesado?",
          message: "Mensaje (opcional)",
        },
        interests: ["250m²", "350m²", "500m² o más", "Necesito asesoría"],
        submitButton: "Enviar Mensaje",
        successMessage: {
          title: "¡Mensaje Enviado!",
          message: "Gracias por tu interés. Un asesor se pondrá en contacto contigo en las próximas 24 horas.",
        },
      },
      officeInfo: {
        title: "Visita Nuestra Oficina",
        subtitle: "Te esperamos en nuestras instalaciones",
      },
      emergencyCta: {
        title: "¿Necesitas atención inmediata?",
        subtitle: "Llámanos ahora y un asesor te atenderá de inmediato",
      },
    },
  },
}