import { Link } from 'react-router-dom';
//prevents to again reload response from server, intercepts the response
// try to send request to server

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The Blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;