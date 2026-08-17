import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <nav className="navbar">

            <div className="logo">
                Anjali
            </div>

            <div className={`menu ${menuOpen ? "active" : ""}`}>

                <ul>

                    <li>
                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#experience" onClick={closeMenu}>
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="#certifications" onClick={closeMenu}>
                            Certifications
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>

                </ul>

            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

        </nav>

    );
}

export default NavBar;