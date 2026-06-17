"use client"

import { useState, useRef, ReactNode } from "react"
import Link from "next/link"
import { PortfolioProject } from "@/lib/portfolio"

interface ProjectDetailClientProps {
  project: PortfolioProject
}

const projectInfoMap: Record<string, { role: string; timeline: string; category: string }> = {
  "zellopos": { role: "Fullstack Developer", timeline: "3 Months", category: "Mobile App" },
  "parzello-website": { role: "Frontend Engineer", timeline: "1 Month", category: "Web Platform" },
  "sipaling-delivery": { role: "Mobile Developer", timeline: "2 Months", category: "Mobile App" },
  "centrepoint": { role: "Mobile Developer", timeline: "3 Months", category: "Mobile App" },
  "personal-portfolio": { role: "Frontend Engineer", timeline: "1 Month", category: "Web Platform" },
  "website-ukm-policy": { role: "Lead Developer", timeline: "2 Months", category: "Web Portal" },
  "e-konsul": { role: "Mobile Developer", timeline: "3 Months", category: "Mobile App" },
  "emergency-center": { role: "Mobile Developer", timeline: "3 Months", category: "Mobile App" },
  "ticzy-productivity-app": { role: "Mobile Developer", timeline: "2 Months", category: "Mobile App" }
}

