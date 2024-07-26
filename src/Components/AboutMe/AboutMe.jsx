import React from "react";
import PropTypes from "prop-types";
import { FaCode } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
const AboutMe = (props) => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center space-y-8">
      <h3 className="text-2xl font-semibold text-center">Introduction</h3>
      <h1 className="text-center text-5xl font-bold">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className=" col-span-1">
          <div className="w-full bg-gray-500 bg-opacity-30 rounded-xl hover:rounded-full hover:duration-500 duration-1000 after:rounded-xl">
            <img src="/about-salehin.webp" alt="" className="" />
          </div>
          <div className="rounded-full bg-white -ml-10 -mt-20 w-52 h-52 flex justify-center shadow-lg">
            <div className="mt-2">
              <img src="/curved.jpg" alt="" className="rounded-t-full w-48" />
              <img
                src="/public/developer.png"
                alt=""
                className="w-20 -mt-16 ml-16"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col space-y-6">
          <p className="text-2xl font-semibold">
            I am an experienced frontend developer with over 1 year of
            experience in the field. Try to learn new thing in this vast field.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3">
            <div className="rounded-xl border-2 m-2 p-4 h-full">
              <figure className="p-3">
                <FaCode className="size-12" />
              </figure>
              <h3 className="text-4xl font-bold">Languages</h3>
              <p className="text-2xl font-semibold">
                HTML, CSS, JavaScript, React JS
              </p>
            </div>
            <div className="rounded-xl border-2 m-2 h-full p-4 ">
              <figure className="p-3">
                <FaGraduationCap className="size-12" />
              </figure>
              <h3 className="text-4xl font-bold">Education</h3>
              <p className="text-2xl font-semibold">
                Running Undergrad Student of BUET
              </p>
            </div>
            <div className="rounded-xl border-2 m-2 p-4 h-full">
              <figure className="p-3">
                <RiProjectorFill className="size-12" />
              </figure>
              <h3 className="text-4xl font-bold">Projects</h3>
              <p className="text-2xl font-semibold">
                Build more than 50 projects.</p>
                <Link to="/projects">
                  <button className="btn btn-ghost">See now!</button>
                </Link>
              
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="rounded-xl border-2 flex-grow p-4 md:m-8">
              <figure className="p-3">
                <img src="/public/framework.png" alt="" className="size-12"/>
              </figure>
              <h3 className="text-4xl font-bold">Framework and Technology</h3>
              <p className="text-2xl font-semibold">
                <FaGithub className="inline"/> Github
              </p>
              <p className="text-2xl font-semibold">
                <RiTailwindCssFill className="inline"/> Tailwind CSS
              </p>
              <p className="text-2xl font-semibold">
                <SiDaisyui className="inline"/> DaisyUI
              </p>
              <p className="text-2xl font-semibold">
                <SiShadcnui className="inline"/> ShadcnUI
              </p>
            </div>
          <div className="rounded-xl border-2 flex-grow p-4 md:m-8">
              <figure className="p-3">
                <FaTools className="size-12"/>
              </figure>
              <h3 className="text-4xl font-bold">Tools I use</h3>
              <p className="text-2xl font-semibold">
                <VscVscode className="inline"/> Visual Studio Code
              </p>
              <p className="text-2xl font-semibold">
                <FaGitAlt className="inline"/> Git Bash
              </p>
              <p className="text-2xl font-semibold">
                <FaNode className="inline"/> Node JS
              </p>
              <p className="text-2xl font-semibold">
                <FaFigma className="inline"/> Figma
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
