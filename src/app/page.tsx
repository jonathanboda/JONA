"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import Image from "next/image";

// =====================================================
// TYPE DEFINITIONS
// =====================================================

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
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  feedback: string;
  image: string;
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
  tagline: "I shape ideas into reality",
  about:
    "I design purposeful digital experiences across a broad range of products, always working to make technology feel more human.",
  email: "jonathanboda193@gmail.com",
  linkedin: "https://linkedin.com/in/boda-jonathan-naik-3b55b5181",
  github: "https://github.com/jonathanboda",
  instagram: "https://instagram.com/jona_bfgim",
};

const projects: Project[] = [
  {
    id: 1,
    title: "Elvenwood Interior",
    description:
      "A luxury interior design firm website with premium design services and modular manufacturing solutions.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    url: "https://elvenwood-studio.vercel.app/",
    thumbnail: "https://elvenwood-studio.vercel.app/_next/image?url=%2Fimages%2Ffacility%2FModern%20Living%20Space.png&w=1920&q=75",
  },
  {
    id: 2,
    title: "Mr.Gnana Portfolio",
    description:
      "A music director portfolio showcasing atmospheric audio production and live performances.",
    technologies: ["Next.js", "React"],
    url: "https://mr-gnana.vercel.app/",
    thumbnail: "https://mr-gnana.vercel.app/_next/image?url=%2Fimages%2Fhero%20section.JPG&w=1920&q=75",
  },
  {
    id: 3,
    title: "Landing Page",
    description:
      "A web development landing page with animated 3D workspace and live code editor demo.",
    technologies: ["Next.js", "Three.js"],
    url: "https://jonathan-freelance.vercel.app/",
    thumbnail: "/PHOTO/freelance.png",
  },
  {
    id: 4,
    title: "The Precious Interiors",
    description:
      "A luxury interior design firm website showcasing premium residential transformations.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    url: "https://thepreciousinteriors.com/",
    thumbnail: "/PHOTO/image.png",
  },
];

