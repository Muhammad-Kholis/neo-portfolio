"use client"

import { useState, useRef } from "react"
import Link from "next/link"

interface Project {
  id: string
  num: string
  title: string
  description: string
  tags: string[]
  tagBg: string
  img: string
  category: "Mobile" | "Web"
}

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Mobile" | "Web">("All")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(1)
  const sliderRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: "zellopos",
      num: "01",
      title: "ZelloPOS",
      description: "Point of Sale application built for retail businesses, focusing on transaction speed and inventory management.",
      tags: ["Flutter", "Firebase"],
      tagBg: "bg-primary-container",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLuNQGLd2JU26AlXLNp1hUzIannmzguPVgZoozKH4vk_7QmImVM-0nWn-cFsUZ-7KGX73cubz0BnliDgnlOEnWoVhH45ZuDkbL3tpx6fI5LI8hy8bs0x5j-3BdJvDrlsGeLWfGNg8iLX6bxd37AOWpy2JnLcov6WUjlVFO730_m2RkHMNHiYf6DfsFqer5-Afz3qrE-ZYFDek61sFHR8IagGN5hxhftuTMGTIEifrJFloBinGMolzPuvK2c",
      category: "Mobile",
    },
    {
      id: "webparzello",
      num: "02",
      title: "WebParzello",
      description: "A comprehensive web platform for logistics tracking and parcel management.",
      tags: ["Next.js", "Tailwind"],
      tagBg: "bg-secondary-container",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLvjfaAo5V9siHBVodQCtlIS6n4wcjQi8lWRnptAJvjo83z0YXoImscTAjSmXtp0OmD_xAHfZQTvYyj8cSYmDPneemGiutXZR5AwIkaWcoABwsqS7zHyCT-kidR6ntNwGUo1u1DbskIt_NrThksOlJt84gQT38Csx1E1fieFIyOiqrcgCEglDrB_FUcCDp4NlJg10vBrkL3eVM7dE7zwc5V6MJtRoHC0yFUGfAnnAvJx6pRr6V6o_wSl8ws",
      category: "Web",
    },
    {
      id: "centrepoint",
      num: "03",
      title: "Centrepoint",
      description: "Enterprise management system dashboard providing key business metrics.",
      tags: ["React"],
      tagBg: "bg-primary-fixed",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLtblHp3KKWl-375Xiyc5VOsddtGK1_jvNiowISZG24xcbgzRBq-SldDR1XEwSo6d2UGMk6i5pALKfxhwf5ZgZMmSwCcPjFCa0u8Y19PA1tNNHrxihWV4-bYv8AeYYf-SJgD4_oJK45UovuRUtefEKCucEvQcn2wr7q21LoxmNhhA7nmgptLXbzy-ywcecpK8WuKFKU-FFgMNj9j-aHSxEdZzmrdyAA87j2bO53mOqzUA3C4ilnGgZlePQ",
      category: "Web",
    },
    {
      id: "ukm-policy",
      num: "04",
      title: "UKM-POLICY",
      description: "Information portal for campus student organizations and policy tracking.",
      tags: ["Web"],
      tagBg: "bg-surface",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLtFpshICmSPLIt2vs_np5Kv756JOaZWixkDnMNmtYzjQVFIE9lOtfqNnTSoj1igqBNAb8lGS00XOYGk_kA0MqyFSA_xyFJV5C7tvjOwMwmAW03o0JFsdwPDiBfZoq_24ebSL07ViAXz0maWVzBP6XrVSuMR_SYikdVF1TBTisVrO28u8yyxpWZb98nqQLjiI9R0ocT-rnsdNCHr3DDsv-3pyiE7VXRw48H41vvh7nkFk7c5n_UJUE3xlzQ",
      category: "Web",
    },
    {
      id: "e-konsul",
      num: "05",
      title: "E-Konsul",
      description: "Online consultation booking system connecting professionals with clients.",
      tags: ["Flutter"],
      tagBg: "bg-primary-container",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLsNEtM_Mvk_AxigSlzpFpkGUG93FgdQLQXh74wlRJSi4HxwPYwldmSPSzyJK98RKH7ZO9GgFIPklIeTohW--1g5QcVt1P6gTqyj8vZjaMSJJqKZytlG_ZC4SB_-2ZTGLVUBa_cEFsBAkGaSjEry7wYkShmF0VIQbnZG70_5fjTcWrSLWaYH4Rd-REv6Z8nMz2dbbq9-deHAQEK35WqTiAc22aCo-AeHv14p8bMsEffZsXauSTRwg4x6WMA",
      category: "Mobile",
    },
    {
      id: "personal-portfolio-v1",
      num: "06",
      title: "Personal Portfolio V1",
      description: "Previous iteration of my personal developer portfolio.",
      tags: ["HTML/CSS"],
      tagBg: "bg-white",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLvMHEgaQs3ZteyM36Mkg-4m-5Mw_fLt1Qyb8c6S9c3vXvr9E7b-8kGeW2wdrWG-r3PioOblLSnoPj07cafKwN8xJDCbBbmvXcJryS-kcKR2TjWnSLYXvxqmbP7X24hHDJslkMWYm8T2EBsTR9cfaOPudqvsjOii6wZ394eqHaUH-U8kzAwnj0UUy4y2ONcA_CiLEZ84ZGrUaL0mAj6uEYx455Sm96i1A5Y85rsaTcP0GxvJuUNyz6dtfSs",
      category: "Web",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory

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
          <div className="flex gap-2 items-center">
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
              <span className="relative bg-white border-4 border-border-dark px-4 py-2 inline-block transform -rotate-2 neo-shadow">
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

          <div className="flex gap-6 mt-10">
            <a
              className="bg-primary-fixed border-4 border-border-dark px-8 py-3 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow-lg active-push-lg flex items-center gap-2 text-xl"
              href="#work"
            >
              View Work <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </a>
            <a
              className="bg-secondary-fixed border-4 border-border-dark px-8 py-3 font-display text-label-bold uppercase text-on-background neo-shadow-lg active-push-lg text-xl"
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
              src="https://lh3.googleusercontent.com/aida/AP1WRLtLgkupLJ4NIJr64ZzVtHIgu74HY3TadmCpCKBRiGSxYALKkagyi9c3-IQMBjhXqEOJk63Idne2oWWGni_2jjt7wX-vn82WLQToX23FK8D1Qz9VTjkhmFdnzEMPv2UxDRFNOZEc1_1Y4lhOO1nmBzIwFcNNoY8Fjly-8IKxx1-B6q6qsQ2GbVqnfgMuo-pivinOWgUGhZZNvwUN6G2hdzFOm3xLlx4oTKn_1uvnfY31z07f-CFX8Np7NQ"
              alt="Muhammad Kholis Profile Photo"
              style={{ aspectRatio: "1/1" }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white border-3 border-border-dark p-2 neo-shadow transform -rotate-12 z-20 flex items-center gap-2">
              <span className="material-symbols-outlined text-vibrant-orange">verified</span>{" "}
              <span className="font-bold text-sm">DEV.APPROVED</span>
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
                <div className="absolute -top-4 -left-4 bg-secondary-fixed border-2 border-black px-2 py-1 text-xs font-bold uppercase">
                  Status
                </div>
                <h2 className="font-display text-headline-md text-black mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">person</span> Profile
                </h2>
                <ul className="font-display text-body-md flex flex-col gap-2">
                  <li>
                    <span className="font-bold">Role:</span> Informatics Student
                  </li>
                  <li>
                    <span className="font-bold">Location:</span> Lhokseumawe
                  </li>
                  <li>
                    <span className="font-bold">Focus:</span> Frontend & Mobile
                  </li>
                </ul>
              </div>
              <div className="bg-primary-container border-4 border-black p-4 neo-shadow transform rotate-1">
                <p className="font-display text-label-bold uppercase text-center">Open for Collaboration</p>
              </div>
            </div>

            <div className="md:col-span-8 bg-background border-4 border-border-dark p-6 md:p-10 neo-shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-dots opacity-20"></div>
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-background flex items-center gap-2 uppercase mb-6">
                <span className="bg-primary-container p-2 border-3 border-black neo-shadow inline-block">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    person
                  </span>
                </span>{" "}
                About Me
              </h2>

              <div className="font-display text-body-lg text-on-surface-variant flex flex-col gap-6 text-xl relative z-10">
                <p className="bg-surface-container p-4 border-l-8 border-secondary-fixed neo-shadow-sm">
                  I am an independent and motivated developer with an interest in Front End and Mobile app Development.
                  In recent years, I have built skills mainly related to web design, application interface design, and
                  front-end development.
                </p>
                <p className="bg-surface-container p-4 border-l-8 border-vibrant-orange neo-shadow-sm">
                  I am currently a student at Politeknik Negeri Lhokseumawe, constantly exploring new technologies to
                  build robust and scalable systems.
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
          <h2 className="font-display text-headline-lg-mobile md:text-display text-on-background inline-block bg-white border-4 border-border-dark px-6 py-2 neo-shadow transform rotate-1 uppercase">
            Visual Archive
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          <div className="md:col-span-8 relative group">
            <div className="absolute inset-0 bg-primary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuA_9XVbH-lxZXKsstA_R7ovBsGkzPgd9OL1n8YG2nAfpGStIVaOYTDwRpPydIZv-mE-ZZNHt7rzml4aMPRvYaHnZOFeJ5E2rKIRmFa-cwJS6iRGeEqaUdofKg_tEaomiFXIiyfcp-3trtWLJSi_t1rIdaeJN_QlB4MWg4m1Z7ehAJ0SobzCxE_aVLurffvAa4eTg3U2pdAFlVfLAAbrZyOBxFCln9rktf9-s-KZMl6jke3Yi5NvF4XG6w"
                alt="Workflow visual archive"
              />
              <div className="absolute top-4 left-4 bg-secondary-fixed border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform -rotate-3">
                Workflow
              </div>
            </div>
          </div>

          <div className="md:col-span-4 relative group">
            <div className="absolute inset-0 bg-secondary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuVKhSW7Z4Z2GsnXg-E5a6dtPQbtfPZTRz4LENN4RQpH_yNbomWzX1Pa9JtleEQy3ikCqgldYBi2ggJfyaBQ0_CaOAjyjFbn0cbw-cSWB4rqQl9SiAmFVXTbd8RlruwkYGtwtLrj8tPhiy83HmTI7iifpKkBk_i1WZ3-Vm0Vy6RsL90aqrbp0mCVpLlA9GrlkOaltmoFgUXPQEut0vYsyrQPdj_6FHeNKcJCzlDIP0WrzhCZfryqRHMJw"
                alt="Behind the scenes visual archive"
              />
              <div className="absolute bottom-4 right-4 bg-vibrant-orange border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform rotate-6">
                BTS
              </div>
            </div>
          </div>

          <div className="md:col-span-4 relative group">
            <div className="absolute inset-0 bg-tertiary-fixed border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtLgkupLJ4NIJr64ZzVtHIgu74HY3TadmCpCKBRiGSxYALKkagyi9c3-IQMBjhXqEOJk63Idne2oWWGni_2jjt7wX-vn82WLQToX23FK8D1Qz9VTjkhmFdnzEMPv2UxDRFNOZEc1_1Y4lhOO1nmBzIwFcNNoY8Fjly-8IKxx1-B6q6qsQ2GbVqnfgMuo-pivinOWgUGhZZNvwUN6G2hdzFOm3xLlx4oTKn_1uvnfY31z07f-CFX8Np7NQ"
                alt="Moments visual archive"
              />
              <div className="absolute top-4 right-4 bg-primary-container border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform rotate-2">
                Moments
              </div>
            </div>
          </div>

          <div className="md:col-span-8 relative group">
            <div className="absolute inset-0 bg-vibrant-orange border-4 border-black translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-white border-4 border-black overflow-hidden hover:-translate-y-1 transition-transform">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLu79PxdsPbCAUTSTrVaUN9NDKNwM8bD2XUfTT7rFiQ_s6shIcEHnhBkvRp4cXrCiHfQHV8izZK3imd9ZHXmimiQP889Nd7EhMLDDBVPDPtHvFgGcfWy4n2K0aFeUVhLA6ggIlTotymClP882TD3HjQpE_PtEF60tOIYeqF4xma_T2ug3wkOWcOPp-_Nmd9XtTUOQcGIQHvQgKtUxngG1uE9jP4MRBz2fKTkAWZsw_orLeWe7zqmA1ayd_0"
                alt="Process visual archive"
              />
              <div className="absolute bottom-4 left-4 bg-secondary-container border-2 border-black px-3 py-1 text-sm font-black uppercase neo-shadow transform -rotate-2">
                Process
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal (Skills) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16" id="skills">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary-fixed border-4 border-black rounded-full flex items-center justify-center neo-shadow animate-bounce">
            <span className="material-symbols-outlined font-black">bolt</span>
          </div>
          <h2 className="font-display text-headline-lg-mobile md:text-display text-on-background inline-block bg-white border-4 border-border-dark px-4 py-2 neo-shadow transform -rotate-1 uppercase">
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
                <h3 className="font-display text-headline-md text-on-background bg-white border-2 border-black p-2 inline-block">
                  Politeknik Negeri Lhokseumawe
                </h3>
                <p className="font-display text-body-md text-black mt-2 font-bold bg-secondary-fixed border-2 border-black p-1 inline-block">
                  D4 - Teknik Informatika (TI)
                </p>
              </div>
              <div className="border-t-4 border-border-dark pt-4 mt-auto border-dashed">
                <h3 className="font-display text-headline-md text-on-background bg-white border-2 border-black p-2 inline-block">
                  SMK Negeri 2 Kota Langsa
                </h3>
                <p className="font-display text-body-md text-black font-bold bg-tertiary-fixed border-2 border-black p-1 inline-block mt-1">
                  Teknik Komputer dan Jaringan
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="md:col-span-7 relative group">
            <div className="absolute inset-0 bg-secondary-fixed border-4 border-border-dark translate-x-4 translate-y-4"></div>
            <div className="relative h-full bg-[#eedbff] border-4 border-border-dark p-6 overflow-hidden flex flex-col hover:-translate-y-2 hover:-translate-x-2 transition-transform">
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-fixed border-4 border-black rounded-full flex items-center justify-center neo-shadow text-center font-bold text-xs transform rotate-12">
                TECH
                <br />
                STACK
              </div>
              <div className="bg-background border-3 border-border-dark px-4 py-2 font-display text-label-bold uppercase w-max mb-4 neo-shadow transform rotate-2 text-lg">
                Core Technologies
              </div>
              <div className="flex flex-wrap gap-6 mt-6">
                <span className="bg-vibrant-orange border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg text-black">
                  Flutter
                </span>
                <span className="bg-primary-fixed border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg text-black">
                  Next.js
                </span>
                <span className="bg-secondary-fixed border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg text-black">
                  React
                </span>
                <span className="bg-white border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg text-black">
                  Dart
                </span>
                <span className="bg-tertiary-fixed border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg text-black">
                  Tailwind CSS
                </span>
                <span className="bg-error-container border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg text-black">
                  Firebase
                </span>
                <span className="bg-primary-container border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg text-black">
                  MySQL
                </span>
                <span className="bg-black text-white border-3 border-border-dark px-5 py-3 font-display text-label-bold uppercase neo-shadow hover:-translate-y-1 transition-transform text-lg">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work (Projects) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16" id="work">
        <div className="flex flex-col items-center mb-16 relative">
          <h2 className="font-display text-display text-on-background mb-2 inline-block bg-primary-fixed border-4 border-border-dark px-8 py-4 neo-shadow-xl transform rotate-1 uppercase text-center w-full md:w-auto">
            Selected Work
          </h2>
          <div className="bg-vibrant-orange border-3 border-black px-4 py-1 font-bold transform -rotate-3 -mt-4 z-10 neo-shadow">
            PROJECTS ARCHIVE // 2024
          </div>
        </div>

        {/* Filters and Search */}
        <div className="w-full mb-16 flex flex-col md:flex-row gap-6 items-stretch md:items-center">
          <div className="relative flex-grow">
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
            // Colors shift dynamically based on indices for rich neo-brutalist layouts
            const bgOffsets = ["bg-vibrant-orange", "bg-secondary-fixed", "bg-tertiary-fixed", "bg-primary-fixed", "bg-error-container", "bg-black"]
            const offsetBg = bgOffsets[i % bgOffsets.length]

            return (
              <div key={project.id} className="relative group">
                <div className={`absolute inset-0 border-4 border-border-dark translate-x-4 translate-y-4 ${offsetBg}`}></div>
                <div className="relative bg-background border-4 border-border-dark flex flex-col h-full hover:-translate-y-2 hover:-translate-x-2 transition-transform">
                  <div className="border-b-4 border-border-dark relative overflow-hidden bg-surface h-56 p-2">
                    <div className="absolute top-4 left-4 bg-primary-fixed border-2 border-black px-2 py-1 text-xs font-bold z-10 neo-shadow">
                      {project.num}
                    </div>
                    <img
                      className="w-full h-full object-cover border-2 border-black group-hover:scale-105 transition-transform duration-500"
                      src={project.img}
                      alt={`${project.title} Preview`}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTBMMTAgMEgwdjEweiIgZmlsbD0iI0YyRjJGMiIvPjwvc3ZnPg==')]">
                    <h3 className="font-display text-headline-md text-on-background mb-2 bg-white border-2 border-black p-1 inline-block w-max uppercase">
                      {project.title}
                    </h3>
                    <p className="font-display text-body-md text-on-surface-variant mb-6 flex-grow bg-white p-2 border-2 border-black">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`border-3 border-border-dark px-3 py-1 font-display text-label-sm uppercase neo-shadow ${project.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
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
              <p className="font-display text-headline-md uppercase">No Projects Found</p>
              <p className="font-display text-body-lg text-on-surface-variant mt-2">
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
            <h2 className="font-display text-headline-lg-mobile md:text-display text-on-background inline-block bg-white border-4 border-border-dark px-6 py-2 neo-shadow transform rotate-1 uppercase">
              Activity Documentation
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-white border-3 border-black px-4 py-2 font-bold neo-shadow">
              {String(activeSlide).padStart(2, "0")} / 03
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollSlider("left")}
                className="w-12 h-12 bg-primary-fixed border-3 border-black flex items-center justify-center neo-shadow active-push hover:bg-vibrant-orange transition-colors"
              >
                <span className="material-symbols-outlined font-black">arrow_back</span>
              </button>
              <button
                onClick={() => scrollSlider("right")}
                className="w-12 h-12 bg-primary-fixed border-3 border-black flex items-center justify-center neo-shadow active-push hover:bg-vibrant-orange transition-colors"
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
              <div className="relative bg-white border-4 border-black overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform">
                <div className="h-64 relative">
                  <img
                    className="w-full h-full object-cover border-b-4 border-black"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLuVKhSW7Z4Z2GsnXg-E5a6dtPQbtfPZTRz4LENN4RQpH_yNbomWzX1Pa9JtleEQy3ikCqgldYBi2ggJfyaBQ0_CaOAjyjFbn0cbw-cSWB4rqQl9SiAmFVXTbd8RlruwkYGtwtLrj8tPhiy83HmTI7iifpKkBk_i1WZ3-Vm0Vy6RsL90aqrbp0mCVpLlA9GrlkOaltmoFgUXPQEut0vYsyrQPdj_6FHeNKcJCzlDIP0WrzhCZfryqRHMJw"
                    alt="Hackathon KMIPN VI"
                  />
                  <div className="absolute top-4 left-4 bg-vibrant-orange border-2 border-black px-2 py-1 text-xs font-bold neo-shadow">
                    TECH
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-headline-md mb-2 uppercase">Hackathon KMIPN VI</h3>
                  <p className="font-display text-body-md text-on-surface-variant mb-4 flex-grow">
                    Finalist at Politeknik Negeri Jakarta (2024). Developed innovative solutions under high-pressure
                    competition environments.
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
              <div className="relative bg-white border-4 border-black overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform">
                <div className="h-64 relative">
                  <img
                    className="w-full h-full object-cover border-b-4 border-black"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLuA_9XVbH-lxZXKsstA_R7ovBsGkzPgd9OL1n8YG2nAfpGStIVaOYTDwRpPydIZv-mE-ZZNHt7rzml4aMPRvYaHnZOFeJ5E2rKIRmFa-cwJS6iRGeEqaUdofKg_tEaomiFXIiyfcp-3trtWLJSi_t1rIdaeJN_QlB4MWg4m1Z7ehAJ0SobzCxE_aVLurffvAa4eTg3U2pdAFlVfLAAbrZyOBxFCln9rktf9-s-KZMl6jke3Yi5NvF4XG6w"
                    alt="Komit PNL"
                  />
                  <div className="absolute top-4 left-4 bg-primary-container border-2 border-black px-2 py-1 text-xs font-bold neo-shadow">
                    COMMUNITY
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-headline-md mb-2 uppercase">Komit PNL</h3>
                  <p className="font-display text-body-md text-on-surface-variant mb-4 flex-grow">
                    Actively involved in organizing tech events and fostering the local developer community at PNL
                    through workshops and meetups.
                  </p>
                  <div className="mt-auto">
                    <span className="bg-secondary-fixed border-2 border-black px-3 py-1 text-xs font-bold uppercase">
                      2023 // Organizer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="w-[320px] md:w-[500px] relative group">
              <div className="absolute inset-0 bg-vibrant-orange border-4 border-black translate-x-4 translate-y-4"></div>
              <div className="relative bg-white border-4 border-black overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform">
                <div className="h-64 relative">
                  <img
                    className="w-full h-full object-cover border-b-4 border-black"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLtLgkupLJ4NIJr64ZzVtHIgu74HY3TadmCpCKBRiGSxYALKkagyi9c3-IQMBjhXqEOJk63Idne2oWWGni_2jjt7wX-vn82WLQToX23FK8D1Qz9VTjkhmFdnzEMPv2UxDRFNOZEc1_1Y4lhOO1nmBzIwFcNNoY8Fjly-8IKxx1-B6q6qsQ2GbVqnfgMuo-pivinOWgUGhZZNvwUN6G2hdzFOm3xLlx4oTKn_1uvnfY31z07f-CFX8Np7NQ"
                    alt="UKM POLICY"
                  />
                  <div className="absolute top-4 left-4 bg-secondary-fixed border-2 border-black px-2 py-1 text-xs font-bold neo-shadow">
                    LEADERSHIP
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-headline-md mb-2 uppercase">UKM POLICY</h3>
                  <p className="font-display text-body-md text-on-surface-variant mb-4 flex-grow">
                    Member of the Polytechnic Linux Community, contributing to open-source advocacy and technical
                    workshops for students.
                  </p>
                  <div className="mt-auto">
                    <span className="bg-secondary-fixed border-2 border-black px-3 py-1 text-xs font-bold uppercase">
                      2023 // Member
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
            <div className="p-10 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-border-dark relative bg-secondary-fixed">
              <div className="absolute top-4 right-4 bg-vibrant-orange border-3 border-black p-2 font-black transform rotate-12 neo-shadow">
                HOT!
              </div>
              <div className="bg-white border-4 border-border-dark px-4 py-2 font-display text-label-bold uppercase w-max mb-6 neo-shadow-lg transform -rotate-2 text-xl">
                Achievement
              </div>
              <h2 className="font-display text-headline-lg-mobile md:text-display text-black mb-6 uppercase bg-white border-4 border-black p-4 inline-block transform rotate-1">
                KMIPN VI Finalist
              </h2>
              <p className="font-display text-body-lg text-black font-medium mb-10 border-l-8 border-black pl-6 bg-white p-6 neo-shadow">
                Competed and reached the finals at the Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN) VI,
                showcasing technical problem-solving and innovation among top polytechnic students nationwide.
              </p>
            </div>
            <div className="relative h-64 md:h-auto p-4 bg-white flex items-center justify-center">
              <img
                className="w-full h-full object-cover border-4 border-border-dark neo-shadow"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuVKhSW7Z4Z2GsnXg-E5a6dtPQbtfPZTRz4LENN4RQpH_yNbomWzX1Pa9JtleEQy3ikCqgldYBi2ggJfyaBQ0_CaOAjyjFbn0cbw-cSWB4rqQl9SiAmFVXTbd8RlruwkYGtwtLrj8tPhiy83HmTI7iifpKkBk_i1WZ3-Vm0Vy6RsL90aqrbp0mCVpLlA9GrlkOaltmoFgUXPQEut0vYsyrQPdj_6FHeNKcJCzlDIP0WrzhCZfryqRHMJw"
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
              <div className="absolute -top-8 -left-4 bg-vibrant-orange border-4 border-black px-4 py-2 font-black transform -rotate-6 neo-shadow z-20 text-xl">
                SAY HELLO
              </div>
              <h2 className="font-display text-display md:text-[80px] leading-none font-black text-black uppercase bg-primary-container border-4 border-black p-8 neo-shadow-xl transform rotate-1 mb-6">
                LET&apos;S WORK
                <br />
                TOGETHER
              </h2>
              <div className="absolute -bottom-6 right-4 bg-white border-4 border-black p-4 neo-shadow transform rotate-3 z-20 flex items-center gap-3">
                <div className="w-4 h-4 bg-primary-fixed rounded-full animate-bounce"></div>
                <span className="font-display text-label-bold uppercase">Available for Freelance</span>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6 justify-center h-full">
              <a
                className="bg-white border-4 border-black p-6 neo-shadow-lg active-push-lg flex flex-col gap-2 group hover:bg-secondary-fixed transition-colors"
                href="mailto:mkholis812@gmail.com"
              >
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-4xl font-black">mail</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <span className="font-display text-headline-md uppercase break-words">mkholis812@gmail.com</span>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  className="bg-secondary-fixed border-4 border-black p-4 neo-shadow active-push flex items-center justify-center font-display text-label-bold uppercase hover:bg-white transition-colors text-center"
                  href="https://linkedin.com/in/muhammad-kholis-63625b248"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="bg-black border-4 border-black p-4 neo-shadow active-push flex items-center justify-center font-display text-label-bold uppercase text-white hover:bg-tertiary-fixed hover:text-black transition-colors text-center"
                  href="https://github.com/mhmmdkholis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="bg-tertiary-fixed border-4 border-black p-4 neo-shadow active-push flex items-center justify-center font-display text-label-bold uppercase hover:bg-vibrant-orange transition-colors col-span-2 text-center"
                  href="#"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full py-10 gap-6 bg-white border-4 border-black p-6 neo-shadow mt-16 transform -rotate-1">
            <div className="font-display text-headline-md font-black text-on-surface flex items-center gap-2">
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
              <a className="font-display font-bold text-black hover:text-vibrant-orange transition-colors underline decoration-2" href="#">
                Dribbble
              </a>
              <a className="font-display font-bold text-black hover:text-vibrant-orange transition-colors underline decoration-2" href="#">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
