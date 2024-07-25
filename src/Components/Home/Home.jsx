import React from 'react';
import PropTypes from 'prop-types';
import { MdDeveloperMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
const Home = props => {
    return (
        <div className='container mx-auto flex flex-col justify-center space-y-8 items-center'>
            <img src="/public/banner-salehin.png" alt="" className='w-60' />
            <h3 className='text-center text-2xl font-semibold'>
                Hi! This is MD Salehin Islam.🖐
            </h3>
            <h1 className='text-center text-5xl font-bold'>
                Frontend Web Developer
                <MdDeveloperMode className='inline'/></h1>
                <h1 className='text-center text-5xl font-bold flex flex-row items-center'>
                Based in Bangladesh. 
                <div className="bg-green-600 w-10 h-6 flex justify-center items-center">
                    <div className="bg-red-600 rounded-full w-4 h-4"></div>
                </div>
            </h1>
            <p>
                I'm frontend developer from Dhaka, Bangladesh with 1+ year of experience in multiple projects.
            </p>
            <div className="flex flex-row gap-8">
                <Link to='/contact'>
                <button className='btn btn-outline bg-gradient-to-r from-purple-500 to-pink-500 text-xl py-3 h-16 font-bold text-white rounded-full'>Contact With Me<FaRegArrowAltCircleRight /></button>
                </Link>
                <a href='/salehinwebdesign cv.pdf'>
                <button className='btn btn-outline text-xl py-3 h-16 font-bold  rounded-full'>My Resume<FaCloudDownloadAlt /></button>
                </a>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;