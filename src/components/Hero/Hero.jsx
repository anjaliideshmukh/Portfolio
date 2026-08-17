import "./Hero.css";
import { FaArrowRight, FaEye } from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";

function Hero() {

    return (

        <section id="home" className="hero">

            <div className="hero-left">

                <p className="intro">
                    HI, I'M
                </p>

                <h1>
                    ANJALI
                    <br />
                    DESHMUKH
                </h1>

                <h2>
                    Frontend Developer
                </h2>

                <p className="tech-line">
                    React · JavaScript · HTML · CSS
                </p>

                <p className="description">
                    I build responsive and user-friendly web applications
                    with React and JavaScript, while continuously improving
                    my problem-solving and full-stack development skills.
                </p>

                <div className="buttons">

                    <a
                        href="#projects"
                        className="primary"
                    >
                        View Projects
                        <FaArrowRight />
                    </a>

                    <a
                        href="/resume/Anjali_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary"
                    >
                        View Resume
                        <FaEye />
                    </a>

                </div>

                <div className="hero-stats">

                    <div className="stat">
                        <h2>5+</h2>
                        <p>Projects</p>
                    </div>

                    <div className="stat">
                        <h2>3</h2>
                        <p>Experiences</p>
                    </div>

                    <div className="stat">
                        <h2>8+</h2>
                        <p>Technologies</p>
                    </div>

                    <div className="stat">
                        <h2>MERN</h2>
                        <p>Learning</p>
                    </div>

                </div>

            </div>


            <div className="hero-right">

                <div className="profile-wrapper">

                    <div className="profile-glow"></div>

                    <img
                        src={profile}
                        alt="Anjali Deshmukh"
                        className="profile-image"
                    />

                </div>

            </div>

        </section>

    );

}

export default Hero;