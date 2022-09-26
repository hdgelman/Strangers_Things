import React from 'react';
// import './Header.css';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {

    return (
        <header>
            < div >
                <h1 id='strangers-things'>Stranger's Things </h1>
                <nav>
                    <span className='links'>Home </span>
                    <span className='links'>Posts </span>
                    <span className='links'>Profile </span>
                    <span className='links'>Login </span>
                </nav>
            </div >
        </header>

    )
}


export default Header;