// app/blog/[slug]/page.jsx
export const runtime = 'nodejs';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getAllPosts, getPostMeta } from "../../../lib/posts";
import { GeneratePlaceholder } from "@/components/blogPage/CreateImage";

// ---- Site base URL (set NEXT_PUBLIC_SITE_URL in env) ----
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Pre-build static routes for all posts
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// Keep only prebuilt paths
export const dynamicParams = false;

// ✅ Per-page SEO metadata (Next.js App Router)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};

  const url = `${SITE_URL}/blogs/${meta.slug || params.slug}`;
  const title = meta.title;
  const description =meta.excerpt || "";

  // Ensure absolute OG image URL if provided
  const ogImage =
    meta.image
      ? meta.image.startsWith("http")
        ? meta.image
        : `${SITE_URL}/blogs/${meta.image}`
      : `${SITE_URL}/blogs/${meta.image}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${meta.title} – cover image - A blog written by Salehin`,
        },
      ],
      publishedTime: meta.date || undefined,
      modifiedTime: meta.updated || undefined,
      authors:"Md Salehin Islam",
      tags: meta.tags || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@salehinislam",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params; 
  const meta = getPostMeta(slug);
  if (!meta) return notFound();

  // Import MDX as a React component
  const mdxModule = await import(`../../../../content/posts/${slug}.mdx`);
  const MDXContent = mdxModule.default;

  // Prev/Next posts for internal linking
  const all = getAllPosts()
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const idx = all.findIndex((p) => p.slug === (meta.slug || params.slug));
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  const publishedISO = meta.date ? new Date(meta.date).toISOString() : null;

  // JSON-LD: Article
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blogs/${meta.slug || params.slug}`,
    },
    headline: meta.seoTitle || meta.title,
    image: meta.image
      ? meta.image.startsWith("http")
        ? meta.image
        : `${SITE_URL}/blogs/${meta.image}`
      : `${SITE_URL}/blogs/${meta.image}`,
    datePublished: publishedISO || undefined,
    author: meta.author
      ? {
          "@type": "Person",
          name: "Md Salehin Islam",
          url: SITE_URL,
        }
      : undefined,
    description: meta.excerpt || undefined,
    keywords: Array.isArray(meta.tags) ? meta.tags.join(", ") : undefined,
  };

  // JSON-LD: Breadcrumb
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: meta.title,
        item: `${SITE_URL}/blogs/${meta.slug || params.slug}`,
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-6 pb-12 pt-28">
      {/* JSON-LD for SEO */}
      <Script id="ld-article" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleLd)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbLd)}
      </Script>

      {/* Breadcrumbs (visible) */}
      <nav aria-label="Breadcrumb" className="text-sm mb-4">
        <ol className="flex items-center gap-2 text-base-content/60">
          <li>
            <Link href="/blogs" className="hover:text-base-content">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-base-content">
            {meta.title}
          </li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>

      <div className="text-sm text-base-content/60 mb-6 flex flex-wrap gap-x-4 gap-y-1">
        {meta.date && (
          <span>
            Published{" "}
            <time dateTime={publishedISO}>
              {new Date(meta.date).toLocaleDateString()}
            </time>
          </span>
        )}
        
      </div>

      {meta.image ? (
        <div className="mb-8">
          <Image
            src={meta.image}
            alt={meta.imageAlt || `${meta.title} – cover image- Md Salehin Islam's blog`}
            width={1200}
            height={630}
            priority
            className="rounded-2xl w-full h-auto"
          />
        </div>
      ):(
        <div className="mb-8">
          <Image
            src={GeneratePlaceholder(meta.title)}
            alt={meta.imageAlt || `${meta.title} – cover image- Md Salehin Islam's blog`}
            width={1200}
            height={630}
            priority
            className="rounded-2xl w-full h-auto"
          />
        </div>
      )}

      {/* Article body */}
      <div className="prose max-w-none">
        <MDXContent />
      </div>

      {/* Tags */}
      {Array.isArray(meta.tags) && meta.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${encodeURIComponent(tag)}`}
              className="badge badge-outline"
              aria-label={`View posts tagged ${tag}`}
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}

      {/* Prev / Next navigation */}
      <hr className="my-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/blogs/${prev.slug}`}
            className="block p-4 rounded-xl border hover:bg-base-200 transition"
            rel="prev"
          >
            <span className="text-xs text-base-content/60">Previous</span>
            <div className="font-semibold line-clamp-2">{prev.title}</div>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/blogs/${next.slug}`}
            className="block p-4 rounded-xl border hover:bg-base-200 transition md:text-right"
            rel="next"
          >
            <span className="text-xs text-base-content/60">Next</span>
            <div className="font-semibold line-clamp-2">{next.title}</div>
          </Link>
        )}
      </div>

      <Link href={"/blogs"} className="btn mt-6 btn-outline w-full">
        Back to Blog
      </Link>
    </article>
  );
}
