//import React, { useEffect, useState } from 'react';
import '../styles/Project.css';

export default function ProjectCube() {
  //const [projects, setProjects] = useState([]);

  {/*useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);*/}

  return (
    <div className="cube-container">
      <div className="cube">
        {/*{projects.length > 0 && (
          <div className="cube-face front">
            <img src={projects[0].imageUrl} alt="thumbnail" />
            <h3>{projects[0].title}</h3>
            <p>{projects[0].description}</p>
            <a href={projects[0].liveLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
            <a href={projects[0].githubLink} target="_blank" rel="noopener noreferrer">GitHub Code</a>
          </div>
        )}*/}
        {/* You can add back, left, right, top, bottom faces if needed */}
      </div>
    </div>
  );
}
