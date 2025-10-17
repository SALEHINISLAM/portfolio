export const runtime = "nodejs";

import BlogCard from "@/components/blogPage/BlogCard";
import { getAllPosts } from "../../lib/posts";
import Image from "next/image";
import { GeneratePlaceholder } from "@/components/blogPage/CreateImage";

// ✅ SEO Metadata
export const metadata = {
  title: "My Blogs | Md Salehin Islam",
  description:
    "Thoughts, experiences, and lessons from my journey as a student, volunteer, and aspiring engineer. I write not just to share knowledge but to connect with hearts.Please these are totally my perspective. Don't fill offended.",
  keywords: [
    "Md Salehin Islam",
    "Salehin",
    "BUET",
    "BUET Student",
    "Udvash",
    "Utkorsho",
    "Web Developer",
    "student blogs",
    "engineering journey",
    "personal experiences",
    "volunteering lessons",
    "aspiring engineer blog",
  ],
  openGraph: {
    title: "📝 My Blogs - Md Salehin Islam",
    description:
      "Personal blogs on engineering, volunteering, and life lessons. Written to inspire, share, and connect.",
    url: "https://mdsalehinislam.netlify.app/blogs",
    siteName: "Md Salehin Islam",
    images: [
      {
        url: "/assets/blogPage.png",
        width: 1200,
        height: 630,
        alt: "Md Salehin Islam Blogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "📝 My Blogs - Md Salehin Islam",
    description:
      "Personal blogs on engineering, volunteering, and life lessons. Written to inspire, share, and connect.",
    images: ["/assets/blogPage.png"],
    creator: "@mdsalehinislam",
  },
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-base-100 pb-20 px-6 pt-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <Image
          src={"/assets/blogPage.png"}
          alt="Md Salehin Islam"
          width={500}
          height={500}
          className="border border-base-content rounded-2xl"
        />
        <h2 className="text-4xl font-bold text-center mb-10">📝 My Blogs</h2>
        <p className="text-base-content/70 text-center max-w-2xl mx-auto">
          Thoughts, experiences, and lessons from my journey as a student,
          volunteer, and aspiring engineer. I write not just to share knowledge
          but to connect with hearts. 💙
        </p>
        <p className="mt-2 mx-auto mb-14">
          Don't reference anything from here. These are totally my thinking, my
          perspective.
        </p>
        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length ? (
            posts.map((p) => (
              <BlogCard
                key={p.slug}
                blog={{
                  id: p.slug,
                  title: p.title,
                  image: p.image || GeneratePlaceholder(p.title),
                  slug: `${p.slug}`,
                  excerpt: p.excerpt,
                  date: p.date,
                  tags: p.tags || [],
                }}
              />
            ))
          ) : (
            <p className="text-center text-base-content/70">No posts yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
