import React from 'react';
import Banner from '../Banner/Banner';

import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import TeamWork from '../TeamWork/TeamWork';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Summer Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <PopularClass></PopularClass>
            <TeamWork></TeamWork>
        </div>
    );
};

export default Home;