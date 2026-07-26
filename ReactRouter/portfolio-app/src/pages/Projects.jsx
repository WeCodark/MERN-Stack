import { Link } from 'react-router-dom'

export default function Projects() {
    const projectList = [
        { 
            id: '1', 
            name: 'E-Commerce Platform', 
            description: 'A full-stack online store with real-time shopping cart, user authentication, and payment gateway integration.',
            tech: ['React', 'Node.js', 'MongoDB']
        },
        { 
            id: '2', 
            name: 'Task Management App', 
            description: 'Collaborative task board with real-time updates, drag-and-drop workflow, and team analytics.',
            tech: ['React', 'CSS3', 'Firebase']
        },
        { 
            id: '3', 
            name: 'AI Content Generator', 
            description: 'SaaS application providing automated AI content generation and workflow automation tools.',
            tech: ['React', 'Express', 'OpenAI API']
        },
    ]

    return (
        <div className='page'>
            <h1>My <span className='highlight'>Projects</span></h1>
            <p className='subtitle'>Here are some of the web applications and side projects I have built.</p>
            <div className='project-grid'>
                {projectList.map((p) => (
                    <div key={p.id} className='project-card'>
                        <div>
                            <div className='project-tag'>Project #{p.id}</div>
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                            <div className='tech-stack'>
                                {p.tech.map((t, idx) => (
                                    <span key={idx} className='tech-chip'>{t}</span>
                                ))}
                            </div>
                        </div>
                        <Link to={`/projects/${p.id}`} className='project-link'>
                            View Details &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}