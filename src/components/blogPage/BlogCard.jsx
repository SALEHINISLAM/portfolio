"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Blog Image */}
      <figure className="h-48 w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </figure>

      {/* Blog Content */}
      <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        {blog.excerpt && (
          <p className="text-base-content/70 line-clamp-2">{blog.excerpt}</p>
        )}
        <div className="mt-4">
          <Link
            href={`/blogs/${blog.slug}`}
            className="btn btn-sm btn-primary"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
