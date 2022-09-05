import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header>
            < div >
                <nav>
                    <span id='strangers-things'>Stranger's Things </span>
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