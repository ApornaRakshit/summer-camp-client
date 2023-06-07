import React from 'react';
import Banner from '../Banner/Banner';
import Instructor from '../Instructor/Instructor';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Instructor></Instructor>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;