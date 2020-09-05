import React from 'react'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <a className='logo' href='/'> 
                <img src={require('../../img/logo2.png')} alt='logo' height='40px'/>
            </a>
            <div className='header-right'>
                <a href='/'>Главная</a>
                <a href='/projects'>Проектики</a>
                <a href='/blog'>Блог</a>
            </div>
        </div>
    )
}

export default Header