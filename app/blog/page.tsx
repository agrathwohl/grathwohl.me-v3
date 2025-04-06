import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import { getSortedPosts } from "@/lib/posts";

export default async function BlogPage() {
  // Get posts sorted by date (newest first)
  const posts = await getSortedPosts();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to home</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-6">
            Writings
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-xl">
            Essays on technology, media, and the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-white/20 p-6 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold group-hover:text-red-500 transition-colors">
                  {post.title}
                </h2>
                <span className="text-white/50 text-sm">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="text-white/70 mb-4">{post.description}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
