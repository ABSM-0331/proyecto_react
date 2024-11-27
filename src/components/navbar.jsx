import React from 'react';

function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#gallery">Galería</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
