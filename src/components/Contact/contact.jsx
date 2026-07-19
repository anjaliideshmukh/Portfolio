import "./contact.css";

function Contact(){
    return(
    <section id="contact" className="contact">
        <h3 className="contact-title">CONTACT</h3>
        <h2>Let's Connect</h2>
        <p className="contact-description">
        I'm always open to discussing new opportunities,
        internships, or collaborating on interesting projects.
        </p>
        <div className="contact-info">
            <div className="contact-card">
    <h3>Email</h3>
    <a
        href="mailto:anjalideshmukh2275@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
    >
        anjalideshmukh2275@gmail.com
    </a>
</div>

<div className="contact-card">
    <h3>LinkedIn</h3>
    <a
        href="https://www.linkedin.com/in/anjaliideshmukh22"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
    >
        Visit Profile
    </a>
</div>

<div className="contact-card">
    <h3>GitHub</h3>
    <a
        href="https://github.com/anjaliideshmukh"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
    >
        View GitHub
    </a>
</div>
        </div>
    </section>
    )
}
export default Contact;