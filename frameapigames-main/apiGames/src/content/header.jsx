import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import React from 'react';

function Header() {
    return (
        <header className={styles.header} >
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Skins">Skins</Link>
                <Link to="/Stikers">Stikers</Link>
                <Link to="/BuscarSkins">Busca Skins</Link>
                <Link to="/BuscarStikers">Busca Stikers</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    )    
}

export default Header