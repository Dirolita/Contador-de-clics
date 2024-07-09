import React from 'react';
/*Ejemplo de destructuración, en vez de poner props, usualmete se trabaja con esa sintaxis*/
function Boton({texto, esBotonDeClic, manejarClic}){
    return(
        <button
        /*Dependiendo del prop, si es tru o false se le asisganra una clase*/
        className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        /*Puedo pasar funciones como props: Esa funcion vendra del componente que renderice este boton*/
        onClick={manejarClic}
        >
            {texto}
        </button>
    )
}
export default Boton;