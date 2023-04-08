import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mb-3'>
            <Link className='text-danger m-3 h4' to="/">Home</Link>
            <Link className='text-danger m-3 h4' to="/review">Order Review</Link>
            <Link className='text-danger m-3 h4' to="/about">About</Link>
            <Link className='text-danger m-3 h4' to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;