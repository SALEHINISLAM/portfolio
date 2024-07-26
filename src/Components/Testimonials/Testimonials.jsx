import React from "react";
import PropTypes from "prop-types";

const Testimonials = (props) => {
  return (
    <div className="mx-auto flex flex-col py-12 space-y-8 justify-center items-center">
      <h3 className="text-2xl font-semibold text-center">Testimonials</h3>
      <h1 className="text-5xl font-bold text-center">
        Here are some of my testimonials ...
      </h1>
      <div className="flex flex-col space-y-6">
        {/* 1 */}
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-base-content">
              {
                '"Salehin demonstrated exceptional frontend development skills during our competition. Their ability to work under pressure and deliver high-quality results was impressive. They are highly skilled and reliable."'
              }
            </p>
          </blockquote>
          <section className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-base-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-base-900">
                Ratul Khan
              </cite>
              <cite className="ps-3 text-sm text-base-500">CEO at Onnorokom Edtech Ltd.</cite>
            </div>
          </section>
        </figure>
        {/* 2 */}
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-base-content">
              {
                '"Collaborating with Salehin was seamless. They quickly understood our requirements and implemented them flawlessly. Their work ethic and positive attitude made a significant impact on our project’s success."'
              }
            </p>
          </blockquote>
          <section className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-base-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-base-900">
                Hadi
              </cite>
              <cite className="ps-3 text-sm text-base-500">CTO at Utkorsho</cite>
            </div>
          </section>
        </figure>
        {/* 3 */}
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-base-content">
              {
                '"Salehin has a rare combination of technical expertise and creative flair. Their contributions to our team during the recent hackathon were invaluable. They consistently exceeded our expectations."'
              }
            </p>
          </blockquote>
          <section className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-base-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-base-900">
                Aurnob Sarker
              </cite>
              <cite className="ps-3 text-sm text-base-500">Student at ME , BUET</cite>
            </div>
          </section>
        </figure>
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-base-content">
              {
                '"I had the pleasure of working with Salehin on several projects. Their keen attention to detail and user-centric approach greatly enhanced the usability of our applications. They are a true asset to any team."'
              }
            </p>
          </blockquote>
          <section className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-base-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-base-900">
                Jhankar Mahbub
              </cite>
              <cite className="ps-3 text-sm text-base-500">CEO at Programming Hero</cite>
            </div>
          </section>
        </figure>
        {/* 4 */}
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-base-content">
              {
                '"Salehin brought a fresh perspective to our project. Their innovative solutions during our team competition helped us secure the first place. Their frontend skills are top-notch, and they are a pleasure to work with."'
              }
            </p>
          </blockquote>
          <section className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-base-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-base-900">
                Md. Ar-Rafi
              </cite>
              <cite className="ps-3 text-sm text-base-500">Student at ME, BUET</cite>
            </div>
          </section>
        </figure>
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-base-content">
              {
                '"Salehin consistently delivered high-quality code on time. Their ability to collaborate effectively with our team during hackathons was remarkable. I highly recommend their skills and dedication."'
              }
            </p>
          </blockquote>
          <section className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-base-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-base-900">
                Rafin
              </cite>
              <cite className="ps-3 text-sm text-base-500">Research associate and Instructor at Onnorokom Edtech Ltd.</cite>
            </div>
          </section>
        </figure>
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-base-content">
              {
                '"Working with Salehin was a fantastic experience. Their expertise in frontend development and eye for design helped our project stand out. They were proactive and always ready to tackle challenges head-on."'
              }
            </p>
          </blockquote>
          <section className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-base-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-base-900">
                Ahnaf Hasan Jahangir
              </cite>
              <cite className="ps-3 text-sm text-base-500">Research associate and Instructor at Onnorokom Edtech Ltd.</cite>
            </div>
          </section>
        </figure>

      </div>
    </div>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
