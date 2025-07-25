import React from 'react';
import '../styles/Contact.css';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">Let's connect and create something amazing together.</p>

      <div className="contact-card">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <span>+91-6295867621</span>
        </div>

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>sambaranb25@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a href="https://linkedin.com/in/sambaran-banerjee-4b89b9299" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/sambaran-banerjee
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="icon" />
          <a href="https://github.com/sambaranbanerjee" target="_blank" rel="noopener noreferrer">
            github.com/sambaranbanerjee
          </a>
        </div>
      </div>
    </div>
  );
}
