import React from "react";
import PropTypes from "prop-types";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { Helmet } from "react-helmet";
const Contact = (props) => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Contact | Salehin</title>
        <meta
          name="description"
          content="Get in touch with MD Salehin Islam , a front end developer, whether you have a project in mind or just want to say hello, feel free to contact me. "
        />
        <meta
          name="keywords"
          content="contact MD Salehin Islam, contact Salehin, front end developer, web developer, portfolio, best web developer in bangladesh, HTML, CSS, BUET, Utkorsho, JavaScript, React, contact, get in touch"
        />
        <meta name="author" content="MD Salehin Islam" />
        <meta
          property="og:title"
          content="MD Salehin Islam | Front End Developer"
        />
        <meta
          property="og:description"
          content="Get in touch with MD Salehin Islam , a front end developer, whether you have a project in mind or just want to say hello, feel free to contact me. "
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/R2hwmP2/IMG-20240111-WA0015-EDIT.jpg"
        />
        <meta
          property="og:url"
          content="https://mdsalehinislam.netlify.app/contact"
        />
        <meta
          property="og:url"
          content="https://mdsalehinislam.vercel.app/contact"
        />
        <meta property="og:url" content="https://salehinislam.com/contact" />
        <link
          rel="canonical"
          href="https://mdsalehinislam.netlify.app/contact"
        />
        <link
          rel="canonical"
          href="https://mdsalehinislam.vercel.app/contact"
        />
        <link rel="canonical" href="https://salehinislam.com/contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="flex flex-col space-y-8 py-8 justify-center items-center">
        <h3 className="text-2xl font-semibold text-center">
          Connect with me🙋‍♂️.
        </h3>
        <h1 className="text-5xl font-bold text-center">Get in touch</h1>
        <p className="text-center text-xl">
          I'd love to hear from you. If you have any question, comments or
          feedback please mail me. I'll reply you as soon as possible.
        </p>
        <p className="text-center text-xl ">
          You can also connect me on social media. I also active there.
        </p>
        <ul className="flex flex-col font-semibold text-2xl space-y-5">
          <li>
            <MdOutlineMarkEmailUnread className="inline" />
            Email:{" "}
            <a href="mailto:msionlinekingdom@gmail.com" target="_blank">
              msionlinekingdom@gmail.com
            </a>
          </li>
          <li>
            <ImFacebook2 className="inline" />
            Facebook:{" "}
            <a
              href="https://www.facebook.com/mohammad.salehin.islam.27"
              target="_blank"
            >
              facebook.com/mohammad.salehin.islam.27
            </a>
          </li>
          <li>
            <FaLinkedin className="inline" />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/md-salehin-islam-5458112aa/"
              target="_blank"
            >
              linkedin.com/in/md-salehin-islam-5458112aa/
            </a>
          </li>
          <li>
            <FaGithubSquare className="inline" />
            Github:{" "}
            <a href="https://github.com/SALEHINISLAM" target="_blank">
              github.com/SALEHINISLAM
            </a>
          </li>
        </ul>
        <h4 className="font-bold text-xl py-10">
          Tips: You can keep your sharp eye on my github repository to see my
          latest work.
        </h4>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
