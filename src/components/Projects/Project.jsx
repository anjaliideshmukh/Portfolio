import "./Project.css";
import bakery from "../../assets/images/bakery.png";
import calculator from "../../assets/images/calculator.png";
import portfolio from "../../assets/images/portfolio.png";
import school from "../../assets/images/school.jpg";
import url from "../../assets/images/url.jpg";
import bsp from "../../assets/images/bsp.jpg";
import careercompass from "../../assets/images/careercompass.png";

function Projects() {

    const projects = [
        {
            id: 1,
            title: "Portfolio",
            description: "Personal portfolio website showcasing my projects, skills, and experience with a responsive modern UI.",
            tech: ["React", "Vite", "Vercel","CSS"],
            image: portfolio,
            github: "https://github.com/anjaliideshmukh/Portfolio",
            live: "https://react-portfolio-three-brown.vercel.app/"
            
        },
        {
            id: 3,
            title: "Sweet Treats Bakery",
            description: "Responsive bakery website with Add to Cart functionality.",
            tech: ["HTML", "CSS", "JavaScript"],
            image: bakery,
            github: "https://github.com/anjaliideshmukh/sweet-treats-bakery",
            live: "https://anjali-sweet-treats-bakery.netlify.app/"
        },
        {
            id: 2,
            title: "Calculator",
            description: "Responsive calculator with keyboard support.",
            tech: ["HTML", "CSS", "JavaScript"],
            image: calculator,
            github: "https://github.com/anjaliideshmukh/Basic-calculator",
            
        },
        {
            id: 4,
            title: "School Management System",
            description: "Collaborated on the development of a School Management System using Python, Flask, MySQL, HTML, CSS, and JavaScript.",
            tech: ["Flask", "MySQL", "Python"],
            image: school,
            github: "https://github.com/anjaliideshmukh/School-management-system",
            
        },
        {
            id: 5,
            title: "URL Phishing Detector",
            description: "Built a Flask-based web application that uses a trained machine learning model to classify URLs as phishing or legitimate. Integrated a responsive frontend with backend prediction logic to provide real-time URL analysis.",
            tech: ["Python"," Flask","Scikit-learn ","Pandas"," NumPy ","HTML "," CSS "," JavaScript "," Git "," GitHub"],
            image: url,
            github: "https://github.com/anjaliideshmukh/URL-Phishing"
        },
        {
            id: 6,
            title: "A flask-mysql application for industrial production tracking.",
            description: "Built a Flask-based web application ",
            tech: ["Python", "Flask", "CSS", "HTML"],
            image: bsp
        },
        {
            id: 7,
            title: "CareerCompassAI_AI-Powered Career Guidance Assistant",
            description: "Built a responsive AI career guidance web application using React.js and Botpress Cloud.",
            tech: ["Botpress Cloud", "React", "CSS", "HTML5","Vite", "Github"],
            image: careercompass,
            github: "https://github.com/anjaliideshmukh/CareerCompass-AI",
            live: "https://anjali-sweet-treats-bakery.netlify.app/"
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
                                {project.tech.map((item)=>(
                                    <span key={item}>{item}</span>
                                    ))}
                            </div>

                            <div className="project-buttons">
                                {project.github && (
                                    <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn github-btn">
                                        GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn demo-btn"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;