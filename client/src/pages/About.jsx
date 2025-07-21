import React from 'react';
import '../styles/about.css';
//import profilePic from '../assets/profile.jpg'; // Add this image

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-container'>
        {/* <img src={profilePic} alt="Sambaran Banerjee" className="about-image" /> */}

        <h1 className='about-heading'>About Me</h1>

        <p className='about-paragraph'>
          I am a Full Stack Developer passionate about building modern, scalable web apps using the MERN stack. I love crafting clean UIs and robust APIs.
        </p>

        <p className='about-paragraph'>
          Currently pursuing my degree at <strong>Jalpaiguri Government Engineering College</strong>. I completed my schooling from <strong>Kendriya Vidyalaya</strong>, where my passion for technology began.
        </p>

        <p className='about-paragraph'>
          Outside of coding, I enjoy exploring new tech, contributing to open source, and learning about the latest trends in web development.
        </p>

        <h2 className="about-subheading">Skills</h2>
        <ul className="about-skills">
          <li>JavaScript / TypeScript</li>
          <li>React.js & React Native</li>
          <li>Node.js & Express.js</li>
          <li>MongoDB / Mongoose</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
        </ul>

        <div className="about-links">
          <a href="https://github.com/sambaranbanerjee" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sambaranbanerjee" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
