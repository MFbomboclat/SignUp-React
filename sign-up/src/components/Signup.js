import React, { useState } from 'react';
import './Signup.css';
import logo from './EventMateLogo.png';

const Signup = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        fecha: '',
        contraseña: '',
        confirmacion: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://eventmate-integradora.onrender.com/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error("Datos no válidos");
            }

            window.location.href = "../login_usuarios/login_usuario.html";
        } catch (error) {
            console.error("Error al registrar al cliente", error);
            setErrorMessage(error.message);
            setTimeout(() => setErrorMessage(''), 3000);
        }
    };

    return (
        <div className="signup-container">
            <img src={logo} className="centered-logo" id="login_logo" alt="Logo" />
            <h1>Registro</h1>
            <form id="signup_cliente" onSubmit={handleSubmit}>
                {['nombre(s)', 'apellido(s)', 'correo electronico', 'teléfono', 'fecha de nacimiento', 'contraseña', 'confirmar contraseña'].map((field, index) => (
                    <div key={index} className="input-group">
                        <label htmlFor={field} id="labelname">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <input
                            type={field === 'fecha de nacimiento' ? 'date' : field === 'correo electronico' ? 'email' : field  === 'contraseña' ? 'password' : field  === 'confirmar contraseña' ? 'password' : 'text'}

                            id={field}
                            name={field}
                            required
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit" id="confirmar">Confirmar</button>
                <p className="inicio">¿Ya tienes una cuenta? <a href="../login_usuarios/login_usuario.html">Iniciar sesión</a></p>
            </form>
            {infoMessage && <div id="info-message" className="info-message">{infoMessage}</div>}
            {errorMessage && <div id="error-message" className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default Signup;
