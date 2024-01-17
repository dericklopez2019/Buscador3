export async function obtenerCadena(cadena) {
    const url =  `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${cadena}`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}