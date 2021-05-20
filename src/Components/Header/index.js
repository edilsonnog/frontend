import React, { useContext } from 'react';

import { AuthContext } from '../Context/AuthContext';

import './styles.css';

function Header() {

    const context = useContext(AuthContext);

    return (
        <header>
            <a href="/login">Login</a>
            <a href="/">Home</a>
            <a href="/register">Cadastre-se</a>
        </header>
    )
}

export default Header;