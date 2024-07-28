import React from 'react';
import PropTypes from 'prop-types';
import { MdDeveloperMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import AboutMe from '../AboutMe/AboutMe';
import MyWork from '../MyWork/MyWork';
import { Helmet } from 'react-helmet';
const Home = props => {
    return (
        <>
        <Helmet>
            <meta name='description' content='Md Salehin Islam is a proficient front end developer with a strong background in creating dynamic and responsive web applications. Explore my portfolio to learn more about my work and skills.'/>
            <meta name="keywords" content="MD Salehin Islam, Salehin, front end developer, web developer, portfolio, best web developer in bangladesh, HTML, CSS, BUET, Utkorsho, JavaScript, React" />
            <meta name='author' content='MD Salehin Islam'/>
            <meta property='og:title' content='MD Salehin Islam | Front End Developer'/>
            <meta property='og:description' content='Explore the world of MD Salehin Islam, a skilled front end developer specializing in creating dynamic and responsive web applications.'/>
            <meta property='og:image' content='https://i.ibb.co/R2hwmP2/IMG-20240111-WA0015-EDIT.jpg'/>
            <meta property='og:url' content='https://mdsalehinislam.netlify.app/'/>
            <meta property='og:url' content='https://mdsalehinislam.vercel.app/'/>
            <meta property='og:url' content='https://salehinislam.com/'/>

        </Helmet>
        <div className='container mx-auto flex flex-col justify-center space-y-8 items-center py-12'>
            <img src="/banner-salehin.png" alt="" className='w-60' />
            <h3 className='text-center text-2xl font-semibold'>
                Hi! This is MD Salehin Islam.🖐
            </h3>
            <h1 className='text-center text-5xl font-bold'>
                Frontend Web Developer
                <MdDeveloperMode className='inline'/></h1>
                <h1 className='text-center text-5xl font-bold flex-col flex md:flex-row items-center'>
                Based in Bangladesh. 
                <div className="bg-green-600 w-10 h-6 flex justify-center items-center">
                    <div className="bg-red-600 rounded-full w-4 h-4"></div>
                </div>
            </h1>
            <p className='text-center'>
                I'm frontend developer from Dhaka, Bangladesh with 1+ year of experience in multiple projects.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <Link to='/contact'>
                <button className='btn btn-outline bg-gradient-to-r from-purple-500 to-pink-500 text-xl py-3 h-16 font-bold text-white rounded-full'>Contact With Me<FaRegArrowAltCircleRight /></button>
                </Link>
                <a href='https://drive.google.com/drive/folders/1Fz_6wtKZ8kkd4B3LXG1kD4rbltLZ7TNG?usp=drive_link'>
                <button className='btn btn-outline text-xl py-3 h-16 font-bold  rounded-full'>My Resume<FaCloudDownloadAlt /></button>
                </a>
            </div>
        </div>
        <AboutMe/>
        <MyWork/>
        </>
    );
};

Home.propTypes = {
    
};

export default Home;