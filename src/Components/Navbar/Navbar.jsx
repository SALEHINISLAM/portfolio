import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
const Navbar = (props) => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  const links = (
    <>
      <li>
        <NavLink to="/" className="active:font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="active:font-bold">
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="active:font-bold">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="active:font-bold">
          My Work
        </NavLink>
      </li>
      <li>
        <NavLink to="/testimonials" className="active:font-bold">
          Testimonials
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto sticky bg-opacity-40 bg-gray-500 px-2 pb-2 rounded-b-2xl">
      <div className="flex flex-row justify-between items-center">
        <div className="p-1">
          <Link to="/">
            <img src="/logo.JPG" alt="salehin" className="w-16 rounded-full" />
          </Link>
        </div>
        <div className="rounded-full hidden lg:flex">
          <ul className="flex flex-row gap-5 bg-white text-black rounded-full p-5 h-16">
            {links}
          </ul>
        </div>
        <div className="flex flex-row gap-5 bg-white text-black rounded-full py-2 px-4 h-16">
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <button className="border-l-2 pl-3 hover:font-bold">
            <Link to="/contact"> Contact</Link>
          </button>
        </div>
        <div className="lg:hidden">
          {menu == false ? (
            <GiHamburgerMenu
              className="size-12 hover:bg-gray-950 hover:text-white p-2 rounded-xl"
              onClick={() => handleMenu()}
            />
          ) : (
            <RxCrossCircled
              className="size-12 hover:bg-gray-950 hover:text-white p-2 rounded-xl"
              onClick={() => handleMenu()}
            />
          )}
        </div>
      </div>
      <ul
        className={
          menu == false
            ? "-mt-60 bg-transparent duration-700 text-transparent absolute right-0 w-1/2 p-0"
            : "flex flex-col  bg-white text-black duration-1000 mt-10 absolute right-0 w-full text-center rounded-2xl p-2"
        }
      >
        {links}
      </ul>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
