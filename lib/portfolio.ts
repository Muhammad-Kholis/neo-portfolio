import fs from "fs"
import path from "path"

export interface PortfolioProject {
  slug: string
  title: string
  desc: string
  link: string
  cover: string
  badge: string
  order: number
  gallery: string[]
  content: string
}

export function getPortfolioProjects(): PortfolioProject[] {
  const dir = path.join(process.cwd(), "content/portfolio")
  if (!fs.existsSync(dir)) {
    return []
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"))

  const projects = files.map((file) => {
    const filePath = path.join(dir, file)
    const slug = file.replace(/\.mdx$/, "")
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Match YAML frontmatter between ---
    const match = fileContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/)
    const frontmatterText = match ? match[1] : ""
    const content = match ? match[2] : fileContent

    const frontmatter: Record<string, string> = {}
    frontmatterText.split("\n").forEach((line) => {
      const parts = line.split(":")
      if (parts.length >= 2) {
        const key = parts[0].trim()
        let value = parts.slice(1).join(":").trim()
        // Strip surrounding quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1)
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.substring(1, value.length - 1)
        }
        frontmatter[key] = value
      }
    })

    const gallery = frontmatter.gallery
      ? frontmatter.gallery
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : []

    const localCovers: Record<string, string> = {
      "centrepoint": "/portfolio/centrepoint.webp",
      "e-konsul": "/portfolio/ekonsul.webp",
      "emergency-center": "/portfolio/emter.webp",
      "parzello-website": "/portfolio/parzelloweb.webp",
      "personal-portfolio": "/portfolio/webportfolio.webp",
      "sipaling-delivery": "/portfolio/sipaling.webp",
      "ticzy-productivity-app": "/portfolio/ticzy.webp",
      "website-ukm-policy": "/portfolio/webpolicy.webp",
    }

    const cover = localCovers[slug] || frontmatter.cover || ""

    return {
      slug,
      title: frontmatter.title || slug,
      desc: frontmatter.desc || "",
      link: frontmatter.link || "",
      cover,
      badge: frontmatter.badge || "Web",
      order: parseInt(frontmatter.order, 10) || 0,
      gallery,
      content,
    }
  })

  // Sort by order ascending
  return projects.sort((a, b) => a.order - b.order)
}

export function getPortfolioProjectBySlug(slug: string): PortfolioProject | null {
  const projects = getPortfolioProjects()
  return projects.find((p) => p.slug === slug) || null
}
