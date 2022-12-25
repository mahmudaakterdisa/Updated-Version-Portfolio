import React from 'react';
import Skill from '../../Skill/Skill';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

import css from './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Portfolio></Portfolio>
            </div>

            <div>
                <Blogs></Blogs>
            </div>

            <div>
                <Contact></Contact>
            </div>


        </div>
    );
};

export default Home;