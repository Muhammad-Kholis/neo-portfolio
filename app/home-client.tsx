"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { PortfolioProject } from "@/lib/portfolio"

interface HomeClientProps {
  projects: PortfolioProject[]
}

const projectTagsMap: Record<string, string[]> = {
  "zellopos": ["Flutter", "Next.js", "Supabase"],
  "parzello-website": ["Next.js", "Tailwind CSS"],
  "sipaling-delivery": ["Flutter", "Dart"],
  "centrepoint": ["Flutter", "Firebase"],
  "personal-portfolio": ["Next.js", "Tailwind CSS", "MDX"],
  "website-ukm-policy": ["Next.js", "Tailwind CSS"],
  "e-konsul": ["Flutter", "Firebase"],
  "emergency-center": ["Flutter", "Firebase"],
  "ticzy-productivity-app": ["Flutter", "Firebase"]
}

const tagBgMap: Record<string, string> = {
  "Flutter": "bg-primary-container",
  "Next.js": "bg-secondary-container",
  "Supabase": "bg-tertiary-fixed",
  "Firebase": "bg-error-container",
  "Tailwind CSS": "bg-primary-fixed",
  "MDX": "bg-surface",
  "Dart": "bg-[#eedbff]",
  "React": "bg-secondary-fixed",
  "PostgreSQL": "bg-primary-container",
  "Git": "bg-white"
}

function getProjectTags(slug: string): string[] {
  return projectTagsMap[slug] || ["Web"]
}

function getTagBgClass(tag: string): string {
  return tagBgMap[tag] || "bg-white"
}

