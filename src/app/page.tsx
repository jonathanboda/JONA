"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import Image from "next/image";

// =====================================================
// TYPE DEFINITIONS
// =====================================================

interface Skill {
  name: string;
  image: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  thumbnail: string;
}

interface NavItem {
  id: string;
  label: string;
}

interface Service {
  image: string;
  title: string;
  description: string;
}

// =====================================================
// DATA CONSTANTS
// =====================================================

const personalInfo = {
  name: "Boda Jonathan Naik",
  firstName: "Jonathan",
  lastName: "Naik",
  role: "Web Developer",
  location: "Hyderabad, India",
  tagline: "Turning Ideas into Interactive Reality",
  about:
    "I'm a web developer based in Hyderabad, passionate about building modern, interactive web experiences. I enjoy working across the full stack — from crafting pixel-perfect frontends to architecting robust backend systems. With expertise in React, Next.js, and Supabase, I turn ideas into functional, user-friendly applications.",
  email: "jonathanboda193@gmail.com",
  linkedin: "https://linkedin.com/in/boda-jonathan-naik-3b55b5181",
  github: "https://github.com/jonathanboda",
  instagram: "https://instagram.com/jona_bfgim",
  yearsExperience: 2,
  projectsDone: 10,
  clientsWorked: 5,
};

const skills: Skill[] = [
  {
    name: "Next.js",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80",
    description: "Building fast, SEO-friendly React applications with server-side rendering.",
  },
  {
    name: "React.js",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    description: "Creating interactive user interfaces with component-based architecture.",
  },
  {
    name: "JavaScript",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
    description: "Writing clean, efficient code for dynamic web experiences.",
  },
  {
    name: "Supabase",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    description: "Building backends with real-time databases and authentication.",
  },
  {
    name: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    description: "Crafting responsive, accessible websites with modern technologies.",
  },
  {
    name: "Frontend Development",
    image: "https://mr-gnana.vercel.app/_next/image?url=%2Fimages%2Fhero%20section.JPG&w=1920&q=75",
    description: "Designing pixel-perfect interfaces with seamless user experiences.",
  },
  {
    name: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    description: "End-to-end development from database to deployment.",
  },
  {
    name: "SQL",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800&q=80",
    description: "Managing and querying relational databases efficiently.",
  },
  {
    name: "API Integration",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    description: "Connecting applications with third-party services and APIs.",
  },
  {
    name: "Vercel",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    description: "Deploying and hosting modern web applications at scale.",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Elvenwood Interior",
    description:
      "A luxury interior design firm website with premium design services and modular manufacturing solutions across 50+ cities.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    url: "https://elvenwood-studio.vercel.app/",
    thumbnail: "https://elvenwood-studio.vercel.app/_next/image?url=%2Fimages%2Ffacility%2FModern%20Living%20Space.png&w=1920&q=75",
  },
  {
    id: 2,
    title: "Mr.Gnana Portfolio",
    description:
      "A music director portfolio showcasing atmospheric audio production, live performances, and custom sound design services.",
    technologies: ["Next.js", "React"],
    url: "https://mr-gnana.vercel.app/",
    thumbnail: "https://mr-gnana.vercel.app/_next/image?url=%2Fimages%2Fhero%20section.JPG&w=1920&q=75",
  },
];

const services: Service[] = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Business Websites",
    description: "Professional, responsive websites that establish your brand's online presence and drive business growth.",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and maximize your marketing campaigns.",
  },
  {
    image: "https://mr-gnana.vercel.app/_next/image?url=%2Fimages%2Fhero%20section.JPG&w=1920&q=75",
    title: "Portfolio Websites",
    description: "Stunning portfolio sites that showcase your work and help you stand out from the competition.",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Admin Dashboards",
    description: "Intuitive admin panels and dashboards for efficient data management and business insights.",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "Company Management Systems",
    description: "Custom internal tools to streamline operations, manage teams, and boost productivity.",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    title: "Custom Web Applications",
    description: "Tailored web solutions built to solve your unique business challenges and requirements.",
  },
];

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

// =====================================================
// CUSTOM HOOKS
// =====================================================

