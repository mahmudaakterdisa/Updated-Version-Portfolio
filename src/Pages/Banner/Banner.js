import React, { useEffect } from 'react';

import css from './Banner.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import Typewriter from 'typewriter-effect';


const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Mahmuda Akter_Disa_Lebenslauf.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Mahmuda Akter_Disa_Lebenslauf.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='Banner-container flex flex-col  items-center justify-center mt-40' >

            <div data-aos="fade" data-aos-easing="ease-in-sine" data-aos-delay="300" data-aos-duration="1500" className='mb-8 text-6xl text-center'>
                <p>Hello,<br /> I'm <span className='text-pink-400 font-semibold'>Mahmuda Akter Disa</span></p>
                <p>A<span><Typewriter
                    options={{
                        strings: ['Full-Stack Developer', 'Web-Developer', 'Full-Stack Developer', 'Web-Developer', 'Full-Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                /> </span></p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="800" className='buttonIndex'>
                <button onClick={onButtonClick} className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">Download Resume</button>
            </div>


        </div>
    );
};

export default Banner;