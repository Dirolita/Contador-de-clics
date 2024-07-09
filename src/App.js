import './App.css';
import logo from './imgs/contador.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
function App() {

  const [numClics, setNumClics] = useState(0);
  /*Estas son la funciones que recibe el boton*/
  const manejarClic =()=>{
    setNumClics(numClics + 1)
    console.log('clic')
  }
  const reiniciarContador = ()=>{
    setNumClics(0)
    console.log('reiniciar')
  }
  return (
    <div className="App">
      <div className='logo-click-container'>
        <img className='logo-click'
        src={logo}
        alt='logo click'
        />
      </div>
      <Contador
        numClics =  {numClics}
        />
      <div className='contenedor-principal'>
        
        <Boton 
        texto = 'clic'
        esBotonDeClic = {true}
        manejarClic = {manejarClic}
        />
        <Boton 
        texto = 'Reiniciar'
        esBotonDeClic = {false}
        manejarClic = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
