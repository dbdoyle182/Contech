import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/Auth'
import "./Navbar.css";


// You may change any of the className properties and add any tags you would like, this is a basic navbar
const Navbar = () => (
    <header className="" >
        <nav className="flex">
            <div className='flex-start'>
                <Link to='/' className={
            window.location.pathname === "/" ? "nav-link active logo" : "nav-link logo"
          }>
                    <span className="logo-text">ConTECH</span>
                </Link>
            </div>
        {/* {Auth.isUserAuthenticated() ? ( */}
            <div className='flex-end'>
                <Link to='/' className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }>
                    <span className="nav-link">Home</span>
                </Link>
                <Link to='/addterm' className={
                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                  }>
                    <span className="nav-link">Add Term</span>
                </Link>
                <Link to='/logout' className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }>
                    <span className="nav-link">Log Out</span>
                </Link>
            </div>
        {/* ) : ( */}
            <div className='flex-end'>
                <Link to='/' className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }>
                    <span className="nav-link">Home</span>
                </Link>
                <Link to='/login' className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }>
                    <span className="nav-link">Log In</span>
                </Link>
                <Link to='/signup' className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }>
                    <span className="nav-link">Sign Up</span>
                </Link>
            </div>
            {/* )} */}
        </nav>
    </header>

);


export default Navbar;