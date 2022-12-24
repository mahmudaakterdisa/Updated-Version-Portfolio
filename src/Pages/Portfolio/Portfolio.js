import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Javascript from '../Projects/Javascript/Javascript';
import css from './Portfolio.css'

const Portfolio = () => {
    const [javaScript, setJavaScript] = useState(false);
    const [react, setReact] = useState(false);
    const [redux, setRedux] = useState(false);
    const [all, setAll] = useState(true);
    console.log(redux);

    const handleJava = () => {
        setJavaScript(true);
        setReact(false);
        setAll(false);
        setRedux(false);

    }

    const handleReact = () => {
        setReact(true);
        setJavaScript(false);
        setRedux(false);
        setAll(false);
    }

    const handleRedux = () => {
        setRedux(true);
        setReact(false);
        setJavaScript(false);
        setAll(false);
    }
    const handleAll = () => {
        setRedux(false);
        setReact(false);
        setJavaScript(false);
        setAll(true);
    }


    return (
        <div className='my-40 portfolio-container'>

            <div className='about-text text-center font-semibold mb-16'>
                <h1 className='text-5xl'>PROJECTS</h1>
                <hr className='mx-auto w-36 mt-3 border-black' />
            </div>

            <div className='project-categories'>
                <div className='flex flex-row justify-around text-xl mb-16'>

                    <h2 className={all ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleAll} >
                        ALL
                    </h2>
                    <h2 className={javaScript ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleJava}>JAVASCRIPT</h2>
                    <h2 className={react ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleReact}>REACT-JS</h2>
                    <h2 className={redux ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleRedux}>REDUX</h2>
                </div>

                <div className='project-container'>

                    <div>
                        {
                            javaScript ?
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <img src="https://i.ibb.co/Tv9TTHX/News-Portal2.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/L1WKWcx/football-java.jpg" alt="" />
                                    </div>
                                </div>
                                :
                                ''

                        }
                    </div>

                    <div>
                        {
                            react ?
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2'>
                                    <div>
                                        <img src="https://i.ibb.co/cxdSRRZ/Capture.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/9VPY6MM/Capturep.jpg" alt="" />
                                    </div>
                                </div>
                                :
                                ''
                        }
                    </div>
                    <div>
                        {
                            redux ?
                                <div className='flex flex-col justify-center items-center'>
                                    <div>
                                        <h1 className='text-2xl'>Comming soon...</h1>
                                    </div>
                                </div>
                                :
                                ''
                        }
                    </div>
                    <div>
                        {
                            all ?
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2'>
                                    <div className='border border-black'>
                                        <img src="https://i.ibb.co/cxdSRRZ/Capture.jpg" alt="" />
                                    </div>
                                    <div className='border border-black'>
                                        <img src="https://i.ibb.co/Tv9TTHX/News-Portal2.jpg" alt="" />
                                    </div>
                                    <div className='border border-black'>
                                        <img src="https://i.ibb.co/9VPY6MM/Capturep.jpg" alt="" />
                                    </div>
                                    <div className='border border-black'>
                                        <img src="https://i.ibb.co/L1WKWcx/football-java.jpg" alt="" />
                                    </div>

                                </div>
                                :
                                ''
                        }
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Portfolio;