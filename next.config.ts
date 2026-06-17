import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/portfolio/:path*",
        destination: "https://portfolio-mkholis.vercel.app/portfolio/:path*",
      },
      {
        source: "/images/:path*",
        destination: "https://portfolio-mkholis.vercel.app/images/:path*",
      },
      {
        source: "/icons/:path*",
        destination: "https://portfolio-mkholis.vercel.app/icons/:path*",
      },
    ]
  },
}

export default nextConfig
