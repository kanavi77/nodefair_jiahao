import React from 'react';
import './index.css';

const NavLinks = () => {
    return (
        <div className="nav-container">
            <a href="#" className="nav-link">
                Companies
            </a>
            <a href="#" className="nav-link">
                Jobs
            </a>
            <a href="#" className="nav-link">
                Interviews <span className="new-tag">NEW</span>
            </a>
            <a href="#" className="nav-link">
                Salaries
            </a>
            <a href="#" className="nav-link">
                Reviews
            </a>
            <a href="#" className="nav-link">
                Blog
            </a>
            <div className="relative">
                <a href="#" className="nav-link nav-link-with-new">
                    Tools <span className="new-tag ml-1">NEW</span>
                </a>
            </div>
        </div>
    );
};

export default NavLinks;
