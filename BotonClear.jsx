import React from "react";
import './../../HojasDeEstilo/boton-clear.css'

//importar el css


const BotonClear=(props) => (

    <div className='boton-clear' onClick={props}>
        {props.children}
    </div>

    )
export default BotonClear;