"use client";
import React, { useState, useEffect, useMemo, Suspense } from "react";
import LazyIframe from "./LazyIframes";

const Presentation = () => {
  const translations = useMemo(
    () => ({
      en: {
        heading: "My Presentations",
        description:
          "Explore the presentations I've created. Click on the links to play the slides directly.",
        presentationList: [
          {
            title: "Innovating Paddy Cultivation",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQT_lqR4GQx7T7OHubp8kwyiAfXIucpuRMVVBy2LpALFEaA",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQT_lqR4GQx7T7OHubp8kwyiAfXIucpuRMVVBy2LpALFEaA",
            provider: "onedrive",
          },
          {
            title: "MediBuddy a Telemedicine Platform",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQTTzcfl-bN3Qq5-lXUtjML8ARvpE1jwD0xrA7adtN1ti-c",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQTTzcfl-bN3Qq5-lXUtjML8ARvpE1jwD0xrA7adtN1ti-c",
            provider: "onedrive",
          },
          {
            title: "Stokes Theorem",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQRXstGqoJVwQLrVoQa5vGyhAYoX1OEieta92LvhA7aZ0EM",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQRXstGqoJVwQLrVoQa5vGyhAYoX1OEieta92LvhA7aZ0EM",
            provider: "onedrive",
          },
          {
            title: "Edtech Industry",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQRjFX1oln0zTpD8mpIZ88KLAYdAfdncuu-2rgsm4o8Pdvg",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQRjFX1oln0zTpD8mpIZ88KLAYdAfdncuu-2rgsm4o8Pdvg",
            provider: "onedrive",
          },
          {
            title: "Unilever sparks Lifebuoy vs. Dove",
            src: "https://www.canva.com/design/DAGiD-eAucQ/pFyPTBsrhlrDIvSo0FtL0w/view?embed",
            publicLink:
              "https://www.canva.com/design/DAGiD-eAucQ/pFyPTBsrhlrDIvSo0FtL0w/view?utm_content=DAGiD-eAucQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
            provider: "canva",
          },
          {
            title: "Platano Tex.pptx",
            src: "https://www.canva.com/design/DAF-MepRX6U/yWwrK316fOM6g5iyKTmHhA/view?embed",
            publicLink:
              "https://www.canva.com/design/DAF-MepRX6U/yWwrK316fOM6g5iyKTmHhA/view?utm_content=DAF-MepRX6U&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
            provider: "canva",
          },
        ],
      },
      bn: {
        heading: "আমার প্রেজেন্টেশনসমূহ",
        description:
          "এখানে আমার তৈরি কিছু প্রেজেন্টেশন রয়েছে। স্লাইডগুলো দেখতে ক্লিক করুন।",
        presentationList: [
          {
            title: "ইনভেটিভ প্যাডি কাল্টিভেশন",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQT_lqR4GQx7T7OHubp8kwyiAfXIucpuRMVVBy2LpALFEaA",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQT_lqR4GQx7T7OHubp8kwyiAfXIucpuRMVVBy2LpALFEaA",
            provider: "onedrive",
          },
          {
            title: "আপনার সেবায় মেডিবাডি",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQTTzcfl-bN3Qq5-lXUtjML8ARvpE1jwD0xrA7adtN1ti-c",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQTTzcfl-bN3Qq5-lXUtjML8ARvpE1jwD0xrA7adtN1ti-c",
            provider: "onedrive",
          },
          {
            title: "স্টোক্সের উপপাদ্য",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQRXstGqoJVwQLrVoQa5vGyhAYoX1OEieta92LvhA7aZ0EM",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQRXstGqoJVwQLrVoQa5vGyhAYoX1OEieta92LvhA7aZ0EM",
            provider: "onedrive",
          },
          {
            title: "এডটেক ইন্ডাস্ট্রি",
            src: "https://1drv.ms/p/c/6eef2a195b4e034e/IQRjFX1oln0zTpD8mpIZ88KLAYdAfdncuu-2rgsm4o8Pdvg",
            publicLink:
              "https://1drv.ms/p/c/6eef2a195b4e034e/IQRjFX1oln0zTpD8mpIZ88KLAYdAfdncuu-2rgsm4o8Pdvg",
            provider: "onedrive",
          },
          {
            title: "Unilever sparks Lifebuoy vs. Dove",
            src: "https://www.canva.com/design/DAGiD-eAucQ/pFyPTBsrhlrDIvSo0FtL0w/view?embed",
            publicLink:
              "https://www.canva.com/design/DAGiD-eAucQ/pFyPTBsrhlrDIvSo0FtL0w/view?utm_content=DAGiD-eAucQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
            provider: "canva",
          },
          {
            title: "Platano Tex.pptx",
            src: "https://www.canva.com/design/DAF-MepRX6U/yWwrK316fOM6g5iyKTmHhA/view?embed",
            publicLink:
              "https://www.canva.com/design/DAF-MepRX6U/yWwrK316fOM6g5iyKTmHhA/view?utm_content=DAF-MepRX6U&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
            provider: "canva",
          },
        ],
      },
    }),
    []
  );

  const [language, setLanguage] = useState("en");
  const [activeVideo, setActiveVideo] = useState(null);

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
    <section id="presentation-slide" className="bg-base-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-6 text-center">
          {t.heading}
        </h2>
        <p className="text-lg text-base-content/70 mb-10 text-center">
          {t.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.presentationList.map((presentation, index) => (
            <div key={index} className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="text-xl font-semibold">{presentation.title}</h3>
                <div className="aspect-w-16 aspect-h-9 mt-4">
                  <Suspense
                    fallback={<div className="skeleton h-full w-full" />}
                  >
                    <LazyIframe
                      src={presentation.src}
                      title={presentation.title}
                      className="absolute inset-0"
                      // Heavier OneDrive files get more time + retries; Canva is generally fast
                      timeoutPerTry={
                        presentation.provider === "onedrive" ? 15000 : 9000
                      }
                      maxRetries={presentation.provider === "onedrive" ? 8 : 4}
                      preloadMargin={
                        presentation.provider === "onedrive" ? "400px" : "200px"
                      }
                    />
                  </Suspense>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    className="btn btn-primary w-1/2 h-auto"
                    onClick={() => setActiveVideo(presentation)}
                  >
                    {language === "bn"
                      ? "স্লাইডশো প্লে করুন"
                      : "Play Slideshow"}
                  </button>
                  <a
                    href={presentation.publicLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-1/2 h-auto"
                  >
                    {language === "bn"
                      ? "পাবলিক লিঙ্ক খুলুন"
                      : "Open Public Link"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
              <Suspense fallback={<div className="skeleton h-full w-full" />}>
                <LazyIframe
                  src={activeVideo.src}
                  title={activeVideo.title}
                  className="w-full h-full"
                  immediate
                  timeoutPerTry={18000}
                  maxRetries={10}
                  preloadMargin="0px"
                />
              </Suspense>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={() => setActiveVideo(null)}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Presentation;
