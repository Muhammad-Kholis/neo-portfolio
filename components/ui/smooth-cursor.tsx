"use client"

import { useEffect, useRef, useState } from "react"

export function SmoothCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Position of mouse
  const mouseRef = useRef({ x: -100, y: -100 })
  // Current position of trailing cursor
  const trailingRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Disable on mobile/touch screens to avoid interface friction
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    if (isTouchDevice) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select")

      setIsHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    // Smooth animation loop using requestAnimationFrame (lerp trailing physics)
    let animationFrameId: number
    const updatePosition = () => {
      const ease = 0.15 // Trailing ease factor

      trailingRef.current.x += (mouseRef.current.x - trailingRef.current.x) * ease
      trailingRef.current.y += (mouseRef.current.y - trailingRef.current.y) * ease

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate(${trailingRef.current.x}px, ${trailingRef.current.y}px)`
      }

      animationFrameId = requestAnimationFrame(updatePosition)
    }

    animationFrameId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style jsx global>{`
        @media (min-width: 768px) {
          body,
          a,
          button,
          input,
          textarea,
          select,
          [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Central Cursor Point */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-vibrant-orange md:block hidden"
        style={{ willChange: "transform" }}
      />

      {/* Trailing physics border box (Neo-Brutalist thick borders) */}
      <div
        ref={cursorOutlineRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-black dark:border-white transition-[width,height,background-color] duration-200 ease-out md:block hidden ${
          isHovering
            ? "h-11 w-11 bg-vibrant-orange/40 border-vibrant-orange scale-110"
            : "h-7 w-7 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  )
}
