import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://your-render-backend-url/api/projects')
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
        <section className="About">
          <h2>About Me</h2>
          <p>
            As a dedicated Solution Developer, I bring a passion for innovation and a commitment to delivering exceptional technology solutions...
          </p>
        </section>
        <section className="Projects">
          <h2>Projects</h2>
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
