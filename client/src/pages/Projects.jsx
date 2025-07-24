import { useEffect, useState } from "react";
import fetchProjects from "../api/fetchProjects";
import "../styles/Project.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <div className="Project-page">
      <div className="Project-left">
        <p>
          These are some of the projects I have done individually or with my team.
          They include Full Stack projects in domains like Healthcare, Education,
          Games, etc.
        </p>
      </div>

      <div className="Project-right">
        <div className="cube-container">
          <div className="cube">
            {projects.slice(0, 6).map((project, idx) => (
              <div key={idx} className={`face face${idx + 1}`}>
                <div className="project-card">
                  <img src={project.thumbnail} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="btns">
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <button className="btn-live">Live Preview</button>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      <button className="btn-code">GitHub Code</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
