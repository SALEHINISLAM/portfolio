"use client";
import Image from "next/image";
import LanguageThemeToggle from "./LanguageThemeToggle";
import Link from "next/link";

const MainNavbar = () => {
  return (
    <div className="navbar fixed top-2 left-0 right-0 z-50 bg-base-100 bg-opacity-90 rounded-full shadow-lg container mx-auto">
      {/* Navbar start - Logo + Dropdown */}
      <div className="navbar-start flex items-center">
        {/* Mobile dropdown toggle */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        {/* Logo or Icon for large screens */}
        <Link
          href={"/"}
          className="flex items-center space-x-2 tooltip tooltip-bottom"
        >
          <div className="tooltip-content">
            <div className="animate-bounce text-orange-400 text-2xl font-black">
              <h1>Md Salehin Islam</h1>
            </div>
          </div>
          <Image
            src={"/assets/NavLogo.png"}
            alt="Md Salehin Islam"
            className="h-8 w-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border border-base-content"
            width={100}
            height={100}
          />
          <span className="text-3xl font-extrabold">
            Salehin
          </span>
        </Link>
      </div>

      {/* Navbar center - Menu items for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      {/* Navbar end - Language and Theme Toggle */}
      <div className="navbar-end">
        {/* <LanguageThemeToggle /> */}
      </div>
    </div>
  );
};

export default MainNavbar;
