import React from "react";
import'./../../HojasDeEstilo/Boton.css'
// import {  } from "";

function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '-');
    };
    // Math.sin()
    return (
        <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </button>
    )
}

export default Boton;