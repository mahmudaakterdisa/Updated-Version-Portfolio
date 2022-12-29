import React, { useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import css from './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    useEffect(() => {
        AOS.init({
            once: "true",
            duration: "800"
        });
        AOS.refresh();
    }, []);

    const handleContact = (event) => {
        event.preventDefault();


        emailjs
            .sendForm(
                'service_ryg7ydm',
                'template_uaryn8v',
                form.current,
                'LE1oEemEZEWsEVdq3'
            )
            .then(
                (result) => {
                    alert('message sent successfully...');
                    console.log(result.text);
                    event.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );

    }
    return (
        <div className='contact-container  sm:mt-40 mt-40'>
            <div className='text-center font-semibold mb-16 sm:mb-16'>
                <h1 data-aos="fade-right" data-aos-delay="50" className='text-5xl'>CONTACT</h1>
                <hr data-aos="fade-left" data-aos-delay="400" className='mx-auto w-36 mt-3 border-black' />
            </div>
            <div className='flex flex-col sm:flex-col justify-center items-center my-contact'>
                <div data-aos="fade-left" data-aos-delay="850">
                    <p className='text-2xl contact-question'>Have a question or want to work together?</p>
                </div>

                <div data-aos="flip-right" data-aos-delay="900" className='mt-16 contact-form'>
                    <form ref={form} onSubmit={handleContact}>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered text-black border border-black input-md w-full w-full bg-pink-200 sm:mt-3 hover:shadow-lg hover:shadow-indigo-300 placeholder-black" />
                        <input type="email" name='user_email' placeholder="Email" className="input input-bordered border border-black input-md w-full w-full bg-pink-200 mt-3 hover:shadow-lg hover:shadow-indigo-300 placeholder-black" />
                        <textarea name='message' className="textarea textarea-bordered border border-black w-full bg-pink-200 mt-3 hover:shadow-lg hover:shadow-indigo-300 placeholder-black h-52" placeholder="Your Message"></textarea>

                        <div className=' flex flex-col justify-center items-center  pb-3'>
                            <button className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">SUBMIT</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;