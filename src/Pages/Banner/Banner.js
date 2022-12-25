import React from 'react';

import css from './Banner.css'

const Banner = () => {
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
        <div className='Banner-container flex flex-col items-center justify-center sm:mt-40 mt-40'>

            <div className='mb-8 text-6xl text-center'>
                <p>Hello,<br /> I'm <span className='text-pink-400 font-semibold'>Mahmuda Ater Disa</span></p>
                <p>A Web-Developer</p>
            </div>
            <div>
                <button onClick={onButtonClick} className="btn btn-outline bg-black text-pink-200 hover:text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none">Download Resume</button>
            </div>


        </div>
    );
};

export default Banner;