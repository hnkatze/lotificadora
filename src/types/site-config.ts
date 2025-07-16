import { LucideIcon } from "lucide-react"

// Common types used across the site
export interface Image {
  src: string
  alt: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
}

export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
  image?: Image
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: string
  schedule?: {
    weekdays: string
    weekends: string
  }
}

export interface SocialMedia {
  facebook?: string
  instagram?: string
  youtube?: string
  linkedin?: string
}

// Lot/Property specific types
export interface LotType {
  id: string
  size: string
  price: number
  location: string
  features: string[]
  available: number
  popular: boolean
  image?: Image
}

export interface PaymentPlan {
  id: string
  name: string
  description: string
  discount?: number
  months?: number
}

// Page-specific configurations
export interface HeroSection {
  title: string
  subtitle: string
  backgroundImage: Image
  ctaButtons?: {
    primary?: {
      text: string
      href: string
    }
    secondary?: {
      text: string
      href: string
    }
  }
}

export interface ProjectInfo {
  name: string
  tagline: string
  description: string
  logo?: Image
  stats: {
    number: string
    label: string
    icon: LucideIcon
  }[]
  vision: {
    title: string
    description: string
    points: string[]
  }
  features: Feature[]
  timeline: {
    year: string
    title: string
    description: string
  }[]
}

export interface AmenityCategory {
  title: string
  description: string
  amenities: Feature[]
}

export interface NearbyPlace {
  icon: LucideIcon
  name: string
  distance: string
  time: string
}

export interface TransportOption {
  icon: LucideIcon
  type: string
  routes: string[]
}

// Complete site configuration
export interface SiteConfig {
  // General site information
  general: {
    siteName: string
    companyName: string
    tagline: string
    description: string
    keywords: string[]
    logo?: Image
  }

  // Contact information (used across multiple pages)
  contact: ContactInfo
  social: SocialMedia

  // Shared data
  lots: LotType[]
  testimonials: Testimonial[]
  faqs: FAQ[]
  paymentPlans: PaymentPlan[]

  // Page configurations
  pages: {
    home: {
      hero: HeroSection
      introduction: {
        title: string
        subtitle: string
        features: Feature[]
      }
      location: {
        title: string
        subtitle: string
        mapImage?: Image
        highlights: Feature[]
      }
      amenities: Feature[]
      process: {
        title: string
        subtitle: string
        steps: Feature[]
      }
      cta: {
        title: string
        subtitle: string
        buttons: {
          primary: string
          secondary: string
        }
      }
    }
    project: {
      hero: HeroSection
      info: ProjectInfo
    }
    location: {
      hero: HeroSection
      nearby: NearbyPlace[]
      transport: TransportOption[]
      mapEmbed?: string
    }
    lots: {
      hero: HeroSection
      includedServices: Feature[]
      calculator: {
        title: string
        subtitle: string
      }
      cta: {
        title: string
        subtitle: string
      }
    }
    amenities: {
      hero: HeroSection
      categories: AmenityCategory[]
      sustainability: Feature[]
      gallery: Image[]
    }
    contact: {
      hero: HeroSection
      form: {
        title: string
        fields: {
          name: string
          email: string
          phone: string
          interest: string
          message: string
        }
        interests: string[]
        submitButton: string
        successMessage: {
          title: string
          message: string
        }
      }
      officeInfo: {
        title: string
        subtitle: string
      }
      emergencyCta: {
        title: string
        subtitle: string
      }
    }
  }
}