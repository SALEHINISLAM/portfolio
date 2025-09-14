"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function EntrepreneurialExperience() {
  const translations = useMemo(
    () => ({
      en: {
        title: "🧩 Entrepreneurial Experiments & Lessons",
        subtitle:
          "Small, scrappy attempts that taught me market sensing, customer discovery, and shipping what matters.",
        chips: [
          "Entrepreneurship",
          "Customer Discovery",
          "Pricing",
          "Go-to-Market",
          "Product Thinking",
          "Team Building",
          "Fundraising",
        ],
        items: [
          {
            date: "2022 (Pre-uni)",
            project: "Productive Planner",
            role: "Solo maker • D2C stationery",
            imageSrc: "/assets/productivePlanner.jpg",
            story:
              "I designed a fully customized productivity diary: layout, cover, print specs — even negotiated with a press and set up a Facebook page. I ran one ad, got interest DMs, but no paid orders. I paused instead of over-printing.",
            moments: [
              "End-to-end product design (templates, cover, paper spec)",
              "Supplier outreach & per-unit cost breakdown with a local press",
              "Launched FB page, ran test ad, handled messages",
            ],
            skills: [
              "Scrappy MVP",
              "Unit economics",
              "Basic ads",
              "Supplier negotiation",
              "Customer support",
            ],
            learnings: [
              "Awareness first: warm up audience before asking for purchase.",
              "Price matters for category: typical diary ceiling ≈ ৳150–৳250; my initial price was above willingness to pay.",
            ],
            takeaway:
              "I can ship a physical MVP, but success depends on demand generation and price–value fit.",
            status: "Paused",
          },
          {
            date: "2022 (Year-1)",
            project: "Alternate Connection",
            role: "Solo maker • Networking platform",
            imageSrc: "/assets/alternateConnection.svg",
            story:
              "I built a web platform for entrepreneurs to find co-founders/partners — like a ‘job portal’, but for founders. I assumed people would just come. They didn’t. With LinkedIn & groups already solving discovery, there was no wedge.",
            moments: [
              "Landing + matching flow shipped",
              "Positioning as ‘founder-to-founder’ connector",
              "No organic traffic despite functioning product",
            ],
            skills: [
              "Rapid prototyping",
              "Positioning",
              "Competitive landscape",
              "UX for matching",
            ],
            learnings: [
              "Distribution > product: without a channel, discovery doesn’t happen.",
              "Pick a wedge: why switch from LinkedIn/groups? Need a 10x angle.",
            ],
            takeaway:
              "Great idea isn’t enough — you need a clear distribution plan and a differentiated wedge.",
            status: "Sunset",
          },
          {
            date: "2023 — 2024",
            project: "Professional Update",
            role: "Team of 3 • Founder-PM",
            imageSrc: "/assets/professionalUpdate.jpg",
            story:
              "Team project to integrate AI into existing job-search workflows — summarization, skill matching, and tailored alerts on top of a job portal. I led product, website, business model, pitch deck, and fundraising.",
            moments: [
              "Selected into BUET × UIHP ideation cohort; weekly sessions",
              "Built product narrative, deck, GTM, and a working demo",
              "Secured pre-seed grant (৳35,000)",
            ],
            skills: [
              "Team leadership",
              "AI product thinking",
              "Pitching & grants",
              "GTM planning",
              "Stakeholder comms",
            ],
            learnings: [
              "Capital & cadence: small grants help, but team alignment and runway matter more.",
              "Fundraising is doable; traction and team focus decide the pace.",
              "Know when to pause respectfully if team goals diverge.",
            ],
            note:
              "Paused due to team goal divergence and limited runway during a heavy academic period; kept all docs/processes for future.",
            takeaway:
              "I can lead a team from 0→1: story, product, GTM, and fundraising — and make the hard call to pause when fundamentals aren’t ready.",
            status: "Paused (team realignment)",
          },
        ],
        cta: {
          primary: "See decks & artifacts",
          secondary: "Contact me",
        },
        labels: {
          keyMoments: "Key moments",
          skills: "Skills used",
          learnings: "What I learned",
          status: "Status",
          note: "Note",
          more: "More details",
          whatNextTitle: "What next?",
          whatNextBody:
            "I’m exploring lean, insight-driven products where distribution is clear and the price–value story is obvious.",
        },
      },
      bn: {
        title: "🧩 উদ্যোক্তা হিসেবে আমার ছোট ছোট চেষ্টা ও শেখা",
        subtitle:
          "ছোট স্কেলের এক্সপেরিমেন্ট—যেখানে মার্কেট সেন্স, কাস্টমার ডিসকভারি, আর ‘কীভাবে শিপ করলে কাজ হয়’—এসব শিখেছি।",
        chips: [
          "উদ্যোক্তা মানসিকতা",
          "Customer Discovery",
          "প্রাইসিং",
          "Go-to-Market",
          "প্রোডাক্ট থিংকিং",
          "টিম বিল্ডিং",
          "Fundraising",
        ],
        items: [
          {
            date: "২০২২ (বিশ্ববিদ্যালয়ের আগে)",
            project: "Productive Planner",
            role: "সোলো মেকার • D2C স্টেশনারি",
            imageSrc: "/assets/productivePlanner.jpg",
            story:
              "পুরো কাস্টম ডায়েরি—লেআউট, কভার, প্রিন্ট স্পেক—নিজে ডিজাইন করি। ছাপাখানার সাথে দরদাম, ফেসবুক পেজ, একটা টেস্ট অ্যাড—ইন্টারেস্ট মেসেজ পাই, কিন্তু অর্ডার না। ওভার-প্রিন্ট না করে থেমে যাই।",
            moments: [
              "এন্ড-টু-এন্ড ডিজাইন (টেমপ্লেট, কভার, পেপার স্পেক)",
              "লোকাল প্রেসের সাথে ইউনিট ইকোনমিক্স ও দরদাম",
              "FB পেজ, টেস্ট অ্যাড, ইনবক্স হ্যান্ডলিং",
            ],
            skills: [
              "Scrappy MVP",
              "Unit economics",
              "বেসিক অ্যাডস",
              "সাপ্লায়ার নেগোশিয়েশন",
              "কাস্টমার সাপোর্ট",
            ],
            learnings: [
              "Awareness আগে: কেন কিনবে—তা বোঝানো দরকার।",
              "ক্যাটাগরি-ভিত্তিক প্রাইসিং: ডায়েরি সাধারণত ৳১৫০–৳২৫০—আমার প্রাইস তার ওপরে ছিল।",
            ],
            takeaway:
              "ফিজিক্যাল MVP শিপ করতে পারি; সাফল্য আসে ডিমান্ড জেনারেশন ও প্রাইস–ভ্যালু ফিটে।",
            status: "Paused",
          },
          {
            date: "২০২২ (প্রথম বর্ষ)",
            project: "Alternate Connection",
            role: "সোলো মেকার • নেটওয়ার্কিং প্ল্যাটফর্ম",
            imageSrc: "/assets/alternateConnection.svg",
            story:
              "উদ্যোক্তাদের কানেক্ট করানোর জন্য আলাদা প্ল্যাটফর্ম বানাই। ভাবছিলাম—মানুষ নিজে থেকেই আসবে। আসেনি। LinkedIn/গ্রুপে যখন সমাধান আছে, আমার ‘ওয়েজ’ পরিষ্কার ছিল না।",
            moments: [
              "ল্যান্ডিং + ম্যাচিং ফ্লো রেডি",
              "‘Founder-to-founder’ পজিশনিং",
              "প্রোডাক্ট কাজ করলেও অরগানিক ট্র্যাফিক শূন্য",
            ],
            skills: [
              "র‍্যাপিড প্রোটোটাইপিং",
              "পজিশনিং",
              "কম্পিটিটিভ অ্যানালাইসিস",
              "ম্যাচিং UX",
            ],
            learnings: [
              "ডিস্ট্রিবিউশন > প্রোডাক্ট: চ্যানেল ছাড়া ডিসকভারি হয় না।",
              "ওয়েজ দরকার: LinkedIn থেকে কেন সুইচ করবে—১০× কারণ চাই।",
            ],
            takeaway:
              "আইডিয়া যথেষ্ট না—ক্লিয়ার ডিস্ট্রিবিউশন প্ল্যান আর ডিফারেনশিয়েশন লাগে।",
            status: "Sunset",
          },
          {
            date: "২০২৩ — ২০২৪",
            project: "Professional Update",
            role: "টিম অফ ৩ • ফাউন্ডার-PM",
            imageSrc: "/assets/professionalUpdate.jpg",
            story:
              "AI-ইন্টিগ্রেটেড জব সার্চ ও ম্যাচিং—একটি টিম প্রজেক্ট। আমি প্রোডাক্ট, ওয়েবসাইট, বিজনেস মডেল, ডেক, ফান্ডরেইজিং—সব লিড করি। BUET × UIHP আইডিয়েশন কহর্টে থাকি এবং প্রি-সিড গ্রান্ট পাই (৳৩৫,০০০)।",
            moments: [
              "BUET × UIHP আইডিয়েশন কহর্টে সিলেক্ট",
              "প্রোডাক্ট ন্যারেটিভ, ডেক, GTM, ওয়ার্কিং ডেমো",
              "প্রি-সিড গ্রান্ট সিকিউর (৳৩৫,০০০)",
            ],
            skills: [
              "টিম লিডারশিপ",
              "AI প্রোডাক্ট থিংকিং",
              "পিচিং ও গ্রান্ট",
              "GTM প্ল্যানিং",
              "স্টেকহোল্ডার কমিউনিকেশন",
            ],
            learnings: [
              "ক্যাপিটাল ও ক্যাডেন্স: ছোট গ্রান্ট কাজে দেয়, কিন্তু টিম অ্যালাইনমেন্ট/রানওয়ে বেশি জরুরি।",
              "ফান্ডরেইজিং শেখা গেছে; ট্র্যাকশন ও টিম ফোকাস গতি ঠিক করে।",
              "টিম লক্ষ্য আলাদা হলে সম্মানের সাথে pause করা শিখেছি।",
            ],
            note:
              "একাডেমিক চাপ, সীমিত রানওয়ে ও টিম ডাইভার্জেন্স—এই তিনের কারণে সচেতনভাবে pause।",
            takeaway:
              "০→১ পর্যন্ত টিম লিড, স্টোরি, প্রোডাক্ট, GTM ও ফান্ডরেইজিং—সব করতে পারি; প্রয়োজন হলে কঠিন সিদ্ধান্তও নেই।",
            status: "Paused (team realignment)",
          },
        ],
        cta: {
          primary: "ডেক/ডকুমেন্টস দেখুন",
          secondary: "যোগাযোগ করুন",
        },
        labels: {
          keyMoments: "যা করেছি",
          skills: "যে স্কিলগুলো ব্যবহার করেছি",
          learnings: "যা শিখেছি",
          status: "স্ট্যাটাস",
          note: "নোট",
          more: "আরও বিস্তারিত",
          whatNextTitle: "এখন কী?",
          whatNextBody:
            "ক্লিয়ার ডিস্ট্রিবিউশন ও স্পষ্ট প্রাইস–ভ্যালু স্টোরি আছে—এমন লিন, ইনসাইট-ড্রিভেন প্রোডাক্ট এক্সপ্লোর করছি।",
        },
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
    <section id="entrepreneurial-experience" className="bg-base-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 mb-10">
          {t.chips.map((chip) => (
            <span
              key={chip}
              className="badge badge-outline w-full h-auto justify-center py-3 text-sm "
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
                <div className="badge badge-secondary whitespace-nowrap">
                  {idx+1}
                </div>
              </div>

              <div
                className={`${
                  idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
                } mb-10`}
              >
                <div className="inline-flex items-center gap-2">
                  <div className="text-lg font-bold">{item.project}</div>
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
                        width={600}
                        height={600}
                        alt="project logo"
                        className="w-1/2"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="font-semibold mb-2">
                          {t.labels.keyMoments}
                        </h4>
                        <ul className="list-disc ms-4 text-sm text-base-content/70">
                          {item.moments.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">{t.labels.skills}</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((s, i) => (
                            <span key={i} className="badge badge-outline">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {item.learnings && (
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">
                          {t.labels.learnings}
                        </h4>
                        <ul className="list-disc ms-4 text-sm text-base-content/70">
                          {item.learnings.map((l, i) => (
                            <li key={i}>{l}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="badge badge-primary">
                        {t.labels.status}: {item.status}
                      </span>
                      <details className="mt-1">
                        <summary className="link link-primary cursor-pointer">
                          {t.labels.more}
                        </summary>
                        <p className="mt-2 text-base-content/70">
                          {item.takeaway}
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <h3 className="text-xl font-bold">{t.labels.whatNextTitle}</h3>
          <p className="text-sm">{t.labels.whatNextBody}</p>
        </div>
      </div>
    </section>
  );
}
