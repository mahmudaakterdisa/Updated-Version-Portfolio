import React from 'react';
import css from './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container  sm:mt-40 mt-40 bg-pink-200'>
            <div className='text-center font-semibold sm:mb-16 mb:16'>
                <h1 className='text-5xl'>BLOGS</h1>
                <hr className='mx-auto w-24 mt-3 border-black' />
            </div>
            <div className='flex flex-col justify-center items-center available-blogs'>
                <h1 className='text-2xl font-semibold'>Comming Soon...</h1>
            </div>
        </div>
    );
};

export default Blogs;