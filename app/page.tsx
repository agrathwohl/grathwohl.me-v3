import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import SocialIcons from "@/components/social-icons"
import GithubCard from "@/components/github-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center relative px-4">
        <div className="relative inline-block">
          <h1 className="text-[clamp(3rem,15vw,12rem)] font-black tracking-tighter leading-none">grathwohl</h1>
          <span className="absolute -right-4 top-0 text-[clamp(1rem,5vw,4rem)] font-bold text-red-500">.me</span>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <SocialIcons />
          </div>
        </div>

        <div className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <Link href="/blog" className="group border border-white/20 p-6 hover:bg-white/5 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">Writings</h2>
            <p className="text-white/70 mb-4">Thoughts on technology, media, and the digital landscape</p>
            <div className="flex items-center text-white/50 group-hover:text-red-500 transition-colors">
              <span>Read articles</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href="/work" className="group border border-white/20 p-6 hover:bg-white/5 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">Work</h2>
            <p className="text-white/70 mb-4">Engineering management and technical research in multimedia</p>
            <div className="flex items-center text-white/50 group-hover:text-red-500 transition-colors">
              <span>View projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <div className="md:col-span-2">
            <GithubCard />
          </div>
        </div>

        <div className="absolute bottom-8 left-8 text-xs text-white/30">
          <p>Homesteading in Bon Aqua, Tennessee</p>
        </div>
      </main>
    </div>
  )
}

