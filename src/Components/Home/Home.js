import React from 'react';
import Banner from './Banner';
import Extra1 from './Extra1';
import Info from './Info';
import Reviews from './Reviews';
import Tools from './Tool';

const Home = () => {
    return (
        <div>
            <h2 className='p-10 bg-emerald-300'>helllo</h2>
            <Banner></Banner>
            <Tools></Tools>
            <Extra1></Extra1>
            <Reviews></Reviews>
            <Info></Info>
        </div>
    );
};

export default Home;