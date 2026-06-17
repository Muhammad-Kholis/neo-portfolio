"use client"

import { use, useState, useRef } from "react"
import Link from "next/link"

interface ProjectDetail {
  id: string
  title: string
  subtitle: string
  description: string
  bannerImg: string
  role: string
  timeline: string
  category: string
  overview: string
  overviewExtra?: string
  gallery: string[]
}

const projectDetails: Record<string, ProjectDetail> = {
  zellopos: {
    id: "zellopos",
    title: "ZELLOPOS",
    subtitle: "Modern POS for MSMEs. A robust, scalable point-of-sale solution designed to empower micro, small, and medium enterprises with real-time analytics and inventory management.",
    bannerImg: "https://lh3.googleusercontent.com/aida/AP1WRLuNQGLd2JU26AlXLNp1hUzIannmzguPVgZoozKH4vk_7QmImVM-0nWn-cFsUZ-7KGX73cubz0BnliDgnlOEnWoVhH45ZuDkbL3tpx6fI5LI8hy8bs0x5j-3BdJvDrlsGeLWfGNg8iLX6bxd37AOWpy2JnLcov6WUjlVFO730_m2RkHMNHiYf6DfsFqer5-Afz3qrE-ZYFDek61sFHR8IagGN5hxhftuTMGTIEifrJFloBinGMolzPuvK2c",
    role: "Fullstack Developer",
    timeline: "3 Months",
    category: "Mobile App",
    description: "ZelloPOS was built to address the core challenges faced by MSMEs in managing their daily operations.",
    overview: "ZelloPOS was built to address the core challenges faced by MSMEs in managing their daily operations. By shifting away from complex, legacy POS systems, we aimed to deliver a solution that is both powerful and highly accessible.",
    overviewExtra: "Through a user-centered design process, we developed an offline-first mobile application that seamlessly synchronizes data once a connection is restored. This ensures business continuity for merchants operating in areas with unreliable internet infrastructure.",
    gallery: [
      "https://lh3.googleusercontent.com/aida/AP1WRLtEDPCVA7z3nTaRvIAzng5Ea8-W7nx7BqP0bHF2RdCuukjo6R5wYFES6kfZ2SjlugNAvb9CUhJo_c8bwNpwk7x22auM8tJpbZyMTrVrkhJLdYe8MdYFCBDCPjTmLzYGZ9EE3zoyqbBsTWDaEAfNjj5VzZLl0SY8jHlnhPI6akz8u4CYzwCfqWX6FouvpqfzQdZudOD6WfxoFmsQ3Y3IwJ5ex-Z8JYCbbaOvIO1CvEmZqI1bJJQ1rJ_Czw",
      "https://lh3.googleusercontent.com/aida/AP1WRLuA_9XVbH-lxZXKsstA_R7ovBsGkzPgd9OL1n8YG2nAfpGStIVaOYTDwRpPydIZv-mE-ZZNHt7rzml4aMPRvYaHnZOFeJ5E2rKIRmFa-cwJS6iRGeEqaUdofKg_tEaomiFXIiyfcp-3trtWLJSi_t1rIdaeJN_QlB4MWg4m1Z7ehAJ0SobzCxE_aVLurffvAa4eTg3U2pdAFlVfLAAbrZyOBxFCln9rktf9-s-KZMl6jke3Yi5NvF4XG6w",
      "https://lh3.googleusercontent.com/aida/AP1WRLtEDPCVA7z3nTaRvIAzng5Ea8-W7nx7BqP0bHF2RdCuukjo6R5wYFES6kfZ2SjlugNAvb9CUhJo_c8bwNpwk7x22auM8tJpbZyMTrVrkhJLdYe8MdYFCBDCPjTmLzYGZ9EE3zoyqbBsTWDaEAfNjj5VzZLl0SY8jHlnhPI6akz8u4CYzwCfqWX6FouvpqfzQdZudOD6WfxoFmsQ3Y3IwJ5ex-Z8JYCbbaOvIO1CvEmZqI1bJJQ1rJ_Czw"
    ]
  },
  webparzello: {
    id: "webparzello",
    title: "WEBPARZELLO",
    subtitle: "A comprehensive web platform for logistics tracking and parcel management, connecting senders and carriers.",
    bannerImg: "https://lh3.googleusercontent.com/aida/AP1WRLvjfaAo5V9siHBVodQCtlIS6n4wcjQi8lWRnptAJvjo83z0YXoImscTAjSmXtp0OmD_xAHfZQTvYyj8cSYmDPneemGiutXZR5AwIkaWcoABwsqS7zHyCT-kidR6ntNwGUo1u1DbskIt_NrThksOlJt84gQT38Csx1E1fieFIyOiqrcgCEglDrB_FUcCDp4NlJg10vBrkL3eVM7dE7zwc5V6MJtRoHC0yFUGfAnnAvJx6pRr6V6o_wSl8ws",
    role: "Frontend Engineer",
    timeline: "2 Months",
    category: "Web Platform",
    description: "WebParzello streamlines the tracking of multiple packages across regions.",
    overview: "WebParzello was designed to resolve critical logistics overheads for small merchants. We built a visual, drag-and-drop shipment board and integrated real-time barcode query parameters.",
    overviewExtra: "Built using Next.js and Tailwind CSS, the platform supports real-time state tracking updates, high performance under heavy loads, and a responsive portal for customer lookup.",
    gallery: [
      "https://lh3.googleusercontent.com/aida/AP1WRLvjfaAo5V9siHBVodQCtlIS6n4wcjQi8lWRnptAJvjo83z0YXoImscTAjSmXtp0OmD_xAHfZQTvYyj8cSYmDPneemGiutXZR5AwIkaWcoABwsqS7zHyCT-kidR6ntNwGUo1u1DbskIt_NrThksOlJt84gQT38Csx1E1fieFIyOiqrcgCEglDrB_FUcCDp4NlJg10vBrkL3eVM7dE7zwc5V6MJtRoHC0yFUGfAnnAvJx6pRr6V6o_wSl8ws",
      "https://lh3.googleusercontent.com/aida/AP1WRLuA_9XVbH-lxZXKsstA_R7ovBsGkzPgd9OL1n8YG2nAfpGStIVaOYTDwRpPydIZv-mE-ZZNHt7rzml4aMPRvYaHnZOFeJ5E2rKIRmFa-cwJS6iRGeEqaUdofKg_tEaomiFXIiyfcp-3trtWLJSi_t1rIdaeJN_QlB4MWg4m1Z7ehAJ0SobzCxE_aVLurffvAa4eTg3U2pdAFlVfLAAbrZyOBxFCln9rktf9-s-KZMl6jke3Yi5NvF4XG6w"
    ]
  },
  centrepoint: {
    id: "centrepoint",
    title: "CENTREPOINT",
    subtitle: "Enterprise management system dashboard providing key business metrics, sales reporting, and employee management.",
    bannerImg: "https://lh3.googleusercontent.com/aida/AP1WRLtblHp3KKWl-375Xiyc5VOsddtGK1_jvNiowISZG24xcbgzRBq-SldDR1XEwSo6d2UGMk6i5pALKfxhwf5ZgZMmSwCcPjFCa0u8Y19PA1tNNHrxihWV4-bYv8AeYYf-SJgD4_oJK45UovuRUtefEKCucEvQcn2wr7q21LoxmNhhA7nmgptLXbzy-ywcecpK8WuKFKU-FFgMNj9j-aHSxEdZzmrdyAA87j2bO53mOqzUA3C4ilnGgZlePQ",
    role: "UI Designer & Developer",
    timeline: "4 Months",
    category: "Web Application",
    description: "Centrepoint serves as the primary system of record for operational data.",
    overview: "Centrepoint serves as the primary system of record for operational data. The project required redesigning complex data tables and filtering mechanisms into user-friendly layouts.",
    overviewExtra: "With responsive graphs, PDF report generation, and multi-tenant authorization rules, it dramatically reduced the monthly reporting time for department heads.",
    gallery: [
      "https://lh3.googleusercontent.com/aida/AP1WRLtblHp3KKWl-375Xiyc5VOsddtGK1_jvNiowISZG24xcbgzRBq-SldDR1XEwSo6d2UGMk6i5pALKfxhwf5ZgZMmSwCcPjFCa0u8Y19PA1tNNHrxihWV4-bYv8AeYYf-SJgD4_oJK45UovuRUtefEKCucEvQcn2wr7q21LoxmNhhA7nmgptLXbzy-ywcecpK8WuKFKU-FFgMNj9j-aHSxEdZzmrdyAA87j2bO53mOqzUA3C4ilnGgZlePQ",
      "https://lh3.googleusercontent.com/aida/AP1WRLu79PxdsPbCAUTSTrVaUN9NDKNwM8bD2XUfTT7rFiQ_s6shIcEHnhBkvRp4cXrCiHfQHV8izZK3imd9ZHXmimiQP889Nd7EhMLDDBVPDPtHvFgGcfWy4n2K0aFeUVhLA6ggIlTotymClP882TD3HjQpE_PtEF60tOIYeqF4xma_T2ug3wkOWcOPp-_Nmd9XtTUOQcGIQHvQgKtUxngG1uE9jP4MRBz2fKTkAWZsw_orLeWe7zqmA1ayd_0"
    ]
  },
  "ukm-policy": {
    id: "ukm-policy",
    title: "UKM-POLICY",
    subtitle: "Information portal for campus student organizations and policy tracking, focusing on transparency and accessibility.",
    bannerImg: "https://lh3.googleusercontent.com/aida/AP1WRLtFpshICmSPLIt2vs_np5Kv756JOaZWixkDnMNmtYzjQVFIE9lOtfqNnTSoj1igqBNAb8lGS00XOYGk_kA0MqyFSA_xyFJV5C7tvjOwMwmAW03o0JFsdwPDiBfZoq_24ebSL07ViAXz0maWVzBP6XrVSuMR_SYikdVF1TBTisVrO28u8yyxpWZb98nqQLjiI9R0ocT-rnsdNCHr3DDsv-3pyiE7VXRw48H41vvh7nkFk7c5n_UJUE3xlzQ",
    role: "Lead Developer",
    timeline: "1 Month",
    category: "Web Portal",
    description: "UKM-POLICY brings administrative clarity to campus organizations.",
    overview: "UKM-POLICY brings administrative clarity to campus organizations. Students can view student codes, organization policies, and check tracking status of proposed initiatives.",
    overviewExtra: "Featuring robust search features, dynamic PDF rendering of regulations, and accessible navigation designed to assist student senators.",
    gallery: [
      "https://lh3.googleusercontent.com/aida/AP1WRLtFpshICmSPLIt2vs_np5Kv756JOaZWixkDnMNmtYzjQVFIE9lOtfqNnTSoj1igqBNAb8lGS00XOYGk_kA0MqyFSA_xyFJV5C7tvjOwMwmAW03o0JFsdwPDiBfZoq_24ebSL07ViAXz0maWVzBP6XrVSuMR_SYikdVF1TBTisVrO28u8yyxpWZb98nqQLjiI9R0ocT-rnsdNCHr3DDsv-3pyiE7VXRw48H41vvh7nkFk7c5n_UJUE3xlzQ",
      "https://lh3.googleusercontent.com/aida/AP1WRLuA_9XVbH-lxZXKsstA_R7ovBsGkzPgd9OL1n8YG2nAfpGStIVaOYTDwRpPydIZv-mE-ZZNHt7rzml4aMPRvYaHnZOFeJ5E2rKIRmFa-cwJS6iRGeEqaUdofKg_tEaomiFXIiyfcp-3trtWLJSi_t1rIdaeJN_QlB4MWg4m1Z7ehAJ0SobzCxE_aVLurffvAa4eTg3U2pdAFlVfLAAbrZyOBxFCln9rktf9-s-KZMl6jke3Yi5NvF4XG6w"
    ]
  },
  "e-konsul": {
    id: "e-konsul",
    title: "E-KONSUL",
    subtitle: "Online consultation booking system connecting professionals with clients in real-time.",
    bannerImg: "https://lh3.googleusercontent.com/aida/AP1WRLsNEtM_Mvk_AxigSlzpFpkGUG93FgdQLQXh74wlRJSi4HxwPYwldmSPSzyJK98RKH7ZO9GgFIPklIeTohW--1g5QcVt1P6gTqyj8vZjaMSJJqKZytlG_ZC4SB_-2ZTGLVUBa_cEFsBAkGaSjEry7wYkShmF0VIQbnZG70_5fjTcWrSLWaYH4Rd-REv6Z8nMz2dbbq9-deHAQEK35WqTiAc22aCo-AeHv14p8bMsEffZsXauSTRwg4x6WMA",
    role: "Mobile Developer",
    timeline: "2.5 Months",
    category: "Mobile App",
    description: "E-Konsul bridges the communication gap between experts and consumers.",
    overview: "E-Konsul bridges the communication gap between experts and consumers, offering chat channels, video bookings, and electronic invoice downloads in-app.",
    overviewExtra: "Built using Flutter, the application provides smooth animations, localized payments, push notifications, and a responsive offline layout.",
    gallery: [
      "https://lh3.googleusercontent.com/aida/AP1WRLsNEtM_Mvk_AxigSlzpFpkGUG93FgdQLQXh74wlRJSi4HxwPYwldmSPSzyJK98RKH7ZO9GgFIPklIeTohW--1g5QcVt1P6gTqyj8vZjaMSJJqKZytlG_ZC4SB_-2ZTGLVUBa_cEFsBAkGaSjEry7wYkShmF0VIQbnZG70_5fjTcWrSLWaYH4Rd-REv6Z8nMz2dbbq9-deHAQEK35WqTiAc22aCo-AeHv14p8bMsEffZsXauSTRwg4x6WMA",
      "https://lh3.googleusercontent.com/aida/AP1WRLuVKhSW7Z4Z2GsnXg-E5a6dtPQbtfPZTRz4LENN4RQpH_yNbomWzX1Pa9JtleEQy3ikCqgldYBi2ggJfyaBQ0_CaOAjyjFbn0cbw-cSWB4rqQl9SiAmFVXTbd8RlruwkYGtwtLrj8tPhiy83HmTI7iifpKkBk_i1WZ3-Vm0Vy6RsL90aqrbp0mCVpLlA9GrlkOaltmoFgUXPQEut0vYsyrQPdj_6FHeNKcJCzlDIP0WrzhCZfryqRHMJw"
    ]
  },
  "personal-portfolio-v1": {
    id: "personal-portfolio-v1",
    title: "PORTFOLIO V1",
    subtitle: "Previous iteration of my personal developer portfolio, exploring traditional layout styling.",
    bannerImg: "https://lh3.googleusercontent.com/aida/AP1WRLvMHEgaQs3ZteyM36Mkg-4m-5Mw_fLt1Qyb8c6S9c3vXvr9E7b-8kGeW2wdrWG-r3PioOblLSnoPj07cafKwN8xJDCbBbmvXcJryS-kcKR2TjWnSLYXvxqmbP7X24hHDJslkMWYm8T2EBsTR9cfaOPudqvsjOii6wZ394eqHaUH-U8kzAwnj0UUy4y2ONcA_CiLEZ84ZGrUaL0mAj6uEYx455Sm96i1A5Y85rsaTcP0GxvJuUNyz6dtfSs",
    role: "Designer & Developer",
    timeline: "2 Weeks",
    category: "Web Design",
    description: "My original portfolio served as a playground for custom layout designs.",
    overview: "My original portfolio served as a playground for custom layout designs, showcasing my early achievements and responsive grids.",
    overviewExtra: "Although styled with classic HTML/CSS, it was critical to lay down the initial designs and learn the core typography hierarchies that evolved into my current portfolio.",
    gallery: [
      "https://lh3.googleusercontent.com/aida/AP1WRLvMHEgaQs3ZteyM36Mkg-4m-5Mw_fLt1Qyb8c6S9c3vXvr9E7b-8kGeW2wdrWG-r3PioOblLSnoPj07cafKwN8xJDCbBbmvXcJryS-kcKR2TjWnSLYXvxqmbP7X24hHDJslkMWYm8T2EBsTR9cfaOPudqvsjOii6wZ394eqHaUH-U8kzAwnj0UUy4y2ONcA_CiLEZ84ZGrUaL0mAj6uEYx455Sm96i1A5Y85rsaTcP0GxvJuUNyz6dtfSs",
      "https://lh3.googleusercontent.com/aida/AP1WRLu79PxdsPbCAUTSTrVaUN9NDKNwM8bD2XUfTT7rFiQ_s6shIcEHnhBkvRp4cXrCiHfQHV8izZK3imd9ZHXmimiQP889Nd7EhMLDDBVPDPtHvFgGcfWy4n2K0aFeUVhLA6ggIlTotymClP882TD3HjQpE_PtEF60tOIYeqF4xma_T2ug3wkOWcOPp-_Nmd9XtTUOQcGIQHvQgKtUxngG1uE9jP4MRBz2fKTkAWZsw_orLeWe7zqmA1ayd_0"
    ]
  }
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(1)
  const galleryRef = useRef<HTMLDivElement>(null)

  const detail = projectDetails[slug] || projectDetails.zellopos

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth * 0.8
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleGalleryScroll = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft
      const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth
      if (maxScroll <= 0) return

      const index = Math.round(scrollLeft / (galleryRef.current.scrollWidth / detail.gallery.length)) + 1
      setGalleryIndex(Math.min(detail.gallery.length, Math.max(1, index)))
    }
  }

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col relative selection:bg-vibrant-orange selection:text-black">
      {/* Navigation */}
      <nav className="bg-background w-full sticky top-0 z-50 border-b-4 border-border-dark flex justify-between items-center px-4 md:px-12 py-4 max-w-[1280px] mx-auto mt-2 border-x-4 neo-shadow-lg relative">
        <div className="absolute -top-4 -left-4 bg-tertiary-fixed border-2 border-border-dark px-2 py-1 transform -rotate-12 neo-shadow z-10 font-bold text-sm">
          PROJECTS
        </div>
        <Link href="/" className="font-display text-headline-lg-mobile md:text-headline-md font-extrabold text-on-background tracking-tighter flex items-center gap-2">
          <span
            className="material-symbols-outlined text-vibrant-orange"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}
          >
            code_blocks
          </span>
          MK.DEV
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="/#intro"
          >
            Intro
          </Link>
          <Link
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="/#skills"
          >
            Skills
          </Link>
          <Link
            className="font-display text-label-bold uppercase text-on-background border-b-4 border-primary-fixed-dim pb-1 hover:bg-vibrant-orange hover:text-black transition-colors px-2 border-2 border-transparent hover:border-black"
            href="/#work"
          >
            Work
          </Link>
          <Link
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="/#activities"
          >
            Activities
          </Link>
          <Link
            className="font-display text-label-bold uppercase text-on-surface-variant hover:text-on-background hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors px-2 border-2 border-transparent hover:border-black"
            href="/#contact"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden md:flex bg-primary-fixed border-3 border-border-dark px-6 py-2 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow active-push transition-all duration-200 items-center gap-2"
        >
          <span className="material-symbols-outlined">work</span>
          Hire Me
        </Link>

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
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="/#intro"
            >
              Intro
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="/#about"
            >
              About
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="/#skills"
            >
              Skills
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="/#work"
            >
              Work
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="/#activities"
            >
              Activities
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-headline-md uppercase text-on-background border-b-3 border-primary-fixed-dim pb-2"
              href="/#contact"
            >
              Contact
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/#contact"
              className="w-full bg-primary-fixed border-3 border-border-dark py-3 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow active-push flex items-center justify-center gap-2 text-center"
            >
              <span className="material-symbols-outlined">work</span>
              Hire Me
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full relative z-10">
        {/* Hero Section */}
        <section className="w-full bg-dot-pattern py-16 border-b-4 border-border-dark relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12 flex flex-col items-start gap-10 relative z-10">
            <Link
              className="inline-flex items-center gap-2 bg-surface border-neo hard-shadow hard-shadow-active px-4 py-2 font-label-bold text-label-bold text-on-surface hover:bg-primary-container transition-colors"
              href="/#work"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Work
            </Link>

            <h1 className="font-display text-display uppercase text-border-dark break-all leading-none bg-primary-container p-4 border-neo-thick hard-shadow-lg inline-block transform -rotate-1">
              {detail.title}
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl bg-surface p-4 border-neo hard-shadow">
              {detail.subtitle}
            </p>

            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-md text-headline-md px-16 py-6 border-neo-thick hard-shadow-lg hard-shadow-lg-active hover:-translate-y-1 hover:bg-inverse-primary transition-all uppercase tracking-widest"
                href="#"
              >
                View Project / Playstore
              </a>
            </div>

            <div className="w-full mt-6 border-neo-thick hard-shadow-lg bg-background p-2">
              <img
                alt={`${detail.title} Dashboard Interface Preview`}
                className="w-full h-auto object-cover border-neo grayscale hover:grayscale-0 transition-all duration-500"
                src={detail.bannerImg}
              />
            </div>
          </div>
        </section>

        {/* Project Info Bar */}
        <section className="w-full bg-border-dark text-on-primary py-4 border-b-4 border-border-dark">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">Role</span>
              <span className="font-headline-md text-headline-md text-primary-container">{detail.role}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">Timeline</span>
              <span className="font-headline-md text-headline-md text-primary-container">{detail.timeline}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">Category</span>
              <span className="font-headline-md text-headline-md text-primary-container">{detail.category}</span>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="w-full bg-surface py-16 border-b-4 border-border-dark">
          <div className="mx-auto px-4 md:px-12 flex flex-col gap-6 max-w-[1280px]">
            <div className="bg-background border-neo hard-shadow p-10">
              <h2 className="font-headline-lg text-headline-md text-on-background mb-6 border-b-4 border-primary-container inline-block pb-2">
                Project Overview
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                {detail.overview}
              </p>
              {detail.overviewExtra && (
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {detail.overviewExtra}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Visual Gallery (Snap Horizontal Carousel) */}
        <section className="w-full bg-background py-16 border-b-4 border-border-dark">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12">
            <h2 className="font-headline-lg md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-10 inline-block border-b-4 border-border-dark pb-2">
              Visual Gallery
            </h2>

            <div className="relative w-full">
              <div
                ref={galleryRef}
                onScroll={handleGalleryScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-6 scroll-smooth"
              >
                {detail.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-full md:w-[80%] border-neo-thick hard-shadow-lg bg-surface p-2"
                  >
                    <img
                      alt={`${detail.title} gallery screenshot ${i + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      src={imgUrl}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-10">
                <div className="flex gap-6">
                  <button
                    onClick={() => scrollGallery("left")}
                    className="bg-primary-container border-neo hard-shadow hard-shadow-active p-4 flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined font-extrabold">arrow_back</span>
                  </button>
                  <button
                    onClick={() => scrollGallery("right")}
                    className="bg-primary-container border-neo hard-shadow hard-shadow-active p-4 flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined font-extrabold">arrow_forward</span>
                  </button>
                </div>
                <div className="font-display text-headline-md text-border-dark bg-surface border-neo px-6 py-2 hard-shadow">
                  {String(galleryIndex).padStart(2, "0")} / {String(detail.gallery.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              MK.DEV
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
