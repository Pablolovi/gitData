import React from 'react';
import '../styles/Button.css'; // Importar el CSS específico del botón

function Button({ onClick, children }) {
    return (
        <button className="button" onClick={onClick}>
        {children}
        </button>
    );
}

export default Button;