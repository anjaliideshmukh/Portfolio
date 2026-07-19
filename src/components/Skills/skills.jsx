import "./skills.css";

function Skills() {
    return (
        <section id="skills" className="skills">

            <h3 className="skills-title">SKILLS</h3>

            <h2>Technologies I Work With</h2>

            <div className="skills-container">
                <div className="skill-card">
                    <h3>🌐 HTML5</h3>
                <div className="skill-tags">
                    <span>Semantic HTML</span>
                    <span>Forms</span>
                    <span>Responsive Design</span>
                </div>
            </div>

                <div className="skill-card">
                    <h3>🎨 CSS3</h3>
                    <div className="skill-tags">
                    <span>Flexbox</span>
                    <span>CSS Grid</span>
                    <span>Animations</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>⚡ JavaScript</h3>
                    <div className="skill-tags">
                    <span>ES6</span>
                    <span>DOM Manipulation</span>
                    <span>Functions</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>⚛ React</h3>
                    <div className="skill-tags">
                    <span>Components</span>
                    <span>JSX</span>
                    <span>Hooks</span>
                </div>
                </div>

                <div className="skill-card">
                    <h3>🔧 Git & GitHub</h3>
                    <div className="skill-tags">
                    <span>Version Control</span>
                    <span>Git Commands</span>
                    <span>GitHub</span>
                </div>
                </div>

                <div className="skill-card">
                    <h3>💻 C++</h3>
                    <div className="skill-tags">
                    <span>OOP</span>
                    <span>STL</span>
                    <span>Memory Management</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>🗄️ SQL</h3>
                    <div className="skill-tags">
                    <span>Queries</span>
                    <span>Joins</span>
                    <span>Database Basics</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>🧩 DSA</h3>
                    <div className="skill-tags">
                    <span>Arrays</span>
                    <span>Sliding Window</span>
                    <span>Two Pointers</span>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;