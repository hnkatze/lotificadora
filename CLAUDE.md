# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15.4.1 real estate website for "Valle Sereno" (a land development/subdivision project) built with TypeScript, React 19, and Tailwind CSS v4.

## Essential Commands
```bash
# Development
npm run dev       # Start development server with Turbopack on http://localhost:3000

# Build & Production
npm run build     # Build for production
npm run start     # Start production server

# Code Quality
npm run lint      # Run ESLint
```

## Architecture & Structure
The project uses Next.js App Router with the following structure:

```
src/
├── app/                    # App Router pages
│   ├── amenidades/        # Amenities showcase
│   ├── contacto/          # Contact forms & info
│   ├── lotes/             # Property listings with pricing
│   ├── proyecto/          # Project information
│   ├── ubicacion/         # Location details
│   └── layout.tsx         # Root layout with navigation
└── components/
    └── layout.tsx         # Shared layout component with header/footer
```

## Key Technical Details
- **Client Components**: Most pages use 'use client' for interactivity
- **Animations**: Framer Motion is used extensively for page transitions and scroll animations
- **Styling**: Tailwind CSS v4 with inline theme configuration in globals.css
- **Icons**: Lucide React for consistent iconography
- **Path Aliases**: Use `@/*` to import from src directory
- **TypeScript**: Strict mode enabled

## Development Notes
- The site features a payment calculator for different lot sizes (250m², 350m², 500+m²)
- WhatsApp integration button for quick contact
- Responsive design with mobile menu implementation
- Heavy use of animations - test on different devices for performance
- No test suite currently configured
- Environment variables should be placed in `.env.local` (gitignored)

## Common Patterns
- Pages typically use Framer Motion for entrance animations
- Consistent color scheme defined in Tailwind config (emerald/green theme)
- Sections often use scroll-triggered animations
- Mobile-first responsive approach with Tailwind breakpoints