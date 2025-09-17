"use client";
import React, { useState, useEffect, useMemo, Suspense } from "react";

const AcademicPoster = () => {
  const translations = useMemo(() => ({
    en: {
      heading: "My Academic Posters",
      description: "Explore the academic posters I've created. Click on the images to view them directly.",
      posterList: [
        {
          title: "Engineering Crisis in New York Citicorp Center",
          description: "A detailed poster on the engineering crisis faced by the Citicorp Center in New York. I made this poster solely.",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQQen5vvPUj2SLlhyRZB_bFFAd1EGxGpgSU5b7yJ3eYBO34",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQTOgmYoGRYQQIkZoccwvpfqAd1vJdp_GFeTlJqaLEcZeoo?width=10800&height=7200",
        },
        {
          title: "Trans-boundary River Management and Its Impact on Bangladesh",
          description: "A comprehensive poster discussing the challenges and strategies of trans-boundary river management in Bangladesh.This poster was created by me, Hamim and Ira.",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQQJl03fYVeOQp_5gHwOdQZWAa5SVwheOPdGyo8mJT2Rk04?width=2304&height=1728",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQQJl03fYVeOQp_5gHwOdQZWAa5SVwheOPdGyo8mJT2Rk04?width=2304&height=1728",
        },
        {
          title: "The Importance of Plastic Roads",
          description: "An informative poster highlighting the benefits and implementation of plastic roads. Here my input was minimal. Adnan did most of the work. But initially the idea was mine. And I helped him find out information regarding plastic roads. Whatever, this poster secured 2nd Runner Up in MIST Environment Fest-2025.",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQSvWUUm2aVETaPyIIfOekoiAdrl9THFTg3PYxn0qFlEs_k?height=256",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQTcflsQeesfTJKe9xUwRql0ASXfbeDN84h2qNoxq0I1wmc",
        },
        {
          title: "SC Maglev Train",
          description: "A detailed poster on the SC Maglev Train, showcasing its design, technology, and potential impact on transportation. This poster was made by me and Nusrat.",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQS3QNZJzbYITb8p_toYGmGdASJ6vleaKi2KKOjI1L84O_4",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQR_H2wsS4vXTIOU1zaJcsP3ASXOfPDMbqkJCJPFYIkOpcU?width=10800&height=7200",
        },
      ],
    },
    bn: {
      heading: "আমার একাডেমিক পোস্টারসমূহ",
      description: "এখানে আমার তৈরি কিছু পোস্টার রয়েছে। চিত্রগুলো দেখতে ক্লিক করুন।",
      posterList: [
        {
          title: "নিউ ইয়র্ক সিটিকর্প সেন্টারে ইঞ্জিনিয়ারিং সংকট",
          description: "নিউ ইয়র্কের সিটিকর্প সেন্টারে ইঞ্জিনিয়ারিং সংকট নিয়ে একটি বিস্তারিত পোস্টার। আমি এই পোস্টারটি একাই তৈরি করেছি।",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQQen5vvPUj2SLlhyRZB_bFFAd1EGxGpgSU5b7yJ3eYBO34",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQTOgmYoGRYQQIkZoccwvpfqAd1vJdp_GFeTlJqaLEcZeoo?width=10800&height=7200",
        },
        {
          title: "সীমান্তবর্তী নদী ব্যবস্থাপনা এবং বাংলাদেশের উপর এর প্রভাব",
          description: "বাংলাদেশে সীমান্তবর্তী নদী ব্যবস্থাপনা এবং এর প্রভাব নিয়ে একটি বিস্তৃত পোস্টার। এই পোস্টারটি আমি, হামিম এবং ইরা তৈরি করেছি।",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQQJl03fYVeOQp_5gHwOdQZWAa5SVwheOPdGyo8mJT2Rk04?width=2304&height=1728",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQQJl03fYVeOQp_5gHwOdQZWAa5SVwheOPdGyo8mJT2Rk04?width=2304&height=1728",
        },
        {
          title: "প্লাস্টিকের রাস্তার গুরুত্ব",
          description: "প্লাস্টিকের রাস্তার সুবিধা এবং বাস্তবায়ন নিয়ে একটি তথ্যবহুল পোস্টার। এখানে আমার ইনপুট খুবই কম। আদনান বেশিরভাগ কাজ করেছে। কিন্তু শুরুতে আইডিয়াটা আমারই ছিল এবং প্লাস্টিকের রাস্তা সম্পর্কে তথ্য খুঁজে পেতে আমি তাকে সাহায্য করেছি। যায়হোক এই পোস্টার টি MIST এর Environment Fest এ 2nd Runner Up স্থান অধিকার করে।",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQSvWUUm2aVETaPyIIfOekoiAdrl9THFTg3PYxn0qFlEs_k?height=256",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQTcflsQeesfTJKe9xUwRql0ASXfbeDN84h2qNoxq0I1wmc",
        },
        {
          title: "SC Maglev Train",
          description:"SC Maglev Train নিয়ে একটি বিস্তারিত পোস্টার, যা এর ডিজাইন, প্রযুক্তি এবং পরিবহনে সম্ভাব্য প্রভাব তুলে ধরে। এই পোস্টারটি আমি এবং নুসরাত তৈরি করেছি।",
          src: "https://1drv.ms/i/c/6eef2a195b4e034e/IQS3QNZJzbYITb8p_toYGmGdASJ6vleaKi2KKOjI1L84O_4",
          publicLink: "https://1drv.ms/i/c/6eef2a195b4e034e/IQR_H2wsS4vXTIOU1zaJcsP3ASXOfPDMbqkJCJPFYIkOpcU?width=10800&height=7200",
        },
      ],
    },
  }), []);

  const [language, setLanguage] = useState("en");

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

  const t = translations[language];

  return (
    <section id="academic-poster" className="bg-base-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-6 text-center">
          {t.heading}
        </h2>
        <p className="text-lg text-base-content/70 mb-10 text-center">
          {t.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.posterList?.map((poster, index) => (
            <div key={index} className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="text-xl font-semibold">{poster.title}</h3>
                <p className="text-base-content/70 mt-2">{poster.description}</p>
                <div className="aspect-w-16 aspect-h-9 mt-4">
                  <Suspense fallback={<div className="skeleton h-full w-full" />}>
                    <img
                      src={poster.src}
                      alt={poster.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </Suspense>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={poster.publicLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-1/2 h-auto"
                  >
                    {language === "bn" ? "পাবলিক লিঙ্ক খুলুন" : "Open Public Link"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPoster;
