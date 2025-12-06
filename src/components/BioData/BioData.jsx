"use client";

import { useEffect, useState } from "react";

export const metadata={
  title: "Bio Data | Md Salehin Islam",
  description:
    "This is the professional biodata section of Md Salehin Islam, focused entirely on employers and job opportunities.",
}

const BioData = () => {
  const translations = {
     en: {
      heading: "📜 Biodata (Professional)",
      intro:
        "Below is a short and clear professional biodata — focused only on employers looking to understand my skills, background, and experience.",
      employerTitle: "💼 For Employers",
      employerDesc:
        "Curious, eager to learn, and practical — I solve real problems and build things that work. My professional resume is available below; the website includes more details.",
      employerBtn: "Open Resume (PDF)",
      employerQuickTitle: "Quick resume highlights",
      empPoints: [
        "Civil Engineering student at BUET — strong fundamentals & project experience",
        "Experience with web development, UI design, and small-scale startup experiments",
        "Team player, quick learner, and comfortable with research & technical writing",
      ],
      quickView: "Quick view",
    },
    bn: {
      heading: "📜 বায়োডাটা (প্রফেশনাল)",
      intro:
        "নিচে শুধুমাত্র চাকরিদাতাদের জন্য প্রফেশনাল বায়োডাটা দেওয়া হলো — স্কিল, একাডেমিক ব্যাকগ্রাউন্ড ও অভিজ্ঞতার সংক্ষিপ্ত পরিচয়।",
      employerTitle: "💼 চাকরিদাতাদের জন্য",
      employerDesc:
        "আমি আগ্রাহী, দ্রুত শিখি এবং বাস্তবসম্মত কাজ করতে পছন্দ করি — সমস্যা সমাধান ও কার্যকর কিছু তৈরি করতে স্বাচ্ছন্দ্যবোধ করি। আমার রেজুমে নিচে দেওয়া হলো; আরও তথ্য ওয়েবসাইটে রয়েছে।",
      employerBtn: "রেজুমে দেখুন (PDF)",
      employerQuickTitle: "এক নজরে রিজুমি",
      empPoints: [
        "BUET-এ সিভিল ইঞ্জিনিয়ারিং ছাত্র — শক্ত ধারণা ও প্রজেক্ট অভিজ্ঞতা",
        "ওয়েব ডেভেলপমেন্ট, UI ডিজাইন ও স্টার্টআপ পরীক্ষার অভিজ্ঞতা",
        "দলভিত্তিক কাজ, দ্রুত শেখা ও গবেষণামূলক কাজে স্বাচ্ছন্দ্য",
      ],
      quickView: "দ্রুত দেখুন",
    },
  };

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setLanguage(currentLang);

    const observer = new MutationObserver(() => {
      setLanguage(document.documentElement.lang || "en");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);

  const t = translations[language] || translations.en;

  return (
    <section id="biodata" className="bg-base-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">{t.heading}</h2>
          <p className="text-lg text-base-content/80 mt-3">{t.intro}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          {/* Employer Card */}
          <article className="card card-compact bg-base-200 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title">{t.employerTitle}</h3>
              <p className="text-base-content/80">{t.employerDesc}</p>

              <div className="card-actions justify-end mt-4">
                <a
                  href="/assets/resume/SalehinCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={t.employerBtn}
                >
                  {t.employerBtn}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BioData;