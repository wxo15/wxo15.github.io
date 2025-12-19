import LightDarkToggle from './LightDarkToggle';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-items">
                <Link to="/" className="nav-item">
                    Home
                </Link>
                <Link to="/about" className="nav-item">
                    About
                </Link>
                <Link to="/career" className="nav-item">
                    Career
                </Link>
                <Link to="/education" className="nav-item">
                    Education
                </Link>
                <Link to="/projects" className="nav-item">
                    Projects
                </Link>
                <Link to="/certificates" className="nav-item">
                    Certificates
                </Link>
            </div>

            <div className="nav-items nav-right">
                <LightDarkToggle></LightDarkToggle>
            </div>
        </nav>
    );
}
