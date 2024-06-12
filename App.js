import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data from backend
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mradul Krishna</h1>
        <p>Solution Developer at Tata Technologies</p>
        <p>Specializing in Innovative Technology Solutions & System Integration</p>
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            As a dedicated Solution Developer, I bring a passion for innovation and a commitment to delivering exceptional technology solutions.
            With a strong background in Computer Science Engineering and a specialization in Cloud Computing and Virtualization, I thrive in dynamic environments where I can leverage my skills to solve complex problems and drive efficiency.
          </p>
          {/* Add more paragraphs as needed */}
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <div className="company-logo">
              <img src="tata_logo.png" alt="Tata Technologies" />
            </div>
            <div className="details">
              <h3>Tata Technologies</h3>
              <p>Full-time Solutions Developer | Aug 2023 - Present</p>
              <p>Specializing in Innovative Technology Solutions & System Integration</p>
              {/* Add more details about experience */}
            </div>
          </div>
          {/* Add more experience items */}
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map(project => (
              <div key={project.id} className="project-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Add sections for education, certifications, and contact information */}
      </main>
      <footer>
        <p>For more information, visit my <a href="https://www.linkedin.com/in/mradul-krishna/">LinkedIn</a> profile.</p>
      </footer>
    </div>
  );
}

export default App;
