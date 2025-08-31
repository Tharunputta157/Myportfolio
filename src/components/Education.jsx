import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'Master of Engineering, Computer Science',
    school: 'University of Cincinnati College of Engineering and Applied Science',
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    school: 'Gayatri Vidya Parishad College of Engineering',
  },
];

const Education = () => (
  <section className="education-section">
    <h2>Education</h2>
    <ul className="education-list">
      {education.map((edu, idx) => (
        <li key={idx}>
          <strong>{edu.degree}</strong>
          <br />
          <span>{edu.school}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
