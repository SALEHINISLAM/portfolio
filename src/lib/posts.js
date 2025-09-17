import 'server-only';

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

/** Return all posts’ frontmatter, sorted by date desc */
export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const file = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data } = matter(file);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      image: data.image || "",
      excerpt: data.excerpt || "",
    //   tags: data.tags || [],
    };
  });
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

/** Return one post’s frontmatter by slug (or null) */
export function getPostMeta(slug) {
  const full = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;
  const file = fs.readFileSync(full, "utf8");
  const { data } = matter(file);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    image: data.image || "",
    excerpt: data.excerpt || "",
    // tags: data.tags || [],
  };
}
