import React from 'react';
import './Experiences.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: "Kohl's, Remote, United States",
    period: 'May 2023 – Jul 2025',
    description: [
      'Designed and implemented end-to-end features using React.js with Redux on the frontend and Node.js microservices on the backend, ensuring seamless integration and a consistent user experience across retail applications.',
      'Built responsive, mobile-first UIs with HTML5, CSS3, Bootstrap, and Tailwind CSS, improving accessibility and usability across devices and browsers.',
      'Developed and optimized REST APIs in Node.js, handling order tracking, customer account workflows, and real-time customer support features that improved issue resolution times.',
      'Integrated backend services with MySQL, writing queries, stored procedures, and optimizing indexing strategies to improve database performance and reduce latency.',
      'Deployed and maintained applications on AWS cloud (EC2, S3, Lambda), improving scalability and reducing downtime through automated deployments.',
      'Collaborated with Product Managers and UX designers to refine requirements, propose solutions, and deliver features aligned with business priorities.',
      'Conducted peer code reviews and mentored junior developers on Node.js and React best practices, raising the overall quality of the codebase.',
      'Streamlined releases by configuring CI/CD pipelines in Azure DevOps, ensuring fast, secure, and reliable deployments across environments.'
    ]
  },
  {
    role: 'Digital Specialist Engineer',
    company: 'Infosys, India',
    period: 'Sep 2021 - Jul 2022',
    description: [
      'Built and enhanced React.js dashboards and supporting Node.js backend services, delivering reporting and compliance features used by enterprise customers.',
      'Designed and implemented responsive layouts with TypeScript, Material UI, and CSS3, ensuring a consistent and intuitive user experience across devices.',
      'Integrated REST APIs with Node.js and MySQL, enabling secure workflows for authentication, reporting, and payment transactions.',
      'Optimized MySQL database queries and schema designs, improving dashboard performance and reducing load times for large datasets.',
      'Supported deployments on AWS cloud, working with DevOps teams to configure environments, monitor performance, and troubleshoot production issues.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Hexaware, India',
    period: 'Jun 2019 – Aug 2021',
    description: [
      'Developed React.js modules for financial applications, including reusable data grids, form validation, and real-time reporting components.',
      'Built backend functionality with Node.js, integrating services with MySQL databases to support transaction workflows and ensure secure data processing.',
      'Designed and deployed applications on AWS services (EC2, S3) as part of a cloud migration project, improving scalability and cost efficiency.',
      'Improved database reliability by tuning MySQL queries and implementing indexing strategies that reduced reconciliation processing times.'
    ]
  }
];

const Experiences = () => (
  <section className="experiences-section">
    <h2>Work Experience</h2>
    {experiences.map((exp, idx) => (
      <div className="experience" key={idx}>
        <h3>{exp.role} @ {exp.company}</h3>
        <span>{exp.period}</span>
        <ul>
          {exp.description.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    ))}
  </section>
);

export default Experiences;
