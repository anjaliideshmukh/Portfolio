import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <header className="mobile-header">
                <h2>Anjali</h2>

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Sidebar */}

            <aside className={`sidebar ${menuOpen ? "active" : ""}`}>

                <div className="profile">

                    <h2>Anjali Deshmukh</h2>

                    <p className="role">Frontend Developer</p>

                    <p className="learning">React Learner</p>

                </div>

                <hr />

                <nav className="menu">

                    <ul>

                        <li>
                            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                        </li>

                        <li>
                            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                        </li>

                        <li>
                            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                        </li>

                        <li>
                            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                        </li>

                        <li>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        </li>

                    </ul>

                </nav>

                <hr />

                <div className="social">

                    <a
                        href="https://github.com/anjaliideshmukh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anjaliideshmukh22"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="#">Resume</a>

                </div>

            </aside>
        </>
    );
}

export default Sidebar;