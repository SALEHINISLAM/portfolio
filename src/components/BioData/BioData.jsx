"use client";

import { useEffect, useState } from "react";

export const metadata={
  title: "Bio Data | Md Salehin Islam",
  description:
    "This is biodata section of the famous person Md Salehi Islam. You can recruit him for growing your business or collaborate with him for your personal interest.",
}

const BioData = () => {
  const translations = {
    en: {
      heading: "📜 Biodata",
      intro:
        "Different people look for different things. Below you’ll find a short snapshot — whether you’re an employer interested in my skills, or someone curious about me as a life partner.",
      employerTitle: "💼 For Employers",
      employerDesc:
        "Curious, eager to learn, and practical — I solve real problems and build things that work. My professional resume is available below; the website holds the fuller story.",
      employerBtn: "Open Resume (PDF)",
      employerQuickTitle: "Quick resume highlights",
      empPoints: [
        "Civil Engineering student at BUET — strong fundamentals & project experience",
        "Experience with web projects, UI design, and small-scale startup experiments",
        "Team player, quick learner, and comfortable with research & technical writing",
      ],

      partnerTitle: "💖 For Life Partner",
      partnerDesc:
        "Life is more than CVs — it’s trust, shared values, and small everyday joys. If you’re looking from that perspective, here’s a respectful, honest snapshot.",
      partnerBtn: "Open Personal Biodata",
      partnerQuickTitle: "Quick personal snapshot",
      partnerPoints: [
        "Family-oriented, respectful, and honest by nature",
        "Enjoys learning, teaching, coding, and occasional creative projects",
        "Values long-term stability, kindness, and open communication",
      ],

      quickView: "Quick view",
    },
    bn: {
      heading: "📜 বায়োডাটা",
      intro:
        "ভিন্ন মানুষ ভিন্ন কিছুর খোঁজে। নিচে দুটি দিক থেকে সংক্ষিপ্ত পরিচয় দেওয়া হলো — কেউ যদি চাকরিদাতা হন, আর কেউ যদি জীবনসঙ্গী হিসেবে জানতে চান।",
      employerTitle: "💼 চাকরিদাতাদের জন্য",
      employerDesc:
        "আমি আগ্রাহী, শিখতে দ্রুত ও বাস্তবসম্মত — সমস্যা সল্ভ করতে ও কাজ তৈরি করতে পছন্দ করি। পেশাগত রেজুমে নিচে পাওয়া যাবে; পুরো গল্প ওয়েবসাইটে আছে।",
      employerBtn: "রেজুমে দেখুন (PDF)",
      employerQuickTitle: "এক নজরে রিজুমি",
      empPoints: [
        "BUET-এ সিভিল ইঞ্জিনিয়ারিং ছাত্র — শক্ত ধারণা ও প্রজেক্ট অভিজ্ঞতা",
        "ওয়েব প্রজেক্ট, UI ডিজাইন ও স্টার্টআপ পরীক্ষার অভিজ্ঞতা",
        "দলভিত্তিক কাজের মানুষ, দ্রুত শিখি, এবং গবেষণায় আগ্রহী",
      ],

      partnerTitle: "💖 জীবনসঙ্গীর জন্য",
      partnerDesc:
        "জীবন শুধু সিভি-ই নয় — এটা আস্থা, যৌথ মূল্যবোধ আর ছোট ছোট সুখের সমন্বয়। যদি এই দিক থেকে জানতে চান, নিচে আন্তরিকভাবে লেখা সংক্ষিপ্ত পরিচয় আছে।",
      partnerBtn: "ব্যক্তিগত বায়োডাটা দেখুন",
      partnerQuickTitle: "ব্যক্তিগত - দ্রুত পরিচিতি",
      partnerPoints: [
        "পরিবারভিত্তিক, শ্রদ্ধাশীল ও আন্তরিক স্বভাব",
        "শেখা, শেখানো, কোড লেখা ও সৃজনশীল কাজ পছন্দ",
        "দীর্ঘমেয়াদি নিরাপত্তা, সদ্ভাব ও খোলামেলা যোগাযোগকে গুরুত্ব দিই",
      ],

      quickView: "দেখুন (Quick view)",
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

        <div className="grid gap-8 md:grid-cols-2">
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

          {/* Life Partner Card */}
          <article className="card card-compact bg-base-200 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title">{t.partnerTitle}</h3>
              <p className="text-base-content/80">{t.partnerDesc}</p>

              <div className="card-actions justify-end mt-4">
                <a
                  href="https://docs.google.com/presentation/d/e/2PACX-1vTokNk_ourr74UmicJxKoou_4nesg-A-ng5EJPnNnEyA0F_qeJD3rcUvY_EQTbRyzMG3nlYiW147fsc/pub?start=false&loop=false&delayms=10000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label={t.partnerBtn}
                >
                  {t.partnerBtn}
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