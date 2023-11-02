import Boton from "../atoms/boton";
import Pantalla from "../atoms/pantalla";
import BotonClear from "../atoms/botonClear";


import { useState } from "react";
import { evaluate, prodDependencies } from "mathjs";

function Contenedor() {
   

    const [input, setInput]=useState("");

    const agregarInput = val =>{
        setInput(input + val);
    };
  
    
// const calcularResultado =() =>{
//          if(input){
//              setInput(evaluate(input));
//              const evaluatedInput = evaluate(input);
//              fetch('http://127.0.0.1:8080/api/producto',{
//                  method:'POST',
//                  headers: {
//                    'Accept': 'application/json',
//                    'Content-Type': 'application/json',
//                  },
//                  body: JSON.stringify({resultados:resultados,})
//                }).then(
//                  response => response.json()
//                ).then (
//              data => {
//                    console.log(data)
//                    alert("Todo Ok")
//                  }
//    )
//          }else{
//             alert("por favor ingrese valores")
//          }
       
//      } ;
const calcularResultado = () => {
    if (input) {
        try {
            const evaluatedInput = evaluate(input);
            setInput(evaluatedInput);

            // Realiza la solicitud para agregar datos en la base de datos
            fetch('http://127.0.0.1:8080/api/producto', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ resultados: evaluatedInput })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("se agrego a la BD");
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Se ha producido un error .");
            });
        } catch (error) {
            setInput('Error');
        }
    } else {
        alert("Por favor, ingrese valores.");
    }
};

    const calcularSeno = () => {
        if (input) {
            try {
                setInput(Math.sin(parseFloat(input))); // Calcula el seno del número en el input
            } catch (error) {
                setInput('Error');
            }
        } else {
            alert("Por favor, ingrese valores.");
        }
    };

    const calcularCoseno = () => {
        if (input) {
            try {
                setInput(Math.cos(parseFloat(input))); // Calcula el coseno del número en el input
            } catch (error) {
                setInput('Error');
            }
        } else {
            alert("Por favor, ingrese valores.");
        }
    }; 
    
    const calcularTangente = () => {
        if (input) {
            try {
                setInput(Math.tan(parseFloat(input))); // Calcula la tangente del número en el input
            } catch (error) {
                setInput('Error');
            }
        } else {
            alert("Por favor, ingrese valores.");
        }
    };

    const eliminar=()=>{
        setInput('')
    }

    

   
    return(
        <div className='App'>
        {/* <Logo></Logo> */}
            <div className='contenedor-calculadora'>
            <Pantalla input={input}/>
                
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>1</Boton>
                    <Boton manejarClic={agregarInput}>2</Boton>
                    <Boton manejarClic={agregarInput}>3</Boton>
                    <Boton manejarClic={agregarInput}>+</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>4</Boton>
                    <Boton manejarClic={agregarInput}>5</Boton>
                    <Boton manejarClic={agregarInput}>6</Boton>
                    <Boton manejarClic={agregarInput}>-</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>7</Boton>
                    <Boton manejarClic={agregarInput}>8</Boton>
                    <Boton manejarClic={agregarInput}>9</Boton>
                    <Boton manejarClic={agregarInput}>*</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={calcularResultado}>=</Boton>
                    <Boton manejarClic={agregarInput}>0</Boton>
                    <Boton manejarClic={agregarInput}>.</Boton>
                    <Boton manejarClic={agregarInput}>/</Boton>

                </div>
                <div className='fila'>
                   
                    <Boton manejarClic={calcularSeno}>sin</Boton>
                    <Boton manejarClic={calcularCoseno}>cos</Boton>
                    <Boton manejarClic={calcularTangente}>tan</Boton>
                    <Boton manejarClic={agregarInput}>^</Boton>

                </div>
                <div className='fila'>
                    <button onClick={eliminar}>clear</button>
                </div>
                

            </div>

        </div>
    )
    
}
export default Contenedor;