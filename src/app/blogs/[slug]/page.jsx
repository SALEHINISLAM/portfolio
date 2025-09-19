export const runtime = 'nodejs';

import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllPosts, getPostMeta } from "../../../lib/posts";
import Link from "next/link";

// Pre-build static routes for all posts
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// Optional: lock to static paths only
export const dynamicParams = false;

export default async function BlogPostPage({ params }) {
  const meta = getPostMeta(params.slug);
  if (!meta) return notFound();

  // Import MDX as a React component
  const mdxModule = await import(`../../../../content/posts/${params.slug}.mdx`);
  const MDXContent = mdxModule.default;

  return (
    <article className="max-w-3xl mx-auto px-6 pb-12 pt-28">
      <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm text-base-content/60 mb-6">
        {meta.date ? new Date(meta.date).toLocaleDateString() : ""}
      </p>

      {meta.image && (
        <div className="mb-8">
          <Image
            src={meta.image}
            alt={meta.title}
            width={1200}
            height={630}
            className="rounded-2xl w-full h-auto"
          />
        </div>
      )}

      <div className="prose max-w-none">
        <MDXContent />
      </div>
      <Link href={"/blogs"} className="btn mt-5 btn-outline w-full">Back to Blogs</Link>
    </article>
  );
}
