import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.css';
import Navbar from './Navbar/Navbar';

const Header = () => {
    const [active, setActive] = useState(true);
    console.log(active)
    const [activeabout, setActiveabout] = useState(false);

    const [portfolio, setPortfolio] = useState(false);
    const [blog, setBlog] = useState(false);
    const [contact, setContact] = useState(false);



    const handlecolor = () => {
        setActive('true');
        setActiveabout(false);
        setPortfolio(false);
        setBlog(false);
        setContact(false);

    }
    const handlecolorabout = () => {
        setActiveabout(true);
        setActive(false);
        setPortfolio(false);
        setBlog(false);
        setContact(false);

    }
    const handlecolorportfolio = () => {
        setPortfolio(true);
        setActiveabout(false);
        setActive(false);
        setBlog(false);
        setContact(false);
    }

    const handlecolorBlog = () => {
        setBlog(true);
        setPortfolio(false);
        setActiveabout(false);
        setActive(false);
        setContact(false);
    }

    const handlecolorContact = () => {

        setContact(true);
        setBlog(false);
        setPortfolio(false);
        setActiveabout(false);
        setActive(false);

    }



    return (
        <div className='Header-container'>
            <div><Navbar></Navbar></div>
            <div className="navbar bg-pink-200 border-b border-b-black flex flex-row justify-between">
                <div className="navbar-start sm:hidden max-sm:visible">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="navList menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-32">

                            <li onClick={handlecolor} className={active ? "bg-black text-pink-200 " : " "}><Link to='/'>HOME</Link></li>
                            <li onClick={handlecolorabout} className={activeabout ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300" : ""}><Link to='/about'>ABOUT</Link></li>

                            <li onClick={handlecolorportfolio} className={portfolio ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300" : ""}><Link to='/portfolio'>PORTFOLIO</Link></li>
                            <li onClick={handlecolorBlog} className={blog ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300" : ""}><Link to='/blogs'>BLOGS</Link></li>
                            <li onClick={handlecolorContact} className={contact ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300" : ""}><Link to='/contact'>CONTACT</Link></li>

                        </ul>
                    </div>

                </div>
                <div className='nav-image'>
                    <a className="btn btn-ghost icon normal-case">
                        <img src="https://cdn-icons-png.flaticon.com/512/49/49409.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center max-sm:hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 navList">
                        <li onClick={handlecolor} className={active ? "bg-black text-pink-200 " : " "} ><Link to='/'>HOME</Link></li>
                        <li onClick={handlecolorabout} className={activeabout ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300" : ""}><Link to='/about'>ABOUT</Link></li>

                        <li onClick={handlecolorportfolio} className={portfolio ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300 rounded-none" : ""}><Link to='/portfolio'>PORTFOLIO</Link></li>
                        <li onClick={handlecolorBlog} className={blog ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300" : ""}><Link to='/blogs'>BLOGS</Link></li>
                        <li onClick={handlecolorContact} className={contact ? "bg-black text-pink-200 hover:shadow-lg hover:shadow-indigo-300" : ""}><Link to='/contact'>CONTACT</Link></li>

                    </ul>
                </div>

            </div>
        </div >
    );
};

export default Header;