import React from 'react';
import Banner from './Banner';
import BusinessSummary from './Bussiness';
import Extra1 from './Extra1';
import Info from './Info';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Extra1></Extra1>
            <Reviews></Reviews>
            <Info></Info>
        </div>
    );
};

export default Home;