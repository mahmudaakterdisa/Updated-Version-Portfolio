import React from 'react';
import { Outlet } from 'react-router-dom';
import Portfolio from '../Pages/Portfolio/Portfolio';

const ProjectLayout = () => {
    return (
        <div>
            <Portfolio></Portfolio>
            <Outlet></Outlet>
        </div>
    );
};

export default ProjectLayout;