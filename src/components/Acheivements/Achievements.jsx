"use client";

import { Suspense, useEffect, useState } from "react";
import LazyImage from "./LazyImage";

const Achievements = () => {
  const translations = {
    en: {
      sectionTitle: "Achievements & Certificates",
      subtitle:
        "Here are some of the notable achievements I’ve earned over time.",
      ctaAll:
        "Without these certificates I won some easy writing competitions , jokes competitions, research writing competitions etc in my school and college life. But I don't have the certificates of those competitions. So, I am not mentioning those competitions here.",
      entries: [
        {
          title:
            "Poster Presentation in MIST Environment Fest 2025 - 2nd Runner Up",
          org: "Military Institute of Science and Technology (MIST)",
          date: "2025",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQSmK4BvZRIgQ6w1rJeJZpaUAVWe4VSDV_MEHVTORCM309s?width=3088&height=2220",
        },
        {
          title:
            "Won Hackathon in Best Documentation Category in BUET CSE Fest 2024",
          org: "Bangladesh University of Engineering and Technology (BUET)",
          date: "2024",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQS3fD82skB9TpFkxq6T3HUiAe8iSuu9OTroop-uMgIlxgw?width=4064&height=3048",
        },
        {
          title: "Finalist in Mechathon 2024",
          org: "Bangladesh University of Engineering and Technology (BUET)",
          date: "2024",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRq5jXsfoPXRa92IWQSkeClAYMAow6_sJd3Di-Gls4ZgY4?width=2264&height=3244",
        },
        {
          title:
            "Champion in Higgsino Science Society presents Biology Olympiad",
          org: "Higgsino Science Society",
          date: "2021",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRCBFZnZIpyT4-uFErG8nhzATKbsVgw8pn9s42IUQhm9j0?width=4064&height=3048",
        },
        {
          title: "5th in Southeast University Math Olympiad",
          org: "Southeast University Computer Club",
          date: "2021",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQSoA22VdNBfS54DeN8Meq8XAW5Vg13c-JrsteH5k2eJ4jk?width=1024&height=768",
        },
        {
          title: "12th in Intra College Math Olympiad",
          org: "Notre Dame Math Club",
          date: "2020",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRe3aB5hevMRY_UK2FGWevAASLru8cVVbo4e7wbs6Xm1xI?width=4064&height=3048",
        },
        {
          title: "Qualified for BSB Cambrian Chemistry Olympiad",
          org: "BSB Cambrian Education Group",
          date: "2019",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQQzKckqdRICQqVgGRS8mgfuARkG1Jbr7Wqe8i3WT89-tD8?width=3827&height=2984",
        },
        {
          title:
            "Qualified for 4th Bangladesh Junior Science Olympiad final round",
          org: "Bangladesh Junior Science Olympiad",
          date: "2018",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQQaeb_CmKnWRIbeZR1FzfrgAUkI6qB3moqpTxdoHsfFuKw?width=3774&height=2890",
        },
        {
          title: "2nd Runner Up in BdMO Math Olympiad Dhaka Regional Round",
          org: "Bangladesh Math Olympiad",
          date: "2018",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRbJsmKnB9fQYJgAQp9V8VBAS3jGi4o0S6a3TTOl0nT1NU?width=3144&height=2288",
        },
        {
          title: "3rd in Arabic Hand Writing Competition",
          org: "Armanitola Government High School",
          date: "2018",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQTOdajiRkGaSIjhsxpa3CLfARuzSdts2fCc3jM97IPbebY?width=4064&height=3048",
        },
      ],
    },
    bn: {
      sectionTitle: "অর্জন ও সনদপত্র",
      subtitle:
        "এখানে আমি যে কিছু উল্লেখযোগ্য অর্জন অর্জন করেছি তার সনদপত্র দেওয়া হয়েছে।",
      ctaAll:
        "এই সনদপত্রগুলো ছাড়া আমি স্কুল এবং কলেজ জীবনে কিছু সহজ লেখা প্রতিযোগিতা, রসিকতা প্রতিযোগিতা, গবেষণা লেখা প্রতিযোগিতা ইত্যাদিতে জিতেছি। তবে আমি সেই প্রতিযোগিতাগুলোর সনদপত্র নেই। তাই সেগুলোর কথা এখানে উল্লেখ করছি না।",
      entries: [
        {
          title:
            "MIST Environment Fest 2025 এ পোস্টার প্রেজেন্টেশন - ২য় রানার আপ",
          org: "মিলিটারি ইনস্টিটিউট অফ সায়েন্স অ্যান্ড টেকনোলজি (MIST)",
          date: "২০২৫",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQSmK4BvZRIgQ6w1rJeJZpaUAVWe4VSDV_MEHVTORCM309s?width=3088&height=2220",
        },
        {
          title:
            "BUET CSE Fest 2024 এ হ্যাকাথন বিজয়ী (Best Documentation Category)",
          org: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)",
          date: "২০২৪",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQS3fD82skB9TpFkxq6T3HUiAe8iSuu9OTroop-uMgIlxgw?width=4064&height=3048",
        },
        {
          title: "Mechathon 2024 ফাইনালিস্ট",
          org: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)",
          date: "২০২৪",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRq5jXsfoPXRa92IWQSkeClAYMAow6_sJd3Di-Gls4ZgY4?width=2264&height=3244",
        },
        {
          title: "Higgsino Science Society এর Biology Olympiad চ্যাম্পিয়ন",
          org: "Higgsino Science Society",
          date: "২০২১",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRCBFZnZIpyT4-uFErG8nhzATKbsVgw8pn9s42IUQhm9j0?width=4064&height=3048",
        },
        {
          title: "Southeast University Math Olympiad এ ৫ম স্থান",
          org: "Southeast University Computer Club",
          date: "২০২১",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQSoA22VdNBfS54DeN8Meq8XAW5Vg13c-JrsteH5k2eJ4jk?width=1024&height=768",
        },
        {
          title: "Intra College Math Olympiad এ ১২তম স্থান",
          org: "Notre Dame Math Club",
          date: "২০২০",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRe3aB5hevMRY_UK2FGWevAASLru8cVVbo4e7wbs6Xm1xI?width=4064&height=3048",
        },
        {
          title: "BSB Cambrian Chemistry Olympiad এর জন্য নির্বাচিত",
          org: "BSB Cambrian Education Group",
          date: "২০১৯",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQQzKckqdRICQqVgGRS8mgfuARkG1Jbr7Wqe8i3WT89-tD8?width=3827&height=2984",
        },
        {
          title:
            "৪র্থ বাংলাদেশ জুনিয়র সায়েন্স অলিম্পিয়াড ফাইনাল রাউন্ডের জন্য নির্বাচিত",
          org: "বাংলাদেশ জুনিয়র সায়েন্স অলিম্পিয়াড",
          date: "২০১৮",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQQaeb_CmKnWRIbeZR1FzfrgAUkI6qB3moqpTxdoHsfFuKw?width=3774&height=2890",
        },
        {
          title: "BdMO Math Olympiad Dhaka Regional Round এ ২য় রানার আপ",
          org: "বাংলাদেশ গণিত অলিম্পিয়াড",
          date: "২০১৮",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQRbJsmKnB9fQYJgAQp9V8VBAS3jGi4o0S6a3TTOl0nT1NU?width=3144&height=2288",
        },
        {
          title: "আরবি হাত লেখায় ৩য় স্থান",
          org: "আর্মানিতোলা সরকারী উচ্চ বিদ্যালয়",
          date: "২০১৮",
          certificate:
            "https://1drv.ms/i/c/6eef2a195b4e034e/IQTOdajiRkGaSIjhsxpa3CLfARuzSdts2fCc3jM97IPbebY?width=4064&height=3048",
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
    <section id="achievements" className="py-12 bg-base-100">
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

        {/* Modal using <dialog> tag */}
        {openedCertificate && (
          <dialog open className="modal modal-open z-50" onClose={closeImage}>
            <div className="modal-box max-w-4xl">
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold">
                  {language === "bn" ? "সনদপত্র" : "Certificate"}
                </h4>
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle btn-ghost"
                    aria-label="Close"
                    onClick={closeImage}
                  >
                    ✕
                  </button>
                </form>
              </div>
              <div className="mt-4">
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center text-center">
                      <span className="loading loading-dots loading-xl"></span>
                      <p>Please Wait!</p>
                    </div>
                  }
                >
                  <LazyImage
                    src={openedCertificate}
                    alt="Certificate"
                    className="max-w-full max-h-full object-contain"
                    immediate
                    timeoutPerTry={16000}
                    maxRetries={10}
                    preloadMargin="0px"
                    fetchPriority="high"
                    style={{ display: "grid", placeItems: "center" }}
                  />
                </Suspense>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn" onClick={closeImage}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        )}

        <div className="mt-8 text-center">
          <p>{t.ctaAll}</p>
          <p className="text-sm text-base-content/70 mb-4">
            {language === "en"
              ? "Achievements help me grow — showcasing hard work, dedication, and progress."
              : "অর্জনগুলো আমাকে বেড়ে উঠতে সাহায্য করে — পরিশ্রম, উৎসর্গ এবং অগ্রগতি প্রদর্শন।"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
