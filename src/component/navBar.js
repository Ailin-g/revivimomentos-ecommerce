import React from 'react'
import { NavLink } from 'react-router-dom'

import CartWidget from './CartWidget';

const navBar = (props) => {
    return (
        <header>
            <div className="divHeader headerIzq">
                <p>Revivi Momentos</p>
            </div>
            <nav className="divHeader headerDer">
                <ul className="navItems">
                    <li className="navItem"><NavLink activeClassName="activeLink" to="/catalogo">Catálogo</NavLink></li>
                    <li className="navItem"><NavLink activeClassName="activeLink" to="/cart"><CartWidget/></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default navBar