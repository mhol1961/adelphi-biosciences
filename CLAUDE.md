# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Adelphi Biosciences website - an enterprise-grade marketing site for a pharmaceutical regulatory affairs consulting firm founded by Peter Parsonson, who was named on the FDA approval letter for Ekterly® (sebetralstat). Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui.

## Commands

```bash
# Development
npm run dev              # Start dev server at localhost:3000

# Build & Production
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint

# Testing
npm test                 # Run Vitest unit tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage
npm run test:e2e         # Run Playwright E2E tests
npm run test:e2e:ui      # Run E2E tests with UI

# Assets
npm run generate:og-image  # Regenerate og-image.png from SVG

# shadcn/ui
npx shadcn@latest add [component]  # Add new UI component
```

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/ui/` - shadcn/ui primitives
- `src/components/layout/` - Header, Footer, Navigation
- `src/components/home/` - Home page sections (Hero, Services Overview, etc.)
- `src/components/contact/` - Contact form components
- `src/lib/` - Utilities, Supabase client, validation schemas
- `tests/e2e/` - Playwright E2E tests
- `tests/unit/` - Vitest unit tests

### Key Patterns

**Server vs Client Components**: Default to Server Components. Only use `'use client'` for:
- Interactive navigation (mobile menu)
- Forms with state (ContactForm)
- Framer Motion animations

**Form Validation**: React Hook Form + Zod. Schema defined in `src/lib/validations/contact.ts` is shared between client and API route.

**Styling**: Tailwind utility classes. Brand colors defined as CSS variables in `globals.css` and extended in `tailwind.config.ts`.

## Brand Design (STRICT)

```
Primary Navy:    #1B365D  (headers, CTAs, footer)
Steel Blue:      #2E5A8C  (hover states)
Teal Accent:     #4A90A4  (links, icons)
Charcoal Text:   #2D3748  (body text)
Cloud Gray:      #F7FAFC  (section backgrounds)
```

No gradients. No neon colors. Apple/Microsoft-level clean design.

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` - Supabase connection (optional - form works without)
- `RESEND_API_KEY` - Resend email service (optional - form works without)
- `CONTACT_EMAIL` - Email to receive contact form notifications

Note: The site builds and runs without these env vars. Contact submissions will be logged but not stored/emailed.

## SEO Implementation

- **Sitemap**: Dynamic at `/sitemap.xml` via `src/app/sitemap.ts`
- **Robots.txt**: Dynamic at `/robots.txt` via `src/app/robots.ts`
- **JSON-LD**: Structured data on each page for Google rich results
- **OG Images**: PNG at `/og-image.png` (regenerate with `npm run generate:og-image`)

## Images

Located in `public/images/`:
- `logo.svg` / `logo-white.svg` - Company logos
- `og-image.svg` / `og-image.png` - Social sharing images
- `founder-professional.svg` - Founder placeholder
- `services/*.svg` - Service icons
- `hero-abstract.svg` - Hero section background pattern
- `science-pattern.svg` - Decorative background pattern
