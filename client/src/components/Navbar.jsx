import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <nav>
        <h1>
            <Link to="/">S B Portfolio</Link>
        </h1>
        <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/skills">Skills & Tools</Link>
            <Link to="/projects">Projects</Link>
            {/*<Link to="/experience">Experience</Link>*/}
            <Link to="/contact">Contact</Link>
            <Link to="/login">Admin</Link>
        </div>
    </nav>
  );
}