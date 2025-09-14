"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageThemeToggle() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const router = useRouter();

  // Initialize language and theme from localStorage or defaults
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    const savedTheme = localStorage.getItem("theme") || "light";
    setLanguage(savedLanguage);
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.lang = savedLanguage;
  }, []);

  // Handle language toggle
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "bn" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.lang = newLanguage;

    // Update URL to reflect language
    const newPath = pathname.replace(/^\/(en|bn)/, `/${newLanguage}`);
    router.push(newPath);
  };

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="toggle-container flex gap-2 z-50">
      <button
        onClick={toggleLanguage}
        className="btn btn-primary btn-sm"
        aria-label={`Switch to ${language === "en" ? "Bangla" : "English"}`}
      >
        {language === "en" ? "বাংলা" : "English"}
      </button>
      <button
        onClick={toggleTheme}
        className="btn btn-secondary btn-sm"
        aria-label={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}