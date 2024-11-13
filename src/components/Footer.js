// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <p className="text-xl font-bold drop-shadow-lg">© {new Date().getFullYear()} Suman Neupane. All rights reserved.</p>
                    <p className="text-md mt-2 text-gray-100">
                        Email: <a href="mailto:Megraj58447@gmail.com" className="text-blue-200 hover:underline">Megraj58447@gmail.com</a>
                    </p>
                    <p className="text-md text-gray-100">Contact: <span className="text-blue-200">0273085171</span></p>
                    <p className="text-md text-gray-100">LinkedIn: <a href="https://www.linkedin.com/in/suman-neupane-3417421a2/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:underline">View Profile</a></p>
                </div>
                <div className="footer-icons flex justify-center md:justify-end space-x-6 text-4xl">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-gray-300 transition duration-200" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="hover:text-gray-300 transition duration-200" />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
                        <FontAwesomeIcon icon={faFacebookMessenger} className="hover:text-gray-300 transition duration-200" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;