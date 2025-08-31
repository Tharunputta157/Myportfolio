import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Order Tracking & Customer Support Platform',
    description: 'Developed a scalable platform for order tracking and real-time customer support using React.js, Node.js, and MySQL. Integrated AWS for deployment and optimized REST APIs for performance.',
    link: '#'
  },
  {
    name: 'Enterprise Reporting Dashboard',
    description: 'Built a responsive dashboard with React.js, TypeScript, and Material UI, supporting secure authentication and real-time reporting for enterprise clients.',
    link: '#'
  },
  {
    name: 'Financial Data Grid Module',
    description: 'Created reusable React.js data grid components for financial applications, supporting real-time updates and advanced filtering.',
    link: '#'
  }
];

const Projects = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project" key={idx}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
