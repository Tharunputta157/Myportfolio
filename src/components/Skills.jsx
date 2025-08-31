import React from 'react';
import './Skills.css';

const skills = [
  'React.js',
  'Redux',
  'JavaScript (ES6+)',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Tailwind CSS',
  'Node.js',
  'RESTful APIs',
  'API Design',
  'Error Handling',
  'MySQL',
  'AWS (EC2, S3, Lambda)',
  'CI/CD Pipelines',
  'Git',
  'GitHub',
  'Azure DevOps',
  'Jest',
  'Mocha',
  'React Testing Library',
  'Agile Scrum',
  'SDLC Ownership',
  'Code Reviews',
  'Performance Optimization',
];

const Skills = () => (
  <section className="skills-section">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
