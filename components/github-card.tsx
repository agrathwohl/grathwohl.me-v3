"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Star, GitFork, Github, ExternalLink } from "lucide-react"

type Repository = {
  name: string
  owner: string
  description: string
  html_url: string
  homepage?: string | null
  stargazers_count?: number
  forks_count?: number
  language?: string
}

type ManifestRepo = {
  owner: string
  repo: string
  description: string
  homepage?: string | null
}

type Organization = {
  name: string
  url: string
  homepage?: string | null
}

type GithubManifest = {
  featured: ManifestRepo[]
  organizations: Organization[]
  additionalRepos: ManifestRepo[]
}

export default function GithubCard() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchManifestAndRepos() {
      try {
        // For demo purposes, we'll use hardcoded data instead of fetching
        // This ensures the component works even without the actual API
        const manifest: GithubManifest = {
          featured: [
            {
              owner: "SacredData",
              repo: "inboxcast",
              description: "Turn your inbox into a personalized podcast with AI-powered audio summaries",
              homepage: "https://inbox.audio",
            },
            {
              owner: "agrathwohl",
              repo: "t140llm",
              description: "Deliver streaming LLM text over a T.140 RTP payload",
              homepage: "https://agrathwohl.github.io/t140llm/",
            },
            {
              owner: "SacredData",
              repo: "nuxt-peertube",
              description: "A Nuxt module for interacting with a remote PeerTube instance",
              homepage: null,
            },
            {
              owner: "agrathwohl",
              repo: "assistive-llm",
              description: "Accessibility-focused large language model interface for assistive technology users",
              homepage: null,
            },
          ],
          organizations: [
            {
              name: "SacredData",
              url: "https://github.com/SacredData",
              homepage: "https://sacreddata.io",
            },
          ],
          additionalRepos: [],
        }

        // Process featured repos from manifest
        const featuredRepos = manifest.featured.map((repo) => ({
          name: repo.repo,
          owner: repo.owner,
          description: repo.description,
          html_url: `https://github.com/${repo.owner}/${repo.repo}`,
          homepage: repo.homepage,
          // Add some mock data for the demo
          stargazers_count: Math.floor(Math.random() * 100),
          forks_count: Math.floor(Math.random() * 30),
          language: ["JavaScript", "TypeScript", "Swift", "Python"][Math.floor(Math.random() * 4)],
        }))

        setRepos(featuredRepos)
        setLoading(false)
      } catch (err) {
        console.error("Error loading repos:", err)
        setError("Could not load GitHub repositories")
        setLoading(false)
      }
    }

    fetchManifestAndRepos()
  }, [])

  if (loading) {
    return (
      <div className="border border-white/20 p-6 animate-pulse">
        <div className="h-6 bg-white/10 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-white/10 rounded w-full"></div>
          <div className="h-4 bg-white/10 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="border border-white/20 p-6">
        <p className="text-white/70">{error}</p>
      </div>
    )
  }

  return (
    <div className="border border-white/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center">
          <Github className="mr-2 h-5 w-5" />
          Featured Projects
        </h3>
        <Link
          href="https://github.com/agrathwohl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white flex items-center text-sm"
        >
          View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </div>

      <div className="space-y-4">
        {repos.map((repo) => (
          <div key={`${repo.owner}/${repo.name}`} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
            <div className="flex items-start justify-between">
              <Link
                href={repo.homepage || repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-red-500 transition-colors flex items-center"
              >
                {repo.owner}/{repo.name}
                {repo.homepage && <ExternalLink className="h-3 w-3 ml-1 text-white/50" />}
              </Link>

              {repo.homepage ? (
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-red-500 transition-colors flex items-center text-xs ml-2"
                >
                  <Github className="h-3 w-3 mr-1" />
                  <span className="hidden sm:inline">GitHub</span>
                </Link>
              ) : null}
            </div>
            <p className="text-white/70 text-sm mt-1">{repo.description || "No description available"}</p>
            <div className="flex items-center mt-2 text-xs text-white/50">
              {repo.language && (
                <span className="mr-4 flex items-center">
                  <span className="h-2 w-2 rounded-full bg-red-500 mr-1"></span>
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count !== undefined && (
                <span className="mr-4 flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  {repo.stargazers_count}
                </span>
              )}
              {repo.forks_count !== undefined && (
                <span className="flex items-center">
                  <GitFork className="h-3 w-3 mr-1" />
                  {repo.forks_count}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

