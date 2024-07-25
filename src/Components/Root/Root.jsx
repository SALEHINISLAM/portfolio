import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = props => {
    return (
        <div className=''>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;