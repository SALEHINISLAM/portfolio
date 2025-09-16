"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageThemeToggle() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);

  // Initialize language and theme from localStorage or defaults
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    const savedTheme = localStorage.getItem("theme") || "light";
    setLanguage(savedLanguage);
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.lang = savedLanguage;
  }, []);
  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => setActive(false), 3000); // visible for 3s
      return () => clearTimeout(timer);
    }
  }, [active]);

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
    <div 
      className={`
        fixed top-1/4 right-0 md:right-2 -translate-y-1/2 z-50 
        transition-opacity duration-500
        ${active ? "opacity-100" : "opacity-40 hover:opacity-100"}
      `}
      onClick={() => setActive(true)}>
    <div className="toggle-container flex gap-2 z-50 flex-col items-center">
      <button
        onClick={toggleLanguage}
        className="btn btn-primary btn-sm h-auto"
        aria-label={`Switch to ${language === "en" ? "Bangla" : "English"}`}
      >
        {language === "en" ? "বাংলা" : "English"}
      </button>
      <button
        onClick={toggleTheme}
        className="btn btn-secondary btn-sm hidden lg:block h-auto"
        aria-label={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <label className="swap swap-rotate lg:hidden">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />

        {/* Sun icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="swap-on h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 
      6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 
      1.591M5.25 12H3m4.227-4.773L5.636 
      5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 
      3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>

        {/* Moon icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="swap-off h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 
      15.75c-5.385 0-9.75-4.365-9.75-9.75 
      0-1.33.266-2.597.748-3.752A9.753 
      9.753 0 0 0 3 11.25C3 16.635 7.365 
      21 12.75 21a9.753 9.753 0 0 0 
      9.002-5.998Z"
          />
        </svg>
      </label>
    </div></div>
  );
}
