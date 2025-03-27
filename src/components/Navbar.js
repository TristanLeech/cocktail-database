import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/graphs">Graphs</Link>
                </li>
                <li>
                    <Link to="/compare">Compare</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;