const services: Service[] = [
  {
    icon: <WebIcon />,
    title: "Business Websites",
    description: "Professional, responsive websites that establish your brand.",
    color: "bento-blue",
  },
  {
    icon: <RocketIcon />,
    title: "Landing Pages",
    description: "High-converting pages designed to capture leads.",
    color: "bento-purple",
  },
  {
    icon: <CodeIcon />,
    title: "Web Applications",
    description: "Custom solutions for your unique business needs.",
    color: "bento-pink",
  },
  {
    icon: <PaletteIcon />,
    title: "Portfolio Sites",
    description: "Stunning portfolios that showcase your work.",
    color: "bento-light",
  },
  {
    icon: <DashboardIcon />,
    title: "Admin Dashboards",
    description: "Intuitive panels for efficient data management.",
    color: "bento-gray",
  },
  {
    icon: <SettingsIcon />,
    title: "Custom Systems",
    description: "Internal tools to streamline operations.",
    color: "bento-light",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    role: "Role",
    company: "Company",
    feedback: "Your testimonial feedback here.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const navItems: NavItem[] = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
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

// =====================================================
// ICON COMPONENTS
// =====================================================

function WebIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// =====================================================
// NAVBAR COMPONENT
// =====================================================

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-xl font-bold text-gray-900">
            {personalInfo.firstName}.co
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="nav-link"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <GitHubIcon />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <LinkedInIcon />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg p-6">
          <div className="flex flex-col gap-4">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-left py-2 text-gray-900 font-medium">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// =====================================================
// HERO SECTION
// =====================================================

function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-20 bg-[#f5f5f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {personalInfo.tagline}
            </h1>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection("projects")} className="btn-primary">
                <PlayIcon />
                View Projects
              </button>
            </div>
          </div>

          {/* Right - 3D Character Working on Laptop */}
          <div className="relative h-[500px] lg:h-[600px] animate-fade-in-up delay-200">
            {/* Screen glow reflection on face - positioned above character */}
            <div
              className="face-reflection"
              style={{
                top: "25%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "120px",
              }}
            />

            {/* Laptop screen with typing code - positioned where laptop would be */}
            <div
              className="laptop-screen"
              style={{
                bottom: "28%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "120px",
                height: "70px",
                zIndex: 10,
              }}
            >
              <div className="code-typing">
                <span className="code-line code-line-1">const dev = {`{`}</span>
                <span className="code-line code-line-2">&nbsp;&nbsp;name: &quot;Jonathan&quot;,</span>
                <span className="code-line code-line-3">&nbsp;&nbsp;skill: &quot;React&quot;,</span>
                <span className="code-line code-line-4">{`}`};</span>
              </div>
            </div>

            {/* Working status indicator */}
            <div
              className="working-indicator animate-float"
              style={{
                top: "15%",
                right: "5%",
                animationDelay: "0.5s",
              }}
            >
              <span className="working-dot"></span>
              <span className="text-gray-700">coding...</span>
            </div>

            {/* Floating code snippet */}
            <div className="floating-element top-10 left-0 animate-float" style={{ animationDelay: "0s" }}>
              <span className="floating-code">&lt;div&gt;</span>
            </div>

            {/* Terminal output */}
            <div
              className="floating-element top-1/4 right-0 animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-mono text-gray-600">npm run dev</span>
              </div>
            </div>

            {/* React icon floating */}
            <div
              className="floating-element bottom-1/3 left-5 animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" className="text-blue-500">
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" className="animate-spin" style={{ animationDuration: "10s" }}/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)" className="animate-spin" style={{ animationDuration: "10s" }}/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)" className="animate-spin" style={{ animationDuration: "10s" }}/>
              </svg>
            </div>

            {/* Git commit indicator */}
            <div
              className="floating-element bottom-20 right-5 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2 text-xs">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="3" x2="12" y2="9"/>
                  <line x1="12" y1="15" x2="12" y2="21"/>
                </svg>
                <span className="text-gray-600">committed</span>
              </div>
            </div>

            {/* 3D Character */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/PHOTO/hero.png"
                alt="3D Developer Character Working"
                width={450}
                height={450}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// SERVICES SECTION (BENTO GRID)
// =====================================================

function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-20 bg-[#f5f5f5]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="section-title">Services</p>
          <h2 className="section-heading">What I Offer</h2>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bento-card ${service.color} ${index === 0 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color === "bento-light" || service.color === "bento-gray" ? "bg-blue-100 text-blue-600" : "bg-white/20"}`}>
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{service.title}</h3>
              <p className={`text-sm ${service.color === "bento-light" || service.color === "bento-gray" ? "text-gray-600" : "text-white/80"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// PROJECTS SECTION
// =====================================================

function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="section-title">Portfolio</p>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card overflow-hidden"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLinkIcon />
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
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
    <section id="about" className="py-20 bg-[#f5f5f5]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="section-title">About Me</p>
            <h2 className="section-heading mb-6">
              Building digital experiences that matter
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I&apos;m a web developer based in {personalInfo.location}, passionate about building modern, interactive web experiences. I enjoy working across the full stack — from crafting pixel-perfect frontends to architecting robust backend systems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With expertise in React, Next.js, and Supabase, I turn ideas into functional, user-friendly applications that help businesses grow and succeed online.
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="card p-6 text-center">
              <div className="text-4xl font-display font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-display font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm">Projects Done</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-display font-bold text-pink-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-display font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Satisfaction</div>
            </div>
          </div>
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
    <section id="contact" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="section-title">Contact</p>
          <h2 className="section-heading mb-6">Let&apos;s work together</h2>
          <p className="text-gray-600 mb-8">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <EmailIcon />
              Get in Touch
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <GitHubIcon />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
              <EmailIcon />
            </a>
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
    <footer className="py-8 bg-[#f5f5f5] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
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
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
