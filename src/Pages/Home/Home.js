import React from 'react';
import Skill from '../../Skill/Skill';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';

import css from './Home.css'

const Home = () => {
    return (
        <div className='home-container'>

            <div>
                <Header></Header>
            </div>
            {/* all */}
            <div id='banner'>
                <Banner></Banner>
            </div>
            <div id='about'>
                <About></About>
            </div>
            <div id='portfolio'>
                <Portfolio></Portfolio>
            </div>

            <div id='blog'>
                <Blogs></Blogs>
            </div>

            <div id='contact'>
                <Contact></Contact>
            </div>


        </div>
    );
};

export default Home;