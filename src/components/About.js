// src/components/About.js
import React from 'react';

const About = () => {
    const aboutData = {
        name: 'Suman Neupane',
        bio: 'I am a web developer with a passion for creating beautiful and functional web applications. I love bringing ideas to life and solving problems through code.',
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML', 'CSS'],
    };

    return (
        <div className="max-w-3xl mx-auto text-center p-4">
            <p className="mt-2 text-lg text-gray-600">{aboutData.bio}</p>
            <h3 className="mt-6 text-xl font-semibold text-gray-700">Skills</h3>
            <ul className="list-disc list-inside mt-2">
                {aboutData.skills.map((skill, index) => (
                    <li key={index} className="text-gray-600">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default About;
