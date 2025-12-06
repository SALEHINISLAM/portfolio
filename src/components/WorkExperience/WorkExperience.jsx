"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

/**
 * WorkExperience — recruiter-friendly, storytelling timeline (JS version)
 */

export default function WorkExperience() {
  const translations = useMemo(
    () => ({
      en: {
        title: "🚀 Work Experience & Journey",
        subtitle:
          "A short, human story of how I learned to show up, take ownership, and teach with care.",
        items: [
          {
            date: "July 2022",
            org: "Aspect Publication",
            role: "Freelance Content Editor (Math)",
            imageSrc: "/assets/aspectLogo.png",
            story:
              "Waiting for BUET results, I stepped out alone to Farmgate to ask for work. I pitched myself at Aspect, got a small contract, and spent 7 focused days fixing errors, improving MCQs, and writing explanations. It became my first income (৳5,000) and—more importantly—my first proof that I can figure things out in the real world.",
            moments: [
              "Cold-approached a publisher and secured a paid contract",
              "Delivered within 7 days; editor was happy with the quality",
              "Wrote clear, student-friendly explanations for MCQs",
            ],
            skills: [
              "Math editing",
              "MCQ explanation",
              "Proofreading",
              "Self-management",
              "Communication",
            ],
            takeaway:
              "Confidence beats comfort. I learned to start conversations, own a deadline, and ship quality work.",
          },
          {
            date: "Aug 2022 — Nov 2025",
            org: "Udvash",
            role: "Math Teacher • Content Contributor • Script Evaluator",
            imageSrc: "/assets/udvashLogo.png",
            story:
              "With admission done, I and a friend knocked on big coaching centers across Farmgate. Udvash asked for a demo; I passed and started by checking scripts across Bangla, Math, Physics, and Chemistry—then moved into content. I contributed to the ‘Parallel Text’ series and later took orientations and regular Math classes across branches.",
            moments: [
              "Selected as Math Teacher after classroom demo",
              "Contributed chapters to the ‘Parallel Text’ series",
              "Ran orientations and regular classes at multiple branches",
            ],
            skills: [
              "Classroom teaching",
              "Curriculum support",
              "Script evaluation",
              "Content writing",
              "Teamwork",
            ],
            takeaway:
              "Teaching made me precise. I learned to simplify without losing rigor and to manage a live classroom.",
          },
          {
            date: "Mar 2023 — Present",
            org: "Utkorsho (A concern of Onnorokom Group)",
            role: "Research Associate & Instructor",
            imageSrc: "/assets/utkorshoLogo.svg",
            story:
              "I joined an early-stage edtech to help build from zero—exactly the space to experiment, and learn fast. I plan lessons, design slides, and use GeoGebra+animations to turn tough problems into visuals. I also create marketing content and contribute across product, teaching, and content.",
            moments: [
              "Lesson planning and slide design for math",
              "GeoGebra + custom animations for concept clarity",
              "Hands-on contributions across product, teaching, and marketing",
            ],
            skills: [
              "Lesson design",
              "Teaching",
              "GeoGebra & animation",
              "Content strategy",
            ],
            note: "🎯 I treat Utkorsho like my own dream, still ongoing.",
            takeaway:
              "Small teams let me wear many hats and ship practical, visual learning.",
          },
          {
            date: "Nov 2025 — Present",
            org: "The Royal Scientific Publications Ltd.",
            role: "Research Trainee (Math Department)",
            imageSrc: "/assets/trsp.png",
            story:
              "I left Udvash in November 2025 and joined The Royal Scientific Publications Ltd. as a Research Trainee. My work focuses on researching content, updating and modifying books to match curriculum changes and student demand. For the first time I felt a distinct office vibe—serious, professional people and structured processes. Since I love math, I work within the Math department, applying subject knowledge to improve textbooks and learning materials.",
            moments: [
              "Joined as Research Trainee in the Math department",
              "Researched and updated book content to align with curriculum",
              "Worked closely with editorial and production teams",
              "Experienced a professional office environment for the first time",
            ],
            skills: [
              "Content research",
              "Curriculum alignment",
              "Book editing & revision",
              "Cross-team collaboration",
              "Professional communication",
            ],
            takeaway:
              "Working in a formal office taught me professional standards and processes; I enjoyed using my math background to shape better textbooks.",
            note:
              "🧾 First real office-vibe experience—serious, structured, and energizing.",
          },
        ],
      },
      bn: {
        title: "🚀 কাজের অভিজ্ঞতা ও যাত্রা",
        subtitle:
          "আমি কীভাবে নিজে থেকে এগিয়ে গিয়ে, দায়িত্ব নিয়েছি—আর যত্ন নিয়ে শেখিয়েছি—তার ছোট্ট মানবিক গল্প।",
        items: [
          {
            date: "জুলাই ২০২২",
            org: "Aspect Publication",
            role: "ফ্রিল্যান্স কনটেন্ট এডিটর (গণিত)",
            imageSrc: "/assets/aspectLogo.png",
            story:
              "BUET রেজাল্টের অপেক্ষায় নিজের চেনা গণ্ডি ছেড়ে একাই ফার্মগেটে কাজ চাইতে যাই। Aspect-এ গিয়ে ছোট একটি কন্ট্র্যাক্ট পাই। ৭ দিনে ভুল সংশোধন, MCQ উন্নয়ন ও ব্যাখ্যা লিখে জমা দিই—এটাই আমার জীবনের প্রথম ইনকাম (৳৫,০০০) এবং প্রমাণ যে নিজে থেকে শুরু করলে পথ মিলে যায়।",
            moments: [
              "কোল্ড-অ্যাপ্রোচ করে পেইড কন্ট্র্যাক্ট পাওয়া",
              "৭ দিনের মধ্যে কাজ ডেলিভারি; এডিটর সন্তুষ্ট",
              "MCQ-এর জন্য সহজবোধ্য ব্যাখ্যা লেখা",
            ],
            skills: [
              "গণিত এডিটিং",
              "MCQ ব্যাখ্যা",
              "প্রুফরিডিং",
              "স্ব-ব্যবস্থাপনা",
              "যোগাযোগ",
            ],
            takeaway:
              "আত্মবিশ্বাস কমফোর্টকে হারায়—কথা বলা, ডেডলাইন রাখা আর মানসম্মত কাজ শিখেছি।",
          },
          {
            date: "আগস্ট ২০২২ — নভেম্বর ২০২৫",
            org: "উদ্ভাস",
            role: "ম্যাথ টিচার • কনটেন্ট কন্ট্রিবিউটর • স্ক্রিপ্ট ইভ্যালুয়েটর",
            imageSrc: "/assets/udvashLogo.png",
            story:
              "অ্যাডমিশনের পর ফার্মগেটের বড় কোচিংগুলোতে নক করি। উদ্ভাস ডেমো নেয়—পাস করি। প্রথমে বাংলা/গণিত/পদার্থ/রসায়নের খাতা দেখা, পরে কনটেন্টে কাজ; ‘Parallel Text’ সিরিজে অবদান রাখি এবং বিভিন্ন ব্রাঞ্চে অরিয়েন্টেশন ও রেগুলার ক্লাস নিই।",
            moments: [
              "ডেমো পাস করে ম্যাথ টিচার হিসেবে সিলেক্ট",
              "‘Parallel Text’-এ কিছু অধ্যায়ে অবদান",
              "বিভিন্ন ব্রাঞ্চে অরিয়েন্টেশন ও রেগুলার ক্লাস",
            ],
            skills: [
              "ক্লাসরুম টিচিং",
              "কারিকুলাম সাপোর্ট",
              "স্ক্রিপ্ট ইভ্যালুয়েশন",
              "কনটেন্ট রাইটিং",
              "টিমওয়ার্ক",
            ],
            takeaway:
              "শেখানো আমাকে নিখুঁত করেছে—সহজ করে বলা, লাইভ ক্লাস ম্যানেজ করা, সময়মতো ডেলিভারি।",
          },
          {
            date: "মার্চ ২০২৩ — বর্তমান",
            org: "উৎকর্ষ(A concirn of Onnorokom Group)",
            role: "রিসার্চ অ্যাসোসিয়েট ও ইনস্ট্রাক্টর",
            imageSrc: "/assets/utkorshoLogo.svg",
            story:
              "শুরু থেকে বানানোর সুযোগ—এটাই চাই। ছোট টিমে একসাথে প্রোডাক্ট, টিচিং, কনটেন্টে কাজ করি। লেসন প্ল্যান, স্লাইড ডিজাইন, GeoGebra ও অ্যানিমেশন দিয়ে জটিল অঙ্ককে ভিজুয়াল করি; মার্কেটিং কনটেন্টও তৈরি করি।",
            moments: [
              "ম্যাথের জন্য লেসন প্ল্যান ও স্লাইড ডিজাইন",
              "GeoGebra + অ্যানিমেশন দিয়ে কনসেপ্ট ভিজুয়ালাইজেশন",
              "প্রোডাক্ট-টিচিং-মার্কেটিং জুড়ে হাই ওনারশিপ",
            ],
            skills: [
              "লেসন ডিজাইন",
              "ডাটা-ড্রিভেন টিচিং",
              "GeoGebra ও অ্যানিমেশন",
              "কনটেন্ট স্ট্র্যাটেজি",
              "Ownership",
            ],
            note: "🎯 উৎকর্ষকে নিজের কাজের মতো দেখি—এখনও যুক্ত আছি।",
            takeaway: "ছোট টিমে অনেক কিছু ট্রাই করা যায়।",
          },
          {
            date: "নভেম্বর ২০২৫ — বর্তমান",
            org: "The Royal Scientific Publications Ltd.",
            role: "রিসার্চ ট্রেইনি (ম্যাথ বিভাগ)",
            imageSrc: "/assets/trsp.png",
            story:
              "আমি নভেম্বর ২০২৫-এ উদ্ভাস ছেড়ে The Royal Scientific Publications Ltd.-এ রিসার্চ ট্রেইনি হিসেবে যোগ দিয়েছি। এখানে আমার কাজ হলো কনটেন্ট রিসার্চ করা, পাঠ্যসূচি ও ছাত্রদের চাহিদা অনুযায়ী বই আপডেট ও সংশোধন করা। প্রথমবারের মতো অফিসের সুনির্দিষ্ট ভাইব টের পেয়েছি—গুরুতর ও পেশাদার মানুষ; স্ট্রাকচারড প্রসেস। যেহেতু গণিত আমার ভালো লাগে, আমি ম্যাথ ডিপার্টমেন্টে কাজ করছি এবং পাঠ্যপুস্তক উন্নয়নে আমার বিষয়জ্ঞান প্রয়োগ করছি।",
            moments: [
              "ম্যাথ ডিপার্টমেন্টে রিসার্চ ট্রেইনি হিসেবে যোগদান",
              "পাঠ্যসূচি অনুযায়ী বই-উন্নয়ন ও কনটেন্ট আপডেট",
              "এডিটোরিয়াল ও প্রোডাকশন টিমের সঙ্গে নিকট সমন্বয়",
              "প্রথমবার পেশাদার অফিস-ভাইব অনুভব করা",
            ],
            skills: [
              "কনটেন্ট রিসার্চ",
              "কারিকুলাম অ্যলাইনমেন্ট",
              "বই-এডিটিং ও রিভিশন",
              "ক্রস-টিম সহযোগিতা",
              "পেশাদার যোগাযোগ",
            ],
            takeaway:
              "অফিস-এ কাজ করে পেশাগত স্ট্যান্ডার্ড ও প্রসেসের প্রশিক্ষণ পেলাম; গণিত দক্ষতা ব্যবহার করে ভালো বই তৈরিতে আনন্দ পাই।",
            note:
              "🧾 প্রথম সত্যিকারের অফিস-ভাইব—গুরুতর, স্ট্রাকচারড এবং অনুপ্রেরণাদায়ক।",
          },
        ],
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

  return (
    <section id="work-experience" className="bg-base-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-10">
          {[
            "Teaching",
            "Content Writing",
            "GeoGebra",
            "PowerPoint",
            "Lesson Design",
          ].map((chip) => (
            <span
              key={chip}
              className="badge badge-outline w-full h-auto justify-center py-3 text-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {t.items.map((item, idx) => (
            <li key={idx}>
              {idx !== 0 && <hr />}
              <div className="timeline-middle">
                <div className="badge badge-primary whitespace-nowrap">
                  {idx+1}
                </div>
              </div>
              <div
                className={`${
                  idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
                } mb-10`}
              >
                <div className="timeline-middle">
                  <div className="badge badge-error whitespace-nowrap">
                    {item.date}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2">
                  <div className="text-lg font-bold">{item.org}</div>
                  <span className="text-sm opacity-70">• {item.role}</span>
                </div>

                <div className="card mt-3 bg-base-200/60 shadow-sm">
                  <div className="card-body p-5">
                    <p className="text-base-content/80 leading-relaxed">
                      {item.story}
                    </p>

                    {item.note && (
                      <div className="alert alert-info mt-3">
                        <span className="font-medium">{item.note}</span>
                      </div>
                    )}
                    <div className="items-center mt-4 flex justify-center">
                      <Image
                        src={item.imageSrc}
                        width={500}
                        height={500}
                        alt="company logo"
                        className="w-1/2"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="font-semibold mb-2">
                          {language === "bn" ? "যা যা করেছি" : "Key moments"}
                        </h4>
                        <ul className="list-disc ms-4 text-sm text-base-content/70 text-left">
                          {item.moments.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          {language === "bn" ? "স্কিলস" : "Skills used"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((s, i) => (
                            <span key={i} className="badge badge-outline">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <details className="mt-4">
                      <summary className="link link-primary cursor-pointer">
                        {language === "bn"
                          ? "আরও বিস্তারিত / Takeaway"
                          : "More details / Takeaway"}
                      </summary>
                      <p className="mt-2 text-base-content/70">
                        {item.takeaway}
                      </p>
                    </details>
                  </div>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
        <div className="text-center">
          <h2 className="text-xl font-bold">What next?</h2>
          <p className="text-sm">
            I don't know what the future holds, but I'm excited to keep learning
            and growing in my career.
          </p>
        </div>
      </div>
    </section>
  );
}
