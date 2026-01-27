# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 application using the App Router with TypeScript and Tailwind CSS v4.

### Project Structure

- `src/app/` - App Router pages and layouts (file-based routing)
- `src/app/layout.tsx` - Root layout with Geist font configuration and SEO metadata
- `src/app/page.tsx` - Portfolio landing page (single-file component architecture)
- `src/app/globals.css` - Global styles, custom animations, and Tailwind imports
- `public/` - Static assets

### Key Patterns

- **Routing**: Uses App Router - create folders in `src/app/` for routes (e.g., `src/app/about/page.tsx` → `/about`)
- **Imports**: Use `@/*` alias for `src/` imports (e.g., `import { Component } from "@/components/Button"`)
- **Styling**: Tailwind CSS utility classes; theme extended in `globals.css` via `@theme inline`
- **Server/Client**: Components are Server Components by default; add `"use client"` directive for client interactivity

### Portfolio Page Patterns

#### Single-File Component Architecture
The portfolio page (`src/app/page.tsx`) uses a single-file architecture with:
- `"use client"` directive for client-side interactivity
- Sub-components defined within the same file (NavBar, HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection, Footer)
- Data constants at the top (personalInfo, skills, projects, navItems)
- Custom hooks (useIntersectionObserver) for scroll animations

#### Animation System
- Scroll-triggered animations use Intersection Observer (animate once when element enters viewport)
- Custom CSS animations defined in `globals.css`: `fadeInUp`, `fadeIn`, `float`, `slideInLeft`
- Animation delay utilities: `.animation-delay-100` through `.animation-delay-500`
- Usage: Combine `animate-fade-in-up` class with `isVisible` state from `useIntersectionObserver` hook

#### Dark Mode
- Forced dark mode (not system preference based)
- Dark colors set directly in `:root` CSS variables in `globals.css`
- `<html className="dark">` in layout.tsx

#### Gradient Theme
- Primary gradient: `from-blue-500 via-purple-500 to-violet-500` (blue to purple)
- Gradient text: `bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`
- Gradient backgrounds with opacity: `from-blue-600/20 to-purple-600/20`
- Gradient buttons: `bg-gradient-to-r from-blue-500 to-purple-500`

#### Responsive Breakpoints
- Mobile-first approach
- Key breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Mobile navigation uses hamburger menu with slide-out drawer (`md:hidden` / `hidden md:flex`)

#### Smooth Scroll Navigation
- `scroll-behavior: smooth` in CSS for native smooth scrolling
- `scrollIntoView({ behavior: "smooth" })` for programmatic scrolling
- Active section tracking via Intersection Observer with rootMargin for accuracy
