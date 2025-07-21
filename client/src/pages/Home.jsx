import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hello, I’m <span className="text-indigo-600">Sambaran Banerjee</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          A passionate Full Stack Developer crafting modern web apps with the MERN stack.
        </p>
        <Link to="/projects">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            View My Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
