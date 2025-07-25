import { useEffect, useState } from "react";
import fetchProjects from "../api/fetchProjects";
import "../styles/Project.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        <h1>My Projects</h1>
        <p>
          Here’s a curated selection of projects I’ve built independently and in collaboration with teams. 
          These full-stack applications span diverse domains such as healthcare, education, entertainment, 
          and more — each crafted to solve real-world problems with impactful user experiences.
        </p>
      </div>

      <div className="Project-right">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
