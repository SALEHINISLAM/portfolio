import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ErrorPage = props => {
    return (
        <>
        <Navbar></Navbar>
        <div className='container mx-auto flex flex-col justify-center items-center h-screen'>
            <h1 className='text-7xl font-extrabold'>Ooops!</h1>
            <br />
            <p className='text-2xl font-semibold'>You can found nothing here. Please go back home.</p>
            <Link to='/'>
            <button className='btn btn-ghost mt-8 text-3xl font-bold p-3 h-20 btn-outline'>Home</button>
            </Link>
        </div>
        </>
        
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;