export default function HomeClient({ projects }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Mobile" | "Web">("All")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(1)
  const sliderRef = useRef<HTMLDivElement>(null)

  const filteredProjects = projects.filter((project) => {
    const tags = getProjectTags(project.slug)
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "All" || project.badge === selectedCategory

    return matchesSearch && matchesCategory
  })

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 450
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleSliderScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      if (maxScroll <= 0) return

      const ratio = scrollLeft / maxScroll
      let current = 1
      if (ratio > 0.75) {
        current = 3
      } else if (ratio > 0.25) {
        current = 2
      }
      setActiveSlide(current)
    }
  }

  return (
    <div className="bg-dots text-on-background selection:bg-vibrant-orange selection:text-black font-display overflow-x-hidden min-h-screen">
      {/* Navigation */}
      <nav className="bg-background w-full sticky top-0 z-50 border-b-4 border-border-dark flex justify-between items-center px-4 md:px-12 py-4 max-w-[1280px] mx-auto mt-2 border-x-4 neo-shadow-lg relative">
        <div className="absolute -top-4 -left-4 bg-tertiary-fixed border-2 border-border-dark px-2 py-1 transform -rotate-12 neo-shadow z-10 font-bold text-sm">
          HIRE ME!
        </div>
        <div className="font-display text-headline-lg-mobile md:text-headline-md font-extrabold text-on-background tracking-tighter flex items-center gap-2">
          <span
            className="material-symbols-outlined text-vibrant-orange"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}
          >
            code_blocks
          </span>
          Portfolio
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            className="font-display text-label-bold uppercase text-on-background border-b-4 border-primary-fixed-dim pb-1 hover:bg-vibrant-orange hover:text-black transition-colors px-2 border-2 border-transparent hover:border-black"
            href="#intro"
          >
            Intro
          </a>
          <a
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="#about"
          >
            About
          </a>
          <a
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="#work"
          >
            Work
          </a>
          <a
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="#activities"
          >
            Activities
          </a>
          <a
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="#contact"
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact")
            contactSection?.scrollIntoView({ behavior: "smooth" })
          }}
          className="hidden md:flex bg-primary-fixed border-3 border-border-dark px-6 py-2 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow active-push transition-all duration-200 items-center gap-2"
        >
          <span className="material-symbols-outlined">work</span>
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-on-background border-3 border-border-dark p-2 bg-primary-fixed neo-shadow active-push"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-[-4px] right-[-4px] bg-background border-4 border-border-dark p-6 neo-shadow-xl flex flex-col gap-4 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <a
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="#intro"
            >
              Intro
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="#experience"
            >
              Experience
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="#skills"
            >
              Skills
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="#work"
            >
              Work
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="#activities"
            >
              Activities
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="#contact"
            >
              Contact
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false)
                const contactSection = document.getElementById("contact")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-full bg-primary-fixed border-3 border-border-dark py-3 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow active-push flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">work</span>
              Hire Me
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
        id="intro"
      >
        <div
          className="absolute top-10 right-10 w-16 h-16 bg-secondary-fixed border-3 border-border-dark star-shape animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-vibrant-orange border-3 border-border-dark rounded-full neo-shadow z-0"></div>

        <div className="order-2 md:order-1 flex flex-col gap-4 relative z-10">
          <div className="flex flex-wrap gap-2 items-center">
            <div className="inline-block bg-vibrant-orange border-3 border-border-dark px-4 py-1 font-display text-label-bold uppercase w-max neo-shadow transform -rotate-2">
              Flutter & Web Developer
            </div>
            <div className="inline-block bg-tertiary-fixed border-3 border-border-dark px-3 py-1 font-display text-label-bold uppercase w-max neo-shadow transform rotate-3">
              Available Now
            </div>
          </div>

          <h1 className="font-display text-headline-lg-mobile md:text-display text-on-background uppercase relative">
            <span className="absolute -left-6 top-0 text-vibrant-orange opacity-50 select-none hidden md:block">
              *
            </span>
            Hi, I&apos;m <br />
            <div className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-primary-container border-4 border-border-dark transform rotate-1 neo-shadow-lg"></span>
              <span className="relative bg-white border-4 border-border-dark px-4 py-2 inline-block transform -rotate-2 neo-shadow text-black">
                Muhammad Kholis
              </span>
            </div>
          </h1>

          <p className="font-display text-body-lg text-on-surface-variant max-w-lg mt-4 border-4 border-border-dark bg-background p-6 neo-shadow-lg relative">
            <span className="absolute -top-3 -right-3 bg-secondary-fixed border-2 border-border-dark p-1 text-xs font-bold rotate-12">
              100% REAL
            </span>
            I build digital experiences with robust structural integrity and high-clarity layouts. Focused on delivering
            reliable, performant applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              className="bg-primary-fixed border-4 border-border-dark px-6 py-3 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow-lg active-push-lg flex items-center gap-2 text-lg md:text-xl"
              href="#work"
            >
              View Work <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </a>
            <a
              className="bg-secondary-fixed border-4 border-border-dark px-6 py-3 font-display text-label-bold uppercase text-on-background neo-shadow-lg active-push-lg flex items-center gap-2 text-lg md:text-xl"
              href="/resume-id.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">description</span>
              Download CV
            </a>
            <a
              className="bg-tertiary-fixed border-4 border-border-dark px-6 py-3 font-display text-label-bold uppercase text-on-background neo-shadow-lg active-push-lg text-lg md:text-xl text-center"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image Box */}
        <div className="order-1 md:order-2 flex justify-center relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-vibrant-orange border-4 border-border-dark translate-x-8 translate-y-8 group-hover:translate-x-10 group-hover:translate-y-10 transition-transform"></div>
            <div className="absolute inset-0 bg-primary-fixed border-4 border-border-dark translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform"></div>
            <img
              className="relative z-10 w-full max-w-md border-4 border-border-dark bg-background object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="/images/muhammadkholis.webp"
              alt="Muhammad Kholis Profile Photo"
              style={{ aspectRatio: "1/1" }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white border-3 border-border-dark p-2 neo-shadow transform -rotate-12 z-20 flex items-center gap-2">
              <span className="material-symbols-outlined text-vibrant-orange">verified</span>{" "}
              <span className="font-bold text-sm text-black">DEV.APPROVED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-border-dark text-primary-fixed py-3 border-y-4 border-black overflow-hidden transform -rotate-1 relative z-20 neo-shadow-lg">
        <div className="marquee-container text-2xl font-black uppercase tracking-widest">
          <div className="marquee-content flex gap-8 items-center">
            <span>Available for Work</span> <span className="text-vibrant-orange">★</span>
            <span>Frontend Dev</span> <span className="text-vibrant-orange">★</span>
            <span>Mobile Apps</span> <span className="text-vibrant-orange">★</span>
            <span>UI/UX Engineering</span> <span className="text-vibrant-orange">★</span>
            <span>Available for Work</span> <span className="text-vibrant-orange">★</span>
            <span>Frontend Dev</span> <span className="text-vibrant-orange">★</span>
            <span>Mobile Apps</span> <span className="text-vibrant-orange">★</span>
            <span>UI/UX Engineering</span> <span className="text-vibrant-orange">★</span>
            <span>Available for Work</span> <span className="text-vibrant-orange">★</span>
            <span>Frontend Dev</span> <span className="text-vibrant-orange">★</span>
            <span>Mobile Apps</span> <span className="text-vibrant-orange">★</span>
            <span>UI/UX Engineering</span> <span className="text-vibrant-orange">★</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 relative" id="about">
        <div
          className="absolute -left-10 top-1/4 w-64 h-64 bg-primary-fixed opacity-20 star-shape animate-spin -z-10"
          style={{ animationDuration: "30s" }}
        ></div>
        <div className="absolute -right-20 bottom-0 w-96 h-96 bg-tertiary-fixed opacity-10 rounded-full -z-10"></div>

        <div className="relative z-10">
          <div className="absolute top-0 right-20 bg-vibrant-orange border-4 border-black px-4 py-2 transform rotate-6 z-20 neo-shadow text-black font-black text-xl">
            WHO AM I?
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white border-4 border-black p-6 neo-shadow-lg transform -rotate-2 relative">
                <div className="absolute -top-4 -left-4 bg-secondary-fixed border-2 border-black px-2 py-1 text-xs font-bold uppercase text-black">
                  Status
                </div>
                <h2 className="font-display text-headline-md text-black mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">person</span> Profile
                </h2>
                <ul className="font-display text-body-md flex flex-col gap-2 text-black">
                  <li>
                    <span className="font-bold">Role:</span> Informatics Student
                  </li>
                  <li>
                    <span className="font-bold">Location:</span> Langsa, Indonesia
                  </li>
                  <li>
                    <span className="font-bold">Focus:</span> Frontend & Mobile
                  </li>
                </ul>
              </div>
              <div className="bg-primary-container border-4 border-black p-4 neo-shadow transform rotate-1">
                <p className="font-display text-label-bold uppercase text-center text-black">Open for Collaboration</p>
              </div>
            </div>

            <div className="md:col-span-8 bg-background border-4 border-border-dark p-6 md:p-10 neo-shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-dots opacity-20"></div>
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-background flex items-center gap-2 uppercase mb-6">
                <span className="bg-primary-container p-2 border-3 border-black neo-shadow inline-block">
                  <span className="material-symbols-outlined text-4xl text-black" style={{ fontVariationSettings: "'FILL' 1" }}>
                    person
                  </span>
                </span>{" "}
                About Me
              </h2>

              <div className="font-display text-body-lg text-on-surface-variant flex flex-col gap-6 text-xl relative z-10">
                <p className="bg-surface-container p-4 border-l-8 border-secondary-fixed neo-shadow-sm text-on-surface">
                  Saya adalah mahasiswa tingkat akhir Teknik Informatika di Politeknik Negeri Lhokseumawe dengan pengalaman praktis dalam membangun aplikasi web dan mobile sejak tahun 2022.
                </p>
                <p className="bg-surface-container p-4 border-l-8 border-vibrant-orange neo-shadow-sm text-on-surface">
                  Menguasai Flutter, Next.js, React, Firebase, dan Supabase. Memiliki antusiasme tinggi dalam merancang antarmuka pengguna yang bersih dan menghadirkan solusi digital yang berdampak melalui proyek lepas (freelance) serta pengalaman magang.
                </p>
              </div>
              <div className="h-4 w-full bg-vibrant-orange border-3 border-border-dark mt-8 neo-shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Archive Gallery */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 relative" id="gallery">
        <div className="flex items-center gap-4 mb-10">
          <div
            className="w-12 h-12 bg-vibrant-orange border-4 border-black rounded-full flex items-center justify-center neo-shadow animate-spin"
            style={{ animationDuration: "15s" }}
          >
            <span className="material-symbols-outlined font-black">photo_library</span>
          </div>
          <h2 className="font-display text-headline-lg-mobile md:text-display text-on-background inline-block bg-white border-4 border-border-dark px-6 py-2 neo-shadow transform rotate-1 uppercase text-black">
            Visual Archive
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          <div className="md:col-span-8 relative group">
            <div className="absolute inset-0 bg-primary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/images/muhammadkholis_ui_.webp"
                alt="Workflow visual archive"
              />
              <div className="absolute top-4 left-4 bg-secondary-fixed border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform -rotate-3 text-black">
                Workflow
              </div>
            </div>
          </div>

          <div className="md:col-span-4 relative group">
            <div className="absolute inset-0 bg-secondary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/images/muhammadkholis2.webp"
                alt="Behind the scenes visual archive"
              />
              <div className="absolute bottom-4 right-4 bg-vibrant-orange border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform rotate-6 text-black">
                BTS
              </div>
            </div>
          </div>

          <div className="md:col-span-4 relative group">
            <div className="absolute inset-0 bg-tertiary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/images/muhammadkholis.webp"
                alt="Moments visual archive"
              />
              <div className="absolute top-4 right-4 bg-primary-container border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform rotate-2 text-black">
                Moments
              </div>
            </div>
          </div>

          <div className="md:col-span-8 relative group">
            <div className="absolute inset-0 bg-vibrant-orange border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/images/muhammadkholis2.webp"
                alt="Process visual archive"
              />
              <div className="absolute bottom-4 left-4 bg-secondary-container border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform -rotate-2 text-black">
                Process
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal (Skills & Education) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16" id="skills">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary-fixed border-4 border-black rounded-full flex items-center justify-center neo-shadow animate-bounce">
            <span className="material-symbols-outlined font-black">bolt</span>
          </div>
          <h2 className="font-display text-headline-lg-mobile md:text-display text-on-background inline-block bg-white border-4 border-border-dark px-4 py-2 neo-shadow transform -rotate-1 uppercase text-black">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          {/* Education Card */}
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-vibrant-orange border-4 border-border-dark translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-background border-4 border-border-dark p-6 flex flex-col justify-between hover:-translate-y-2 hover:-translate-x-2 transition-transform bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAyIiBoZWlnaHQ9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjRTJFMkUyIi8+PC9zdmc+')]">
              <div>
                <div className="bg-primary-fixed text-black border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase w-max mb-4 neo-shadow transform -rotate-3 text-lg">
                  Education
                </div>
                <h3 className="font-display text-headline-md text-on-background bg-white border-2 border-black p-2 inline-block text-black">
                  Politeknik Negeri Lhokseumawe
                </h3>
                <p className="font-display text-body-md text-black mt-2 font-bold bg-secondary-fixed border-2 border-black p-1 inline-block">
                  Teknik Informatika (IPK: 3.53)
                </p>
              </div>
              <div className="border-t-4 border-border-dark pt-4 mt-auto border-dashed">
                <h3 className="font-display text-headline-md text-on-background bg-white border-2 border-black p-2 inline-block text-black">
                  SMK Negeri 2 Kota Langsa
                </h3>
                <p className="font-display text-body-md text-black font-bold bg-tertiary-fixed border-2 border-black p-1 inline-block mt-1">
                  Rekayasa Perangkat Lunak (84.81)
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="md:col-span-7 relative group">
            <div className="absolute inset-0 bg-secondary-fixed border-4 border-border-dark translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-[#eedbff] border-4 border-border-dark p-6 overflow-hidden flex flex-col hover:-translate-y-2 hover:-translate-x-2 transition-transform text-black">
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-fixed border-4 border-black rounded-full flex items-center justify-center neo-shadow text-center font-bold text-xs transform rotate-12">
                TECH
                <br />
                STACK
              </div>
              <div className="bg-background border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase w-max mb-4 neo-shadow transform rotate-2 text-lg text-black">
                Core Technologies
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="bg-vibrant-orange border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  Flutter
                </span>
                <span className="bg-primary-fixed border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  Next.js
                </span>
                <span className="bg-secondary-fixed border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  React
                </span>
                <span className="bg-white border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  Dart
                </span>
                <span className="bg-tertiary-fixed border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  Supabase
                </span>
                <span className="bg-error-container border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  Firebase
                </span>
                <span className="bg-primary-container border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  PostgreSQL
                </span>
                <span className="bg-black text-white border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base">
                  Golang
                </span>
                <span className="bg-[#a8ffb2] border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  Docker
                </span>
                <span className="bg-white border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-base text-black">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16" id="experience">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-vibrant-orange border-4 border-black rounded-full flex items-center justify-center neo-shadow animate-pulse">
            <span className="material-symbols-outlined font-black">work_history</span>
          </div>
          <h2 className="font-display text-headline-lg-mobile md:text-display text-on-background inline-block bg-white border-4 border-border-dark px-4 py-2 neo-shadow transform rotate-1 uppercase text-black">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-4 border-border-dark pl-6 ml-4 md:ml-6 flex flex-col gap-10">
          {/* Experience Card 1 */}
          <div className="relative group">
            {/* Timeline marker */}
            <div className="absolute -left-[38px] top-1.5 w-6 h-6 rounded-full bg-vibrant-orange border-4 border-black z-10 group-hover:scale-125 transition-transform"></div>

            <div className="absolute inset-0 bg-primary-fixed border-4 border-border-dark translate-x-4 translate-y-4"></div>
            <div className="relative bg-background border-4 border-border-dark p-6 hover:-translate-y-2 hover:-translate-x-2 transition-transform">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 border-b-2 border-dashed border-border-dark pb-4">
                <div>
                  <span className="bg-white border-2 border-black px-2 py-0.5 font-display text-label-sm uppercase font-bold text-xs inline-block mb-1 text-black">
                    Fulltime / Remot
                  </span>
                  <h3 className="font-display text-headline-md text-on-background font-extrabold uppercase">
                    Fullstack Developer
                  </h3>
                  <span className="font-display text-body-md text-vibrant-orange font-bold">
                    Tapugha Tech
                  </span>
                </div>
                <div className="text-right">
                  <span className="bg-black text-white px-3 py-1 font-display text-label-bold uppercase text-sm inline-block">
                    23 Apr 2026 – Sekarang
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-5 font-display text-body-lg text-on-surface-variant flex flex-col gap-2">
                <li>Mengembangkan aplikasi web menggunakan Golang untuk layanan backend dan Next.js untuk frontend.</li>
                <li>Mengimplementasikan kontainerisasi dengan Docker guna menyelaraskan lingkungan pengembangan dan produksi.</li>
              </ul>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="relative group">
            {/* Timeline marker */}
            <div className="absolute -left-[38px] top-1.5 w-6 h-6 rounded-full bg-secondary-fixed border-4 border-black z-10 group-hover:scale-125 transition-transform"></div>

            <div className="absolute inset-0 bg-secondary-fixed border-4 border-border-dark translate-x-4 translate-y-4"></div>
            <div className="relative bg-background border-4 border-border-dark p-6 hover:-translate-y-2 hover:-translate-x-2 transition-transform">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 border-b-2 border-dashed border-border-dark pb-4">
                <div>
                  <span className="bg-white border-2 border-black px-2 py-0.5 font-display text-label-sm uppercase font-bold text-xs inline-block mb-1 text-black">
                    Internship
                  </span>
                  <h3 className="font-display text-headline-md text-on-background font-extrabold uppercase">
                    Mobile Developer Intern
                  </h3>
                  <span className="font-display text-body-md text-vibrant-orange font-bold">
                    Dinas Komunikasi, Informatika dan Persandian Aceh (Banda Aceh)
                  </span>
                </div>
                <div className="text-right">
                  <span className="bg-black text-white px-3 py-1 font-display text-label-bold uppercase text-sm inline-block">
                    Agu 2025 – Jan 2026
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-5 font-display text-body-lg text-on-surface-variant flex flex-col gap-2">
                <li>Mengembangkan dan memelihara aplikasi mobile untuk layanan digital pemerintah provinsi.</li>
                <li>Berkolaborasi dengan tim IT untuk menghadirkan aplikasi pemerintah yang fungsional dan ramah pengguna.</li>
                <li>Menggunakan Flutter dan Firebase untuk pengembangan aplikasi mobile lintas platform.</li>
              </ul>
            </div>
          </div>

          {/* Experience Card 3 */}
          <div className="relative group">
            {/* Timeline marker */}
            <div className="absolute -left-[38px] top-1.5 w-6 h-6 rounded-full bg-tertiary-fixed border-4 border-black z-10 group-hover:scale-125 transition-transform"></div>

            <div className="absolute inset-0 bg-tertiary-fixed border-4 border-border-dark translate-x-4 translate-y-4"></div>
            <div className="relative bg-background border-4 border-border-dark p-6 hover:-translate-y-2 hover:-translate-x-2 transition-transform">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 border-b-2 border-dashed border-border-dark pb-4">
                <div>
                  <span className="bg-white border-2 border-black px-2 py-0.5 font-display text-label-sm uppercase font-bold text-xs inline-block mb-1 text-black">
                    Self-Employed / Remot
                  </span>
                  <h3 className="font-display text-headline-md text-on-background font-extrabold uppercase">
                    Freelance Full Stack & Mobile Developer
                  </h3>
                  <span className="font-display text-body-md text-vibrant-orange font-bold">
                    Self-employed
                  </span>
                </div>
                <div className="text-right">
                  <span className="bg-black text-white px-3 py-1 font-display text-label-bold uppercase text-sm inline-block">
                    2022 – Sekarang
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-5 font-display text-body-lg text-on-surface-variant flex flex-col gap-2">
                <li>Menyelesaikan berbagai proyek klien termasuk aplikasi web dan aplikasi mobile.</li>
                <li>Membangun solusi end-to-end mulai dari desain UI/UX hingga integrasi backend.</li>
                <li>Bekerja dengan tech stack modern termasuk Next.js, React, Flutter, Firebase, dan Supabase.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work (Projects) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16" id="work">
        <div className="flex flex-col items-center mb-16 relative">
          <h2 className="font-display text-display text-on-background mb-2 inline-block bg-primary-fixed border-4 border-border-dark px-8 py-4 neo-shadow-xl transform rotate-1 uppercase text-center w-full md:w-auto text-black">
            Selected Work
          </h2>
          <div className="bg-vibrant-orange border-3 border-black px-4 py-1 font-bold transform -rotate-3 -mt-4 z-10 neo-shadow text-black">
            PROJECTS ARCHIVE // 2024
          </div>
        </div>

        {/* Filters and Search */}
        <div className="w-full mb-16 flex flex-col md:flex-row gap-6 items-stretch md:items-center">
          <div className="relative flex-grow text-black">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-black font-black">
              search
            </span>
            <input
              className="w-full bg-white border-4 border-black p-4 pl-14 font-display text-label-bold uppercase neo-shadow focus:outline-none focus:ring-0 placeholder:text-black/50"
              placeholder="SEARCH PROJECTS..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`border-4 border-black px-6 py-4 font-display text-label-bold uppercase text-black neo-shadow active-push transition-all ${
                selectedCategory === "All" ? "bg-primary-container" : "bg-white hover:bg-secondary-fixed"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("Mobile")}
              className={`border-4 border-black px-6 py-4 font-display text-label-bold uppercase text-black neo-shadow active-push transition-all ${
                selectedCategory === "Mobile" ? "bg-primary-container" : "bg-white hover:bg-secondary-fixed"
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setSelectedCategory("Web")}
              className={`border-4 border-black px-6 py-4 font-display text-label-bold uppercase text-black neo-shadow active-push transition-all ${
                selectedCategory === "Web" ? "bg-primary-container" : "bg-white hover:bg-secondary-fixed"
              }`}
            >
              Web
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredProjects.map((project, i) => {
            const bgOffsets = ["bg-vibrant-orange", "bg-secondary-fixed", "bg-tertiary-fixed", "bg-primary-fixed", "bg-error-container", "bg-black"]
            const offsetBg = bgOffsets[i % bgOffsets.length]
            const projectTags = getProjectTags(project.slug)

            return (
              <div key={project.slug} className="relative group">
                <div className={`absolute inset-0 border-4 border-border-dark translate-x-4 translate-y-4 ${offsetBg}`}></div>
                <div className="relative bg-background border-4 border-border-dark flex flex-col h-full hover:-translate-y-2 hover:-translate-x-2 transition-transform">
                  <div className="border-b-4 border-border-dark relative overflow-hidden bg-surface h-56 p-2">
                    <div className="absolute top-4 left-4 bg-primary-fixed border-2 border-black px-2 py-1 text-xs font-bold z-10 neo-shadow text-black">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <img
                      className="w-full h-full object-cover border-2 border-black group-hover:scale-105 transition-transform duration-500"
                      src={project.cover}
                      alt={`${project.title} Preview`}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTBMMTAgMEgwdjEweiIgZmlsbD0iI0YyRjJGMiIvPjwvc3ZnPg==')]">
                    <h3 className="font-display text-headline-md text-on-background mb-2 bg-white border-2 border-black p-1 inline-block w-max uppercase text-black">
                      {project.title}
                    </h3>
                    <p className="font-display text-body-md text-on-surface-variant mb-6 flex-grow bg-white p-2 border-2 border-black text-on-surface">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projectTags.map((tag) => (
                        <span
                          key={tag}
                          className={`border-3 border-border-dark px-3 py-1 font-display text-label-sm uppercase neo-shadow text-black ${getTagBgClass(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="bg-black text-white border-4 border-border-dark w-full py-3 font-display text-label-bold uppercase neo-shadow active-push hover:bg-vibrant-orange hover:text-black transition-colors text-lg text-center block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
          {filteredProjects.length === 0 && (
            <div className="col-span-full bg-white border-4 border-black p-12 neo-shadow text-center">
              <span className="material-symbols-outlined text-6xl text-error mb-4">search_off</span>
              <p className="font-display text-headline-md uppercase text-black">No Projects Found</p>
              <p className="font-display text-body-lg text-on-surface-variant mt-2 text-on-surface">
                Try modifying your search or filter options.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Activity Documentation Slider */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16" id="activity-docs">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary-fixed border-4 border-black rounded-full flex items-center justify-center neo-shadow">
              <span className="material-symbols-outlined font-black">history_edu</span>
            </div>
            <h2 className="font-display text-headline-lg-mobile md:text-display text-on-background inline-block bg-white border-4 border-border-dark px-6 py-2 neo-shadow transform rotate-1 uppercase text-black">
              Activity Documentation
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-white border-3 border-black px-4 py-2 font-bold neo-shadow text-black">
              {String(activeSlide).padStart(2, "0")} / 03
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollSlider("left")}
                className="w-12 h-12 bg-primary-fixed border-3 border-black flex items-center justify-center neo-shadow active-push hover:bg-vibrant-orange transition-colors text-black"
              >
                <span className="material-symbols-outlined font-black">arrow_back</span>
              </button>
              <button
                onClick={() => scrollSlider("right")}
                className="w-12 h-12 bg-primary-fixed border-3 border-black flex items-center justify-center neo-shadow active-push hover:bg-vibrant-orange transition-colors text-black"
              >
                <span className="material-symbols-outlined font-black">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={handleSliderScroll}
          className="overflow-x-auto pb-8 no-scrollbar scroll-smooth"
        >
          <div className="flex gap-10 min-w-max px-2">
            {/* Slide 1 */}
            <div className="w-[320px] md:w-[500px] relative group">
              <div className="absolute inset-0 bg-primary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
              <div className="relative bg-white border-4 border-black overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform text-black">
                <div className="h-64 relative">
                  <img
                    className="w-full h-full object-cover border-b-4 border-black"
                    src="/kegiatan/kmipn.webp"
                    alt="Hackathon KMIPN VI"
                  />
                  <div className="absolute top-4 left-4 bg-vibrant-orange border-2 border-black px-2 py-1 text-xs font-bold neo-shadow text-black">
                    TECH
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-headline-md mb-2 uppercase text-black">Hackathon KMIPN VI</h3>
                  <p className="font-display text-body-md text-on-surface-variant mb-4 flex-grow text-on-surface">
                    Finalist dalam Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN) VI di Politeknik Negeri Jakarta (2024).
                  </p>
                  <div className="mt-auto">
                    <span className="bg-secondary-fixed border-2 border-black px-3 py-1 text-xs font-bold uppercase">
                      2024 // Finalist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="w-[320px] md:w-[500px] relative group">
              <div className="absolute inset-0 bg-tertiary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
              <div className="relative bg-white border-4 border-black overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform text-black">
                <div className="h-64 relative">
                  <img
                    className="w-full h-full object-cover border-b-4 border-black"
                    src="/kegiatan/komitpnl.webp"
                    alt="Komit PNL"
                  />
                  <div className="absolute top-4 left-4 bg-primary-container border-2 border-black px-2 py-1 text-xs font-bold neo-shadow text-black">
                    COMMUNITY
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-black">
                  <h3 className="font-display text-headline-md mb-2 uppercase text-black">Komit PNL</h3>
                  <p className="font-display text-body-md text-on-surface-variant mb-4 flex-grow text-on-surface">
                    Anggota Divisi Digihub - Komit PNL. Merancang aset visual kreatif dan materi publikasi digital berkualitas tinggi.
                  </p>
                  <div className="mt-auto">
                    <span className="bg-secondary-fixed border-2 border-black px-3 py-1 text-xs font-bold uppercase">
                      2024 - 2025 // Anggota
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="w-[320px] md:w-[500px] relative group">
              <div className="absolute inset-0 bg-vibrant-orange border-4 border-black translate-x-4 translate-y-4"></div>
              <div className="relative bg-white border-4 border-black overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform text-black">
                <div className="h-64 relative">
                  <img
                    className="w-full h-full object-cover border-b-4 border-black"
                    src="/kegiatan/ukmpolicy.webp"
                    alt="UKM POLICY"
                  />
                  <div className="absolute top-4 left-4 bg-secondary-fixed border-2 border-black px-2 py-1 text-xs font-bold neo-shadow text-black">
                    LEADERSHIP
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-black">
                  <h3 className="font-display text-headline-md mb-2 uppercase text-black">UKM POLICY</h3>
                  <p className="font-display text-body-md text-on-surface-variant mb-4 flex-grow text-on-surface">
                    Ketua Bidang Pemrograman - UKM POLICY (Linux Community). Mengembangkan aplikasi dan pemeliharaan website organisasi.
                  </p>
                  <div className="mt-auto">
                    <span className="bg-secondary-fixed border-2 border-black px-3 py-1 text-xs font-bold uppercase">
                      2023 - 2024 // Ketua Bidang
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Achievement */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16" id="activities">
        <div className="relative">
          <div className="absolute inset-0 bg-black border-4 border-border-dark translate-x-6 translate-y-6"></div>
          <div className="relative bg-secondary-fixed border-4 border-border-dark neo-shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="p-10 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-border-dark relative bg-secondary-fixed text-black">
              <div className="absolute top-4 right-4 bg-vibrant-orange border-3 border-black p-2 font-black transform rotate-12 neo-shadow text-black">
                HOT!
              </div>
              <div className="bg-white border-4 border-border-dark px-4 py-2 font-display text-label-bold uppercase w-max mb-6 neo-shadow-lg transform -rotate-2 text-xl text-black">
                Achievement
              </div>
              <h2 className="font-display text-headline-lg-mobile md:text-display text-black mb-6 uppercase bg-white border-4 border-black p-4 inline-block transform rotate-1">
                KMIPN VI & UI/UX Finalist
              </h2>
              <p className="font-display text-body-lg text-black font-medium mb-10 border-l-8 border-black pl-6 bg-white p-6 neo-shadow">
                Finalis tingkat nasional pada kompetisi Hackathon KMIPN VI (Politeknik Negeri Jakarta) & Finalis UI/UX Computer Multi-Challenge Day 2025 (Universitas Syiah Kuala).
              </p>
            </div>
            <div className="relative h-64 md:h-auto p-4 bg-white flex items-center justify-center">
              <img
                className="w-full h-full object-cover border-4 border-border-dark neo-shadow"
                src="/kegiatan/kmipn.webp"
                alt="Spotlight Event visual"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-primary-fixed border-t-8 border-border-dark w-full mt-16 relative" id="contact">
        <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBMMjAgMEgwdjIweiIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg==')]"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative">
            <div className="md:col-span-7 relative">
              <div className="absolute -top-8 -left-4 bg-vibrant-orange border-4 border-black px-4 py-2 font-black transform -rotate-6 neo-shadow z-20 text-xl text-black">
                SAY HELLO
              </div>
              <h2 className="font-display text-display md:text-[80px] leading-none font-black text-black uppercase bg-primary-container border-4 border-black p-8 neo-shadow-xl transform rotate-1 mb-6">
                LET&apos;S WORK
                <br />
                TOGETHER
              </h2>
              <div className="absolute -bottom-6 right-4 bg-white border-4 border-black p-4 neo-shadow transform rotate-3 z-20 flex items-center gap-3">
                <div className="w-4 h-4 bg-primary-fixed rounded-full animate-bounce"></div>
                <span className="font-display text-label-bold uppercase text-black">Available for Freelance</span>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6 justify-center h-full">
              <a
                className="bg-white border-4 border-black p-6 neo-shadow-lg active-push-lg flex flex-col gap-2 group hover:bg-secondary-fixed transition-colors text-black"
                href="mailto:parzivalxdd@gmail.com"
              >
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-4xl font-black">mail</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <span className="font-display text-headline-md uppercase break-words text-black">parzivalxdd@gmail.com</span>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  className="bg-secondary-fixed border-4 border-black p-4 neo-shadow active-push flex items-center justify-center font-display text-label-bold uppercase hover:bg-white transition-colors text-center text-black"
                  href="https://linkedin.com/in/muhammad-kholis-51ba57195"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="bg-black border-4 border-black p-4 neo-shadow active-push flex items-center justify-center font-display text-label-bold uppercase text-white hover:bg-tertiary-fixed hover:text-black transition-colors text-center"
                  href="https://github.com/TissuGalon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="bg-tertiary-fixed border-4 border-black p-4 neo-shadow active-push flex items-center justify-center font-display text-label-bold uppercase hover:bg-vibrant-orange transition-colors col-span-2 text-center text-black"
                  href="https://www.instagram.com/its.przvl._"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full py-10 gap-6 bg-white border-4 border-black p-6 neo-shadow mt-16 transform -rotate-1 text-black">
            <div className="font-display text-headline-md font-black text-on-surface flex items-center gap-2 text-black">
              <span
                className="material-symbols-outlined text-vibrant-orange text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                code_blocks
              </span>{" "}
              Portfolio
            </div>
            <div className="font-display text-body-md text-black/60 font-bold">
              © 2024 Muhammad Kholis. Built with precision.
            </div>
            <div className="flex gap-6">
              <span className="font-display font-bold text-black/50">
                Langsa, Indonesia
              </span>
              <span className="font-display font-bold text-black/50">
                +62 851-6178-7501
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
