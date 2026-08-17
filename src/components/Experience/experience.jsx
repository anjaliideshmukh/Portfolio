import "./experience.css";

function Experience(){
    const experiences = [
        {
            id: 1,
            role: "Vocational Trainee",
            company: "KodeZen Technologies Pvt Ltd",
            duration:"June 2026 - July 2026",
            location: "Bhilai, India",
            tech: "React · JavaScript",
            description:
                "Building responsive UI components using React and modern JavaScript practices, gaining hands-on exposure to how production-level web applications are structured and built."
        },
        {
            id: 2,
            role: "UI/UX Intern",
            company: "Jyesta Corporate Entity",
            duration:"July 2025 - September 2025",
            location: "Bhilai, India",
            tech: "UI/UX · Wireframes · Prototyping",
            description:
                "Designed UI mockups, wireframes, and interactive prototypes using industry-standard design tools, focusing on user-friendly layouts and visual consistency."
        },

        {
            id: 3,
            role: "Vocational Trainee",
            company: "Bhilai Steel Plant (SAIL)",
            duration: "August 2025",
            location: "Bhilai, India",
            tech: "Flask · MySQL · Python",
            description:
                "Completed a 4-week project-based vocational training, independently executing a Flask-MySQL application for industrial production tracking — managing the full project lifecycle from requirements to final submission."
        }
    ];
    return (
        <section id="experience" className="experience">

            <h3 className="experience-title">
                EXPERIENCE
            </h3>

            <h2>
                Where I've Worked & Learned
            </h2>

            <div className="experience-container">

                {experiences.map((experience) => (

                    <div className="experience-item" key={experience.id}>

                        <div className="experience-dot"></div>

                        <div className="experience-content">

                            <div className="experience-header">

                                <div>
                                    <h3>{experience.role}</h3>

                                    <h4>{experience.company}</h4>
                                </div>

                                <span className="experience-duration">
                                    {experience.duration}
                                </span>

                            </div>
                             <p className="experience-location">
                                {experience.location}
                            </p>

                            <p className="experience-description">
                                {experience.description}
                            </p>

                            <span className="experience-tech">
                                {experience.tech}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Experience;