import React from "react";
import PropTypes from "prop-types";
import { RiContractLine } from "react-icons/ri";

const Services = (props) => {
  return (
    <div className="mx-auto container flex flex-col py-12 space-y-8 justify-center">
      <h3 className="text-2xl font-semibold text-center">Services</h3>
      <h1 className="text-5xl font-bold text-center">I am available for ...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
        <div className="bg-base-200 p-4 md:p-8 rounded-xl hover:rounded-3xl flex flex-col gap-6">
          <figure className="bg-base-300 w-1/2 flex justify-center p-3 rounded-lg shadow-md">
            <RiContractLine className="size-12" />
          </figure>
          <h2 className="text-4xl font-bold">Contractual jobs/project</h2>
          <p>
            This type of work is my favorite. Email me for further discussion.
          </p>
        </div>

        <div className="bg-base-200 p-4 md:p-8 rounded-xl hover:rounded-3xl flex flex-col gap-6">
          <figure className="bg-base-300 w-1/2 flex justify-center p-3 rounded-lg shadow-md">
            <img src="/part-time.png" alt="" className="w-12" />
          </figure>
          <h2 className="text-4xl font-bold">Part Time jobs/project</h2>
          <p>
            This type of work is my favorite. Email me for further discussion.
          </p>
        </div>

        <div className="bg-base-200 p-4 md:p-8 rounded-xl hover:rounded-3xl flex flex-col gap-6">
          <figure className="bg-base-300 w-1/2 flex justify-center p-3 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </figure>
          <h2 className="text-4xl font-bold">Full Time jobs/project</h2>
          <p>
            This type of work is my favorite. Email me for further discussion.
          </p>
        </div>
      </div>
      <h3 className="m-3 text-2xl font-semibold text-center">
        If you find that, I may contribute in your project or company you can
        mail me . <br /> I seriously waiting for your email . <br />
        Till then Good Luck!😊
      </h3>
    </div>
  );
};

Services.propTypes = {};

export default Services;
