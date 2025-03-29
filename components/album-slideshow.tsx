"use client"

import { useState, useEffect } from "react"

type AlbumSlideshowProps = {
  images: string[]
  interval?: number
}

export default function AlbumSlideshow({ images, interval = 4000 }: AlbumSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(images.length).fill(false))
  const [fadeIn, setFadeIn] = useState(true)

  // Preload images
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setIsLoaded((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
    })
  }, [images])

  // Handle automatic rotation
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setFadeIn(true)
      }, 300) // Wait for fade out before changing image
    }, interval)

    return () => clearTimeout(timer)
  }, [currentIndex, images.length, interval])

  // Manual navigation
  const goToNext = () => {
    setFadeIn(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setFadeIn(true)
    }, 300)
  }

  const goToPrev = () => {
    setFadeIn(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
      setFadeIn(true)
    }, 300)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full aspect-square border border-white/10 overflow-hidden bg-black">
      {/* Loading indicator */}
      {!isLoaded[currentIndex] && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-8 h-8 border-2 border-white/30 border-t-red-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Current image */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
        style={{ opacity: isLoaded[currentIndex] ? (fadeIn ? 1 : 0) : 0 }}
      >
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Sonic Multiplicities album cover ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-colors"
        aria-label="Previous album"
      >
        ←
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-colors"
        aria-label="Next album"
      >
        →
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFadeIn(false)
              setTimeout(() => {
                setCurrentIndex(index)
                setFadeIn(true)
              }, 300)
            }}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-red-500" : "bg-white/30"}`}
            aria-label={`Go to album ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

