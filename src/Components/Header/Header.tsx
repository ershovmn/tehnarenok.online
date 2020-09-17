import React, { useState } from 'react'

import './Header.css'

const Header = () => {
    let [menuVisible, setMenuVisible] = useState(false);

    document.body.style.overflow = 'auto'

    if(document.body.clientWidth < 500) {
        if(menuVisible) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            document.body.style.overflow = 'hidden'
        }
        return (
            <>
                <div className='header'>
                    <a className='logo' href='/'> 
                        <img src={require('../../img/logo2.png')} alt='logo' height='40px'/>
                    </a>
                    <div className='header-right' >
                        <img alt='' onClick={() => setMenuVisible(!menuVisible)} src={require('../../img/menu.png')} height='40px'/>
                    </div>
                </div>
                {menuVisible ? 
                    <nav className='header-menu'>
                        <a href='/'>Главная</a>
                        <a href='/projects'>Проектики</a>
                        <a href='/blog'>Блог</a>
                    </nav>
                : null }
            </>
        )
    }
    return (
        <div className='header'>
            <a className='logo' href='/'> 
                <img src={require('../../img/logo2.png')} alt='logo' height='40px'/>
            </a>
            <nav className='header-right'>
                <a href='/'>Главная</a>
                <a href='/projects'>Проектики</a>
                <a href='/blog'>Блог</a>
            </nav>
        </div>
    )
}

export default Header