import React from 'react';
import notFoundImg from '../../assets/banner/6324728.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-96'>
            <img src={notFoundImg} />
            <button><Link to="/">Go Back Home page</Link></button>
        </div>
    );
};

export default NotFound;