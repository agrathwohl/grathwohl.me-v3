import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  repoUrl: string
  homepage?: string | null
  technologies: string[]
  imageUrl?: string
}

export default function ProjectCard({
  title,
  description,
  repoUrl,
  homepage,
  technologies,
  imageUrl,
}: ProjectCardProps) {
  // Determine the primary and secondary links
  const primaryUrl = homepage || repoUrl
  const showSecondaryLink = homepage !== null && homepage !== undefined

  return (
    <div className="border border-white/20 p-6 hover:bg-white/5 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">
          <Link
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors flex items-center"
          >
            {title}
            {homepage && <ExternalLink className="ml-2 h-4 w-4 text-white/50" />}
          </Link>
        </h3>

        <div className="flex space-x-2">
          {showSecondaryLink && (
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="mb-4 aspect-video bg-black/50 overflow-hidden">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <p className="text-white/70 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

