import "./skills.css";

function Skills() {
    return (
        <section id="skills" className="skills">

            <h3 className="skills-title">SKILLS</h3>

            <h2>Technologies I Work With</h2>

            <div className="skills-container">
                <div className="skill-card">
                    <h3> Front-end</h3>
                <div className="skill-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span> 
                </div>
            </div>

                <div className="skill-card">
                    <h3>Programming</h3>
                    <div className="skill-tags">
                    <span>C++</span>
                    <span>DSA</span>
                    <span>Python</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Tools</h3>
                    <div className="skill-tags">
                    <span>Git</span>
                    <span>GitHub</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Database</h3>
                    <div className="skill-tags">
                    <span>SQL</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                </div>
                </div>

                <div className="skill-card">
                    <h3>🛠️ Tools & Deployment</h3>
                        <div className="skill-tags">
                            <span>Vite</span>
                            <span>Vercel</span>
                            <span>Netlify</span>
                        </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;