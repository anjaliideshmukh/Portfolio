import "./Project.css";
import bakery from "../../assets/images/bakery.png";
import calculator from "../../assets/images/calculator.png";
import portfolio from "../../assets/images/portfolio.png"

function Projects() {

    const projects = [
        {
            id: 1,
            title: "Sweet Treats Bakery",
            description: "Responsive bakery website with Add to Cart functionality.",
            tech: "HTML, CSS, JavaScript",
            image: bakery,
            github: "https://github.com/anjaliideshmukh/sweet-treats-bakery",
            live: "https://anjali-sweet-treats-bakery.netlify.app/"
        },
        {
            id: 2,
            title: "Calculator",
            description: "Responsive calculator with keyboard support.",
            tech: "HTML, CSS, JavaScript",
            image: calculator,
            github: "https://github.com/anjaliideshmukh/Basic-calculator",
            live: "#"
        },
        {
            id: 3,
            title: "Portfolio",
            description: "Responsive calculator with keyboard support.",
            tech: "React, Vite, Vercel",
            image: portfolio,
            github: "https://github.com/anjaliideshmukh/Portfolio",
            live: "https://react-portfolio-three-brown.vercel.app/"
            
        }
    ];

    return (
        <section id="projects" className="projects">

            <h3 className="projects-title">PROJECTS</h3>

            <h2>Some Things I've Built</h2>

            <div className="projects-container">

                {projects.map((project) => (

                    <div className="project-card" key={project.id}>

                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        </div>

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tech">
                                {project.tech}
                            </div>

                            <div className="project-buttons">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn github-btn"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn demo-btn"
                                >
                                    Live Demo
                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;