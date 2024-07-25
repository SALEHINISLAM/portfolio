import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = (props) => {
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
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex flex-col gap-3 lg:flex-row">
            {
                links
            }
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 items-center">
          <a href="https://www.linkedin.com/in/md-salehin-islam-5458112aa/" target="_blank">
            <FaLinkedin className="size-10"></FaLinkedin>
          </a>
          <a href="https://www.facebook.com/mohammad.salehin.islam.27" target="_blank">
            <ImFacebook2 className="size-9"/>
          </a>
          <a href="https://github.com/SALEHINISLAM" target="_blank">
            <FaGithubSquare className="size-10"/>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by MD Salehin Islam
        </p>
      </aside>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
