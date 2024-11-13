import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/projects`);
                if (!response.ok) throw new Error('Failed to fetch projects');
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
                <p className="text-center">Loading projects...</p>
            ) : error ? (
                <p className="text-center text-red-500">Error loading projects: {error}</p>
            ) : projects.length > 0 ? (
                projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                        tags={project.tags}
                    />
                ))
            ) : (
                <p className="text-center">No projects found.</p>
            )}
        </div>
    );
};

export default Projects;
