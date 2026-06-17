import { notFound } from "next/navigation"
import { Metadata } from "next"
import ProjectDetailClient from "./project-detail-client"
import { getPortfolioProjectBySlug, getPortfolioProjects } from "@/lib/portfolio"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getPortfolioProjectBySlug(slug)
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }
  return {
    title: `${project.title} - Case Study`,
    description: project.desc,
  }
}

export async function generateStaticParams() {
  const projects = getPortfolioProjects()
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getPortfolioProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
