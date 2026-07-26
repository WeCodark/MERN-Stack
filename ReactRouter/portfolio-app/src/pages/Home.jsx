import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='page hero-page'>
            <span className='hero-badge'>Frontend Developer</span>
            <h1>Hi, I am <span className='highlight'>Aryan</span></h1>
            <p>I craft modern, interactive, and high-performance web applications with React and intuitive user experiences.</p>
            <div className='hero-actions'>
                <Link to='/projects' className='btn'>View my Work &rarr;</Link>
                <Link to='/about' className='btn btn-secondary'>About Me</Link>
            </div>
        </div>
    )
}