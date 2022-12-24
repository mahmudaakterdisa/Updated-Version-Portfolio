import React from 'react';
import image4 from '../Images/me4.jpg';
import { AiTwotoneStar } from "react-icons/ai";
import css from './Skill.css'
const Skill = () => {
    return (
        <div className='skill-container flex justify-between'>

            <div className="bio-container">


                <img src={image4} alt="Disha" />


                <div className='mt-2  bio-text mx-auto bg-pink-200'>
                    <p className='text-xl font-normal font-semibold'>Who Am I?</p>
                    <p className='p-2'>I'm  a Front-End Developer.I have created a variety of web pages. I am passionate about responsive websites and cutting-edge, pixel-perfect, gorgeous interfaces.</p>
                </div>



            </div>

            <div className='all-skill pt-56 flex items-center justify-end'>
                <div className='skill-text w-full text-pink-200'>
                    <h2>SKILL</h2>
                </div>
            </div>

            <div className='my-skill '>
                <div className='flex justify-center items-center'>
                    <div className=' px-2 text-center bg-pink-200 h3-div'>
                        <h3 className='text-black text-xl'>HTML5</h3>

                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left" style={{ width: '90%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>90%</p>
                        </div>
                    </div>

                </div>
                {/* skill2 */}
                <div className='flex justify-center items-center'>
                    <div className='px-2 text-center bg-pink-200  h3-div'>
                        <h3 className='text-black text-xl'>CSS3</h3>
                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left" style={{ width: '90%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>90%</p>
                        </div>
                    </div>

                </div>
                {/* skill3 */}
                <div className='flex justify-center items-center'>
                    <div className='px-2 text-center bg-pink-200  h3-div'>
                        <h3 className='text-black text-xl'>REACT</h3>
                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left opacity-90" style={{ width: '85%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>85%</p>
                        </div>
                    </div>

                </div>
                {/* skill4 */}
                <div className=' flex justify-center items-center'>
                    <div className='px-2 text-center bg-pink-200  h3-div'>
                        <h3 className='text-black text-xl'>JavaScript</h3>
                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left opacity-90" style={{ width: '85%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>85%</p>
                        </div>
                    </div>

                </div>
                {/* skill5 */}
                <div className=' flex justify-center items-center'>
                    <div className='px-2 text-center bg-pink-200  h3-div'>
                        <h3 className='text-black text-xl'>Redux</h3>
                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left opacity-70" style={{ width: '70%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>70%</p>
                        </div>
                    </div>

                </div>
                {/* skill6 */}
                <div className=' flex justify-center items-center'>
                    <div className='px-2 text-center bg-pink-200  h3-div'>
                        <h3 className='text-black text-xl'>MongoDB</h3>
                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left opacity-70" style={{ width: '70%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>70%</p>
                        </div>
                    </div>

                </div>
                {/* skill7 */}
                <div className='flex justify-center items-center'>
                    <div className='px-2 text-center bg-pink-200  h3-div'>
                        <h3 className='text-black text-xl '>Node.js</h3>
                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left opacity-70" style={{ width: '70%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>70%</p>
                        </div>
                    </div>

                </div>
                {/* skill8 */}
                <div className=' flex justify-center items-center'>
                    <div className='px-2 text-center bg-pink-200  h3-div'>
                        <h3 className='text-black  text-xl'>UI Design</h3>
                    </div>
                    <div className='w3-section w3-light-grey flex justify-between w-full'>
                        <div className="bar w3-container w3-padding-small bg-pink-500 text-left opacity-50" style={{ width: '50%' }}></div>
                        <div className='flex items-center mx-auto'>
                            <p className='text-black'>50%</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Skill;