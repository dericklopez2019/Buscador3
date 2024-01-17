export async function obtenerCadena2(cadena, cadena2) {
    const url =  `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${cadena}&NumeroPagina=1&Traduccion=${cadena2}`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}