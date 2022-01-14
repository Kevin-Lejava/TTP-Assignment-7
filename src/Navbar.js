import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/" className="btn btn-secondary">Trending</Link>
            <Link to="/Search" className="btn btn-secondary">Search</Link>
            <Link to="/Random" className="btn btn-secondary">Random</Link>
        </div>
    );
}

export default Navbar;
