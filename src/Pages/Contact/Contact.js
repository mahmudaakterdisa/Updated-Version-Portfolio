import React from 'react';
import css from './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container  sm:my-40 my-40'>
            <div className='text-center font-semibold sm:mb-16 mb:16'>
                <h1 className='text-5xl'>CONTACT</h1>
                <hr className='mx-auto w-36 mt-3 border-black' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-2xl'>Have a question or want to work together?</p>

                <div className='mt-16 '>
                    <form>

                        <input type="name" placeholder="Name" className="input input-bordered text-black border border-black input-md w-full w-full bg-pink-200 sm:mt-3 hover:shadow-lg hover:shadow-indigo-300 placeholder-black" />
                        <input type="email" placeholder="Email" className="input input-bordered border border-black input-md w-full w-full bg-pink-200 mt-3 hover:shadow-lg hover:shadow-indigo-300 placeholder-black" />
                        <textarea className="textarea textarea-bordered border border-black w-full bg-pink-200 mt-3 hover:shadow-lg hover:shadow-indigo-300 placeholder-black h-52" placeholder="Your Message"></textarea>
                    </form>
                </div>
                <div className='mt-3 pb-3'>
                    <button className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;