import React from 'react';
import Signup from './components/Signup';
import logo from './components/EventMateLogo.png';

function App() {
    return (
        <div className="main-container">
            <nav>
                <div className="logo">
                    <a href="../index.html"><img src={logo} className="nav-icon" alt="Logo" /></a>
                </div>
                <ul className="nav-links">
                    <li><a href="../catering/catering.html">Catering</a></li>
                    <li><a href="../venues/venues.html">Venues</a></li>
                    <li><a href="../inmobiliario/inmobiliario.html">Mobiliario</a></li>
                    <li><a href="../planeador/planeador.html">Planeador</a></li>
                    <li><a href="../login_usuarios/login_usuario.html">Login</a></li>
                    <li><a href="../signup_clientes/signUpClientes.html">Sign Up</a></li>
                    <li><a className="material-symbols-outlined" href="index_ingles.html" id="ingbutton">translate</a></li>
                </ul>
            </nav>
            <center>
            <Signup />
            </center>
        </div>
    );
}

export default App;
