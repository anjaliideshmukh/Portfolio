import "./about.css";
import {
    FaGraduationCap,
    FaLaptopCode,
    FaRocket,
    FaBullseye
} from "react-icons/fa";

function About() {
    return (

        <section id="about" className="about">

            <h3 className="about-title">
                ABOUT ME
            </h3>

            <h2 className="about-heading">
                Who I Am
            </h2>

            <p className="about-description">

                I'm a Computer Science undergraduate passionate about building clean, 
                responsive, and user-friendly web applications. I enjoy turning ideas into 
                interactive experiences using React and JavaScript while continuously 
                improving my problem-solving skills through DSA and modern web development.

            </p>

            <div className="about-cards">

                <div className="card">

                    <FaGraduationCap className="card-icon"/>

                    <h3>Education</h3>

                    <p>B.Tech Computer Science</p>

                    <p>SSTC, Bhilai</p>

                </div>

                <div className="card">

                    <FaLaptopCode className="card-icon"/>

                    <h3>Interests</h3>

                    <p>Frontend Development</p>

                    <p>React</p>

                    <p>UI Design</p>

                </div>

                <div className="card">

                    <FaRocket className="card-icon"/>

                    <h3>Learning</h3>

                    <p>React</p>

                    <p>DSA</p>

                    <p>MERN Stack</p>

                </div>

                <div className="card">

                    <FaBullseye className="card-icon"/>

                    <h3>Goal</h3>

                    <p>Become a Full Stack Developer</p>

                    <p>Build impactful web applications</p>

                </div>

            </div>

        </section>

    );
}

export default About;