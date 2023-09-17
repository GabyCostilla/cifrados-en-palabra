function generarAcronimo(frase) {
    // Dividir la frase en palabras
    const palabras = frase.split(' ');
  
    // Inicializar el acrónimo como una cadena vacía
    let acronimo = '';
  
    // Recorrer cada palabra y obtener la inicial de cada una
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];
      if (palabra.length > 0) {
        acronimo += palabra[0].toUpperCase();
      }
    }
  
    return acronimo;
  }
  
  // Ejemplo de uso
  const frase = "Frecuencia Modulada";
  const acronimo = generarAcronimo(frase);
  
  console.log("Frase original:", frase);
  console.log("Acrónimo:", acronimo);
  