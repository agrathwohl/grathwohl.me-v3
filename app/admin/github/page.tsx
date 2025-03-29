import Header from "@/components/header"
import GithubConfig from "@/components/github-config"

export default function GithubConfigPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tighter">GitHub Configuration</h1>
          <p className="text-white/70 mt-2">Manage which GitHub repositories are featured on your site</p>
        </div>

        <div className="max-w-4xl">
          <GithubConfig />
        </div>
      </main>
    </div>
  )
}

