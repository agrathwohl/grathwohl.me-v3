"use client"

import { useEffect, useState } from "react"

type CursorDot = {
  x: number
  y: number
  opacity: number
  id: number
}

export default function CursorTrail() {
  const [dots, setDots] = useState<CursorDot[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const maxDots = 15
  const trailDelay = 50 // ms between dots

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let counter = 0

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setDots((prev) => {
          const newDot = {
            x: e.clientX,
            y: e.clientY,
            opacity: 1,
            id: counter++,
          }

          const updatedDots = [...prev, newDot].slice(-maxDots)
          return updatedDots
        })
      }, trailDelay)
    }

    window.addEventListener("mousemove", handleMouseMove)

    const fadeInterval = setInterval(() => {
      setDots((prev) =>
        prev
          .map((dot) => ({
            ...dot,
            opacity: Math.max(0, dot.opacity - 0.05),
          }))
          .filter((dot) => dot.opacity > 0),
      )
    }, 50)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeoutId)
      clearInterval(fadeInterval)
    }
  }, [])

  return (
    <>
      {dots.map((dot, index) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.opacity,
            transform: `scale(${1 + (index / maxDots) * 2})`,
            backgroundColor: `rgba(255, ${index * 15}, ${index * 15}, ${dot.opacity})`,
          }}
        />
      ))}
    </>
  )
}

