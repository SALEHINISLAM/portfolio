"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center max-w-lg">
        {/* Big Emoji */}
        <div className="text-8xl mb-6">😢</div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-base-content/70 mb-8 leading-relaxed">
          Looks like you’ve taken a wrong turn.  
          But don’t worry — even the best explorers get lost sometimes. 🌍  
          Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            ⬅ Back to Home
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
