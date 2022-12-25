import React from 'react';
import Skill from '../../Skill/Skill';
import { GiVacuumCleaner } from "react-icons/gi";
import { DiResponsive } from "react-icons/di";
import { MdSyncProblem } from "react-icons/md";
import { GiRocketFlight } from "react-icons/gi";

import css from './About.css';

const About = () => {
    return (
        <div className='about-container sm:mt-40 mt-40'>

            <div className='text-center font-semibold mb-16'>
                <h1 className='text-5xl'> ABOUT</h1>
                <hr className='mx-auto w-24 mt-3 border-black' />
            </div>
            <div className='icon-container grid grid-cols-4 gap-20'>


                <div className='icon1 flex flex-col sm:flex-col md:flex-col items-center justify-between bg-pink-200 hover:shadow-lg hover:shadow-indigo-300 py-2'>
                    <div><GiVacuumCleaner size={80}></GiVacuumCleaner></div>
                    <div className='quality-description1 text-center'>
                        <h2 className='text-xl'>Clean & Readable</h2>
                        <p className='text-lg font-normal text-gray-700 px-1'>
                            Expertise in keeping code clean and instructive using comments
                        </p>

                    </div>

                </div>
                {/* Icon2 */}
                <div className='icon1 py-2 flex flex-col sm:flex-col md:flex-col items-center justify-between bg-pink-200 hover:shadow-lg hover:shadow-indigo-300'>
                    <DiResponsive size={100}></DiResponsive>
                    <div className='quality-description1 text-center'>
                        <h2 className='text-xl'>Responsive</h2>
                        <p className='text-lg font-normal text-gray-700 px-1'>
                            My websites are compatible with all Breakpoints.
                        </p>

                    </div>

                </div>
                {/* Icon3 */}
                <div className='icon1 py-2 flex flex-col sm:flex-col md:flex-col items-center justify-between bg-pink-200 hover:shadow-lg hover:shadow-indigo-300'>
                    <MdSyncProblem size={80}></MdSyncProblem>
                    <div className='quality-description1 text-center'>
                        <h2 className='text-xl'>Problem Solving</h2>
                        <p className='text-lg font-normal text-gray-700 px-1'>
                            Knowledgeable about how to resolve problems
                        </p>

                    </div>

                </div>
                {/* Icon4 */}
                <div className='icon1 flex flex-col sm:flex-col md:flex-col items-center justify-around bg-pink-200 hover:shadow-lg hover:shadow-indigo-300 py-2'>
                    <GiRocketFlight size={80}></GiRocketFlight>
                    <div className='quality-description1 text-center'>
                        <h2 className='text-xl'>Dynamic</h2>
                        <p className='text-lg font-normal text-gray-700 px-1'>
                            Websites don't need to be static, and I enjoy giving them life.
                        </p>

                    </div>

                </div>





            </div>

            <div>
                <Skill></Skill>
            </div>

        </div>
    );
};

export default About;