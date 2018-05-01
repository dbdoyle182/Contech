import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/Auth'
import "./Navbar.css";


// You may change any of the className properties and add any tags you would like, this is a basic navbar
const Navbar = () => (
    <header className="" >
        <nav className="flex">
            <div className='flex-start'>
                <Link to='/'>
                    <span className="logo-text">ConTech</span>
                </Link>
            </div>
        {Auth.isUserAuthenticated() ? (
            <div className='flex-end'>
                <Link to='/'>
                    <span className="nav-link">Home</span>
                </Link>
                <Link to='/logout'>
                    <span className="nav-link">Log Out</span>
                </Link>
            </div>
        ) : (
            <div className='flex-end'>
                <Link to='/'>
                    <span className="nav-link">Home</span>
                </Link>
                <Link to='/login'>
                    <span className="nav-link">Log In</span>
                </Link>
                <Link to='/signup'>
                    <span className="nav-link">Sign Up</span>
                </Link>
            </div>
            )}
        </nav>
    </header>

);


export default Navbar;