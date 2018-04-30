import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/Auth'


// You may change any of the className properties and add any tags you would like, this is a basic navbar
const Navbar = () => (
    <div>
        <div className='top-bar'>
            <div className='top-bar-left'>
                <Link to='/'>React App</Link>
            </div>
            {Auth.isUserAuthenticated() ? (
                <div className='top-bar-right'>
                    <Link to='/logout'>Log out</Link>
                </div>
            ) : (
            <div className='top-bar-right'>
                <Link to='/login'>Log in</Link>
                <Link to='/signup'>Sign up</Link>
            </div>
            )}

        </div>
    </div>

);


export default Navbar;