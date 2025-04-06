import { getPostData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/header";

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const post = await getPostData(id);
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to articles</span>
          </Link>
        </div>
        
        <article className="max-w-5xl mx-auto">
          <header className="mb-12">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {post.date && (
                <div className="text-white/60 text-lg">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              )}
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-white/10 text-white/70 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <div 
            className="prose prose-xl prose-invert max-w-none markdown-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
          />
        </article>
      </main>
    </div>
  );
}
