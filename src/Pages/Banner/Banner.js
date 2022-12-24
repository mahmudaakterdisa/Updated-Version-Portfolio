import React from 'react';

import css from './Banner.css'

const Banner = () => {
    return (
        <div className='Banner-container flex flex-col items-center justify-center sm:my-40'>

            <div className='mb-8 text-6xl text-center'>
                <p>Hello,<br /> I'm <span className='text-pink-400 font-semibold'>Mahmuda Ater Disa</span></p>
                <p>A Web-Developer</p>
            </div>
            <div>
                <button className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">Download Resume</button>
            </div>


        </div>
    );
};

export default Banner;