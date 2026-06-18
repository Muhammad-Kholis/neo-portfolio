import { Metadata } from "next"
import HomeClient from "./home-client"
import { getPortfolioProjects } from "@/lib/portfolio"

export const metadata: Metadata = {
  title: "Muhammad Kholis | Portofolio Pengembang Aplikasi Web & Mobile",
  description: "Portofolio profesional Muhammad Kholis - Pengembang Web & Mobile dengan keahlian mendalam dalam Flutter, Next.js, React, Firebase, dan Supabase.",
  metadataBase: new URL("https://kholis.vercel.app"),
  openGraph: {
    title: "Muhammad Kholis | Portofolio Pengembang Aplikasi Web & Mobile",
    description: "Portofolio profesional Muhammad Kholis - Pengembang Web & Mobile dengan keahlian mendalam dalam Flutter, Next.js, React, Firebase, dan Supabase.",
    url: "https://kholis.vercel.app",
    siteName: "Muhammad Kholis Portfolio",
    images: [
      {
        url: "/images/muhammadkholis.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Kholis Profile Photo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kholis | Portofolio Pengembang Aplikasi Web & Mobile",
    description: "Portofolio profesional Muhammad Kholis - Pengembang Web & Mobile dengan keahlian mendalam dalam Flutter, Next.js, React, Firebase, dan Supabase.",
    images: ["/images/muhammadkholis.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Page() {
  const projects = getPortfolioProjects()

  return <HomeClient projects={projects} />
}
