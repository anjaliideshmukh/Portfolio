import "./Hero.css";
import { FaArrowRight, FaDownload } from "react-icons/fa";

function Hero() {

    return (

        <section id="home" className="hero">

            <div className="hero-left">

                <p className="intro">
                    HELLO 👋
                </p>

                <h1>

                    ANJALI
                    <br />
                    DESHMUKH

                </h1>

                <h2>
                    Frontend Developer
                </h2>

                <h3>
                    Computer Science Undergraduate
                </h3>

                <p className="description">

                    Passionate about building clean,
                    responsive and interactive web
                    applications using React,
                    JavaScript and modern frontend
                    technologies.

                </p>

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

        </section>

    );

}

export default Hero;