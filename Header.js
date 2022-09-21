import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/Registration'>Registration</Link></li>
                        <li><Link to='/EditRegistration'>Edit Registration</Link></li>
                        <li><Link to='/GetRegistered'>Get Registered</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;