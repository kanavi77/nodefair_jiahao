import React from 'react';
import { Menu } from 'antd';
import './index.css'; // Make sure to import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <div className="logo-and-menu-container">
                    <img
                        src="https://placehold.co/200x50/green/white?text=NODEFLAIR"
                        alt="NODEFLAIR logo"
                        className="logo-image"
                    />
                    <div className="location-dropdown">
                        <a href="#" className="location-link">
                            Singapore <i className="fas fa-caret-down"></i>
                        </a>
                    </div>
                    <a
                        href="#"
                        className="contribute-button"
                    >
                        Contribute
                    </a>
                    <a
                        href="#"
                        className="signin-button"
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
