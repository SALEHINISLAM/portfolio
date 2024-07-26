import React from 'react';
import PropTypes from 'prop-types';
import { RiContractLine } from "react-icons/ri";

const Services = props => {
    return (
        <div className='mx-auto container flex flex-col py-12 space-y-8 justify-center'>
            <h3 className='text-2xl font-semibold text-center'>Services</h3>
            <h1 className='text-5xl font-bold text-center'>I am available for ...</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-base-200 p-4 md:p-8 rounded-xl hover:rounded-3xl flex flex-col gap-6">
                <figure className='bg-base-300 w-1/2 flex justify-center p-3 rounded-lg shadow-md'>
                    <RiContractLine className='size-12'/>
                </figure>
                <h2 className='text-4xl font-bold'>Contractual jobs/project</h2>
                <p>
                    This type of work is my favorite. Email me for further discussion.
                </p>
                </div>
            </div>
        </div>
    );
};

Services.propTypes = {
    
};

export default Services;