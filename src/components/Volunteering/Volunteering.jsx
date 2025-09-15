"use client";

import { useEffect, useState } from "react";

/**
 * VolunteerSection.jsx
 * - React + TailwindCSS + daisyUI
 * - Uses text language detection from document.documentElement.lang
 * - Shows volunteering and community entries from your CV with positive, impact-focused copy
 *
 * Usage: import and place <VolunteerSection /> anywhere in your app.
 */

const VolunteerSection = () => {
  const translations = {
    en: {
      sectionTitle: "Volunteering & Community",
      subtitle:
        "I believe learning grows when it's shared. Here are a few community initiatives I've built or supported.",
      ctaAll: "See all projects",
      entries: [
        {
          role: "Creator — College Admission Viva Website",
          org: "Personal project",
          date: "2023",
          description:
            "This small initiative is for SSC students who aim to get admitted to good colleges. For most of them, this is their first viva. They often lack knowledge about what questions are asked or how to answer them. Moreover, there is no syllabus or specific suggestions for the viva. So, I have created this website based on the viva experiences of some of my friends, seniors, and juniors.",
          highlights: [
            "Peer-sourced exam tips & sample questions",
            "Reduced student anxiety through shared experiences",
            "Simple, accessible web UI for quick browsing",
          ],
          link: "https://salehinislam.github.io/college_admission_viva/",
        },
      ],
    },
    bn: {
      sectionTitle: "স্বেচ্ছাসেবী ও কমিউনিটি",
      subtitle:
        "আমাদের জীবনের একটা বড় উদ্দেশ্য হলো অন্যদের সাহায্য করা। এখানে আমি কিছু কমিউনিটি প্রজেক্টের কথা শেয়ার করছি যেগুলো আমি তৈরি বা সাপোর্ট করেছি।",
      ctaAll: "সব প্রজেক্ট দেখুন",
      entries: [
        {
          role: "Creator — কলেজ ভর্তি ভিভা ওয়েবসাইট",
          org: "ব্যক্তিগত প্রজেক্ট",
          date: "2023",
          description:
            "SSC শিক্ষার্থী যারা ভাল কলেজে ভর্তি হতে চায় তাদের জন্য এই ক্ষুদ্র উদ্যোগ। তাদের বেসিরভাগের জীবনে এটা প্রথম ভাইভা। এখানে কি জিজ্ঞেস করা হয় কিভাবে উত্তর দিতে হয় এসব সম্পর্কে তাদের তেমন কোন ধারনা থাকে না। আবার ভাইভার জন্য কোন সিলেবাস বা সাজেশন থাকে না। তাই আমি এখানে আমার কিছু বন্ধু, সিনিয়র, জুনিয়রদের ভাইভার অভিজ্ঞতা নিয়ে website টা তৈরি করেছি।",
          highlights: [
            "সিনিয়রদের অভিজ্ঞতা ও নমুনা প্রশ্ন শেয়ারিং",
            "ভর্তি প্রস্তুতির উদ্বেগ কমানো",
            "সহজ ও দ্রুত ব্রাউজিংয়ের UI",
          ],
          link: "https://salehinislam.github.io/college_admission_viva/",
        },
      ],
    },
  };

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setLanguage(currentLang.startsWith("bn") ? "bn" : "en");

    const observer = new MutationObserver(() => {
      const updated = document.documentElement.lang || "en";
      setLanguage(updated.startsWith("bn") ? "bn" : "en");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);

  const t = translations[language];

  return (
    <section className="py-12 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold">{t.sectionTitle}</h2>
          <p className="text-lg text-base-content/70 mt-2 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.entries.map((entry, idx) => (
            <article
              key={idx}
              className="card bg-base-100 border shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="card-body">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{entry.role}</h3>
                    <p className="text-sm text-base-content/60">
                      {entry.org} · {entry.date}
                    </p>
                  </div>

                  <div className="badge badge-primary badge-outline">Volunteer</div>
                </div>

                <p className="mt-3 text-base text-base-content/80">
                  {entry.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {entry.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-base-content/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="card-actions justify-between items-center mt-6">

                  <div className="flex items-center gap-2 btn">
                    {entry.link ? (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-ghost"
                        aria-label={`${entry.role} link`}
                      >
                        View
                      </a>
                    ) : (
                      <button className="btn btn-sm btn-outline" disabled>
                        No Link
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-base-content/70 mb-4">
            {language === "en"
              ? "Volunteering is how I translate learning into impact — small acts, big stories."
              : "স্বেচ্ছাসেবা আমার শেখাকে বাস্তবে বদলে দেয় — ছোট কাজ, বড় গল্প।"}
          </p>
          {/* <a
            href={t.entries[0].link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-wide"
          >
            {t.ctaAll}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
