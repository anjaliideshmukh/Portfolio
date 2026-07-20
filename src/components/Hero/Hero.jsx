import "./Hero.css";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import profile from "../../assets/images/profile.jpg"
function Hero() {

    return (

        <section id="home" className="hero">

            <div className="hero-left">

                <p className="intro">
                    Hi, I'm
                </p>

                <h1>

                    ANJALI
                    <br />
                    DESHMUKH

                </h1>

                <h2>
                    Frontend Developer • React Enthusiast
                </h2>

                <h3>
                    Computer Science Undergraduate
                </h3>

                <p className="description">
                    I'm a Computer Science student passionate about building responsive,
                    user-friendly web applications using React and JavaScript.
                    <br/>
                    Currently expanding my skills in DSA and preparing to become
                    a Full Stack MERN Developer.
                    <br/>
                    Open to internships, freelance opportunities, and collaborative projects.

                </p>

                <div className="hero-stats">
                  <div className="stat">
                    <h2>3+</h2>
                    <p>Projects</p>
                </div>
                <div className="stat">
                    <h2>8+</h2>
                    <p>Technologies</p>
                </div>

                <div className="stat">
                    <h2>100%</h2>
                    <p>Responsive</p>
                    </div>
                <div className="stat">
                    <h2>MERN</h2>
                    <p>Learning</p>
                </div>
                </div>
                
                <div className="buttons">

                    <a
                        href="#projects"
                        className="primary"
                    >

                        <FaArrowRight />

                        View Projects

                    </a>

                    <a
                        href="#"
                        className="secondary"
                    >

                        <FaDownload />

                        Download Resume

                    </a>

                </div>
                
            </div>

            <div className="hero-right">
                <img src={profile} alt="Anjali Deshmukh" className="profile-image" />
            </div>

        </section>

    );

}

export default Hero;