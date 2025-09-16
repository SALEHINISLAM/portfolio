"use client";

import { Suspense, useEffect, useState } from "react";

const Achievements = () => {
  const translations = {
    en: {
      sectionTitle: "Achievements & Certificates",
      subtitle: "Here are some of the notable achievements I’ve earned over time.",
      ctaAll: "See all certificates",
      entries: [
        {
          title: "Biology Olympiad Champion",
          org: "Higgsino Science Society",
          date: "2021",
          certificate: "/mnt/data/IMG_20250830_203654_859.jpg", // Example image path
        },
        {
          title: "Mathematics Olympiad 5th Place",
          org: "Southeast University Computer Club",
          date: "2021",
          certificate: "/mnt/data/IMG_20250830_203738_540.jpg", // Example image path
        },
        {
          title: "Insta Math Olympiad 12th Place",
          org: "Notre Dame Math Club",
          date: "2021",
          certificate: "/mnt/data/IMG_20250830_203756_410.jpg", // Example image path
        },
        {
          title: "Science Olympiad Honorable Mention",
          org: "Cambrian Education Group",
          date: "2019",
          certificate: "/mnt/data/IMG_20250830_203814_851.jpg", // Example image path
        },
        {
          title: "4th Bangladesh Junior Science Olympiad",
          org: "Bangladesh Junior Science Olympiad",
          date: "2018",
          certificate: "/mnt/data/IMG_20250830_203833_375.jpg", // Example image path
        },
        {
          title: "Mechathon 2024 Finalist",
          org: "Mechanical Engineering Association, BUET",
          date: "2024",
          certificate: "/mnt/data/IMG_20250830_203853_816.jpg", // Example image path
        },
        {
          title: "MIST Environment Fest 2025 - 3rd Position",
          org: "Department of Environmental, Water Resources and Coastal Engineering, MIST",
          date: "2025",
          certificate: "/mnt/data/IMG_20250830_203853_816.jpg", // Example image path
        },
      ],
    },
    bn: {
      sectionTitle: "অর্জন ও সনদপত্র",
      subtitle: "এখানে আমি যে কিছু উল্লেখযোগ্য অর্জন অর্জন করেছি তার সনদপত্র দেওয়া হয়েছে।",
      ctaAll: "সব সনদপত্র দেখুন",
      entries: [
        {
          title: "জীববিজ্ঞান অলিম্পিয়াড চ্যাম্পিয়ন",
          org: "Higgsino Science Society",
          date: "২০২১",
          certificate: "/mnt/data/IMG_20250830_203654_859.jpg", // Example image path
        },
        {
          title: "গণিত অলিম্পিয়াড ৫ম স্থান",
          org: "Southeast University Computer Club",
          date: "২০২১",
          certificate: "/mnt/data/IMG_20250830_203738_540.jpg", // Example image path
        },
        {
          title: "ইনস্টা গণিত অলিম্পিয়াড ১২তম স্থান",
          org: "Notre Dame Math Club",
          date: "২০২১",
          certificate: "/mnt/data/IMG_20250830_203756_410.jpg", // Example image path
        },
        {
          title: "সায়েন্স অলিম্পিয়াড সম্মাননা পুরষ্কার",
          org: "Cambrian Education Group",
          date: "২০১৯",
          certificate: "/mnt/data/IMG_20250830_203814_851.jpg", // Example image path
        },
        {
          title: "৪র্থ বাংলাদেশ জুনিয়র সায়েন্স অলিম্পিয়াড",
          org: "বাংলাদেশ জুনিয়র সায়েন্স অলিম্পিয়াড",
          date: "২০১৮",
          certificate: "/mnt/data/IMG_20250830_203833_375.jpg", // Example image path
        },
        {
          title: "মেচাথন ২০২৪ ফাইনালিস্ট",
          org: "Mechanical Engineering Association, BUET",
          date: "২০২৪",
          certificate: "/mnt/data/IMG_20250830_203853_816.jpg", // Example image path
        },
        {
          title: "MIST Environment Fest 2025 - ৩য় স্থান",
          org: "Department of Environmental, Water Resources and Coastal Engineering, MIST",
          date: "২০২৫",
          certificate: "/mnt/data/IMG_20250830_203853_816.jpg", // Example image path
        },
      ],
    },
  };

  const [language, setLanguage] = useState("en");
  const [openedCertificate, setOpenedCertificate] = useState(null);

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

  const handleImageClick = (certificateUrl) => {
    setOpenedCertificate(certificateUrl);
  };

  const closeImage = () => {
    setOpenedCertificate(null);
  };

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
                    <h3 className="text-xl font-semibold">{entry.title}</h3>
                    <p className="text-sm text-base-content/60">
                      {entry.org} · {entry.date}
                    </p>
                  </div>

                  <div className="badge badge-primary badge-outline">
                    Achievement
                  </div>
                </div>

                <p className="mt-3 text-base text-base-content/80">
                  {t.subtitle}
                </p>

                <div className="card-actions justify-between items-center mt-6">
                  <button
                    onClick={() => handleImageClick(entry.certificate)}
                    className="btn btn-sm btn-outline"
                  >
                    <span className="text-sm">👁️ View Certificate</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {openedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <Suspense fallback={<div className="loader">Loading...</div>}>
                <img
                  src={openedCertificate}
                  alt="Certificate"
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
            </Suspense>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-base-content/70 mb-4">
            {language === "en"
              ? "Achievements help me grow — showcasing hard work, dedication, and progress."
              : "অর্জনগুলো আমাকে বেড়ে উঠতে সাহায্য করে — পরিশ্রম, উৎসর্গ এবং অগ্রগতি প্রদর্শন।"}
          </p>
          {/* <a
            href="#"
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

export default Achievements;
