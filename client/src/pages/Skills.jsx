import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import { DiJavascript1, DiMongodb, DiVisualstudio,  } from 'react-icons/di';
import { SiCplusplus, SiTypescript, SiExpress, SiTailwindcss, SiBootstrap, SiMysql } from 'react-icons/si';

import '../styles/Skills.css';

export default function Skills() {
  return (
    <div className="skills-page">
      <div className="skills-card">
        <h2>Languages</h2>
        <ul>
          <li><FaPython /> Python</li>
          <li><SiCplusplus /> C++</li>
          <li><DiJavascript1 /> JavaScript</li>
          <li><SiTypescript /> TypeScript</li>
          <li><SiMysql /> SQL</li>
          <li><DiMongodb /> MongoDB</li>
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3Alt /> CSS/SASS</li>
        </ul>
      </div>

      <div className="skills-card">
        <h2>Frameworks / Libraries</h2>
        <ul>
          <li><FaReact /> React JS</li>
          <li><SiExpress /> Express JS</li>
          <li><FaReact /> React Native</li>
          <li><SiTailwindcss /> Tailwind CSS</li>
          <li><SiBootstrap /> Bootstrap</li>
        </ul>
      </div>

    </div>
  );
}
