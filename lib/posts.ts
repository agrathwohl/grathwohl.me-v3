import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import remarkParse from "remark-parse";
import { read } from "to-vfile";
import { unified } from "unified";

export async function getPostData(id: any) {
  const fullPath = path.resolve(`./posts/${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const file = await unified().use(remarkParse).use(html).process(fileContents);
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml: file.toString(),
    //contentHtml,
    ...matterResult.data,
  };
}

getPostData("2020-08-14-Web-Audio");
