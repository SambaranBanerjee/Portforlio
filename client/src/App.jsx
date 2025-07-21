import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/projects';
//import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <footer className="text-center py-4 bg-gray-900 text-white">
          <p>© 2025 My Portfolio</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
