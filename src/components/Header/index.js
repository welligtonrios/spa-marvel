import React from 'react';
import './style.css'

function Header({ logo, icon }) {
    return (
        <header  id="header">
            <a href="#" className="logo">
                {logo}
                {icon}
            </a>
            
           <nav className="navbar">
                <ul className="nav-list">
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">Services</a>
                    <a href="#" className="nav-item">Contact</a>
                </ul>
           </nav>
        </header>
    );
}

export default Header;