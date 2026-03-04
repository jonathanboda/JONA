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
    name: "Sarah Johnson",
    role: "Founder",
    company: "Elvenwood Interior",
    feedback: "Jonathan delivered an exceptional website that perfectly captures our brand. His attention to detail and technical expertise made the entire process smooth and enjoyable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: 2,
    name: "Mr. Gnana",
    role: "Music Director",
    company: "Independent Artist",
    feedback: "Working with Jonathan was a great experience. He understood my vision and created a portfolio that truly represents my work as a music director.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "CEO",
    company: "The Precious Interiors",
    feedback: "Professional, responsive, and incredibly talented. Jonathan transformed our online presence with a stunning website that our clients love.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const navItems: NavItem[] = [
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
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
            {/* VS Code editor - BEHIND character */}
            <div
              className="absolute animate-float bg-[#1e1e1e] text-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#333] z-0 overflow-hidden"
              style={{ top: "3%", left: "-2%", animationDelay: "0s", width: "200px" }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-[#323233] border-b border-[#252526]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27ca40]"></span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium">index.ts</span>
                <div className="w-12"></div>
              </div>
              {/* Tab bar */}
              <div className="flex bg-[#252526] border-b border-[#1e1e1e]">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#1e1e1e] border-r border-[#252526] text-[10px] text-gray-300">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#3178c6"><path d="M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.47-.632-.68-1.22-.637-.84.06-1.381.543-1.346 1.2.015.18.06.289.174.432.158.186.393.318 1.178.66 1.45.63 2.07 1.043 2.47 1.65.44.67.54 1.74.246 2.56-.34.93-1.175 1.56-2.377 1.8-.37.074-1.26.064-1.66-.02-.872-.19-1.7-.68-2.218-1.32-.2-.246-.598-.888-.564-.944l.633-.378.79-.468.197.295c.287.426.616.705 1.076.875.32.095 1.09.08 1.36-.023.315-.12.494-.34.559-.645.06-.295-.007-.504-.217-.695-.147-.134-.607-.345-1.334-.612-1.07-.393-1.53-.629-1.97-1.01-.272-.233-.53-.58-.662-.876-.12-.286-.15-.49-.15-1.006 0-.478.023-.63.137-.928.33-.874 1.152-1.475 2.25-1.655.377-.06 1.251-.024 1.63.07z"/><path d="M14.256 14.393l.008 1.367H10.67v7.783H8.326v-7.783H4.73v-1.318c0-.735.015-1.338.034-1.367.015-.03 2.16-.045 4.76-.04l4.725.012.007 1.346z"/></svg>
                  <span>index.ts</span>
                </div>
              </div>
              {/* Code content with line numbers */}
              <div className="px-2 py-2 font-mono text-[10px] leading-[1.6]">
                <div className="flex">
                  <span className="text-gray-600 w-6 text-right mr-3 select-none">1</span>
                  <div><span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">dev</span> <span className="text-white">=</span> <span className="text-[#ce9178]">&quot;Jonathan&quot;</span></div>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-6 text-right mr-3 select-none">2</span>
                  <div><span className="text-[#c586c0]">async</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">build</span><span className="text-white">() {`{`}</span></div>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-6 text-right mr-3 select-none">3</span>
                  <div className="text-[#6a9955]">&nbsp;&nbsp;// Creating magic<span className="animate-pulse text-white">|</span></div>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-6 text-right mr-3 select-none">4</span>
                  <div><span className="text-white">{`}`}</span></div>
                </div>
              </div>
            </div>

            {/* Terminal card - BEHIND character */}
            <div
              className="absolute animate-float bg-[#0d1117] text-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-[#30363d] z-0 overflow-hidden"
              style={{ top: "6%", right: "-2%", animationDelay: "0.5s", width: "190px" }}
            >
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#161b22] border-b border-[#30363d]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2" strokeLinecap="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                <span className="text-[10px] text-gray-400 font-medium">Terminal</span>
              </div>
              <div className="px-3 py-2.5 font-mono text-[10px] space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-green-400">&#10148;</span>
                  <span className="text-gray-300">npm run dev</span>
                </div>
                <div className="text-gray-500 text-[9px]">compiled successfully</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-green-400">ready on localhost:3000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-green-400">&#10148;</span>
                  <span className="text-gray-500 animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Profile card - BEHIND character */}
            <div
              className="absolute animate-float bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-3.5 border border-gray-200/80 z-0"
              style={{ top: "35%", left: "-5%", animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm ring-2 ring-white shadow-md">
                  J
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Jonathan Naik</div>
                  <div className="text-[11px] text-gray-500">Full Stack Developer</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-[10px] text-green-600 font-medium">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* React logo badge - IN FRONT */}
            <div
              className="absolute animate-float bg-[#20232a] p-3 rounded-2xl shadow-[0_4px_20px_rgba(97,218,251,0.25)] z-20 border border-[#61DAFB]/20"
              style={{ top: "62%", left: "5%", animationDelay: "1s" }}
            >
              <svg viewBox="0 0 24 24" width="26" height="26" className="text-[#61DAFB]">
                <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
              </svg>
            </div>

            {/* Available for work badge - BEHIND character */}
            <div
              className="absolute animate-float bg-white rounded-full shadow-[0_2px_16px_rgba(0,0,0,0.08)] px-4 py-2 z-0 border border-gray-100"
              style={{ top: "45%", right: "-2%", animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-700">Available</span>
              </div>
            </div>

            {/* Code brackets badge - IN FRONT */}
            <div
              className="absolute animate-float bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-[0_4px_20px_rgba(59,130,246,0.35)] z-20"
              style={{ bottom: "25%", right: "8%", animationDelay: "0.3s" }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>

            {/* GitHub-style contribution widget - BEHIND */}
            <div
              className="absolute animate-float bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5 border border-gray-200/80 z-0"
              style={{ bottom: "30%", right: "-2%", animationDelay: "1.5s" }}
            >
              <div className="text-[10px] text-gray-500 font-medium mb-1.5">Contributions</div>
              <div className="flex gap-[3px]">
                {[3, 1, 4, 2, 4, 3, 2, 1, 4, 3, 2, 4].map((level, i) => (
                  <div key={i} className="flex flex-col gap-[3px]">
                    {[0, 1, 2].map((row) => (
                      <div
                        key={row}
                        className="w-[6px] h-[6px] rounded-[2px]"
                        style={{
                          backgroundColor:
                            (level + row) % 4 === 0 ? "#ebedf0" :
                            (level + row) % 4 === 1 ? "#9be9a8" :
                            (level + row) % 4 === 2 ? "#40c463" : "#216e39",
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Character - IN FRONT */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Image
                src="/PHOTO/hero.png"
                alt="3D Developer Character Working"
                width={480}
                height={480}
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

        <div className={`grid grid-cols-12 gap-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {/* Card 1 - Dark, left top */}
          <div className="col-span-6 md:col-span-3 bg-gray-900 text-white rounded-3xl p-6 flex flex-col justify-between min-h-[200px]">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Frontend</span>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">Business Websites</h3>
              <span className="text-sm text-blue-400 cursor-pointer hover:underline">Start now</span>
            </div>
          </div>

          {/* Card 2 - Dark, center large */}
          <div className="col-span-6 md:col-span-5 row-span-2 bg-gray-900 text-white rounded-3xl p-6 flex flex-col justify-between min-h-[250px] md:min-h-[420px]">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Fullstack</span>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Web Applications & Custom Solutions</h3>
              <span className="text-sm text-blue-400 cursor-pointer hover:underline">Start now</span>
            </div>
          </div>

          {/* Card 3 - Light, right top */}
          <div className="col-span-6 md:col-span-4 bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[200px] shadow-sm">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Design</span>
            <div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Landing Pages</h3>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">Start now</span>
            </div>
          </div>

          {/* Card 4 - Light, left bottom */}
          <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[200px] shadow-sm">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Creative</span>
            <div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Portfolio Sites</h3>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">Start now</span>
            </div>
          </div>

          {/* Card 5 - Green accent, right bottom */}
          <div className="col-span-6 md:col-span-4 bg-lime-300 rounded-3xl p-6 flex flex-col justify-between min-h-[200px]">
            <span className="text-xs text-gray-700 uppercase tracking-wide">Backend</span>
            <div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Admin Dashboards & APIs</h3>
              <span className="text-sm text-gray-700 cursor-pointer hover:underline">Start now</span>
            </div>
          </div>
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

  return (
    <section id="skills" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Building a<br />unified<br />language
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Delivering consistent experiences across an entire product ecosystem demands a shared design language. I use modern technologies and best practices to build scalable, maintainable applications.
            </p>
          </div>

          {/* Right - 3D Character with floating UI elements */}
          <div className={`relative h-[400px] lg:h-[450px] ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            {/* Code editor floating element - BEHIND character */}
            <div
              className="absolute animate-float bg-[#1a1a2e] text-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-700/50 z-0"
              style={{ top: "5%", left: "5%", animationDelay: "0s" }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27ca40]"></span>
              </div>
              <div className="font-mono text-[11px] leading-relaxed">
                <div><span className="text-pink-400">&lt;div</span> <span className="text-green-400">class</span>=<span className="text-amber-300">&quot;...&quot;</span><span className="text-pink-400">&gt;</span></div>
                <div className="text-gray-400">&nbsp;&nbsp;...</div>
                <div><span className="text-pink-400">&lt;/div&gt;</span><span className="text-white animate-pulse">|</span></div>
              </div>
            </div>

            {/* Checklist card - BEHIND character */}
            <div
              className="absolute animate-float bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100 z-0"
              style={{ top: "40%", left: "0%", animationDelay: "0.6s" }}
            >
              <div className="space-y-3">
                {/* Item 1 */}
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="w-16 h-2 bg-gray-700 rounded-full"></div>
                    <div className="w-10 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="w-14 h-2 bg-gray-700 rounded-full"></div>
                    <div className="w-8 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="w-20 h-2 bg-gray-700 rounded-full"></div>
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code brackets icon - IN FRONT, lower position */}
            <div
              className="absolute animate-float bg-blue-500 p-3 rounded-xl shadow-xl z-20"
              style={{ top: "55%", left: "25%", animationDelay: "0.3s" }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>

            {/* Gear/Settings icon - BEHIND character */}
            <div
              className="absolute animate-float z-0"
              style={{ top: "8%", right: "10%", animationDelay: "1s" }}
            >
              <svg viewBox="0 0 24 24" width="50" height="50" fill="#3b82f6" className="drop-shadow-lg">
                <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </div>

            {/* Small gear icon */}
            <div
              className="absolute animate-float z-0"
              style={{ top: "25%", right: "5%", animationDelay: "0.5s" }}
            >
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#60a5fa" className="drop-shadow">
                <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </div>

            {/* 3D Character Image - IN FRONT */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Image
                src="/PHOTO/skill.png"
                alt="3D Developer Character with Tablet"
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
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

  const cardStyles = [
    "bg-blue-500 text-white",
    "bg-white text-gray-900 shadow-sm",
    "bg-gray-900 text-white",
    "bg-white text-gray-900 shadow-sm",
  ];

  return (
    <section id="projects" className="py-20 bg-[#f5f5f5]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="section-title">Portfolio</p>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        <div className={`grid grid-cols-12 gap-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {projects.map((project, index) => {
            const isLarge = index === 1 || index === 2;
            const cardStyle = cardStyles[index % cardStyles.length];
            const isLight = cardStyle.includes("bg-white");

            return (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-3xl p-5 flex flex-col justify-between transition-transform hover:scale-[1.02] ${cardStyle} ${
                  isLarge ? "col-span-12 md:col-span-7 min-h-[280px]" : "col-span-6 md:col-span-5 min-h-[240px]"
                } ${index === 2 ? "md:col-start-6" : ""}`}
              >
                {/* Thumbnail Preview */}
                <div className={`w-full h-36 md:h-44 rounded-2xl overflow-hidden mb-4 ${isLight ? "bg-gray-100" : "bg-white/10"}`}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  {/* Tech label */}
                  <span className={`text-xs uppercase tracking-wide ${isLight ? "text-gray-400" : "text-white/60"}`}>
                    {project.technologies[0]}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold mt-1 mb-3">
                    {project.title}
                  </h3>

                  {/* Read more link */}
                  <span className={`text-sm cursor-pointer hover:underline ${
                    isLight ? "text-blue-600" : cardStyle.includes("blue") ? "text-white" : "text-blue-400"
                  }`}>
                    View project
                  </span>
                </div>
              </a>
            );
          })}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="section-title">About Me</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Building digital<br />experiences<br />that matter
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 max-w-md">
              I&apos;m a web developer based in {personalInfo.location}, passionate about building modern, interactive web experiences. I enjoy working across the full stack — from crafting pixel-perfect frontends to architecting robust backend systems.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-md">
              With expertise in React, Next.js, and Supabase, I turn ideas into functional, user-friendly applications that help businesses grow and succeed online.
            </p>
          </div>

          {/* Right - 3D Character with floating UI elements */}
          <div className={`relative h-[450px] lg:h-[500px] ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            {/* Years Experience - top left */}
            <div
              className="floating-element animate-float"
              style={{ top: "15%", left: "18%", animationDelay: "0s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-blue-600">1+</div>
                <div className="text-xs text-gray-500">Year Exp</div>
              </div>
            </div>

            {/* Projects - top right */}
            <div
              className="floating-element animate-float"
              style={{ top: "10%", right: "18%", animationDelay: "0.5s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-purple-600">7+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
            </div>

            {/* Clients - middle left */}
            <div
              className="floating-element animate-float"
              style={{ top: "45%", left: "12%", animationDelay: "1s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-pink-600">5+</div>
                <div className="text-xs text-gray-500">Clients</div>
              </div>
            </div>


            {/* Satisfaction - bottom right */}
            <div
              className="floating-element animate-float"
              style={{ bottom: "30%", right: "12%", animationDelay: "1.5s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
            </div>

            {/* 3D Character Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/PHOTO/about section .png"
                alt="3D Character"
                width={400}
                height={400}
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// TESTIMONIALS SECTION
// =====================================================

function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="section-title">Testimonials</p>
          <h2 className="section-heading">What Clients Say</h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {testimonials.map((testimonial, index) => {
            const cardStyles = [
              "bg-blue-500 text-white",
              "bg-white text-gray-900 shadow-md",
              "bg-gray-900 text-white",
            ];
            const style = cardStyles[index % cardStyles.length];
            const isLight = style.includes("bg-white");

            return (
              <div
                key={testimonial.id}
                className={`rounded-3xl p-6 flex flex-col justify-between min-h-[280px] ${style}`}
              >
                {/* Quote */}
                <p className={`text-sm leading-relaxed mb-6 ${isLight ? "text-gray-600" : "text-white/90"}`}>
                  &quot;{testimonial.feedback}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-display font-bold">{testimonial.name}</h4>
                    <p className={`text-xs ${isLight ? "text-gray-500" : "text-white/60"}`}>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
