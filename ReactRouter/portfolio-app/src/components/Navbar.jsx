import { Link, NavLink } from "react-router-dom"

export default function Navbar({ isDark, toggleTheme }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Aryan<span>.dev</span></Link>
            </div>
            <div className="nav-links">
                <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme">
                    {isDark ? '☀️ Light' : '🌙 Dark'}
                </button>
            </div>
        </nav>
    )
}