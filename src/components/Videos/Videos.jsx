"use client";

import { Suspense, useEffect, useState, useRef } from "react";

// Extract YouTube ID from various formats
function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const parts = u.pathname.split("/").filter(Boolean);
    return parts.pop();
  } catch {
    return url; // already an ID
  }
}

// Your raw video list
const RAW_VIDEOS = [
  {
    title_en: "Civil Engineering | Engineering Subject Review | উৎকর্ষ",
    title_bn: "Civil Engineering | Engineering Subject Review | উৎকর্ষ",
    url: "https://youtu.be/TR3mJvjfFik",
  },
  {
    title_en: "৩৫৫ দিনে বছর! || Math Monday || Utkorsho",
    title_bn: "৩৫৫ দিনে বছর! || Math Monday || Utkorsho",
    url: "https://youtu.be/QFQEdoH_pI8",
  },
  {
    title_en:
      "ভুলের হাত থেকে বেঁচে গেল ‘পাই’ এর মান! || Math Monday || Utkorsho",
    title_bn:
      "ভুলের হাত থেকে বেঁচে গেল ‘পাই’ এর মান! || Math Monday || Utkorsho",
    url: "https://youtu.be/pOSgDZpkgH4",
  },
].map((v) => ({
  ...v,
  id: getYouTubeId(v.url),
  thumb: `https://img.youtube.com/vi/${getYouTubeId(v.url)}/hqdefault.jpg`,
}));

/* ---------------- Lazy Thumbnail ---------------- */
function LazyThumbnail({ src, alt, className }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {visible ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="skeleton h-full w-full" />
      )}
    </div>
  );
}

/* ---------------- Video Player ---------------- */
function VideoPlayer({ id, title }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = requestIdleCallback
      ? requestIdleCallback(() => setReady(true), { timeout: 300 })
      : setTimeout(() => setReady(true), 150);
    return () =>
      cancelIdleCallback ? cancelIdleCallback(t) : clearTimeout(t);
  }, []);

  if (!ready) return <div className="skeleton h-full w-full" />;

  return (
    <iframe
      className="h-full w-full"
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

/* ---------------- Main Videos Component ---------------- */
export default function Videos() {
  const [language, setLanguage] = useState("en");
  const [activeVideo, setActiveVideo] = useState(null);

  // Detect language dynamically
  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setLanguage(currentLang.startsWith("bn") ? "bn" : "en");

    const observer = new MutationObserver(() => {
      const l = document.documentElement.lang || "en";
      setLanguage(l.startsWith("bn") ? "bn" : "en");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  const t =
    language === "bn"
      ? {
          heading: "আমার করা কিছু ভিডিও কন্টেন্ট",
          sub: "এই ভিডিওগুলোর স্ক্রিপ্ট থেকে শুরু করে রেকর্ড করা সব নিজেই করেছি।",
          openYT: "ইউটিউবে দেখুন",
          youtube: "ইউটিউব",
        }
      : {
          heading: "Some Video Contents I Created",
          sub: "I personally wrote the scripts, recorded, and edited these videos.",
          openYT: "Watch on YouTube",
          youtube: "YouTube",
        };

  return (
    <section className="mx-auto container">
      
        <div className="justify-center flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-center justify-center">{t.heading}</h2>
          <p className="text-base-content/70 mt-1">{t.sub}</p>
        </div>
      

      {/* Grid */}
      <Suspense
        fallback={
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card bg-base-100 shadow">
                <div className="skeleton aspect-video rounded-t-2xl" />
                <div className="card-body">
                  <div className="skeleton h-4 w-3/4" />
                  <div className="skeleton h-4 w-1/2" />
                  <div className="mt-3 flex gap-2">
                    <div className="skeleton h-6 w-24" />
                    <div className="skeleton h-6 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      >
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RAW_VIDEOS.map((v) => (
            <article key={v.id} className="card card-border bg-base-100 shadow">
              <figure className="relative aspect-video overflow-hidden rounded-t-2xl">
                <LazyThumbnail
                  src={v.thumb}
                  alt={language === "bn" ? v.title_bn : v.title_en}
                  className="h-full w-full"
                />
                <button
                  className="btn btn-circle btn-primary absolute bottom-2 right-2"
                  onClick={() => setActiveVideo(v)}
                  aria-label={`Play ${v.title_en}`}
                >
                  ▶
                </button>
              </figure>
              <div className="card-body">
                <h3
                  className="card-title line-clamp-2"
                  title={language === "bn" ? v.title_bn : v.title_en}
                >
                  {language === "bn" ? v.title_bn : v.title_en}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-ghost">{t.youtube}</span>
                </div>
                <div className="card-actions justify-between items-center mt-3">
                  <a
                    className="btn btn-outline"
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.openYT}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Suspense>

      {/* Modal */}
      {activeVideo && (
        <dialog
          className="modal modal-open"
          onClose={() => setActiveVideo(null)}
        >
          <div className="modal-box max-w-4xl">
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold pr-6 line-clamp-2">
                {language === "bn"
                  ? activeVideo.title_bn
                  : activeVideo.title_en}
              </h4>
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost"
                  aria-label="Close"
                  onClick={() => setActiveVideo(null)}
                >
                  ✕
                </button>
              </form>
            </div>
            <div className="mt-4">
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <Suspense fallback={<div className="skeleton h-full w-full" />}>
                  <VideoPlayer
                    id={activeVideo.id}
                    title={
                      language === "bn"
                        ? activeVideo.title_bn
                        : activeVideo.title_en
                    }
                  />
                </Suspense>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={() => setActiveVideo(null)}>
                  Close
                </button>
              </form>
            </div>
          </div>
          <form
            method="dialog"
            className="modal-backdrop"
            onClick={() => setActiveVideo(null)}
          >
            <button>close</button>
          </form>
        </dialog>
      )}
    </section>
  );
}
