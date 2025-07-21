import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    My Portfolio
                </Link>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/projects" activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    {/* Uncomment these links when the pages are implemented */}
                    {/* <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    {/*<li>
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
