import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ProfilePicture from '../assets/profile.jpg'; // Ensure this image exists
import '../styles/tailwind.css'; // Ensure Tailwind CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
            .then(res => res.json())
            .then(data => {
                setProjectCount(data.length);
            });
    }, []); // Add an empty dependency array to avoid infinite loop

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center h-full md:h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                <div className="flex flex-col items-center md:items-start p-8 md:w-1/2 space-y-4 mt-20 md:mt-0">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-lg mb-4">
                        <img src={ProfilePicture} alt="Suman Neupane" className="object-cover h-full w-full" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">Suman Neupane</h1>
                    <p className="text-lg text-center md:text-left">Web Developer | Passionate Coder</p>
                    <a
                        href="/Suman_BIT.pdf" //actual CV path
                        className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                        download
                    >
                        Download CV
                    </a>
                    {/* Social Links Below the CV Button */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                        <a href="https://www.linkedin.com/in/suman-neupane-3417421a2/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-gray-200 transition duration-200" />
                        </a>
                        <a href="https://github.com/Megrajj" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-gray-200 transition duration-200" />
                        </a>
                        <a href="https://m.me/MegRaj" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="text-white hover:text-gray-200 transition duration-200" />
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-6 sm:p-8 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 md:mb-0 relative overflow-hidden">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left transition duration-300 transform hover:translate-y-[-3px]">
        A Dedicated Developer
    </h2>
    <p className="text-base sm:text-lg leading-[1.5] text-justify md:text-left transition duration-300 transform hover:translate-y-[-2px]">
        Dynamic and forward-thinking technology enthusiast, <strong>Suman Neupane</strong>, excels in both frontend and backend development. With a strong command of modern frameworks such as <strong>React</strong> and <strong>Node.js</strong>, Suman crafts innovative, user-focused solutions that push the boundaries of digital experiences. Driven by a passion for creativity and technical excellence, Suman is eager to infuse cutting-edge ideas into transformative projects, enhancing software capabilities with impactful results. Committed to continuous learning and excellence, Suman thrives in the ever-evolving landscape of applied information technology.
    </p>
</div>
            </section>
              {/* Project Highlights Section Below the Hero */}
              <section className="py-16 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-gray-800">Professional Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                        <span className="text-5xl font-bold text-blue-500">5+</span>
                        <p className="text-sm text-gray-600">Years of Experience</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                        <span className="text-5xl font-bold text-blue-500">{projectCount}+</span>
                        <p className="text-sm text-gray-600">Projects Completed</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                        <span className="text-5xl font-bold text-blue-500">3</span>
                        <p className="text-sm text-gray-600">Languages Mastered</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home; 