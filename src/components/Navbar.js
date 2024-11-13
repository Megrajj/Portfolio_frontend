// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white fixed top-0 left-0 w-full z-10 shadow-lg transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center p-5">
                <Link to="/" className="text-5xl font-bold hover:opacity-90 transition-opacity duration-200">Suman Neupane</Link>
                <button onClick={toggleMenu} className="md:hidden flex items-center p-2 rounded hover:bg-gray-700 focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto w-full`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8">
                        <li>
                            <Link to="/" className="block hover:bg-gray-700 px-4 py-3 rounded transition duration-200 text-lg">About Me</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="block hover:bg-gray-700 px-4 py-3 rounded transition duration-200 text-lg">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/services" className="block hover:bg-gray-700 px-4 py-3 rounded transition duration-200 text-lg">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block hover:bg-gray-700 px-4 py-3 rounded transition duration-200 text-lg">Contact</Link>
                        </li>
                    </ul>
                </div>
                
                {/* Social Links in Navbar */}
                <div className="hidden md:flex space-x-6 text-3xl">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-gray-300 transition duration-200" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="hover:text-gray-300 transition duration-200" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-300 transition duration-200" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;