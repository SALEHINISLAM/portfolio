import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <div className='container mx-auto'>
            <div className="flex flex-col">
                <ul>
                    <li>Email: <a href="mailto:msionlinekingdom@gmail.com">
                        msionlinekingdom@gmail.com
                        </a></li>
                </ul>
            </div>
        </div>
    );
};

Contact.propTypes = {
    
};

export default Contact;