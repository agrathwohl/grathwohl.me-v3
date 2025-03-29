import type React from "react"
import "@/app/globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import CursorTrail from "@/components/cursor-trail"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

export const metadata: Metadata = {
  title: "Andrew Grathwohl",
  description:
    "Engineering manager and technical researcher in multimedia, digital signal processing, and content production",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <CursorTrail />
        {children}
      </body>
    </html>
  )
}



import './globals.css'