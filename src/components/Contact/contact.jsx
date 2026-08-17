import "./contact.css";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

function Contact() {

    return (

        <section id="contact" className="contact">

            <h3 className="contact-title">
                CONTACT
            </h3>

            <h2>
                Let's Connect
            </h2>

            <p className="contact-description">
                I'm always open to discussing new opportunities,
                internships, or collaborating on interesting projects.
            </p>

            <div className="contact-icons">

                <a
                    href="mailto:anjalideshmukh2275@gmail.com"
                    className="contact-icon"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>

                <a
                    href="https://www.linkedin.com/in/anjaliideshmukh22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/anjaliideshmukh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

            </div>

        </section>

    );
}

export default Contact;