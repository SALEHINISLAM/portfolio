"use client";
import React, { useEffect, useState, useMemo } from "react";

const BriefOfThisSection = () => {
  const translations = useMemo(() => ({
    en: {
      heading: "About Me",
      description:
        "I am a passionate Full-Stack Web Developer with expertise in the MERN Stack and modern web technologies. Here's a quick overview of the tools and skills I bring to the table.",
      technologies: "Technologies",
      expertise: "Expertise",
      tools: "Tools & Frameworks",
    },
    bn: {
      heading: "আমার সম্পর্কে",
      description:
        "আমি একজন আগ্রহী ফুল-স্ট্যাক ওয়েব ডেভেলপার, যিনি MERN স্ট্যাক এবং আধুনিক ওয়েব প্রযুক্তিতে দক্ষ। এখানে আমি যা কিছু করি তার একটি সংক্ষিপ্ত বিবরণ দেওয়া হলো।",
      technologies: "প্রযুক্তি",
      expertise: "দক্ষতা",
      tools: "টুলস ও ফ্রেমওয়ার্কস",
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
    <section className="bg-base-100 pb-6 px-4">
      <div className="w-full mx-auto text-center">
        <p className="text-lg text-base-content/70 mb-6">{t.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technologies Card */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-semibold">{t.technologies}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "MERN Stack", "React", "Node.js", "MongoDB", "Express", "Next.js", 
                  "JavaScript", "TypeScript", "Tailwind CSS", "DaisyUI", "ShadcnUI", 
                  "Firebase", "Gemini API", "HTML", "CSS", "Bootstrap", "GitHub", 
                  "VS Code", "Figma"
                ].map((tech) => (
                  <span key={tech} className="badge badge-outline">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Card */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-semibold">{t.expertise}</h3>
              <p className="text-base-content/80 mt-4">
                {language === "bn"
                  ? "আমি ডায়নামিক এবং স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করতে বিশেষজ্ঞ, যাদের ফোকাস হচ্ছে ইউজার এক্সপিরিয়েন্স, পারফরমেন্স অপটিমাইজেশন এবং রেসপন্সিভ ডিজাইন। আমি ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড ডেভেলপমেন্টে দক্ষ, ফলে আমি পুরো স্ট্যাক প্রজেক্টগুলো কনসেপ্ট থেকে ডিপ্লয়মেন্ট পর্যন্ত হ্যান্ডেল করতে পারি।"
                  : "I specialize in creating dynamic and scalable web applications with a focus on seamless user experience, performance optimization, and responsive design. I’m proficient in both front-end and back-end development, enabling me to handle full-stack projects from concept to deployment."}
              </p>
            </div>
          </div>

          {/* Tools & Frameworks Card */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="text-xl font-semibold">{t.tools}</h3>
              <ul className="list-disc ml-4 mt-4 text-left">
                <li>React, Next.js, Node.js</li>
                <li>MongoDB, Firebase</li>
                <li>Tailwind CSS, Bootstrap, ShadcnUI</li>
                <li>GitHub, VS Code, Figma</li>
                <li>JavaScript, TypeScript, HTML, CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefOfThisSection;
