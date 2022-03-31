import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-around p-5 bg-cyan-500 text-white text-xl'>
            <Link to="/" className="logo">
                <h2>Countries</h2>
            </Link>
            <div className='navigation '>
                <Link className='p-2 hover:text-yellow-500' to="/">Home</Link>
                <Link className='p-2 hover:text-yellow-500' to="/countries">Country</Link>
                <Link className='p-2 hover:text-yellow-500' to="/contact">Contact</Link>
                <Link className='p-2 hover:text-yellow-500' to="/about">About Us</Link>
            </div>
        </nav>
    );
};

export default Header;