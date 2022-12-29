import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Javascript from '../Projects/Javascript/Javascript';
import AOS from "aos";
import "aos/dist/aos.css";
import css from './Portfolio.css'

const Portfolio = () => {
    useEffect(() => {
        AOS.init({
            once: "true",
            duration: "800"
        });
        AOS.refresh();
    }, []);

    const [javaScript, setJavaScript] = useState(false);
    const [react, setReact] = useState(false);
    const [redux, setRedux] = useState(false);
    const [all, setAll] = useState(true);


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
        <div className='sm:mt-40 mt-40 portfolio-container'>

            <div className='text-center font-semibold mb-16'>
                <h1 data-aos="fade-right" data-aos-delay="50" className='text-5xl'>PROJECTS</h1>
                <hr data-aos="fade-left" data-aos-delay="400" className='mx-auto w-36 mt-3 border-black' />
            </div>

            <div>
                <div data-aos="fade" data-aos-easing="ease-in-sine" data-aos-delay="850" className='project-categories flex flex-row justify-around text-xl mb-5 cursor-pointer'>

                    <h2 className={all ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleAll} >
                        ALL
                    </h2>
                    <h2 className={javaScript ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleJava}>JAVASCRIPT</h2>
                    <h2 className={react ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleReact}>REACT-JS</h2>
                    <h2 className={redux ? 'text-xl w-36 bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 w-40 h-12 flex flex-col justify-center items-center text-xl ' : ' '} onClick={handleRedux}>REDUX</h2>
                </div>

                <div className='project-container'>

                    <div  >
                        {
                            javaScript ?
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10'>
                                    <div data-aos="fade-right" data-aos-delay="350" className=' border border-black'>
                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/Tv9TTHX/News-Portal2.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className=' text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Online News Portal</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>JavaScript/HTML/CSS/Bootstrap</p>
                                                </div>
                                                <div className='buttonAnimation  flex flex-col justify-center items-center'>

                                                    <a href="https://remarkable-llama-1cee47.netlify.app/" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>
                                        {/* javascript project2 */}
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="350" className=' border border-black'>
                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/L1WKWcx/football-java.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className=' text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Player Selection</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>JavaScript/HTML/CSS/Bootstrap</p>
                                                </div>
                                                <div className='buttonAnimation flex flex-col justify-center items-center buttonAnimation'>

                                                    <a href="https://eclectic-cucurucho-7f621a.netlify.app" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                :
                                ''

                        }
                    </div >

                    <div>
                        {
                            react ?
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10'>
                                    <div data-aos="fade-right" data-aos-delay="350" className='border border-black'>

                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/cxdSRRZ/Capture.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className='text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Online Delivery Service</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>React/MongoDB/Node.js</p>
                                                </div>
                                                <div className='buttonAnimation flex flex-col justify-center items-center'>

                                                    <a href="https://taupe-alpaca-c0a696.netlify.app" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="350" className='border border-black'>
                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/9VPY6MM/Capturep.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className='text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Personal Portfolio</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>React/MongoDB/Node.js</p>
                                                </div>
                                                <div className='buttonAnimation flex flex-col justify-center items-center'>
                                                    <a href="https://cheerful-cuchufli-780511.netlify.app" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>
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
                                        <h1 className='text-2xl font-semibold'>Comming soon...</h1>
                                    </div>
                                </div>
                                :
                                ''
                        }
                    </div>
                    <div>
                        {
                            all ?
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10'>
                                    <div data-aos="fade-right" data-aos-delay="350" className='border border-black'>

                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/cxdSRRZ/Capture.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className='text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Online Delivery Service</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>React/MongoDB/Node.js</p>
                                                </div>
                                                <div className='buttonAnimation flex flex-col justify-center items-center'>
                                                    <a href="https://taupe-alpaca-c0a696.netlify.app" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="350" className='border border-black'>
                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/9VPY6MM/Capturep.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className='text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Personal Portfolio</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>React/MongoDB/Node.js</p>
                                                </div>
                                                <div className='buttonAnimation flex flex-col justify-center items-center'>

                                                    <a href="https://cheerful-cuchufli-780511.netlify.app" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* js projects */}

                                    <div data-aos="fade-right" data-aos-delay="350" className=' border border-black'>
                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/Tv9TTHX/News-Portal2.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className='text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Online News Portal</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>JavaScript/HTML/CSS/Bootstrap</p>
                                                </div>
                                                <div className='buttonAnimation  flex flex-col justify-center items-center'>

                                                    <a href="https://remarkable-llama-1cee47.netlify.app/" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>
                                        {/* javascript project2 */}
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="350" className=' border border-black'>
                                        <div className='relative'>
                                            <div className='imageDiv' >
                                                <img src="https://i.ibb.co/L1WKWcx/football-java.jpg" alt="" />
                                            </div>
                                            <div className='linkContainer opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                                <div className='text-center projectAnimation'>
                                                    <p className='text-2xl font-bold'>Player Selection</p>

                                                    <p className='text-xl text-pink-500 font-semibold'>JavaScript/HTML/CSS/Bootstrap</p>
                                                </div>
                                                <div className='buttonAnimation flex flex-col justify-center items-center'>

                                                    <a href="https://eclectic-cucurucho-7f621a.netlify.app" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                :
                                ''
                        }
                    </div>



                </div >
            </div >
        </div >
    );
};

export default Portfolio;