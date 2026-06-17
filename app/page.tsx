import { Metadata } from "next"
import HomeClient from "./home-client"
import { getPortfolioProjects } from "@/lib/portfolio"

export const metadata: Metadata = {
  title: "Muhammad Kholis - Personal Portfolio",
  description: "Software Developer & Mobile App Developer portfolio. Experience in Flutter, Next.js, and backend integration.",
}

export default function Page() {
  const projects = getPortfolioProjects()

  return <HomeClient projects={projects} />
}
