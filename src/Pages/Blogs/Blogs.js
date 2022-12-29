import React, { useEffect } from 'react';
import css from './Blogs.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
    useEffect(() => {
        AOS.init({
            once: "true",
            duration: "800"
        });
        AOS.refresh();
    }, []);
    return (
        <div className='blog-container  sm:mt-40 mt-40'>
            <div className='text-center font-semibold sm:mb-16 mb:16'>
                <h1 data-aos="fade-right" data-aos-delay="50" className='text-5xl'>BLOGS</h1>
                <hr data-aos="fade-left" data-aos-delay="50" className='mx-auto w-24 mt-3 border-black' />
            </div>
            <div className='available-blogs'>

                <div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10'>
                        <div data-aos="fade-right" data-aos-delay="350" className=' border border-black'>
                            <div className='relative'>
                                <div className='imageDiv' >
                                    <img src="https://i.ibb.co/myfXt5r/imbb8.jpg" alt="" />
                                </div>
                                <div className='bloglink opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                    <div className='text-center blogAnimation'>
                                        <p className='text-2xl font-bold text-pink-500 '>Loading issues of imgbb photo?</p>


                                    </div>
                                    <div className='blogbuttonAnimation  flex flex-col justify-center items-center'>

                                        {/* <a href='https://remarkable-llama-1cee47.netlify.app/' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">View Site</a> */}

                                        <a href="https://medium.com/@dishamirza.h/loading-issues-of-imgbb-photo-5ec262eb9878" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                    </div>

                                </div>
                            </div>
                            {/* Blog2 */}
                        </div>
                        <div data-aos="fade-left" data-aos-delay="350" className=' border border-black'>
                            <div className='relative'>
                                <div className='imageDiv' >
                                    <img src="https://i.ibb.co/myfXt5r/imbb8.jpg" alt="" />
                                </div>
                                <div className='bloglink opacity-0 hover:opacity-100 h-full left-0 bg-pink-200 flex flex-col justify-center items-center gap-5 absolute w-full top-0' >
                                    <div className='text-center blogAnimation'>
                                        <p className='text-2xl font-bold text-pink-500 '>Loading issues of imgbb photo?</p>
                                    </div>
                                    <div className='blogbuttonAnimation flex flex-col justify-center items-center'>

                                        {/* <a href='https://remarkable-llama-1cee47.netlify.app/' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">View Site</a> */}

                                        <a href="https://medium.com/@dishamirza.h/loading-issues-of-imgbb-photo-5ec262eb9878" target={'_blank'} rel='noreferrer' className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">view site</a>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div >




            </div >
        </div>

    );
};

export default Blogs;