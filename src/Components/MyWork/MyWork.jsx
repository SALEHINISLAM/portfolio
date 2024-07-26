import React from "react";
import PropTypes from "prop-types";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import './MyWork.css'

const MyWork = (props) => {
  return (
    <div className="mx-auto container flex flex-col py-8 space-y-6">
      <p className="text-center text-2xl font-semibold">
        Projects
      </p>
      <h1 className="text-center text-5xl font-bold">Some of my works</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/money-master.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Money Master</h2>
            <p>Here you can calculate your money and make decision of your saving.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript></IoLogoJavascript>
            <RiTailwindCssFill/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://money-master-psi.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/summer-sell.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Summer Sale</h2>
            <p>Here you can add product to cart and apply discount coupon.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript></IoLogoJavascript>
            <RiTailwindCssFill/>
            <SiDaisyui/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://summer-sale-pink.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/hot-gadget.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hot Gadget</h2>
            <p>Here you can search phone.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript></IoLogoJavascript>
            <RiTailwindCssFill/>
            <SiDaisyui/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://hot-gadget.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/phero-tube.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Phero Tube</h2>
            <p>It is like youtube like thing by fetching api.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript></IoLogoJavascript>
            <RiTailwindCssFill/>
            <SiDaisyui/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://phero-tube-nine.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/college-admission-viva.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">College Admission Viva</h2>
            <p>Here you can see your college admission viva experience.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript></IoLogoJavascript>
            <FaBootstrap/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://college-admission-viva.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/trip-planner.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">AI Trip Planner</h2>
            <p>Here you can can find probable trip destination those are generated by AI.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <SiGooglegemini/>
            <FaReact/>
            <RiTailwindCssFill/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://ai-trip-planner-gray.vercel.app/create-trip" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/ctms-buet.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CTMS-BUET</h2>
            <p>If you are a BUETian you can give your toilet in your campus related issue through this website. </p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <SiGoogleforms/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://ctms-buet.vercel.app/index.html" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/ludo.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ludo</h2>
            <p>Here You can play ludo in your leisure time.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://ludo-eight.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/tictactoe.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tic Tac Toe</h2>
            <p>Here You can play your favorite Tic Tac Toe in your leisure time.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://tic-tac-toe-omega-plum.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/course-registration.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Course Registration</h2>
            <p>Here You can see course and registration them by clicking on each course.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <RiTailwindCssFill/>
            <SiDaisyui/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://course-registration-weld.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/career-hub.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Career Hub</h2>
            <p>Here You can see job post and apply them.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <RiTailwindCssFill/>
            <SiDaisyui/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://career-hub-theta.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/to-do-list.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">To Do List</h2>
            <p>Here You can Add your daily task and after completion you can remove them.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://to-do-list-three-blond-17.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/knoledge-cafe.JPG"
              alt="Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Knowledge Cafe</h2>
            <p>Here You can bookmark some Item and calculate your reading time.</p>
            <h3 className="text-xl flex flex-row">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <RiTailwindCssFill/>
            </h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://knowledge-cafe-omega-lemon.vercel.app/" target="_blank">View Site</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyWork.propTypes = {};

export default MyWork;
