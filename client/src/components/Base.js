import React from 'react';
import { Link } from 'react-router-dom';


const Base = () => (
    <div>
        <div className='top-bar'>
            <div className='top-bar-left'>
                <Link to='/'>React App</Link>
            </div>

            <div className='top-bar-right'>
                <Link to='/login'>Log in</Link>
                <Link to='/signup'>Sign up</Link>
            </div>

        </div>
    </div>

);


export default Base;