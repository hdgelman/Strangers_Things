import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {

    return (
        <header>
            < div >
                <h1 id='strangers-things'>Stranger's Things </h1>
                <nav>
                    <Link to='/Posts'> Posts </Link>
                    <Link to='/CreatePost'> New Post </Link>
                    <Link to='/Login'> Login </Link>
                    <Link to='/Register'> Register </Link>
                </nav>
            </div >
        </header>

    )
}


export default Header;