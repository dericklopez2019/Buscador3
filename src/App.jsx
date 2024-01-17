import { useState, useEffect } from 'react'
import './App.css'
import Loading from './loading'
//const [isLoading, setIsLoading] = useState(true);


function App() {
const [cadena, setCadena] = useState('');
const [resultado1, setResultado1] = useState('');
const [articulos, setArticulos] = useState([]);

const texto = (e)=>{
  e.preventDefault();
  obtenerCadena(cadena);

}

 const obtenerCadena = async()=>{
  const url =  `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${cadena}`;
  const respuesta = await fetch(url)
  const resultadoCadena1 = await respuesta.json()
  setResultado1(resultadoCadena1.Response.Cadena)
  obtenerCadena2()
}

const obtenerCadena2 = async()=>{
  const url =  `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${cadena}&NumeroPagina=1&Traduccion=${resultado1}`;
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()
  console.log(resultado.Response[0].Articulos)
  setArticulos(resultado.Response[0].Articulos)

}


   return (
    <>
    <div>
      <form>
      <div className=' p-10'>
        <label className='font-bold m-3'>Buscador</label>
        <input type="text" className=' bg-slate-200 m-3'  onChange={(e)=> { setCadena(e.target.value)}}/>
        <button type="submit" className=' bg-slate-400 rounded-lg p-3' onClick={texto}>Buscar</button>
      </div>
      </form>  
      <div>
      <h1>Mi Componente</h1>
      {/* Utiliza los datos obtenidos de la API en tu componente */}
      <ul>
        {articulos.map((dato) => (
          <li key={dato.CodigoProducto}>Nombre: {dato.Descripcion}{dato.Precio}<img src={dato.Foto} alt="" /></li>
          
        ))}
      </ul>
    </div>
      </div>
    </>
    
  )
  
}

export default App