import { MetadataRoute } from "next"
import { getPortfolioProjects } from "@/lib/portfolio"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kholis.vercel.app"
  
  // Fetch dynamic projects compiled from MDX files
  const projects = getPortfolioProjects()

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ]
}
