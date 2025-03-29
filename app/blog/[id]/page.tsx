import { getPostData } from "@/lib/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { id } = await params;

  const post = await getPostData(id);
  return (
    <div
      className="prose prose-lg"
      dangerouslySetInnerHTML={{ __html: post.contentHtml }}
    />
  );
}
