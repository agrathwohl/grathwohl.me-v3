import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"
import Header from "@/components/header"
import ProjectCard from "@/components/project-card"

type Project = {
  title: string
  description: string
  repoUrl: string
  homepage?: string | null
  technologies: string[]
  imageUrl?: string
}

// Update the Assistive LLM project with the provided image URL
const projects: Project[] = [
  {
    title: "INBOX.AUDIO",
    description: "Turn your inbox into a personalized podcast with AI-powered audio summaries",
    repoUrl: "https://github.com/SacredData/inboxcast",
    homepage: "https://inbox.audio",
    technologies: ["TypeScript", "Next.js", "AI", "Audio"],
    imageUrl:
      "https://sjc.microlink.io/iNY_9GengyJP1ojPuovs3b6R8Cn1GBh20QkL0FOq5FmEi8PnejbP1gZdPtjId6l3hwWF1qYGkA3rmuqi_vMAnw.jpeg",
  },
  {
    title: "Rob Bernstein Comedy",
    description: "Official website for comedian Rob Bernstein featuring tour dates, videos, and podcast episodes",
    repoUrl: "https://github.com/SacredData/robbernsteincomedy.com",
    homepage: "https://robbernsteincomedy.com",
    technologies: ["React", "Gatsby", "CMS", "Entertainment"],
    imageUrl:
      "https://sjc.microlink.io/QsA-uqGPWji5ILzZmQdLih_K1SofNGuU0ktuU08itBsXhU1bt4J9Nx2pcQ4eb0hYR8VEsT6RoeOXf78eJAKBHQ.jpeg",
  },
  {
    title: "Nuxt PeerTube",
    description: "A Nuxt module for interacting with a remote PeerTube instance, allowing Nuxt to serve as a front-end",
    repoUrl: "https://github.com/SacredData/nuxt-peertube",
    homepage: null,
    technologies: ["TypeScript", "Vue", "Nuxt", "PeerTube"],
    imageUrl:
      "https://sjc.microlink.io/X0sjoYd6-5VXPLFYpGq_AxS71eRrxW-m1NS1LgkbvRMgOwADROBHnVeUQWGPJUFANIu05phQ1faB4yId2_fQ4Q.jpeg",
  },
  {
    title: "Assistive LLM",
    description: "Accessibility-focused large language model interface for assistive technology users",
    repoUrl: "https://github.com/agrathwohl/assistive-llm",
    homepage: null,
    technologies: ["TypeScript", "Accessibility", "LLM", "AI"],
    imageUrl:
      "https://sjc.microlink.io/Ar--hJjOPPkzQ-YBQKG4dT1vcoKJYdiRWYSHoEZVehqWAuWQrXPsJ1fLU7urKTroUhTxzvMyMNCaf-ECnOTsIQ.jpeg",
  },
  {
    title: "Part of the Problem",
    description:
      "Highly successful independent content subscription service for one of today's most prominent and up-and-coming news commentators",
    repoUrl: "https://github.com/agrathwohl/potp",
    homepage: null,
    technologies: ["React", "Node.js", "Stripe", "Content Delivery"],
    imageUrl:
      "https://sjc.microlink.io/ACJJUrsYAwdRL9o495shR2n5T73lkYgWKmtclxYbi-vPmNCKJr9vhrbX4tw22L0WvaUyCPVRlKxzQnjzroq3ug.jpeg",
  },
  {
    title: "t140llm",
    description: "Deliver streaming LLM text over a T.140 RTP payload",
    repoUrl: "https://github.com/agrathwohl/t140llm",
    homepage: "https://agrathwohl.github.io/t140llm/",
    technologies: ["TypeScript", "WebRTC", "LLM", "Accessibility"],
    imageUrl: "https://github.com/agrathwohl/t140llm/raw/master/logo.gif",
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to home</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Work</h1>
            <Link
              href="/Andrew-Grathwohl-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center border border-white/20 px-4 py-2 hover:bg-white/5 transition-all duration-300 group"
            >
              <FileText className="mr-2 h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              <span className="mr-2">View Resume</span>
              <Download className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
            </Link>
          </div>
          <p className="text-white/70 mt-4 max-w-2xl text-xl">
            Engineering management and technical research in multimedia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  )
}