function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): { ref: RefObject<HTMLDivElement | null>; isVisible: boolean } {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

// =====================================================
// ICON COMPONENTS
// =====================================================

function MenuIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

// =====================================================
// NAVBAR COMPONENT
// =====================================================

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-2xl shadow-black/20" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => scrollToSection("hero")} className="group flex items-center gap-3">
              <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-[#ff6b35] transition-colors">
                {personalInfo.firstName}
              </span>
              <span className="text-[#ff6b35] text-2xl">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.slice(1).map(({ id, label }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeSection === id ? "text-[#ff6b35]" : "text-gray-400 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{label}</span>
                  {activeSection === id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff6b35]" />
                  )}
                </button>
              ))}
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 bg-[#ff6b35] text-white text-sm font-semibold rounded-full btn-glow hover:bg-[#ff8c5a] transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-[#050a15]/98 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navItems.map(({ id, label }, index) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`font-display text-4xl font-bold tracking-tight transition-all duration-300 ${
                activeSection === id ? "text-[#ff6b35]" : "text-white hover:text-[#ff6b35]"
              }`}
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

// =====================================================
// HERO SECTION
// =====================================================

function HeroSection() {
  const mousePosition = useMousePosition();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-mesh noise-overlay">
      {/* Animated background orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#ff6b35]/20 glow-orb"
        style={{
          left: `calc(20% + ${mousePosition.x * 0.02}px)`,
          top: `calc(20% + ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#3b82f6]/15 glow-orb delay-200"
        style={{
          right: `calc(10% + ${mousePosition.x * -0.015}px)`,
          bottom: `calc(20% + ${mousePosition.y * -0.015}px)`,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="w-full py-32">
          {/* Content */}
          <div className="space-y-8 max-w-2xl">
            {/* Greeting */}
            <div className="animate-fade-in-up opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight animate-fade-in-up opacity-0 delay-100">
                <span className="text-white">I&apos;m </span>
                <span className="gradient-text-animated">{personalInfo.firstName}</span>
              </h1>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90 animate-fade-in-up opacity-0 delay-200">
                {personalInfo.role}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-lg leading-relaxed animate-fade-in-up opacity-0 delay-300">
              {personalInfo.tagline}. Building digital experiences that leave a lasting impression.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0 delay-400">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-[#ff6b35] text-white font-semibold rounded-full btn-glow hover:bg-[#ff8c5a] transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowUpRight />
              </button>
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full glass glass-hover font-semibold text-white transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 animate-fade-in-up opacity-0 delay-500">
              <span className="text-sm text-gray-500 uppercase tracking-widest">Follow</span>
              <div className="h-px w-12 bg-gray-700" />
              <div className="flex items-center gap-4">
                {[
                  { icon: <LinkedInIcon />, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: <GitHubIcon />, href: personalInfo.github, label: "GitHub" },
                  { icon: <InstagramIcon />, href: personalInfo.instagram, label: "Instagram" },
                  { icon: <EmailIcon />, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`, label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass glass-hover flex items-center justify-center text-gray-400 hover:text-[#ff6b35] transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <ArrowDown />
      </div>
    </section>
  );
}

// =====================================================
// ABOUT SECTION
// =====================================================

function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-32 px-6 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050a15 0%, #0a1628 100%)' }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Section title */}
          <div className={`${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"}`}>
            <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-lg text-gray-400 mt-4">Building modern, fast & reliable web solutions for businesses.</p>
            <div className="line-accent mt-6" />
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up opacity-100 delay-200" : "opacity-0"}`}>
            <p className="text-lg text-gray-400 leading-relaxed">
              {personalInfo.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// SERVICES SECTION
// =====================================================

function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const totalCards = services.length;

    // Handle wrap-around for circular carousel
    let adjustedDiff = diff;
    if (diff > totalCards / 2) adjustedDiff = diff - totalCards;
    if (diff < -totalCards / 2) adjustedDiff = diff + totalCards;

    const isActive = adjustedDiff === 0;
    const isAdjacent = Math.abs(adjustedDiff) === 1;
    const isSecondary = Math.abs(adjustedDiff) === 2;

    const translateX = adjustedDiff * 280;
    const scale = isActive ? 1 : isAdjacent ? 0.85 : isSecondary ? 0.7 : 0.6;
    const opacity = isActive ? 1 : isAdjacent ? 0.7 : isSecondary ? 0.4 : 0;
    const zIndex = isActive ? 30 : isAdjacent ? 20 : 10;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section id="services" className="py-32 px-6 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #050a15 100%)' }}>
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-widest">Services</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="line-accent mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="relative h-[420px] flex items-center justify-center">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="absolute w-[260px] transition-all duration-500 ease-out cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`rounded-3xl overflow-hidden ${index === activeIndex ? 'shadow-2xl shadow-[#ff6b35]/20' : ''}`}>
                {/* Card Image Area */}
                <div className="h-[240px] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="bg-[#0a1628]/90 backdrop-blur-sm p-6">
                  <h3 className={`font-display text-lg font-bold mb-2 italic ${index === activeIndex ? 'text-[#ff6b35]' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-[#ff6b35]' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// SKILLS SECTION
// =====================================================

function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const totalCards = skills.length;

    let adjustedDiff = diff;
    if (diff > totalCards / 2) adjustedDiff = diff - totalCards;
    if (diff < -totalCards / 2) adjustedDiff = diff + totalCards;

    const isActive = adjustedDiff === 0;
    const isAdjacent = Math.abs(adjustedDiff) === 1;
    const isSecondary = Math.abs(adjustedDiff) === 2;

    const translateX = adjustedDiff * 280;
    const scale = isActive ? 1 : isAdjacent ? 0.85 : isSecondary ? 0.7 : 0.6;
    const opacity = isActive ? 1 : isAdjacent ? 0.7 : isSecondary ? 0.4 : 0;
    const zIndex = isActive ? 30 : isAdjacent ? 20 : 10;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-[#050a15] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-widest">Skills</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <div className="line-accent mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="relative h-[420px] flex items-center justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="absolute w-[260px] transition-all duration-500 ease-out cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`rounded-3xl overflow-hidden ${index === activeIndex ? 'shadow-2xl shadow-[#ff6b35]/20' : ''}`}>
                {/* Card Image Area */}
                <div className="h-[240px] relative overflow-hidden">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="bg-[#0a1628]/90 backdrop-blur-sm p-6">
                  <h3 className={`font-display text-lg font-bold mb-2 italic ${index === activeIndex ? 'text-[#ff6b35]' : 'text-white'}`}>
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-[#ff6b35]' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// PROJECTS SECTION
// =====================================================

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  return (
    <div
      className={`group gradient-border rounded-3xl overflow-hidden card-hover ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Project image area */}
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#050a15]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:text-[#ff6b35] hover:scale-110 transition-all duration-300"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#ff6b35] transition-colors mb-3">
            {project.title}
          </h3>
        </a>
        <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-4 py-1.5 text-xs font-medium bg-[#ff6b35]/10 text-[#ff6b35] rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-32 px-6 lg:px-12" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #050a15 100%)' }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="line-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// CONTACT SECTION
// =====================================================

function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-[#050a15] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />
      <div className="absolute bottom-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#ff6b35]/5 blur-[100px]" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <span className="text-[#ff6b35] text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <div className="line-accent mx-auto mt-6" />
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up opacity-100 delay-200" : "opacity-0"}`}>
            <div className="gradient-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: <EmailIcon />, label: personalInfo.email, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}` },
                  { icon: <LinkedInIcon />, label: "LinkedIn Profile", href: personalInfo.linkedin },
                  { icon: <GitHubIcon />, label: "GitHub Profile", href: personalInfo.github },
                  { icon: <InstagramIcon />, label: "Instagram Profile", href: personalInfo.instagram },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-[#ff6b35] transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] group-hover:bg-[#ff6b35]/20 transition-colors">
                      {item.icon}
                    </span>
                    <span className="underline-hover">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">Location</h3>
              <p className="text-gray-400">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// FOOTER
// =====================================================

function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-12 bg-[#030712] border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white">{personalInfo.name}</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {[
            { icon: <GitHubIcon />, href: personalInfo.github },
            { icon: <LinkedInIcon />, href: personalInfo.linkedin },
            { icon: <InstagramIcon />, href: personalInfo.instagram },
            { icon: <EmailIcon />, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}` },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#ff6b35] transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// =====================================================
// MAIN PAGE
// =====================================================

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
