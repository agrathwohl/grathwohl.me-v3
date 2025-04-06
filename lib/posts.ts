import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { unified } from "unified";

export async function getPostData(id: any) {
  const fullPath = path.resolve(`./posts/${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use enhanced markdown processing pipeline
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm) // GitHub Flavored Markdown support
    .use(remarkRehype, { allowDangerousHtml: true }) // Transform to HTML with raw HTML support
    .use(rehypeSlug) // Add ids to headings
    .use(rehypeAutolinkHeadings) // Add anchor links to headings
    .use(rehypeHighlight) // Syntax highlighting for code blocks
    .use(rehypeStringify, { allowDangerousHtml: true }) // Output HTML with raw HTML support
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getSortedPosts() {
  // Get all markdown files from the posts directory
  const postsDirectory = path.resolve('./posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  // Filter out only .md files that don't start with a dot
  const markdownFiles = fileNames.filter(filename => 
    filename.endsWith('.md') && !filename.startsWith('.')
  );
  
  // Get data from each file and create post objects
  const allPostsData = await Promise.all(
    markdownFiles.map(async (filename) => {
      const id = filename.replace(/\.md$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      // Format the date properly
      let date = matterResult.data.date;
      if (date) {
        // If date is a Date object, convert to string
        if (date instanceof Date) {
          date = date.toISOString().split('T')[0];
        }
        // If it's just a string, make sure it's in YYYY-MM-DD format
        else if (typeof date === 'string') {
          // Try to parse the date string
          const parsedDate = new Date(date);
          if (!isNaN(parsedDate.getTime())) {
            date = parsedDate.toISOString().split('T')[0];
          }
        }
      } else {
        // Try to extract date from filename if in format YYYY-MM-DD-title.md
        const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})-/);
        if (dateMatch) {
          date = dateMatch[1];
        } else {
          // Use fallback date
          date = '1970-01-01';
        }
      }
      
      // Create slug from id, removing any date prefix
      const slug = id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
      
      return {
        id,
        slug,
        title: matterResult.data.title || 'Untitled',
        date,
        description: matterResult.data.description || matterResult.data.subtitle || '',
        tags: matterResult.data.tags || [],
      };
    })
  );
  
  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
