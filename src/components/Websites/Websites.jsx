"use client";
import { useEffect, useMemo, useState } from "react";
import BriefOfThisSection from "./BriefOfThisSection";

/**
 * ProjectsSection — bilingual (BN/EN) portfolio grid built with Tailwind CSS + daisyUI
 * - Drop this component anywhere in your Next.js app
 * - It auto-detects <html lang> and switches copy accordingly
 * - Cards include: Project name, description, tech stack chips, GitHub + Live buttons
 * - Gracefully handles missing GitHub links (button disabled with tooltip)
 */

export default function Websites() {
  const translations = useMemo(
    () => ({
      en: {
        title: "As a Web Developer",
        subtitle:
          "A quick showcase of apps I've shipped. Clean UI, solid DX, and practical features.",
        github: "GitHub",
        website: "Website",
        stack: "Used technology",
        madeSectionTitle: "Some of the websites I've built",
        madeSectionNote:
          "These are live, production-ready links. Some repos are private; ask me for access if needed.",
        missingRepo: "Repo private / add link",
      },
      bn: {
        title: "Web Developer হিসেবে",
        subtitle:
          "আমি যে অ্যাপগুলো বানিয়েছি তার ঝটপট ঝলক—পরিষ্কার UI, ভালো ডেভ-এক্সপেরিয়েন্স, আর ব্যবহারযোগ্য ফিচার।",
        github: "গিটহাব",
        website: "ওয়েবসাইট",
        stack: "ব্যবহৃত প্রযুক্তি",
        madeSectionTitle: "আমি যে ওয়েবসাইটগুলো বানিয়েছি",
        madeSectionNote:
          "এসব লাইভ লিঙ্ক। কিছু রিপো প্রাইভেট—প্রয়োজনে এক্সেস চাইতে পারেন।",
        missingRepo: "প্রাইভেট / লিঙ্ক যোগ করুন",
      },
    }),
    []
  );

  const [language, setLanguage] = useState("en");
  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setLanguage(currentLang.startsWith("bn") ? "bn" : currentLang);
    const observer = new MutationObserver(() => {
      const l = document.documentElement.lang || "en";
      setLanguage(l.startsWith("bn") ? "bn" : l);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);

  const t = translations[language];

  const projects = [
    {
      id: "professional-update",
      name: "Professional Update — AI-Integrated Job Portal",
      nameBn: "প্রফেশনাল আপডেট — AI-সমৃদ্ধ জব পোর্টাল",
      description:
        "AI-assisted career tools with CV builder, job search, and employer/entrepreneur flows. This project is MVP of our startup Professional Update. With this we secure pre-seed funding from UIHP.",
      descriptionBn:
        "AI-সহায়ক ক্যারিয়ার টুলস: CV বানানো, জব সার্চ, নিয়োগকর্তা ও উদ্যোক্তাদের জন্য ড্যাশবোর্ড। এটি আমাদের স্টার্টআপ প্রফেশনাল আপডেটের MVP। এর মাধ্যমে আমরা UIHP থেকে প্রি-সিড ফান্ডিং পেয়েছি।",
      website: "https://professional-update.vercel.app/",
      github: "https://github.com/SALEHINISLAM/ProfessionalUpdate.git",
      tech: ["Next.js", "React", "Tailwind CSS", "daisyUI","MongoDB","Gemini AI" ],
    },
    {
      id: "college-admission-viva",
      name: "College Admission Viva — Experience Sharing",
      nameBn: "কলেজ অ্যাডমিশন ভাইভা — অভিজ্ঞতা শেয়ারিং",
      description:
        "Community-driven platform to read and share viva experiences for top colleges in Dhaka.",
      descriptionBn:
        "ঢাকার শীর্ষ কলেজগুলোর ভাইভা অভিজ্ঞতা পড়া ও শেয়ার করার প্ল্যাটফর্ম।",
      website: "https://college-admission-viva.vercel.app/",
      github: "https://github.com/SALEHINISLAM/college_admission_viva.git",
      tech: ["HTML", "Bootstrap CSS", "javascript"],
    },
    {
      id: "events4students",
      name: "Events4Students — Discover & Host Competitions",
      nameBn: "ইভেন্টস ফর স্টুডেন্টস — প্রতিযোগিতা খুঁজুন ও হোস্ট করুন",
      description:
        "Find hackathons, poster presentations, and case comps; organizers can publish events.",
      descriptionBn:
        "হ্যাকাথন, পোস্টার প্রেজেন্টেশন, কেস কম্পিটিশন খুঁজুন; আয়োজকরা ইভেন্ট প্রকাশ করতে পারেন।",
      website: "https://events4students.vercel.app/",
      github: "https://github.com/SALEHINISLAM/events4students.git",
      tech: ["Next.js", "React", "Tailwind CSS", "daisyUI","MongoDB" ],
    },
    {
      id: "daily-task-manager",
      name: "Daily Task Manager — Minimal To‑Do",
      nameBn: "ডেইলি টাস্ক ম্যানেজার — মিনিমাল টু‑ডু",
      description:
        "A straightforward task list with quick add and a clean interface for daily focus.",
      descriptionBn:
        "সহজ তালিকা, দ্রুত অ্যাড—ডেইলি ফোকাসের জন্য পরিচ্ছন্ন ইন্টারফেস।",
      website: "https://to-do-list-three-blond-17.vercel.app/",
      github: "https://github.com/SALEHINISLAM/to-do-list.git",
      tech: ["HTML", "CSS", "Javascript"],
    },
    {
      id: "ludo",
      name: "Ludo — Browser Game Prototype",
      nameBn: "লুডু — ব্রাউজার গেম প্রোটোটাইপ",
      description:
        "Interactive ludo game that can be played in the browser—full rules not yet implemented.",
      descriptionBn:
        "ইন্টারেক্টিভ লুডু গেম যা ব্রাউজারে খেলা যায়—সম্পূর্ণ নিয়ম এখনও প্রয়োগ করা হয়নি।",
      website: "https://ludo-eight.vercel.app/",
      github: "https://github.com/SALEHINISLAM/ludo.git",
      tech: ["HTML", "CSS", "Javascript"],
    },
    {
      id: "tour-travel",
      name: "Tour & Travel ",
      nameBn: "ট্যুর & ট্রাভেল — সার্ভিস বুকিং ডেমো",
      description:
        "In this website user can get a tour plan of there destination from AI. Then he can book the tour. In tour time they can upload picture, with the picture AI will give description and also AI will produce video and write blog of tour from the uploaded picture. Authentication and routing included. This was a hackathon project that won in Best documentation category.",
      descriptionBn:
        "এই ওয়েবসাইটে ইউজার তার গন্তব্যের একটি ট্যুর প্ল্যান পেতে পারে AI থেকে। তারপর সে ট্যুর বুক করতে পারে। ট্যুরের সময় তারা ছবি আপলোড করতে পারে, ছবির সাথে AI বর্ণনা দেবে এবং আপলোড করা ছবির মাধ্যমে ট্যুরের ভিডিও তৈরি করবে এবং ব্লগ লিখবে। অথেনটিকেশন এবং রাউটিং implement করা হয়েছে। এটি একটি হ্যাকাথন প্রজেক্ট যা বেস্ট ডকুমেন্টেশন ক্যাটাগরিতে পুরস্কৃত হয়েছে।",
      website: "https://tourtravel-f20c4.web.app/",
      github: "https://github.com/SALEHINISLAM/tour-travel.git",
      tech: ["React", "Firebase Auth", "React Router", "Tailwind CSS", "daisyUI","MongoDB","Gemini API","Vite","Express" ],
    },
  ];

  return (
    <section id="projects" className="bg-base-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
        </header>

<BriefOfThisSection/>
<div className="flex items-start flex-col gap-2 my-6">
    <h3 className="text-base-content text-3xl font-semibold">
        {t.madeSectionTitle}
    </h3>
    <p className="text-lg text-base-content/70">{t.subtitle}</p>
</div>
        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="card bg-base-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="card-title leading-tight">
                    <span className="block">{language === "bn" ? p.nameBn : p.name}</span>
                  </h3>
                </div>

                <p className="text-base-content/80 mt-1">
                  {language === "bn" ? p.descriptionBn : p.description}
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">{t.stack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <span key={tech} className="badge badge-outline">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-actions mt-5 justify-between">
                  <div className="join">
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary join-item"
                    >
                      {t.website}
                    </a>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline join-item"
                      >
                        {t.github}
                      </a>
                    ) : (
                      <button
                        className="btn btn-outline join-item tooltip"
                        data-tip={t.missingRepo}
                        disabled
                      >
                        {t.github}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
