import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">TaskMaster</Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Dashboard</Link>
                    <Link to="/add" className="btn btn-primary">New Task</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  