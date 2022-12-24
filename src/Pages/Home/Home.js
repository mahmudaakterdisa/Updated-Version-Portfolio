import React from 'react';
import Skill from '../../Skill/Skill';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';

import css from './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='banner'>
                <Banner></Banner>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Portfolio></Portfolio>
            </div>




        </div>
    );
};

export default Home;