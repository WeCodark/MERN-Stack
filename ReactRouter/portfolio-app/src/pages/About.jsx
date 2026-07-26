export default function About() {
    const skills = [
        "JavaScript (ES6+)", "React.js", "React Router",
        "HTML5 / CSS3", "Node.js", "Express.js",
        "Git & GitHub", "REST APIs", "Responsive Design"
    ];

    return (
        <div className="page about-page">
            <h1>About <span className="highlight">Me</span></h1>
            <p>
                Hello! I am a passionate Web Developer focused on building clean, efficient, and interactive web applications. 
                I enjoy turning complex problems into simple, beautiful, and intuitive interfaces.
            </p>
            <div className="skills-section">
                <h3>Skills & Technologies</h3>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}