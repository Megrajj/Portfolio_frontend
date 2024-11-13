// src/pages/Portfolio.js
import React from "react";
import Navbar from "../components/Navbar";
// import Projects from './portfolio/Projects';
import Footer from "../components/Footer";
import "../styles/tailwind.css"; // Ensure Tailwind CSS is imported
import Projects from "../components/Projects";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";



const Portfolio = () => {
  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <h1 className="text-4xl font-bold text-center">My Portfolio</h1>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Card */}
            <div className="group relative bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 p-3 rounded-full text-white shadow-lg">
                <FaReact size={40} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-center text-gray-700">
                Frontend
              </h3>
              <p className="text-center text-gray-600 mt-4">
                React, Tailwind CSS, HTML, CSS, JavaScript
              </p>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            </div>

            {/* Backend Card */}
            <div className="group relative bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 p-3 rounded-full text-white shadow-lg">
                <FaNodeJs size={40} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-center text-gray-700">
                Backend
              </h3>
              <p className="text-center text-gray-600 mt-4">
                Node.js, Express.js, MongoDB
              </p>
              <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            </div>

            {/* Database Card */}
            <div className="group relative bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 p-3 rounded-full text-white shadow-lg">
                <FaDatabase size={40} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-center text-gray-700">
                Databases
              </h3>
              <p className="text-center text-gray-600 mt-4">MongoDB, SQL</p>
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            </div>

            {/* Tools Card */}
            <div className="group relative bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-indigo-500 p-3 rounded-full text-white shadow-lg">
                <FaTools size={40} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-center text-gray-700">
                Tools
              </h3>
              <p className="text-center text-gray-600 mt-4">
                Git, Webpack, Jest, Docker
              </p>
              <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
      Education
    </h2>
    <div className="flex flex-col items-center space-y-10">
      
      {/* First Education Card */}
      <div className="relative bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl transform hover:scale-105 transition-transform duration-300">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 p-4 rounded-full shadow-lg">
            <FaUniversity className="text-white w-10 h-10" /> 

        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex justify-center items-start">
            <FaGraduationCap className="mr-2 text-blue-600" /> 
            Bachelor’s of Applied Information Technology
          </h3>
          <p className="text-gray-600 flex justify-center items-center">
            <FaUniversity className="mr-2 text-gray-600" /> 
            Toi Ohomai Institute of Technology
          </p>
          <p className="text-gray-600 flex justify-center items-center">
            <FaCalendarAlt className="mr-2 text-gray-600" /> 
            2023 - 2024
          </p>
          <p className="text-gray-600 font-medium">Grade: A</p>
        </div>
        <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-10 transition duration-300 rounded-lg"></div>
      </div>

      {/* Second Education Card */}
      <div className="relative bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl transform hover:scale-105 transition-transform duration-300">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 p-4 rounded-full shadow-lg">
          <CgWebsite className="text-white w-10 h-10" />

        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex justify-center items-start">
            <FaGraduationCap className="mr-2 text-green-600" /> 
            Diploma of Web Design and Software Development: Level 5 & 6
          </h3>
          <p className="text-gray-600 flex justify-center items-center">
            <FaUniversity className="mr-2 text-gray-600" /> 
            Toi Ohomai Institute of Technology
          </p>
          <p className="text-gray-600 flex justify-center items-center">
            <FaCalendarAlt className="mr-2 text-gray-600" /> 
            2019 - 2022
          </p>
          <p className="text-gray-600 font-medium">Grade: A</p>
        </div>
        <div className="absolute inset-0 bg-green-600 opacity-0 hover:opacity-10 transition duration-300 rounded-lg"></div>
      </div>

    </div>
  </div>
</section>
      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            My Projects
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Here are some of the projects I've worked on:
          </p>
          <Projects />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