function getProjectInfo(slug: string) {
  return projectInfoMap[slug] || { role: "Developer", timeline: "1 Month", category: "Software Project" }
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(1)
  const galleryRef = useRef<HTMLDivElement>(null)

  const info = getProjectInfo(project.slug)

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
    if (galleryRef.current && project.gallery.length > 0) {
      const scrollLeft = galleryRef.current.scrollLeft
      const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth
      if (maxScroll <= 0) return

      const index = Math.round(scrollLeft / (galleryRef.current.scrollWidth / project.gallery.length)) + 1
      setGalleryIndex(Math.min(project.gallery.length, Math.max(1, index)))
    }
  }

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col relative selection:bg-vibrant-orange selection:text-black">
      {/* Navigation */}
      <nav className="bg-background w-full sticky top-0 z-50 border-b-4 border-border-dark flex justify-between items-center px-4 md:px-12 py-4 max-w-[1280px] mx-auto mt-2 border-x-4 neo-shadow-lg relative">
        <div className="absolute -top-4 -left-4 bg-tertiary-fixed border-2 border-border-dark px-2 py-1 transform -rotate-12 neo-shadow z-10 font-bold text-sm text-black">
          PROJECTS
        </div>
        <Link href="/" className="font-display text-headline-lg-mobile md:text-headline-md font-extrabold text-on-background tracking-tighter flex items-center gap-2">
          <span
            className="material-symbols-outlined text-vibrant-orange"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}
          >
            code_blocks
          </span>
          Portfolio
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
          className="hidden md:flex bg-primary-fixed border-3 border-border-dark px-6 py-2 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow active-push transition-all duration-200 items-center gap-2 text-black"
        >
          <span className="material-symbols-outlined">work</span>
          Hire Me
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-on-background border-3 border-border-dark p-2 bg-primary-fixed neo-shadow active-push"
        >
          <span className="material-symbols-outlined text-black" style={{ fontVariationSettings: "'FILL' 1" }}>
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
              className="w-full bg-primary-fixed border-3 border-border-dark py-3 font-display text-label-bold uppercase text-on-primary-fixed neo-shadow active-push flex items-center justify-center gap-2 text-center text-black"
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
              className="inline-flex items-center gap-2 bg-surface border-4 border-border-dark px-4 py-2 font-display text-label-bold text-on-surface hover:bg-primary-container transition-colors neo-shadow active-push text-black"
              href="/#work"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Work
            </Link>

            <h1 className="font-display text-display uppercase text-border-dark break-words leading-none bg-primary-container p-4 border-4 border-border-dark neo-shadow-lg inline-block transform -rotate-1 text-black">
              {project.title}
            </h1>

            <p className="font-display text-body-lg text-on-surface-variant max-w-2xl bg-surface p-4 border-4 border-border-dark neo-shadow text-black">
              {project.desc}
            </p>

            {project.link && (
              <div className="mt-6">
                <a
                  className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-display text-headline-md px-12 py-5 border-4 border-border-dark neo-shadow-lg active-push hover:bg-inverse-primary transition-all uppercase tracking-widest text-black"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project
                </a>
              </div>
            )}

            <div className="w-full mt-6 border-4 border-border-dark neo-shadow-lg bg-background p-2">
              <img
                alt={`${project.title} Dashboard Interface Preview`}
                className="w-full h-auto object-cover border-2 border-border-dark grayscale hover:grayscale-0 transition-all duration-500"
                src={project.cover}
              />
            </div>
          </div>
        </section>

        {/* Project Info Bar */}
        <section className="w-full bg-border-dark text-white py-4 border-b-4 border-border-dark">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col">
              <span className="font-display text-label-sm text-outline-variant uppercase tracking-widest text-white/70">Role</span>
              <span className="font-display text-headline-md text-primary-container">{info.role}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-label-sm text-outline-variant uppercase tracking-widest text-white/70">Timeline</span>
              <span className="font-display text-headline-md text-primary-container">{info.timeline}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-label-sm text-outline-variant uppercase tracking-widest text-white/70">Category</span>
              <span className="font-display text-headline-md text-primary-container">{info.category}</span>
            </div>
          </div>
        </section>

        {/* Project Description & Markdown Body */}
        <section className="w-full bg-surface py-16 border-b-4 border-border-dark">
          <div className="mx-auto px-4 md:px-12 flex flex-col gap-6 max-w-[1280px]">
            <div className="bg-background border-4 border-border-dark neo-shadow p-6 md:p-10 text-on-surface">
              <MarkdownRenderer content={project.content} />
            </div>
          </div>
        </section>

        {/* Visual Gallery (Snap Horizontal Carousel) */}
        {project.gallery.length > 0 && (
          <section className="w-full bg-background py-16 border-b-4 border-border-dark">
            <div className="max-w-[1280px] mx-auto px-4 md:px-12">
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-background mb-10 inline-block border-b-4 border-border-dark pb-2 uppercase text-black font-bold">
                Visual Gallery
              </h2>

              <div className="relative w-full">
                <div
                  ref={galleryRef}
                  onScroll={handleGalleryScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-6 scroll-smooth"
                >
                  {project.gallery.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="snap-center shrink-0 w-full md:w-[80%] border-4 border-border-dark neo-shadow-lg bg-surface p-2"
                    >
                      <img
                        alt={`${project.title} gallery screenshot ${i + 1}`}
                        className="w-full h-auto object-cover border-2 border-border-dark grayscale hover:grayscale-0 transition-all duration-500"
                        src={imgUrl}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex gap-6">
                    <button
                      onClick={() => scrollGallery("left")}
                      className="bg-primary-container border-4 border-border-dark p-4 flex items-center justify-center neo-shadow active-push text-black"
                    >
                      <span className="material-symbols-outlined font-extrabold">arrow_back</span>
                    </button>
                    <button
                      onClick={() => scrollGallery("right")}
                      className="bg-primary-container border-4 border-border-dark p-4 flex items-center justify-center neo-shadow active-push text-black"
                    >
                      <span className="material-symbols-outlined font-extrabold">arrow_forward</span>
                    </button>
                  </div>
                  <div className="font-display text-headline-md text-border-dark bg-surface border-4 border-border-dark px-6 py-2 neo-shadow text-black">
                    {String(galleryIndex).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
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

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n")
  const elements: ReactNode[] = []
  let listItems: ReactNode[] = []
  let insideList = false

  const pushList = () => {
    if (insideList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc pl-6 my-4 flex flex-col gap-2 font-display text-body-lg text-on-surface-variant">
          {listItems}
        </ul>
      )
      listItems = []
      insideList = false
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (line.startsWith("## ")) {
      pushList()
      const text = line.substring(3).trim()
      elements.push(
        <h2 key={i} className="font-display text-headline-md text-on-background mt-8 mb-4 border-b-4 border-primary-container inline-block pb-2 uppercase font-extrabold text-black">
          {renderText(text)}
        </h2>
      )
    } else if (line.startsWith("# ")) {
      pushList()
      const text = line.substring(2).trim()
      elements.push(
        <h1 key={i} className="font-display text-headline-lg text-border-dark uppercase font-black my-6 text-black">
          {renderText(text)}
        </h1>
      )
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      insideList = true
      const text = line.substring(2).trim()
      listItems.push(
        <li key={i} className="font-display text-body-lg text-on-surface-variant text-on-surface">
          {renderText(text)}
        </li>
      )
    } else {
      if (line === "") {
        pushList()
      } else {
        pushList()
        elements.push(
          <p key={i} className="font-display text-body-lg text-on-surface-variant mb-4 leading-relaxed text-on-surface">
            {renderText(line)}
          </p>
        )
      }
    }
  }
  pushList()

  return <div className="markdown-body">{elements}</div>
}

function renderText(text: string): ReactNode {
  let parts: ReactNode[] = [text]

  // Bold (**text**)
  parts = parts.flatMap((part, idx) => {
    if (typeof part !== "string") return part
    const regex = /\*\*([\s\S]+?)\*\*/g
    const split = part.split(regex)
    return split.map((str, i) => (i % 2 === 1 ? <strong key={`b-${idx}-${i}`} className="font-extrabold text-on-background text-black">{str}</strong> : str))
  })

  // Code (`code`)
  parts = parts.flatMap((part, idx) => {
    if (typeof part !== "string") return part
    const regex = /`([\s\S]+?)`/g
    const split = part.split(regex)
    return split.map((str, i) => (i % 2 === 1 ? <code key={`c-${idx}-${i}`} className="bg-surface-container px-2 py-0.5 border border-border-dark text-vibrant-orange font-bold text-sm">{str}</code> : str))
  })

  // Links ([text](url))
  parts = parts.flatMap((part, idx) => {
    if (typeof part !== "string") return part
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g
    const matches = Array.from(part.matchAll(regex))
    if (matches.length === 0) return part

    const result: ReactNode[] = []
    let lastIndex = 0
    matches.forEach((m, matchIdx) => {
      const matchIndex = m.index ?? 0
      if (matchIndex > lastIndex) {
        result.push(part.substring(lastIndex, matchIndex))
      }
      result.push(
        <a key={`l-${idx}-${matchIdx}`} href={m[2]} className="text-vibrant-orange hover:underline font-bold" target="_blank" rel="noopener noreferrer">
          {m[1]}
        </a>
      )
      lastIndex = matchIndex + m[0].length
    })
    if (lastIndex < part.length) {
      result.push(part.substring(lastIndex))
    }
    return result
  })

  return parts
}
