"use client";

import BlogCard from "@/components/blogPage/BlogCard";
import Image from "next/image";

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Civil Engineering in Bangladesh",
      image: "/assets/blogs/civil-future.jpg",
    },
    {
      id: 2,
      title: "Why Volunteering Makes You a Better Professional",
      image: "/assets/blogs/volunteering.jpg",
    },
    {
      id: 3,
      title: "How to Balance Study, Work & Personal Projects",
      image: "/assets/blogs/balance.jpg",
    },
    {
      id: 4,
      title: "A Student’s Guide to Surviving BUET",
      image: "/assets/blogs/buet-life.jpg",
    },
  ];

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
        <p className="text-base-content/70 text-center max-w-2xl mx-auto mb-14">
          Thoughts, experiences, and lessons from my journey as a student,
          volunteer, and aspiring engineer.  
          I write not just to share knowledge but to connect with hearts. 💙
        </p>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
