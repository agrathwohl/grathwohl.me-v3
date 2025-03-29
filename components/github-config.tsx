"use client"

import { useState, useEffect } from "react"
import { Github, Save, Plus, Trash2, LinkIcon } from "lucide-react"

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

export default function GithubConfig() {
  const [manifest, setManifest] = useState<GithubManifest | null>(null)
  const [loading, setLoading] = useState(true)
  const [newRepo, setNewRepo] = useState<ManifestRepo>({
    owner: "",
    repo: "",
    description: "",
    homepage: "",
  })

  useEffect(() => {
    async function fetchManifest() {
      try {
        const response = await fetch("/github-manifest.json")
        if (response.ok) {
          const data = await response.json()
          setManifest(data)
        }
      } catch (err) {
        console.error("Failed to load manifest", err)
      } finally {
        setLoading(false)
      }
    }

    fetchManifest()
  }, [])

  const handleAddRepo = () => {
    if (!manifest || !newRepo.owner || !newRepo.repo) return

    // Convert empty homepage to null
    const homepageValue = newRepo.homepage && newRepo.homepage.trim() !== "" ? newRepo.homepage : null

    setManifest({
      ...manifest,
      featured: [
        ...manifest.featured,
        {
          ...newRepo,
          homepage: homepageValue,
        },
      ],
    })

    setNewRepo({ owner: "", repo: "", description: "", homepage: "" })
  }

  const handleRemoveRepo = (index: number) => {
    if (!manifest) return

    const updatedFeatured = [...manifest.featured]
    updatedFeatured.splice(index, 1)

    setManifest({
      ...manifest,
      featured: updatedFeatured,
    })
  }

  const handleUpdateRepo = (index: number, field: keyof ManifestRepo, value: string) => {
    if (!manifest) return

    const updatedFeatured = [...manifest.featured]
    updatedFeatured[index] = {
      ...updatedFeatured[index],
      [field]: value,
    }

    setManifest({
      ...manifest,
      featured: updatedFeatured,
    })
  }

  const handleSaveManifest = () => {
    // In a real application, this would send the manifest to the server
    // For this demo, we'll just log it to the console
    console.log("Saving manifest:", manifest)
    alert("In a real implementation, this would save the manifest to the server.")
  }

  if (loading) {
    return <div className="p-6 text-center">Loading configuration...</div>
  }

  if (!manifest) {
    return <div className="p-6 text-center">Failed to load GitHub configuration</div>
  }

  return (
    <div className="border border-white/20 p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <Github className="mr-2 h-5 w-5" />
        GitHub Configuration
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Featured Repositories</h3>

        <div className="space-y-4 mb-4">
          {manifest.featured.map((repo, index) => (
            <div key={index} className="border border-white/10 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium">
                  {repo.owner}/{repo.repo}
                </div>
                <button
                  onClick={() => handleRemoveRepo(index)}
                  className="text-white/50 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="text-sm text-white/70 mb-2">{repo.description}</div>

              <div className="flex items-center text-xs text-white/50">
                <LinkIcon className="h-3 w-3 mr-1" />
                <input
                  type="text"
                  value={repo.homepage || ""}
                  onChange={(e) => handleUpdateRepo(index, "homepage", e.target.value)}
                  placeholder="Project homepage URL (optional)"
                  className="bg-transparent border-b border-white/20 focus:border-white/50 outline-none w-full py-1"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="border border-white/10 p-4">
          <h4 className="text-sm font-medium mb-3">Add New Repository</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs text-white/70 mb-1">Owner/Organization</label>
              <input
                type="text"
                value={newRepo.owner}
                onChange={(e) => setNewRepo({ ...newRepo, owner: e.target.value })}
                className="w-full bg-black border border-white/20 p-2 text-sm"
                placeholder="e.g. SacredData"
              />
            </div>
            <div>
              <label className="block text-xs text-white/70 mb-1">Repository Name</label>
              <input
                type="text"
                value={newRepo.repo}
                onChange={(e) => setNewRepo({ ...newRepo, repo: e.target.value })}
                className="w-full bg-black border border-white/20 p-2 text-sm"
                placeholder="e.g. hyperway"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs text-white/70 mb-1">Description</label>
            <input
              type="text"
              value={newRepo.description}
              onChange={(e) => setNewRepo({ ...newRepo, description: e.target.value })}
              className="w-full bg-black border border-white/20 p-2 text-sm"
              placeholder="Brief description of the repository"
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs text-white/70 mb-1">Project Homepage (optional)</label>
            <input
              type="text"
              value={newRepo.homepage || ""}
              onChange={(e) => setNewRepo({ ...newRepo, homepage: e.target.value })}
              className="w-full bg-black border border-white/20 p-2 text-sm"
              placeholder="e.g. https://sacreddata.github.io/hyperway/"
            />
          </div>
          <button
            onClick={handleAddRepo}
            disabled={!newRepo.owner || !newRepo.repo}
            className="flex items-center bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:hover:bg-white/10 px-3 py-2 text-sm transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Repository
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSaveManifest}
          className="flex items-center bg-red-500/80 hover:bg-red-500 px-4 py-2 transition-colors"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Configuration
        </button>
      </div>
    </div>
  )
}

