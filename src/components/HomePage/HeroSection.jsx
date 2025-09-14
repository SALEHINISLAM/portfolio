"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const translations = {
    en: {
      title: "Hey, I’m",
      name: "Salehin",
      description:
        "I’m studying Civil Engineering at BUET, but honestly, my world doesn’t stop there. Some days I’m teaching math, other days I’m sketching slides, tinkering with startups, coding up websites, or diving into research and competitions. Steve Jobs once said life is about collecting dots — and that’s what I’m doing now. In a few years, I believe these dots will connect into something meaningful, something I’ll be proud to call my story. 🚀",
      hook: "Every dot is a step forward — let’s see where mine take me.",
      buttonText: "Follow My Journey",
    },
    bn: {
      title: "হ্যালো, আমি ",
      name: "সালেহীন",
      description:
        "আমি সিভিল ইঞ্জিনিয়ারিং পড়ছি (BUET), তবে আমার যাত্রা শুধু এখানেই থেমে নেই। কখনো অঙ্ক শেখাই, কখনো স্লাইড বানাই, নতুন ব্যবসার চেষ্টা করি, ওয়েবসাইট তৈরি করি কিংবা গবেষণা আর প্রতিযোগিতায় ঝাঁপিয়ে পড়ি। Steve Jobs যেমন বলেছিলেন, জীবন হলো ডট সংগ্রহ করা — আমি এখন সেই ডটগুলো জড়ো করছি। কয়েক বছরের মধ্যে এগুলো মিলেই তৈরি করবে আমার গল্প, যে গল্প একদিন মনে রাখার মতো হবে। 🌟",
      hook: "প্রতিটি ডট-ই একেকটি পদক্ষেপ — দেখি আমারটা কোথায় নিয়ে যায়।",
      buttonText: "আমার যাত্রার সঙ্গী হোন",
    },
  };

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const currentLang = document.documentElement.lang || "en";
    setLanguage(currentLang);
    // Listen for lang attribute changes
    const observer = new MutationObserver(() => {
      setLanguage(document.documentElement.lang || "en");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image
            src={"/assets/heroPic.JPG"}
            alt="I am Salehin bro!"
            height={500}
            width={500}
            className="rounded-full"
          />
          <br />
          <br />
          <Image
            src={"/assets/wavingHand.png"}
            alt="Waving Hand"
            height={50}
            width={50}
            className="inline-block ml-2 "
          />
          <br />
          <h2 className="text-3xl font-bold">{translations[language].title}</h2>
          <br />
          <h1 className="text-5xl font-extrabold">
            {translations[language].name}
          </h1>
          <p className="py-6 text-lg leading-relaxed">
            {translations[language].description}
          </p>
          <br />
          <p className="italic text-primary mb-6">
            {translations[language].hook}
          </p>
          <button className="btn btn-primary">
            {translations[language].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
