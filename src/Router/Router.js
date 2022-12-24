import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import About from '../Pages/About/About';
import Blogs from '../Pages/Blogs/Blogs';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Javascript from '../Pages/Projects/Javascript/Javascript';

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/portfolio',
            element: <Portfolio></Portfolio>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },

    ]
}])