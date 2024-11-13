import React from "react";

const ProjectCard = ({ title, description, image, githubLink, demoLink, tags }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <img
        src={image}
        alt={`${title} Project Image`}
        className="w-full h-48 object-cover rounded mb-4"
      />

      <h3 className="font-semibold text-xl text-gray-900 mb-2">{title}</h3>

      <p className="text-gray-700 mb-4">{description}</p>

      {tags && tags.length > 0 && (
        <div className="mb-4">
          {tags.split(",").map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 bg-gray-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          GitHub
        </a>

        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
            />
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
