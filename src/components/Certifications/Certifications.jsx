import "./Certifications.css";

function Certifications() {

    const certifications = [
        {
            id: 1,
            title: "Lenovo NextGen Scholars Program in AI",
            issuer: "Lenovo",
            date: "2026",
            link: "https://www.linkedin.com/posts/anjaliideshmukh22_glad-to-share-that-ive-completed-artificial-activity-7491759988969844736-3cPo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEayBKgBcEUk6dHp4uhAZsCOwPqKsaA67C0"
        },
        {
            id: 2,
            title: "Vocational Training in Web Development",
            issuer: "KodeZen Technologies",
            date: "2026",
            link: "https://www.linkedin.com/posts/anjaliideshmukh22_proud-to-announce-the-successful-completion-activity-7484107890077790208-hMPD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEayBKgBcEUk6dHp4uhAZsCOwPqKsaA67C0"
        },
        {
            id: 3,
            title: "Oracle Cloud Infrastructure AI Foundations Associate",
            issuer: "Oracle",
            date: "2025",
            link:"https://www.linkedin.com/posts/anjaliideshmukh22_excited-to-share-that-ive-earned-the-oracle-activity-7390821717436198912-4kEc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEayBKgBcEUk6dHp4uhAZsCOwPqKsaA67C0"
        },
        {
            id: 4,
            title: "UI/UX Design Intern Certificate",
            issuer: "Jyesta Corporate Entity",
            date: "2025",
            link:"https://www.linkedin.com/posts/anjaliideshmukh22_excited-to-share-i-am-delighted-to-activity-7373619605933559808-6vDc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEayBKgBcEUk6dHp4uhAZsCOwPqKsaA67C0"
        },
        {
            id:5,
            title: "FLASK–MYSQL Application for Industrial Production Tracking",
            issuer: "Bhilai Steel Plant (SAIL)",
            date: "2025",
            link: "https://www.linkedin.com/posts/anjaliideshmukh22_successfully-completed-my-vocational-training-activity-7368516844556562434-DgU-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEayBKgBcEUk6dHp4uhAZsCOwPqKsaA67C0"
        }
    ];

return (

    <section
        id="certifications"
        className="certifications"
    >

        <h3 className="certifications-title">
            CERTIFICATIONS
        </h3>

        <h2>
            Certifications & Credentials
        </h2>

        <div className="certifications-container">

            {certifications.map((certificate) => (

                <div
                    className="certificate-card"
                    key={certificate.id}
                >

                    <div className="certificate-icon">
                        🏆
                    </div>

                    <div className="certificate-content">

                        <h3>
                            {certificate.title}
                        </h3>

                        <p className="certificate-issuer">
                            {certificate.issuer}
                        </p>

                        <p className="certificate-date">
                            {certificate.date}
                        </p>

                    </div>

                    <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                    >
                        View on LinkedIn →
                    </a>

                </div>

            ))}

        </div>

    </section>

);
}

export default Certifications;